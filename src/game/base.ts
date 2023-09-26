import { Action, Student } from "./game";

export interface BaseFields {
    credits: number;
}

const CREDIT_GOAL = 300;

const studyActionMessage = (student: Student): string => {
    if (student.credits > CREDIT_GOAL) {
        return "Valmistuit! Onnittelut";
    }

    return "Opiskelit päivän ja sait opintopisteen";
};

export const studyAction: Action = (student: Student) => {
    student.credits += 1;

    student.burnout = student.wellbeing < 0;

    return studyActionMessage(student);
};
