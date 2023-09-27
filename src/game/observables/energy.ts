import {
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
import { clamp } from "../util";

function createConsecutiveDaysNotRested(action$: Action) {
    return action$.pipe(
        scan((acc, action) => {
            return action !== "doNothing" ? acc + 1 : 0;
        }, 0),
        startWith(0),
    );
}

export type Energy = ReturnType<typeof createEnergy>;

export function createEnergy(action$: Action, message$: Messages) {
    const consecutiveDaysNotRested$ = createConsecutiveDaysNotRested(action$);
    return merge(
        action$.pipe(
            filter(action => action !== "doNothing"),
            withLatestFrom(consecutiveDaysNotRested$),
            map(([_, consecutiveDaysNotRested]) =>
                consecutiveDaysNotRested < 5
                    ? -2
                    : -(2 ** Math.min(consecutiveDaysNotRested - 4, 10)),
            ),
        ),
        action$.pipe(
            filter(action => action === "doNothing"),
            tap(() => message$.next("rest")),
            map(() => 10),
        ),
    ).pipe(
        tap(energy => console.log("ENERGY CHANGE ", energy)),
        scan((energy, change) => energy + change, 100),
        clamp(0, 100),
        share(),
        startWith(100),
    );
}
