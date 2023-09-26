import {
    Observable,
    Subject,
    combineLatest,
    distinctUntilChanged,
    filter,
    map,
    merge,
    scan,
    startWith,
    tap,
} from "rxjs";
import { addDays } from "date-fns";
import deepEqual from "deep-equal";

export type Student = {
    credits: number;
    wellbeing: number;
    burnout: boolean;
    date: Date;
};

export type ActionTypes = "study" | "doNothing";
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
        distinctUntilChanged(),
    );

    const student$: Observable<Student> = combineLatest([
        credits$,
        burnout$,
        wellbeing$,
        date$,
    ]).pipe(
        map(([credits, burnout, wellbeing, date]) => ({
            credits,
            burnout,
            wellbeing,
            date,
        })),
        distinctUntilChanged(deepEqual),
    );

    return student$;
}
