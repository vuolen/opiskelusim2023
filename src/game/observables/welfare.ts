import { getDate } from "date-fns";
import { Observable, filter, map, share } from "rxjs";

export type Welfare = ReturnType<typeof createWelfare>;

export const WELFARE_AMOUNT = 280;

export function createWelfare(date$: Observable<Date>) {
    return date$.pipe(
        filter(date => getDate(date) === 1),
        map(() => WELFARE_AMOUNT),
        share(),
    );
}
