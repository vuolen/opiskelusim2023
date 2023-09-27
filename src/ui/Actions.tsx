import { Subject } from "rxjs";
import { ActionTypes, Student } from "../game/game";
import Button from "./Button";
import { useTranslation } from "react-i18next";

type OwnProps = {
    student: Student;
    game: Subject<ActionTypes>;
};

const Actions = ({ student, game }: OwnProps) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-start w-full">
            <p className="font-bold text-neutral-600">{t("actions.title")}</p>
            <div className="bg-white p-4 rounded-md w-full">
                <div className="flex flex-col space-y-2">
                    <Button
                        disabled={student.burnout}
                        onClick={() => game.next("study")}
                    >
                        {t("actions.study")}
                    </Button>
                    <Button onClick={() => game.next("doNothing")}>
                        {t("actions.rest")}
                    </Button>
                    {student.employed ? (
                        <Button onClick={() => game.next("work")}>
                            {t("actions.work")}
                        </Button>
                    ) : (
                        <Button onClick={() => game.next("applyForJob")}>
                            {t("actions.applyForJob")}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Actions;
