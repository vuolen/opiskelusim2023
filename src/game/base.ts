import { Action, Student } from "./student";

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
    const credits = student.credits + 1;
    const consecutiveDaysStudied = student.consecutiveDaysStudied + 1;
    const wellbeing =
        student.wellbeing -
        (consecutiveDaysStudied > CONSECUTIVE_DAYS_LIMIT ? 1 : 0);

    return [
        {
            ...student,
            credits,
            consecutiveDaysStudied,
            wellbeing,
        },
        studyActionMessage(student),
    ];
};
