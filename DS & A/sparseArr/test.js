// import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(
            "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
        )
            .then((response) => response.json())
            .then((res) => setData(res));

        console.log(data);
    }, []);

    return (
        <div className="App">
            {data && (
                <ul>
                    {data.forEach((item) => (
                        <li id={item.node_id}>{item.node_id}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}