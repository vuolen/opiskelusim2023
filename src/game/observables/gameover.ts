import { combineLatest, map, share, startWith } from "rxjs";
import type { Credits } from "./credits";
import type { Date as DateObserver } from "./date";
import { isEqual } from "date-fns";

const CREDIT_GOAL = 300;

export function createGameover(credits$: Credits, date$: DateObserver) {
    return combineLatest([
        credits$.pipe(map(credits => credits > CREDIT_GOAL)),
        date$.pipe(map(date => isEqual(date, new Date(2023, 8, 31)))),
    ]).pipe(
        map(conditions => conditions.some(condition => condition)),
        share(),
        startWith(false),
    );
}
