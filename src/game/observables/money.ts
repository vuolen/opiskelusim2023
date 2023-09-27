import { getMonth, isLastDayOfMonth } from "date-fns";
import {
    Observable,
    Subject,
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
import { Action, ActionTypes, MessageTypes, Messages } from "../game";

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

export function createMoney(
    action$: Observable<ActionTypes>,
    date$: Observable<Date>,
    message$: Subject<MessageTypes>,
) {
    const daysWorkedThisMonth$ = createDaysWorkedThisMonth(
        action$,
        date$,
        message$,
    );
    return date$.pipe(
        filter(date => isLastDayOfMonth(date)),
        withLatestFrom(daysWorkedThisMonth$),
        map(([_, daysWorkedThisMonth]) => daysWorkedThisMonth),
        tap(
            daysWorkedThisMonth =>
                daysWorkedThisMonth > 0 && message$.next("payday"),
        ),
        scan(
            (money, daysWorkedThisMonth) => money + daysWorkedThisMonth * 80,
            0,
        ),
        share(),
        startWith(0),
    );
}
