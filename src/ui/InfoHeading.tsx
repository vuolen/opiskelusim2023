import { format } from "date-fns";
import { Student } from "../game/game";
import Me from "./Me";
import { useTranslation } from "react-i18next";

type OwnProps = {
    student: Student;
};

const InfoHeading = ({ student }:OwnProps) => {

    const {t} = useTranslation()

    return (
        <div className="w-full h-fit flex flex-row justify-between sm:justify-end sm:p-14 sm:pt-10 bg-gradient-to-br from-slate-50 from-20% via-sky-700 via-70% to-sky-800 space-x-2">
            <Me wellbeing={student.wellbeing}/>
            <div className="flex flex-col items-start p-8 sm:p-0">
                <p className="font-bold text-neutral-600">{t('lifeSituation')}</p>
                <div className="w-full bg-black bg-opacity-40 mb-2 p-2 rounded-md flex justify-between items-center text-white">
                    <span>
                        <b> {format(student.date, "dd.M.y")}</b>
                    </span>
                </div>
                <div className="flex flex-col sm:flex-row text-white space-y-2 sm:space-y-0 sm:space-x-2 h-full">
                    <div className="bg-black bg-opacity-40 p-2 rounded-md flex items-center w-32">
                        <div className="flex flex-col justify-center items-center w-full h-full">
                            <p>{t('credits')}</p>
                            <p className="text-4xl p-2">
                                {Math.trunc((student.credits / 300) * 100)}%
                            </p>
                            <p>{student.credits}/300</p>
                        </div>
                    </div>
                    <div className="bg-black bg-opacity-40 p-2 rounded-md flex items-center w-32">
                        <div className="flex flex-col justify-center items-center w-full h-full">
                            <p>{t('wellbeing')}</p>
                            <p className="text-4xl p-2">{student.wellbeing}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoHeading;
