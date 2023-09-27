import { Observable, Subject, combineLatest, map } from "rxjs";
import { createMoney } from "./observables/money";
import * as translation from "../locales/fi/translation.json";
import { createWellbeing } from "./observables/wellbeing";
import { createBurnout } from "./observables/burnout";
import { createCredits } from "./observables/credits";
import { createDate } from "./observables/date";
import { createGameover } from "./observables/gameover";
import { createEnergy } from "./observables/energy";
import { createSalary } from "./observables/salary";
import { createRent } from "./observables/rent";

export type Student = {
    credits: number;
    energy: number;
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

    const energy$ = createEnergy(action$, message$);

    const wellbeing$ = createWellbeing(energy$, message$);

    const burnout$ = createBurnout(wellbeing$);

    const credits$ = createCredits(action$, message$);

    const salary$ = createSalary(action$, date$, message$);

    const rent$ = createRent(date$);

    const money$ = createMoney(salary$, rent$, message$);

    const gameover$ = createGameover(credits$, date$);

    const student$: Observable<Student> = combineLatest([
        credits$,
        burnout$,
        energy$,
        wellbeing$,
        date$,
        money$,
        gameover$,
    ]).pipe(
        map(([credits, burnout, energy, wellbeing, date, money, gameover]) => ({
            credits,
            burnout,
            energy,
            wellbeing,
            date,
            money,
            gameover,
        })),
    );

    return [student$, message$] as const;
}
