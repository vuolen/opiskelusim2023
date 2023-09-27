import { Key, useEffect, useState } from "react";
import { ActionTypes, Student, createGame } from "./game/game";
import { Subject } from "rxjs";
import { v4 as uuidv4 } from "uuid";
import InfoHeading from "./ui/InfoHeading";
import NavBar from "./ui/NavBar";
import Messages from "./ui/Messages";
import Actions from "./ui/Actions";
import Bank from "./ui/Bank";

function App() {
    const [action$] = useState(new Subject<ActionTypes>());
    const [student, setStudent] = useState<Student | null>(null);
    const [messages, setMessages] = useState<
        Array<{ key: Key; message: string; date?: string }>
    >([
        {
            key: uuidv4(),
            message: "Onnea tutkinnon alkuun!",
        },
    ]);
    const addMessage = (message: string) =>
        setMessages([
            {
                key: uuidv4(),
                message: message,
            },
            ...messages,
        ]);

    useEffect(() => {
        const message$ = new Subject<string>();
        const student$ = createGame(action$, message$);
        message$.subscribe(message => addMessage(message));
        student$.subscribe(student => setStudent(student));
    }, [action$]);

    if (student === null) {
        return null;
    }

    return (
        <div className="App h-full w-full flex flex-col flex-between bg-neutral-200">
            <div className="w-full">
                <NavBar/>
                <InfoHeading student={student} />
            </div>
            <div className="w-full p-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 overflow-y-auto">
                <Messages student={student} messages={messages}/>
                <Actions student={student} game={action$}/>
                <Bank student={student}/>
            </div>
        </div>
    );
}

export default App;
