import { useState, useCallback, useEffect, useRef } from "react";

function App() {
    const [count, setCount] = useState(0);

    const previousFunction = useRef(null);

    const handleClick = useCallback(() => {
        console.log("Hello");
    }, [count]);

    useEffect(() => {
        if (previousFunction.current !== null) {
            console.log(
                "Same Function:",
                previousFunction.current === handleClick
            );
        }

        previousFunction.current = handleClick;
    });

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
}

export default App;