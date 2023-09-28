import {
    Observable,
    distinctUntilChanged,
    map,
    share,
    startWith,
    tap,
} from "rxjs";
import { Finances } from "./finances";
import { Messages } from "../game";

export function createEvicted(
    finances$: Observable<Finances>,
    message$: Messages,
) {
    return finances$.pipe(
        map(({ rentOwed }) => rentOwed >= 100),
        distinctUntilChanged(),
        tap(evicted => evicted && message$.next("evicted")),
        share(),
        startWith(false),
    );
}
