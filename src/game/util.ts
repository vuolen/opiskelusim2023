export function clamp(min: number, max: number, val: number) {
    return Math.min(Math.max(val, min), max);
}
