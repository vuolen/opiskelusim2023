import { Key } from "react";
import { Student } from "../game/game";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

type OwnProps = {
    student: Student;
    messages: Array<{ key: Key; message: string; date?: string }>;
};

const Messages = ({ student, messages }: OwnProps) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-start w-full min-w-0">
            <p className="font-bold text-neutral-600">{t("messages.title")}</p>
            <div className="bg-white rounded-md w-full h-fit overflow-y-auto">
                {student.burnout && (
                    <div className="flex flex-col">
                        <div className="p-4 text-red-500 break-words">
                            {t("messages.burnout")}
                        </div>
                        <hr className="h-px bg-neutral-500 w-full" />
                    </div>
                )}
                <div className="flex flex-col-reverse items-start">
                    <AnimatePresence>
                        {messages.map(message => (
                            <Item key={message.key}>
                                <div className="p-4 break-words">
                                    {t(`messages.${message.message}`)}
                                </div>
                            </Item>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

const Item = ({ children }: { children: any }) => {
    const text_animations = {
        initial: { scale: 0, opacity: 0, x: -150 },
        animate: { scale: 1, opacity: 1, x: 0 },
        transition: { type: "spring", stiffness: 800, damping: 30 },
    };

    const hr_animations = {
        className: `w-full`,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { type: "spring", stiffness: 800, damping: 30 },
    };

    return (
        <div className="w-full flex flex-col items-start">
            <motion.div {...text_animations} layout>
                {children}
            </motion.div>
            <motion.div {...hr_animations} layout>
                <hr className="h-px bg-neutral-500 w-full" />
            </motion.div>
        </div>
    );
};

export default Messages;
