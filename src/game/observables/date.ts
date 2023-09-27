import { addDays } from "date-fns";
import { Action } from "../game";
import { scan, share, startWith } from "rxjs";

export type Date = ReturnType<typeof createDate>;

export function createDate(action$: Action) {
    return action$.pipe(
        scan(date => addDays(date, 1), new Date(2023, 8, 1)),
        share(),
        startWith(new Date(2023, 8, 1)),
    );
}
