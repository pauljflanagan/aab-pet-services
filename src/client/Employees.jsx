import { React, useState, useEffect } from "react";

export default function Employees({ setLogin, setUsername, setPageTitle }) {
  useEffect(() => {
    setPageTitle("Employees");
  }, []);

  return (
    <div style={{ padding: "10%" }}>
        <h1 className="page-title">Employee Portal Coming Soon!</h1>
    </div>
  )
};

// export default function Register({ setLogin, setUsername, setPageTitle }) {
//     // const [visible, setVisible] = useState(false);
    
//     useEffect(() => {
//         setPageTitle("Register");
//     }, []);
    
//     const [newUser, setNewUser] = useState({
//         username: '',
//         passwordHash: '',
//         email: ''
//     });
    
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewUser({ ...newUser, [name]: value });
//     }


//     const saveNewUser = async (e) => {      
//         e.preventDefault();
        
//         try {
//             const response = await fetch("http://localhost:8001/add", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(newUser)
//             });
//             const result = await response.json();
// 		  if (response.ok) {
// 			window.location.href = "/Home"
// 			setLogin(true);
// 			setUsername = (newUser.username);
// 		  }
//             console.log(result);
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     }

//     return (
//         <div className="page-format">
//             <h1 className="page-title">Register</h1>
//             <form className='login-form' onSubmit={saveNewUser}>
//                 <input name="username" label="username" type="text" className='login-form-item' placeholder="Username" value={newUser.username} onChange={handleChange}/>
//                 <input name="passwordHash" label="password" type="text" className='login-form-item' placeholder="Password" value={newUser.passwordHash} onChange={handleChange}/>
//                 <input name="email" label="email" type="text" className='login-form-item' placeholder="Email" value={newUser.email} onChange={handleChange}/>
//                 <input type="Submit" value="Register" className='login-form-item submit-form'/>
//             </form>
//         </div>
//     )
// }