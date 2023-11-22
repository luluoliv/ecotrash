import axios from "axios";
import { useEffect, useState } from "react";

import "../Registers/Registers.css";

export default function Registers() {
    const [recycles, setRecycles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://guizen.pythonanywhere.com/recycle/"
                );
                setRecycles(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="registers">
            <h2>Todas reciclagens</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {recycles.map((recycle) => (
                        <li key={recycle.id}>
                            <strong>Type:</strong> {recycle.type},{" "}
                            <strong>Quantity:</strong> {recycle.quantity},{" "}
                            <strong>Ecopoint:</strong> {recycle.ecopoint}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
