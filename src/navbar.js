import { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

// export default function Navbar() {
//   const [isLogin, setIsLogin] = useState(false);
//   const [username, setUsername] = useState("");
  
//   useEffect(() => {
//     if (localStorage.getItem("isLogin") && localStorage.getItem("username") !== null) {
//       setIsLogin(localStorage.getItem("isLogin"));
//       setUsername(localStorage.getItem("username"));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("isLogin");
//     localStorage.removeItem("username");
//     setIsLogin(false);
//     setUsername("");
//     window.location.href = "/";
//   }

//   console.log(isLogin, username);
//   return (
//     <div style={{ borderLeft: '50%' }}>
//         <nav className="nav">
//         <a href="/" target="_blank" rel="noopener noreferrer">
//             <img src={logoImg} className="site-title" />
//         </a>
//         <ul>
//             <CustomLink to="/">Home</CustomLink>
//             <CustomLink to="/Region">Region</CustomLink>
//             <CustomLink to="/Produce">Produce</CustomLink>
//             <CustomLink to="/Saved">Saved</CustomLink>
//             {isLogin ? <CustomLink to="/" onClick={handleLogout}>Logout</CustomLink>: <CustomLink to="/Login">Login</CustomLink>}
//         </ul>
//         <div style={{width: "18%", textAlign: "center"}}>
//           <p>Belmont, Cambridge, Newton, Waltham & Watertown</p>
//           <div className="phone-call-button">
//             <i class="bi bi-telephone-fill"></i>
//             <a href="tel: +16172793219">+1 (617) 279-3219</a>
//           </div>
//         </div>
//         <div style={{width: "18%", textAlign: "center"}}>
//           <p>Arlington, Lexington, Medford & Winchester</p>
//           <div className="phone-call-button">
//             <i class="bi bi-telephone-fill"></i>
//             <a href="tel: +16174311294">+1 (617) 431-1294</a>
//           </div>
//         </div>
//         </nav>
//     </div>
//   )
// }

export default function Navbar(isHeader=false) {
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
      <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/Story">Our Story</CustomLink>
          <CustomLink to="/Team">Our Team</CustomLink>
          <CustomLink to="/Services">Services</CustomLink>
          <CustomLink to="/Contact">Contact Us</CustomLink>
          {/* {isLogin ? <CustomLink to="/" onClick={handleLogout}>Logout</CustomLink>: <CustomLink to="/Login">Login</CustomLink>} */}
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