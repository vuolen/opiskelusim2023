import { BaseFields } from "./base";

export type Student = BaseFields

export type Action = (student: Student) => [Student, string]

export function createStudent(): Student {
    return {
        credits: 0
    }
}