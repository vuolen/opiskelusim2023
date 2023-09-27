import { merge, scan, share, startWith, tap } from "rxjs";
import { Messages } from "../game";
import { Salary } from "./salary";
import { Rent } from "./rent";

const STARTING_MONEY = 1000;

export function createMoney(salary$: Salary, rent$: Rent, message$: Messages) {
    return merge(
        salary$.pipe(tap(salary => salary > 0 && message$.next("payday"))),
        rent$.pipe(tap(() => message$.next("rent"))),
    ).pipe(
        scan((money, salary) => money + salary, STARTING_MONEY),
        share(),
        startWith(STARTING_MONEY),
    );
}
