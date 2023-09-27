import { pipe, map } from "rxjs";

export function clamp(min: number, max: number) {
    return pipe(map((val: number) => Math.min(Math.max(val, min), max)));
}
