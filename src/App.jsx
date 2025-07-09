import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import { Home, Login, Team, Contact, Story, Register } from "./client/index";
import "./App.css";
import { useState, useEffect } from "react";
import logoImg from "./public/logo.webp";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const bostonPhone = "16172793219"; // +1 (617) 279-3219
  const arlingtonPhone = "16174311294"; // +1 (617) 431-1294
  const emailAddress = "ted@aandbps.com"
  const facebookLink = "https://www.facebook.com/aboveandbeyondpetservices";
  const instagramLink = "https://www.instagram.com/aandbpets/";
  const yelpLink = "https://www.yelp.com/biz/above-and-beyond-pet-services-belmont?sort_by=date_desc#Recommended";

  useEffect(() => {
    if (localStorage.getItem("isLogin")) {
      setLogin(true);
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  const PhoneDisplay = ({ phoneNumber, isPhoneButton=true }) => {
    let areaCode, localNumber, endingNumber;
    const phoneString = `tel: +${phoneNumber}`;

    if (!phoneNumber) {
      return null;
    } else {
      areaCode = phoneNumber.slice(1, 4);
      localNumber = phoneNumber.slice(4, 7);
      endingNumber = phoneNumber.slice(7, 11);
    }

    if (isPhoneButton) {
      return (
        <div className="d-flex align-items-center phone-call-button" style={{flexDirection: 'row', paddingLeft: "1rem"}}>
          <i className="bi bi-telephone-fill"></i>
          <a href={phoneString}>+1 {areaCode} {localNumber}-{endingNumber}</a>
        </div>
      )
    } else {
      return (
      <div>
        <i className="bi bi-telephone-fill"></i>
        <a href={phoneString} style={{paddingLeft: "1rem"}}>+1 {areaCode} {localNumber}-{endingNumber}</a>
      </div>
      )
    }
  }

  const PageHeader = () => {
    return (
      <div className="display-text nav header" style={{padding: "1rem"}}>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img src={logoImg} alt="logo" className="site-title" />
        </a>
        <div className="navbar">
          <Navbar isLogin={isLogin} username={username}/>
        </div>
        <div style={{width: "20%", textAlign: "center"}}>
          <p>Belmont, Cambridge, Newton, Waltham & Watertown</p>
          <PhoneDisplay phoneNumber={bostonPhone} />
        </div>
        <div style={{width: "18%", textAlign: "center"}}>
          <p>Arlington, Lexington, Medford & Winchester</p>
          <PhoneDisplay phoneNumber={arlingtonPhone} />
        </div>
      </div>
    )
  }

  const PageFooter = () => {
    return (
      <div>
        <div className="footing justify-content-evenly" style={{padding: "3%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src={logoImg} alt="logo" className="site-title" />
          </a>
          <div className="d-flex" style={{paddingLeft: "20%"}}>
            <div className="align-items-center me-2">
              <div style={{width: "80%"}}>
                <PhoneDisplay phoneNumber={bostonPhone} isPhoneButton={false} className="phone-link"/>
                <p className="display-text">Belmont, Cambridge, Waltham, Watertown, Newton</p>
              </div>
              <div>
                <PhoneDisplay phoneNumber={arlingtonPhone} isPhoneButton={false} className="phone-link"/>
                <p className="display-text">Arlington, Lexington, Medford & Winchester</p>
              </div>
              <div>
                <a href={`mailto: ${emailAddress}`}>
                  <i className="bi bi-envelope-fill" style={{paddingRight: "1rem", color: 'black'}}/>
                  {emailAddress}
                </a>
              </div>
            </div>
          </div>
          <div style={{width: "50%", paddingLeft: "10rem"}}>
            <div className="d-flex">
              <i className="bi bi-clock-fill" style={{paddingRight: "1rem", color: 'black'}}/>
              <div className="align-items-center me-2">
                <p style={{fontWeight: "bold"}}>Office Hours</p>
                <div className="display-text">
                  <p>Monday - Friday 8:00am - 4:00pm</p>
                  <p>(excluding federal holidays)</p>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <i className="bi bi-clock-fill" style={{paddingRight: "1rem", color: 'black'}}/>
              <div className="align-items-center me-2">
                <p style={{fontWeight: "bold"}}>Field Hours</p>
                <div className="display-text">
                  <p>7:00 am - 9:00 pm 365 days of the year</p>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <a href={facebookLink}> <i className="bi bi-facebook" /></a>
              <a href={instagramLink}> <i className="bi bi-instagram" style={{paddingLeft: "1rem"}} /></a>
              <a href={yelpLink}> <i className="bi bi-yelp" style={{paddingLeft: "1rem"}} /></a>
            </div>
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", padding: "1%"}}>
          <Navbar className="align-items-center" isHeader={false}/>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div>
        <PageHeader />
      </div>
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} setLogin={setLogin}/>} />
        <Route path="/Story" element={<Story />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login setLogin={setLogin} setUsername={setUsername} />} />
        <Route path="/Login/Logout" element={<Login setLogin={setLogin} setUsername={setUsername} />} />
        <Route path="/Login/Register" element={<Register setLogin={setLogin} setUsername={setUsername} />} />
      </Routes>
      <div>
        <PageFooter />
      </div>
      <footer className="footing display-text" style={{padding: "1%"}}>
            © 2025, AAB Pet Services. All rights reserved.
      </footer>
    </div>
  );
}

export default App;