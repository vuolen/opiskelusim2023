import { getDate } from "date-fns";
import { Observable, filter, map, share, tap } from "rxjs";
import { FinanceUpdater, financeFieldUpdater } from "../finances";
import { Messages } from "../../game";

export type Welfare = ReturnType<typeof createWelfare>;

export const WELFARE_AMOUNT = 280;

export function createWelfare(
    date$: Observable<Date>,
    message$: Messages,
): Observable<FinanceUpdater> {
    return date$.pipe(
        filter(date => getDate(date) === 1),
        map(() => financeFieldUpdater("money", WELFARE_AMOUNT)),
        tap(() => message$.next("welfare")),
        share(),
    );
}
