import { getMonth } from "date-fns";
import {
    Observable,
    distinctUntilChanged,
    filter,
    map,
    merge,
    scan,
    startWith,
} from "rxjs";
import { ActionTypes } from "../game";

export function createDaysWorkedThisMonth(
    action$: Observable<ActionTypes>,
    date$: Observable<Date>,
) {
    const month$ = date$.pipe(map(getMonth), distinctUntilChanged());

    const reset = () => 0;
    const addOne = (days: number) => days + 1;

    return merge(
        month$.pipe(map(() => reset)),
        action$.pipe(
            filter(action => action === "work"),
            map(() => addOne),
            //tap(() =>
            //    message$.next(
            //        "You worked for the day, you will get payed the last day of the month.",
            //    ),
        ),
    ).pipe(
        scan((acc, update) => update(acc), 0),
        startWith(0),
    );
}
