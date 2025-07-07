import { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    if (localStorage.getItem("isLogin") && localStorage.getItem("username") !== null) {
      setIsLogin(localStorage.getItem("isLogin"));
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("username");
    setIsLogin(false);
    setUsername("");
    window.location.href = "/";
  }

  console.log(isLogin, username);
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        ProduceData
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Region">Region</CustomLink>
        <CustomLink to="/Produce">Produce</CustomLink>
        <CustomLink to="/Saved">Saved</CustomLink>
        {isLogin ? <CustomLink to="/" onClick={handleLogout}>Logout</CustomLink>: <CustomLink to="/Login">Login</CustomLink>}
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}