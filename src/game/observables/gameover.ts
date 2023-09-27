import { Observable, combineLatest, map, share, startWith } from "rxjs";
import type { Credits } from "./credits";
import { isAfter } from "date-fns";

const CREDIT_GOAL = 300;

export function createGameover(credits$: Credits, date$: Observable<Date>) {
    return combineLatest([
        credits$.pipe(map(credits => credits > CREDIT_GOAL)),
        date$.pipe(map(date => isAfter(date, new Date(2028, 8, 31)))),
    ]).pipe(
        map(conditions => conditions.some(condition => condition)),
        share(),
        startWith(false),
    );
}
