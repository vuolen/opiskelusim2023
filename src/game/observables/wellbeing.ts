import {
    Observable,
    Subject,
    filter,
    map,
    merge,
    scan,
    share,
    startWith,
    tap,
} from "rxjs";
import { ActionTypes, MessageTypes } from "../game";

export type Wellbeing = ReturnType<typeof createWellbeing>;

export function createWellbeing(
    action$: Observable<ActionTypes>,
    message$: Subject<MessageTypes>,
) {
    const consecutiveDaysStudied$ = action$.pipe(
        scan((acc, action) => {
            return action === "study" ? acc + 1 : 0;
        }, 0),
        startWith(0),
    );
    return merge(
        consecutiveDaysStudied$.pipe(
            filter(days => days > 7),
            map(() => -10),
            tap(() => message$.next("tooManyConsecutiveDaysStudied")),
        ),
        action$.pipe(
            filter(action => action === "doNothing"),
            map(() => 1),
            tap(() => message$.next("rest")),
        ),
    ).pipe(
        scan((wellbeing, change) => wellbeing + change, 100),
        share(),
        startWith(100),
    );
}
