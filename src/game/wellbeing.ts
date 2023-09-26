import { Action, Student } from "./game";

export interface WellbeingFields {
    wellbeing: number;
    burnout: boolean;
}

export const doNothingAction: Action = (student: Student) => {
    student.wellbeing += 1;
    student.burnout = student.wellbeing < 0;

    return "Et tehnyt mitään. Voit hieman paremmin";
};
