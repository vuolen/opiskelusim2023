import { Action, Student } from "./game";

export interface BaseFields {
    credits: number;
    consecutiveDaysStudied: number;
}

const CREDIT_GOAL = 300;
const CONSECUTIVE_DAYS_LIMIT = 7;

const studyActionMessage = (student: Student): string => {
    if (student.credits > CREDIT_GOAL) {
        return "Valmistuit! Onnittelut";
    }

    if (student.consecutiveDaysStudied > CONSECUTIVE_DAYS_LIMIT) {
        return "Opiskelit liian monta päivää putkeen. Sait vähän opintopisteitä ja hyvinvointisi laski";
    }

    return "Opiskelit päivän ja sait opintopisteen";
};

export const studyAction: Action = (student: Student) => {
    student.consecutiveDaysStudied = student.consecutiveDaysStudied + 1;

    student.credits += 1;

    student.wellbeing -=
        student.consecutiveDaysStudied > CONSECUTIVE_DAYS_LIMIT ? 10 : 0;

    student.burnout = student.wellbeing < 0;

    return studyActionMessage(student);
};
