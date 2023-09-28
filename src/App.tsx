import { Key, useEffect, useState } from "react";
import { ActionTypes, Student, createGame } from "./game/game";
import { Subject } from "rxjs";
import { v4 as uuidv4 } from "uuid";
import InfoHeading from "./ui/InfoHeading";
import NavBar from "./ui/NavBar";
import Messages from "./ui/Messages";
import Actions from "./ui/Actions";
import Bank from "./ui/Bank";

type Message = {
    key: Key;
    message: string;
    date?: string;
};

function App() {
    const [action$] = useState(new Subject<ActionTypes>());
    const [student, setStudent] = useState<Student | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const [student$, message$] = createGame(action$.asObservable());
        const messagesSub = message$.subscribe(message =>
            setMessages(messages =>
                messages.concat([
                    {
                        key: uuidv4(),
                        message,
                    },
                ]),
            ),
        );
        const studentSub = student$.subscribe(student => setStudent(student));
        message$.next("greeting");
        action$.next("skipDay");

        return () => {
            setMessages([]);
            messagesSub.unsubscribe();
            studentSub.unsubscribe();
        };
    }, [action$]);

    if (student === null) {
        return null;
    }

    return (
        <div className="App h-full w-full flex flex-col flex-between bg-neutral-200">
            <div className="w-full">
                <NavBar />
                <InfoHeading student={student} />
            </div>
            <div className="hidden md:flex w-full p-4 space-x-3 overflow-y-auto">
                <Messages student={student} messages={messages} />
                <Actions student={student} game={action$} />
                <Bank student={student} />
            </div>
            <div className="md:hidden w-full p-4 flex space-x-3 overflow-y-auto">
                <Bank student={student} />
                <div className="w-full flex flex-col space-y-3">
                    <Actions student={student} game={action$} />
                    <Messages student={student} messages={messages} />
                </div>
            </div>
        </div>
    );
}

export default App;
