import {
    Observable,
    map,
    scan,
    share,
    startWith,
    tap,
    withLatestFrom,
} from "rxjs";
import { Energy } from "./energy";
import { Messages } from "../game";
import { clamp } from "../util";

export type Wellbeing = ReturnType<typeof createWellbeing>;

export function createWellbeing(
    energy$: Energy,
    evicted$: Observable<boolean>,
    message$: Messages,
) {
    return energy$.pipe(
        map(energy => (energy < 10 ? -1 : 1)),
        tap(
            change =>
                change < 0 && message$.next("tooManyConsecutiveDaysNotRested"),
        ),
        withLatestFrom(evicted$),
        map(([change, evicted]) => (evicted ? -100 : change)),
        scan((wellbeing, change) => clamp(0, 100, wellbeing + change), 100),
        share(),
        startWith(100),
    );
}
