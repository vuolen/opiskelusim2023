import { filter, map, share, startWith, tap } from "rxjs";
import { Action, Messages } from "../game";

const JOB_CHANCE = 0.2;

export function createEmployed(action$: Action, message$: Messages) {
    return action$.pipe(
        filter(action => action === "applyForJob"),
        map(() => Math.random() < JOB_CHANCE),
        tap(employed =>
            message$.next(
                employed ? "applyForJobSuccess" : "applyForJobFailure",
            ),
        ),
        share(),
        startWith(false),
    );
}
