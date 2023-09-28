import { Key } from "react";
import { Student } from "../game/game";
import { useTranslation } from "react-i18next";

type OwnProps = {
    student: Student;
    messages: Array<{ key: Key; message: string; date?: string }>;
};

const Messages = ({ student, messages }: OwnProps) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-start w-full">
            <p className="font-bold text-neutral-600">{t("messages.title")}</p>
            <div className="bg-white rounded-md w-full h-fit overflow-y-auto">
                {student.burnout && (
                    <div className="flex flex-col">
                        <div className="p-4 text-red-500">
                            {t("messages.burnout")}
                        </div>
                        <hr className="h-px bg-neutral-500 w-full" />
                    </div>
                )}
                <div className="flex flex-col-reverse">
                    {messages.map(message => (
                        <div key={message.key}>
                            <div className="p-4">
                                {t(`messages.${message.message}`)}
                            </div>
                            <hr className="h-px bg-neutral-500 w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Messages;
