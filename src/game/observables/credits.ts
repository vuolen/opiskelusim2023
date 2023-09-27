import { filter, scan, share, startWith, tap } from "rxjs";
import { Action, Messages } from "../game";

export type Credits = ReturnType<typeof createCredits>;

export function createCredits(action$: Action, message$: Messages) {
    return action$.pipe(
        filter(action => action === "study"),
        scan(credits => credits + 1, 0),
        tap(() => message$.next("study")),
        share(),
        startWith(0),
    );
}
