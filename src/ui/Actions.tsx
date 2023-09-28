import { Subject } from "rxjs";
import { ActionTypes, Student } from "../game/game";
import Button from "./Button";
import { useTranslation } from "react-i18next";

type OwnProps = {
    student: Student;
    game: Subject<ActionTypes>;
    variant?: "vertical" | "horizontal";
};

const Actions = ({ student, game, variant = "vertical" }: OwnProps) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-start w-full">
            <p className="font-bold text-neutral-600">{t("actions.title")}</p>
            <div className="bg-white p-4 rounded-md w-full">
                <div
                    className={`w-full flex justify-between ${
                        variant === "vertical"
                            ? "flex-col space-y-2"
                            : "space-x-2"
                    }`}
                >
                    <Button
                        disabled={student.burnout}
                        onClick={() => game.next("study")}
                        className="w-full"
                    >
                        {t("actions.study")}
                    </Button>
                    <Button
                        onClick={() => game.next("doNothing")}
                        className="w-full"
                    >
                        {t("actions.rest")}
                    </Button>
                    {student.employed ? (
                        <Button
                            disabled={student.burnout}
                            onClick={() => game.next("work")}
                            className="whitespace-nowrap"
                        >
                            {t("actions.work")}
                        </Button>
                    ) : (
                        <Button
                            disabled={student.burnout}
                            onClick={() => game.next("applyForJob")}
                            className="whitespace-nowrap"
                        >
                            {t("actions.applyForJob")}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Actions;
