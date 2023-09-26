import { BaseFields, studyAction } from "./base";
import { TimeFields, tickDate } from "./time";
import { WellbeingFields, doNothingAction } from "./wellbeing";

export type Student = BaseFields & WellbeingFields & TimeFields;

export type Action = (student: Student) => string;

export const ACTIONS = {
    study: studyAction,
    doNothing: doNothingAction,
};

export function doAction(student: Student, actionName: keyof typeof ACTIONS) {
    const message = ACTIONS[actionName](student);

    student.consecutiveDaysStudied =
        actionName === "study" ? student.consecutiveDaysStudied : 0;

    tickDate(student);

    return [student, message] as const;
}

export function createStudent(): Student {
    return {
        credits: 0,
        consecutiveDaysStudied: 0,
        wellbeing: 100,
        date: new Date(2023, 8, 1),
        burnout: false,
    };
}
