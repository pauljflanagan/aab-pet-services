import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import { Home, Login, Produce, Region, Saved, Register } from "./client/index";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isLogin")) {
      setLogin(true);
      setUsername(localStorage.getItem("username"));
    }
  }, []);
  return (
    <div>
      <Navbar isLogin={isLogin} username={username} />
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} setLogin={setLogin}/>} />
        <Route path="/Region" element={<Region />} />
        <Route path="/Produce" element={<Produce />} />
        <Route path="/Saved" element={<Saved />} />
        <Route path="/Login" element={<Login setLogin={setLogin} setUsername={setUsername} />} />
        <Route path="/Login/Logout" element={<Login setLogin={setLogin} setUsername={setUsername} />} />
        <Route path="/Login/Register" element={<Register setLogin={setLogin} setUsername={setUsername} />} />
      </Routes>
    </div>
  );
}

export default App;