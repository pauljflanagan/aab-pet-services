import React, { useState, useEffect } from "react";

export default function Saved() {
    let isLogin = localStorage.getItem("isLogin");

    const [username, setUsername] = useState("");
    const [produceList, setProduceList] = useState([]);

    useEffect(() => {
        if (isLogin) {
            const storedUserData = localStorage.getItem("username");
            if (storedUserData) {
                try {
                    const userData = JSON.parse(storedUserData);
                    setUsername(userData);
                } catch (error) {
                    console.error("Error parsing username from localStorage:", error);
                    setUsername(""); // Fallback to empty username
                }
            } else {
                setUsername(""); // Fallback if no data is found
            }
        } else {
            setUsername("");
            window.location.href = "/";
        }
    }, []);

    useEffect(() => {
        fetchSavedList();
    }, []);

    async function handleUnsave(produceId, username) {
        console.log("Unsave produceId:", produceId);
    }

    const fetchSavedList = async () => {
        try {
            const response = await fetch("http://localhost:8001/getSaved", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const result = await response.json();
            if (response.ok) {
                setProduceList(result);
            }
            console.log(result);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const Tile = ({ produce, username }) => {
        console.log(produce.produceId);
        return (
            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h2>{produce.name}</h2>
                        <p>Type: {produce.type}</p>
                        <p>Region: {produce.region}</p>
                        <p>Macro Nutrients: {produce.macroNutrients}</p>
                        <p>Cultural Significance: {produce.culturalSignificance}</p>
                        <p>Average Price: ${produce.averagePrice}</p>
                        <button className="btn btn-primary" onClick={() => handleUnsave(produce.produceId, username)}>Remove</button>
                    </div>
                </div>
            </div>
        );
    };

    const TileTable = ({ produceList, username }) => {
        return (
            <div className="container mt-5">
                <div className="row">
                    {produceList.map((produce, index) => (
                        <Tile key={index} produce={produce} username={username} />
                    ))}
                </div>
            </div>
        );
    };

    return (
    <div className="page-format">
        <h1 className="page-title">Saved</h1>
        {(username !== "") ? <TileTable produceList={produceList} username={username}/>: <p>Please login</p>}
    </div>
    )
}