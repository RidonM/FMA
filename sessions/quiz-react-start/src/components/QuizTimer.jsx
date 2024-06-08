import { useState, useEffect } from "react";

export default function QuizTimer() {
    const [timer, setTimer] = useState(100);

    useEffect(() => {
        const timeInt = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    clearInterval(timeInt);
                    return 0;
                }
            });
        }, 100);


        return () => clearInterval(timeInt);
    }, []);

    return (
        <>
            <progress id="question-time" max="100" value={timer} />
        </>
    );
}




