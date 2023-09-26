import {
    Observable,
    Subject,
    combineLatest,
    distinctUntilChanged,
    filter,
    map,
    merge,
    pairwise,
    scan,
    startWith,
    tap,
    withLatestFrom,
} from "rxjs";
import { addDays, getMonth, isLastDayOfMonth } from "date-fns";

export type Student = {
    credits: number;
    wellbeing: number;
    burnout: boolean;
    money: number;
    date: Date;
};

export type ActionTypes = "study" | "doNothing" | "work";
export function createGame(
    action$: Observable<ActionTypes>,
    message$: Subject<string>,
) {
    const consecutiveDaysStudied$ = action$.pipe(
        scan((acc, action) => {
            return action === "study" ? acc + 1 : 0;
        }, 0),
        startWith(0),
    );

    const wellbeing$ = merge(
        consecutiveDaysStudied$.pipe(
            filter(days => days > 7),
            map(() => -10),
            tap(() =>
                message$.next(
                    "Olet opiskellut liian monta päivää putkeen ja hyvinvointisi kärsii.",
                ),
            ),
        ),
        action$.pipe(
            filter(action => action === "doNothing"),
            map(() => 1),
            tap(() => message$.next("Lepäät päivän ja voit hieman paremmin")),
        ),
    ).pipe(
        scan((wellbeing, change) => wellbeing + change, 100),
        startWith(100),
    );

    const burnout$ = wellbeing$.pipe(
        map(wellbeing => wellbeing < 0),
        startWith(false),
    );

    const credits$ = action$.pipe(
        filter(action => action === "study"),
        scan(credits => credits + 1, 0),
        tap(() => message$.next("Opiskelit päivän ja sait opintopisteen")),
        startWith(0),
    );

    const date$ = action$.pipe(
        scan(date => addDays(date, 1), new Date(2023, 8, 1)),
        startWith(new Date(2023, 8, 1)),
    );

    const month$ = date$.pipe(map(getMonth), distinctUntilChanged());

    const daysWorkedThisMonth$ = combineLatest([
        month$,
        action$.pipe(
            filter(action => action === "work"),
            tap(() =>
                message$.next(
                    "You worked for the day, you will get payed the last day of the month.",
                ),
            ),
        ),
    ]).pipe(
        map(([month]) => month),
        pairwise(),
        filter(([prev, now]) => prev === now),
        scan(acc => acc + 1, 0),
        startWith(0),
    );

    const money$ = date$.pipe(
        filter(date => isLastDayOfMonth(date)),
        withLatestFrom(daysWorkedThisMonth$),
        map(([_, daysWorkedThisMonth]) => daysWorkedThisMonth),
        scan(
            (money, daysWorkedThisMonth) => money + daysWorkedThisMonth * 80,
            0,
        ),
        tap(() => message$.next("Pay day!")),
        startWith(0),
    );

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

    return student$;
}
