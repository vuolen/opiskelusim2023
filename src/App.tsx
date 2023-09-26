import { useEffect, useState } from "react";
import "./App.css";
import { format } from "date-fns";
import { ActionTypes, Student, createGame } from "./game/game";
import { Subject } from "rxjs";

function App() {
    const [action$] = useState(new Subject<ActionTypes>());
    const [student, setStudent] = useState<Student | null>(null);
    const [message, setMessage] = useState("");

    console.log(student);

    useEffect(() => {
        const message$ = new Subject<string>();
        const student$ = createGame(action$, message$);
        message$.subscribe(message => setMessage(message));
        student$.subscribe(student => setStudent(student));
    }, [action$]);

    if (student === null) {
        return null;
    }

    return (
        <div className="App">
            <h1>Opiskelusimulaattori</h1>
            <div className="stats">
                <span>
                    <b> {format(student.date, "dd/M/y")}</b>
                </span>
                <span>Opintopisteet: {student.credits}</span>
                <span>
                    Hyvinvointi: {student.wellbeing}{" "}
                    {student.burnout && (
                        <span className="warning">Olet burnoutissa</span>
                    )}
                </span>
            </div>
            <div className="actions">
                <button
                    disabled={student.burnout}
                    onClick={() => action$.next("study")}
                >
                    Opiskele
                </button>
                <button onClick={() => action$.next("doNothing")}>Lepää</button>
            </div>
            <textarea readOnly={true} value={message}></textarea>
        </div>
    );
}

export default App;
