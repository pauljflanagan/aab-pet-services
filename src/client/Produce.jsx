import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Produce({ username }) {
    const [newProduce, setNewProduce] = useState({
        name: '',
        type: '',
        region: '',
        macroNutrients: '',
        averagePrice: 0,
        culturalSignificance: ''
    });
    const [showForm, setShowForm] = useState(false);
    const [produceList, setProduceList] = useState([]);

    useEffect(() => {
        fetchProduceList();
    }, []);

    async function handleSave(produceId, username) {
        if (!produceId) {
            console.error("Invalid produceId:", produceId);
            alert("Error: Invalid produce ID.");
            return;
        }
    
        const newSave = {
            'userId': username,
            'produceId': produceId,
        };
    
        try {
            // Fetch produce details
            const produceResponse = await fetch(`http://localhost:8001/produce/${produceId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (!produceResponse.ok) {
                console.error("Error fetching produce:", produceResponse.status);
                alert("Error: Unable to fetch produce details.");
                return;
            }
    
            const produceResult = await produceResponse.json();
            console.log("Produce details:", produceResult);
            newSave.produceItem = produceResult;
    
            // Fetch user details
            const userResponse = await fetch(`http://localhost:8001/user/a`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (!userResponse.ok) {
                console.error("Error fetching user:", userResponse.status);
                alert("Error: Unable to fetch user details.");
                return;
            }
    
            const userResult = await userResponse.json();
            console.log("User details:", userResult);
            newSave.userObj = userResult;
    
            // Save produce
            const response = await fetch("http://localhost:8001/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newSave),
            });
    
            const result = await response.json();
            if (response.ok) {
                console.log(result);
                alert("Produce saved successfully!");
            } else {
                console.error("Error saving produce:", result);
                alert("Error: Unable to save produce.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An unexpected error occurred.");
        }
    }

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
                        <button className="btn btn-primary" onClick={() => handleSave(produce.produceId, username)}>Save</button>
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduce({ ...newProduce, [name]: value });
    };

    const fetchProduceList = async () => {
        try {
            const response = await fetch("http://localhost:8001/getProduce", {
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

    const addProduce = async (e) => {
        e.preventDefault();
        newProduce.averagePrice = parseFloat(newProduce.averagePrice);
        
        try {
            const response = await fetch("http://localhost:8001/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduce)
            });
            const result = await response.json();
            if (response.ok) {
                setNewProduce({
                    name: '',
                    type: '',
                    region: '',
                    macroNutrients: '',
                    averagePrice: 0,
                    culturalSignificance: ''
                });
                await fetchProduceList();
            }
            console.log(result);
            setShowForm(false);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const dropForm = () => {
        setShowForm(true);
    };

    const preventStringPrice = (e) => {
        if (!/[0-9]/.test(e.key) && (e.key !== 'Backspace' && e.key !== 'Delete')) {
            e.preventDefault();
        }
        else {
            if (e.target.value === 0) {
                e.target.value = '';
            }
        }
    }

    return (
        <div>
            <div className="page-format">
                <h1 className="page-title">Produce</h1>
                <a onClick={dropForm} className="live-link">Click here to add produce!</a>
                {showForm && (
                    <form onSubmit={addProduce} className='login-form'>
                        <input className="login-form-item" name="name" type="text" placeholder="Name" value={newProduce.name} onChange={handleChange} />
                        <input className="login-form-item" name="type" type="text" placeholder="Type" value={newProduce.type} onChange={handleChange} />
                        <input className="login-form-item" name="region" type="text" placeholder="Region" value={newProduce.region} onChange={handleChange} />
                        <input className="login-form-item" name="macroNutrients" type="text" placeholder="Macro Nutrients" value={newProduce.macroNutrients} onChange={handleChange} />
                        <input className="login-form-item" name="culturalSignificance" type="text" placeholder="Cultural Significance" value={newProduce.culturalSignificance} onChange={handleChange} />
                        <input className="login-form-item" name="averagePrice" type="number" placeholder="Average Price" onKeyDown={preventStringPrice} value={newProduce.averagePrice} onChange={handleChange} />
                        <button className="login-form-item submit-form" type="submit">Add Produce</button>
                    </form>
                )}
                <TileTable produceList={produceList} username={username} />
            </div>
        </div>       
    );
}