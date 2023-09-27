import { Subject } from "rxjs";
import { ActionTypes, Student } from "../game/game";
import Button from "./Button";

type OwnProps = {
    student: Student
    game: Subject<ActionTypes>
  }

const Actions = ({
    student,
    game
  }: OwnProps) => {
    return (
        <div className="flex flex-col items-start w-full">
            <p className="font-bold text-neutral-600">Actions</p>
            <div className="bg-white p-4 rounded-md w-full">
                <div className="flex flex-col space-y-2">
                    <Button
                        disabled={student.burnout}
                        onClick={() => game.next("study")}
                    >
                        Study
                    </Button>
                    <Button onClick={() => game.next("doNothing")}>
                        Rest
                    </Button>
                    <Button onClick={() => game.next("work")}>Work</Button>
                </div>
            </div>
        </div>
    );
};

export default Actions;
