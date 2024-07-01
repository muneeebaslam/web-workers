import { useEffect, useState } from 'react';

function App() {
    const [worker, setWorker] = useState(null);
    const [results, setResults] = useState({ result1: null, result2: null, result3: null });

    useEffect(() => {
        if (window.Worker) {
            const newWorker = new Worker(new URL('./worker.js', import.meta.url));
            newWorker.onmessage = (e) => {
                setResults(e.data);
            };
            setWorker(newWorker);
        } else {
            console.error("Web Workers are not supported in your browser.");
        }

        return () => {
            if (worker) {
                worker.terminate();
            }
        };
    }, []);

    const runFunctionsInParallel = () => {
        // setTimeout(() => {
        //     console.log("timeout");
        // }, 1000);
        if (worker) {
            worker.postMessage({
                data1: 10,
                data2: 20,
                data3: 30
            });
        }
    };

    return (
        <div className="App">
            <h1>Web Worker Example</h1>
            <button onClick={runFunctionsInParallel}>Run Functions</button>
            <div>
                <p>Result 1: {results.result1}</p>
                <p>Result 2: {results.result2}</p>
                <p>Result 3: {results.result3}</p>
            </div>
        </div>
    );
}

export default App;
