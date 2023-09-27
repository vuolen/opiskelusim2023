import { map, scan, share, startWith, tap } from "rxjs";
import { Energy } from "./energy";
import { Messages } from "../game";
import { clamp } from "../util";

export type Wellbeing = ReturnType<typeof createWellbeing>;

export function createWellbeing(energy$: Energy, message$: Messages) {
    return energy$.pipe(
        map(energy => (energy < 10 ? -1 : 1)),
        tap(
            change =>
                change < 0 && message$.next("tooManyConsecutiveDaysNotRested"),
        ),
        scan((wellbeing, change) => wellbeing + change, 100),
        clamp(0, 100),
        share(),
        startWith(100),
    );
}
