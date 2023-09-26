import { addDays } from "date-fns";
import { Student } from "./game";

export interface TimeFields {
    date: Date;
}

export const tickDate = (student: Student): Student => {
    return {
        ...student,
        date: addDays(student.date, 1),
    };
};
