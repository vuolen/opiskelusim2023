import { getMonth, isLastDayOfMonth } from "date-fns";
import {
    Observable,
    distinctUntilChanged,
    filter,
    map,
    merge,
    scan,
    share,
    startWith,
    tap,
    withLatestFrom,
} from "rxjs";
import { Action, Messages } from "../game";

function createDaysWorkedThisMonth(
    action$: Action,
    date$: Observable<Date>,
    message$: Messages,
) {
    const month$ = date$.pipe(map(getMonth), distinctUntilChanged());

    const reset = () => 0;
    const addOne = (days: number) => days + 1;

    return merge(
        month$.pipe(map(() => reset)),
        action$.pipe(
            filter(action => action === "work"),
            map(() => addOne),
            tap(() => message$.next("work")),
        ),
    ).pipe(
        scan((acc, update) => update(acc), 0),
        startWith(0),
    );
}

const DAILY_SALARY = 80;

export type Salary = ReturnType<typeof createSalary>;

export function createSalary(
    action$: Action,
    date$: Observable<Date>,
    message$: Messages,
) {
    const daysWorkedThisMonth$ = createDaysWorkedThisMonth(
        action$,
        date$,
        message$,
    );

    return date$.pipe(
        filter(date => isLastDayOfMonth(date)),
        withLatestFrom(daysWorkedThisMonth$),
        map(([_, daysWorkedThisMonth]) => daysWorkedThisMonth * DAILY_SALARY),
        share(),
    );
}
