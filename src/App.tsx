import { useEffect, useState } from "react";

const App = () => {
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const load = async () => {
        setLoading(true);
        try {
            const res = await fetch("localhost:3000");
            const payload = await res.text();
            setResult(payload);
            setLoading(false);
        } catch (error) {
            setResult("error");
            setLoading(false);
        }
    };
    useEffect(() => {
        load();
    }, []);

    if (loading) {
        return <div> ...loading</div>;
    }

    return (
        <div>
            {result !== null && <div style={{ fontSize: "48px", fontWeight: "bold" }}>{result}</div>}
            <button onClick={() => load()}>refetch</button>
        </div>
    );
};

export default App;
