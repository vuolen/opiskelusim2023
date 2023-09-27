import { Observable, map, share, startWith, tap } from "rxjs";
import { Finances } from "./finances";
import { RENT_AMOUNT } from "./rent";
import { Messages } from "../game";

const MAX_RENT_OWED_UNTIL_EVICTION = RENT_AMOUNT * 6;

export function createEvicted(
    finances$: Observable<Finances>,
    message$: Messages,
) {
    return finances$.pipe(
        map(({ rentOwed }) => rentOwed >= MAX_RENT_OWED_UNTIL_EVICTION),
        tap(evicted => evicted && message$.next("evicted")),
        share(),
        startWith(true),
    );
}
