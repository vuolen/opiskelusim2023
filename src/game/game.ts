import {
    Observable,
    Subject,
    combineLatest,
    filter,
    map,
    scan,
    startWith,
    tap,
} from "rxjs";
import { addDays } from "date-fns";
import { createMoney } from "./observables/money";
import * as translation from "../locales/fi/translation.json";
import { createWellbeing } from "./observables/wellbeing";
import { createBurnout } from "./observables/burnout";

export type Student = {
    credits: number;
    wellbeing: number;
    burnout: boolean;
    money: number;
    date: Date;
};

export type ActionTypes = "study" | "doNothing" | "work";
export type MessageTypes = keyof typeof translation.messages;

export type Action = Observable<ActionTypes>;
export type Messages = Subject<MessageTypes>;

export function createGame(action$: Observable<ActionTypes>) {
    const message$ = new Subject<MessageTypes>();
    message$.next("greeting");

    const wellbeing$ = createWellbeing(action$, message$);

    const burnout$ = createBurnout(wellbeing$);

    const credits$ = action$.pipe(
        filter(action => action === "study"),
        scan(credits => credits + 1, 0),
        tap(() => message$.next("study")),
        startWith(0),
    );

    const date$ = action$.pipe(
        scan(date => addDays(date, 1), new Date(2023, 8, 1)),
        startWith(new Date(2023, 8, 1)),
    );

    const money$ = createMoney(action$, date$, message$);

    const student$: Observable<Student> = combineLatest([
        credits$,
        burnout$,
        wellbeing$,
        date$,
        money$,
    ]).pipe(
        map(([credits, burnout, wellbeing, date, money]) => ({
            credits,
            burnout,
            wellbeing,
            date,
            money,
        })),
    );

    return [student$, message$] as const;
}
