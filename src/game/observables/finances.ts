import {
    Observable,
    merge,
    queueScheduler,
    scan,
    share,
    startWith,
    subscribeOn,
} from "rxjs";

const STARTING_FINANCES = {
    money: 0,
    rentAmount: 500,
    rentOwed: 0,
};

export type Finances = {
    money: number;
    rentAmount: number;
    rentOwed: number;
};

export type FinanceUpdater = (finances: Finances) => Finances;

export const financeFieldUpdater =
    (fieldName: keyof Finances, change: number): FinanceUpdater =>
    (finances: Finances): Finances => ({
        ...finances,
        [fieldName]: finances[fieldName] + change,
    });

const balanceFinances = (finances: Finances): Finances => {
    return {
        ...finances,
        money: Math.max(finances.money - finances.rentOwed, 0),
        rentOwed: Math.max(finances.rentOwed - finances.money, 0),
    };
};

export function createFinances(updaters: Observable<FinanceUpdater>[]) {
    return merge(...updaters).pipe(
        scan(
            (finances, updater) => balanceFinances(updater(finances)),
            STARTING_FINANCES,
        ),
        share(),
        startWith(STARTING_FINANCES),
        subscribeOn(queueScheduler),
    );
}
