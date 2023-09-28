import { map, merge, scan, share, startWith, tap } from "rxjs";
import { Messages } from "../game";
import { Salary } from "./salary";
import { RENT_AMOUNT, Rent } from "./rent";
import { Welfare } from "./welfare";

const STARTING_FINANCES = {
    money: 0,
    rentOwed: 0,
};

export type Finances = {
    money: number;
    rentOwed: number;
};

const financeFieldUpdater =
    (fieldName: keyof Finances, change: number) =>
    (finances: Finances): Finances => ({
        ...finances,
        [fieldName]: finances[fieldName] + change,
    });

const balanceFinances = (finances: Finances): Finances => {
    return {
        money: Math.max(finances.money - finances.rentOwed, 0),
        rentOwed: Math.max(finances.rentOwed - finances.money, 0),
    };
};

const RENT_OWED_WARNING = RENT_AMOUNT * 3;

export function createFinances(
    salary$: Salary,
    rent$: Rent,
    welfare$: Welfare,
    message$: Messages,
) {
    return merge(
        salary$.pipe(
            tap(salary => salary > 0 && message$.next("payday")),
            map(salary => financeFieldUpdater("money", salary)),
        ),
        rent$.pipe(
            tap(() => message$.next("rent")),
            map(rent => financeFieldUpdater("rentOwed", rent)),
        ),
        welfare$.pipe(
            tap(() => message$.next("welfare")),
            map(welfare => financeFieldUpdater("money", welfare)),
        ),
    ).pipe(
        scan(
            (finances, updater) => balanceFinances(updater(finances)),
            STARTING_FINANCES,
        ),
        tap(
            ({ rentOwed }) =>
                rentOwed === RENT_OWED_WARNING &&
                message$.next("rentOwedWarning"),
        ),
        share(),
        startWith(STARTING_FINANCES),
    );
}
