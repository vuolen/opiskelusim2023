import { useTranslation } from "react-i18next";
import { Student } from "../game/game";

type OwnProps = {
    student: Student;
};

const Bank = ({ student }: OwnProps) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-start w-full h-full">
            <p className="font-bold text-neutral-600">{t("bank.title")}</p>
            <div className="bg-white rounded-md w-full flex flex-col items-center">
                <div className="w-full p-4 text-4xl">
                    {student.finances.money - student.finances.rentOwed} €
                </div>
                <hr className="h-px bg-neutral-500 w-full" />
                <div className="w-full p-4 flex justify-between overflow-y-auto">
                    <div>Opintotuki</div>
                    <div className="font-bold">0 €</div>
                </div>
            </div>
        </div>
    );
};

export default Bank;
