import { Observable, Subject, combineLatest, map } from "rxjs";
import { createMoney } from "./observables/money";
import * as translation from "../locales/fi/translation.json";
import { createWellbeing } from "./observables/wellbeing";
import { createBurnout } from "./observables/burnout";
import { createCredits } from "./observables/credits";
import { createDate } from "./observables/date";
import { createGameover } from "./observables/gameover";

export type Student = {
    credits: number;
    wellbeing: number;
    burnout: boolean;
    money: number;
    gameover: boolean;
    date: Date;
};

export type ActionTypes = "study" | "doNothing" | "work";
export type MessageTypes = keyof typeof translation.messages;

export type Action = Observable<ActionTypes>;
export type Messages = Subject<MessageTypes>;

export function createGame(action$: Observable<ActionTypes>) {
    const message$ = new Subject<MessageTypes>();
    message$.next("greeting");

    const date$ = createDate(action$);

    const wellbeing$ = createWellbeing(action$, message$);

    const burnout$ = createBurnout(wellbeing$);

    const credits$ = createCredits(action$, message$);

    const money$ = createMoney(action$, date$, message$);

    const gameover$ = createGameover(credits$, date$);

    const student$: Observable<Student> = combineLatest([
        credits$,
        burnout$,
        wellbeing$,
        date$,
        money$,
        gameover$,
    ]).pipe(
        map(([credits, burnout, wellbeing, date, money, gameover]) => ({
            credits,
            burnout,
            wellbeing,
            date,
            money,
            gameover,
        })),
    );

    return [student$, message$] as const;
}
