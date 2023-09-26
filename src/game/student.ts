import { BaseFields } from "./base";
import { WellbeingFields } from "./wellbeing";

export type Student = BaseFields & WellbeingFields;

export type Action = (student: Student) => [Student, string];

export function createStudent(): Student {
    return {
        credits: 0,
        consecutiveDaysStudied: 0,
        wellbeing: 10,
    };
}
