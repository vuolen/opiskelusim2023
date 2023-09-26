import { useState } from "react";
import "./App.css";
import { tickDate } from "./game/time";
import { format } from "date-fns";
import { ACTIONS, createStudent, doAction } from "./game/game";

function useGame() {
    const [student, setStudent] = useState(createStudent());
    const [latestMessage, setLatestMessage] = useState(
        "Tervetuloa opiskelusimulaattoriin! Valmistu keräämällä 300 opintopistettä",
    );

    function action(actionName: keyof typeof ACTIONS) {
        const [newStudent, message] = doAction(student, actionName);
        setStudent(tickDate(newStudent));
        setLatestMessage(message);
    }

    return [student, action, latestMessage] as const;
}

function App() {
    const [student, doAction, latestMessage] = useGame();

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
                    onClick={() => doAction("study")}
                >
                    Opiskele
                </button>
                <button onClick={() => doAction("doNothing")}>
                    Älä tee mitään
                </button>
            </div>
            <textarea readOnly={true} value={latestMessage}></textarea>
        </div>
    );
}

export default App;
