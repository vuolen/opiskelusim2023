import { getDate } from "date-fns";
import { Observable, filter, map } from "rxjs";

export type Rent = ReturnType<typeof createRent>;

export function createRent(date$: Observable<Date>) {
    return date$.pipe(
        filter(date => getDate(date) === 5),
        map(() => -500),
    );
}
