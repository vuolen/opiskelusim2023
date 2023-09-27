import { map, share, startWith } from "rxjs";
import { Wellbeing } from "./wellbeing";

export function createBurnout(wellbeing: Wellbeing) {
    return wellbeing.pipe(
        map(wellbeing => wellbeing < 0),
        share(),
        startWith(false),
    );
}
