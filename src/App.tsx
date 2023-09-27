import { Key, useEffect, useState } from "react";
import { format } from "date-fns";
import { ActionTypes, Student, createGame } from "./game/game";
import { Subject } from "rxjs";
import happy from "../assets/happy.png";
import discontent from "../assets/discontent.png";
import agony from "../assets/agony.png";
import { v4 as uuidv4 } from "uuid";

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
                <div className="w-full h-fit flex justify-between p-4 bg-neutral-600 text-white text-lg">
                    <h1 className="font-bold">OPISKELUSIMULAATTORI</h1>
                    <div className="flex space-x-3">
                        <p>SVENSKA</p>
                        <p>ENGLISH</p>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row-reverse justify-between p-14 pt-10 bg-gradient-to-br from-slate-50 from-20% via-sky-700 via-70% to-sky-800">
                    <div className="flex flex-col items-start">
                        <p className="font-bold text-neutral-600">
                            Elämäntilanne
                        </p>
                        <div className="w-full bg-black bg-opacity-40 mb-2 p-2 rounded-md flex justify-between items-center text-white">
                            <span>
                                <b> {format(student.date, "dd.M.y")}</b>
                            </span>
                        </div>
                        <div className="flex text-white space-x-2">
                            <div className="bg-black bg-opacity-40 p-2 rounded-md flex items-center">
                                {student.wellbeing >= 80 && (
                                    <img src={happy} alt="" className="h-48" />
                                )}
                                {student.wellbeing >= 20 &&
                                    student.wellbeing < 80 && (
                                        <img
                                            src={discontent}
                                            alt=""
                                            className="h-48"
                                        />
                                    )}
                                {student.wellbeing < 20 && (
                                    <img src={agony} alt="" className="h-48" />
                                )}
                            </div>
                            <div className="bg-black bg-opacity-40 p-2 rounded-md flex items-center w-32">
                                <div className="flex flex-col items-center w-full">
                                    <p>Credits</p>
                                    <p className="text-4xl p-2">
                                        {Math.trunc(
                                            (student.credits / 300) * 100,
                                        )}
                                        %
                                    </p>
                                    <p>{student.credits}/300</p>
                                </div>
                            </div>
                            <div className="bg-black bg-opacity-40 p-2 rounded-md flex items-center w-32">
                                <div className="flex flex-col items-center w-full">
                                    <p>Wellbeing</p>
                                    <p className="text-4xl p-2">
                                        {student.wellbeing}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-4 flex space-x-3">
                <div className="flex flex-col items-start w-full">
                    <p className="font-bold text-neutral-600">
                        Recent messages
                    </p>
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
                <div className="flex flex-col items-start w-full">
                    <p className="font-bold text-neutral-600">Actions</p>
                    <div className="bg-white p-4 rounded-md w-full">
                        <div className="flex flex-col space-y-2">
                            <button
                                disabled={student.burnout}
                                onClick={() => action$.next("study")}
                                className="p-2 px-4 bg-blue-600 rounded text-white"
                            >
                                Study
                            </button>
                            <button
                                onClick={() => action$.next("doNothing")}
                                className="p-2 px-4 bg-blue-600 rounded text-white"
                            >
                                Rest
                            </button>
                            <button
                                onClick={() => action$.next("work")}
                                className="p-2 px-4 bg-blue-600 rounded text-white"
                            >
                                Work
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start w-full h-full">
                    <p className="font-bold text-neutral-600">Bank</p>
                    <div className="bg-white rounded-md w-full flex flex-col items-center">
                        <div className="w-full p-4 text-4xl">
                            {student.money} €
                        </div>
                        <hr className="h-px bg-neutral-500 w-full" />
                        <div className="w-full p-4 flex justify-between">
                            <div>Opintotuki</div>
                            <div className="font-bold">0 €</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
