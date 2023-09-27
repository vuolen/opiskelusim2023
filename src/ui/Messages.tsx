import { Key } from "react";
import { Student } from "../game/game";

type OwnProps = {
  student: Student
  messages: Array<{ key: Key; message: string; date?: string }>
}

const Messages = ({student, messages}: OwnProps) => {
    return (
        <div className="flex flex-col items-start w-full">
            <p className="font-bold text-neutral-600">Recent messages</p>
            <div className="bg-white rounded-md w-full h-full">
                {student.burnout && (
                    <div className="flex flex-col">
                        <div className="p-4 text-red-500">
                            You're burned out, you need to rest
                        </div>
                        <hr className="h-px bg-neutral-500 w-full" />
                    </div>
                )}
                {messages.map(message => (
                    <div key={message.key}>
                        <div className="p-4">{message.message}</div>
                        <hr className="h-px bg-neutral-500 w-full" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Messages;
