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
import { createEmployed } from "./observables/employed";

export type Student = {
    credits: number;
    energy: number;
    wellbeing: number;
    burnout: boolean;
    money: number;
    gameover: boolean;
    date: Date;
    employed: boolean;
};

export type ActionTypes = "study" | "doNothing" | "work" | "applyForJob";
export type MessageTypes = keyof typeof translation.messages;

export type Action = Observable<ActionTypes>;
export type Messages = Subject<MessageTypes>;

export function createGame(action$: Observable<ActionTypes>) {
    const message$ = new Subject<MessageTypes>();
    message$.next("greeting");

    const date$ = createDate(action$);

    const employed$ = createEmployed(action$, message$);

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
        employed$,
    ]).pipe(
        map(
            ([
                credits,
                burnout,
                energy,
                wellbeing,
                date,
                money,
                gameover,
                employed,
            ]) => ({
                credits,
                burnout,
                energy,
                wellbeing,
                date,
                money,
                gameover,
                employed,
            }),
        ),
    );

    return [student$, message$] as const;
}
