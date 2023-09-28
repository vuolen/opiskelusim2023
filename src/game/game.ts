import { Observable, Subject, combineLatest, map } from "rxjs";
import { Finances, createFinances } from "./observables/finances";
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
import { createEvicted } from "./observables/evicted";
import { createWelfare } from "./observables/welfare";

export type Student = {
    credits: number;
    energy: number;
    wellbeing: number;
    burnout: boolean;
    finances: Finances;
    gameover: boolean;
    date: Date;
    employed: boolean;
    evicted: boolean;
};

export type ActionTypes =
    | "skipDay"
    | "study"
    | "doNothing"
    | "work"
    | "applyForJob";
export type MessageTypes = keyof typeof translation.messages;

export type Action = Observable<ActionTypes>;
export type Messages = Subject<MessageTypes>;

export function createGame(action$: Observable<ActionTypes>) {
    const message$ = new Subject<MessageTypes>();

    const date$ = createDate(action$);

    const salary$ = createSalary(action$, date$, message$);

    const rent$ = createRent(date$);

    const welfare$ = createWelfare(date$);

    const finances$ = createFinances(salary$, rent$, welfare$, message$);

    const evicted$ = createEvicted(finances$, message$);

    const employed$ = createEmployed(action$, message$);

    const energy$ = createEnergy(action$, message$);

    const wellbeing$ = createWellbeing(energy$, evicted$, message$);

    const burnout$ = createBurnout(wellbeing$);

    const credits$ = createCredits(action$, message$);

    const gameover$ = createGameover(credits$, date$);

    const student$: Observable<Student> = combineLatest([
        credits$,
        burnout$,
        energy$,
        wellbeing$,
        date$,
        finances$,
        gameover$,
        employed$,
        evicted$,
    ]).pipe(
        map(
            ([
                credits,
                burnout,
                energy,
                wellbeing,
                date,
                finances,
                gameover,
                employed,
                evicted,
            ]) => ({
                credits,
                burnout,
                energy,
                wellbeing,
                date,
                finances,
                gameover,
                employed,
                evicted,
            }),
        ),
    );

    return [student$, message$] as const;
}
