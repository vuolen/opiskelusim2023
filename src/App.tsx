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

        return () => {
            messagesSub.unsubscribe();
            studentSub.unsubscribe();
        };
    }, [action$]);

    if (student === null) {
        return null;
    }

    return (
        <div className="App h-full w-full flex flex-col justify-between bg-neutral-200">
            <div className="w-full">
                <NavBar />
                <InfoHeading student={student} />
            </div>
            <div className="hidden md:flex w-full h-full p-4 space-x-3 overflow-y-clip">
                <Messages student={student} messages={messages} />
                <Actions student={student} game={action$} />
                <Bank student={student} />
            </div>
            <div className="md:hidden w-full h-full p-4 flex flex-col space-y-3 overflow-y-clip">
                <Actions student={student} game={action$} variant="horizontal"/>
                <div className="w-full flex space-x-3 h-fit overflow-y-clip">
                    <Messages student={student} messages={messages} />
                    <Bank student={student} />
                </div>
            </div>
        </div>
    );
}

export default App;
