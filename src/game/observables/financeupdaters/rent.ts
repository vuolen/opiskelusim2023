import { Observable, combineLatest, filter, map, share, tap } from "rxjs";
import { Messages } from "../../game";
import { FinanceUpdater, Finances } from "../finances";
import { getDate } from "date-fns";

export function createRent(
    date$: Observable<Date>,
    evicted$: Observable<boolean>,
    message$: Messages,
): Observable<FinanceUpdater> {
    return combineLatest([
        date$.pipe(filter(date => getDate(date) === 5)),
        evicted$.pipe(),
    ]).pipe(
        tap(([_, evicted]) => !evicted && message$.next("rent")),
        map(([_, evicted]) =>
            evicted
                ? (finances: Finances) => ({ ...finances, rentAmount: 0 })
                : (finances: Finances) => ({
                      ...finances,
                      rentOwed: finances.rentOwed + finances.rentAmount,
                  }),
        ),
        share(),
    );
}
