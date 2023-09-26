import { Action, Student } from "./student"

export interface BaseFields {
    credits: number,
}

const CREDIT_GOAL = 300;

export const studyAction: Action = (student: Student) => {

    const message = student.credits > CREDIT_GOAL ?
        "Valmistuit! Onnittelut"
        : "Opiskelit päivän ja sait opintopisteen"

    return [{
        ...student,
        credits: student.credits + 1
    }, message]
}