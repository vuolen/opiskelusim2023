import { addDays } from "date-fns";
import { Action } from "../game";
import { scan, share, startWith, tap } from "rxjs";

export function createDate(action$: Action) {
    return action$.pipe(
        scan(date => addDays(date, 1), new Date(2023, 7, 31)),
        share(),
        startWith(new Date(2023, 7, 31)),
    );
}
