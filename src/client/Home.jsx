// src/client/Home.jsx
import { React } from "react";
// import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { auth } from '../firebase/config';

export default function Home({ setLogin, setUsername, isLogin, username }) {  // Add isLogin and username props
    // const handleGoogleSignIn = async () => {
    //     try {
    //         const provider = new GoogleAuthProvider();
    //         const result = await signInWithPopup(auth, provider);
    //         const user = result.user;
            
    //         // Send the token to your backend
    //         const response = await fetch('http://localhost:8001/auth/google', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 token: await user.getIdToken(),
    //                 email: user.email,
    //                 displayName: user.displayName
    //             }),
    //             credentials: 'include'
    //         });

    //         if (response.ok) {
    //             const data = await response.json();
    //             setLogin(true);
    //             setUsername(user.displayName || user.email.split('@')[0]);
    //         } else {
    //             console.error('Server authentication failed');
    //         }
    //     } catch (error) {
    //         console.error('Google sign in error:', error);
    //     }
    // };

    return (
        <div className="page-format">
            <h1 className="page-title">Home</h1>
            <p>Welcome to the ProduceData! We are the premier site on the internet for sourcing and documenting organic foods that are grown in regions across the world!</p>
            <br />Our goal is to provide a comprehensive database of produce from various regions, giving details on each item.
            <br /> <br />
            {/* {!isLogin ? (
                <button 
                    onClick={handleGoogleSignIn}
                    className="google-sign-in-button"
                >
                    Sign in with Google
                </button>
            ) : (
                <div className="welcome-message">
                    Welcome, {username}! 👋
                </div>
            )} */}
        </div>
    );
}