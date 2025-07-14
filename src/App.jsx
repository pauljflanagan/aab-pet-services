import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import {
  Home,
  Login,
  Team,
  Employees,
  Services,
  Contact,
  Story,
  Register,
} from './client/index';
import './App.css';
import { useState, useEffect } from 'react';
import logoImg from './public/logo.webp';
import { Helmet } from 'react-helmet-async';

const PhoneDisplay = ({ phoneNumber, isPhoneButton = true }) => {
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
      <div
        className='d-flex align-items-center phone-call-button'
        style={{ flexDirection: 'row', paddingLeft: '1rem' }}
      >
        <i className='bi bi-telephone-fill'></i>
        <a href={phoneString}>
          +1 {areaCode} {localNumber}-{endingNumber}
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <i className='bi bi-telephone-fill'></i>
        <a href={phoneString} style={{ paddingLeft: '1rem' }}>
          +1 {areaCode} {localNumber}-{endingNumber}
        </a>
      </div>
    );
  }
};

function App() {
  const pageTitleSuffix = ' - Above & Beyond Pet Services';
  const [pageTitle, setPageTitle] = useState('Home');
  const [isLogin, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  const bostonPhone = '16172793219'; // +1 (617) 279-3219
  const arlingtonPhone = '16174311294'; // +1 (617) 431-1294
  const emailAddress = 'ted@aandbps.com';
  const facebookLink = 'https://www.facebook.com/aboveandbeyondpetservices';
  const instagramLink = 'https://www.instagram.com/aandbpets/';
  const yelpLink =
    'https://www.yelp.com/biz/above-and-beyond-pet-services-belmont?sort_by=date_desc#Recommended';

  useEffect(() => {
    if (localStorage.getItem('isLogin')) {
      setLogin(true);
      setUsername(localStorage.getItem('username'));
    }
  }, []);

  // Update document title whenever pageTitle changes
  useEffect(() => {
    document.title = `${pageTitle}${pageTitleSuffix}`;
  }, [pageTitle, pageTitleSuffix]);

  const PageHeader = () => {
    return (
      <div className='display-text nav header' style={{ padding: '1rem' }}>
        <a href='/' target='_blank' rel='noopener noreferrer'>
          <img src={logoImg} alt='logo' className='site-title' />
        </a>
        <div className='navbar'>
          <Navbar isLogin={isLogin} username={username} isHeader={true}/>
        </div>
        <div style={{ width: '20%', textAlign: 'center' }}>
          <p>Belmont, Cambridge, Newton, Waltham & Watertown</p>
          <PhoneDisplay phoneNumber={bostonPhone} />
        </div>
        <div style={{ width: '18%', textAlign: 'center' }}>
          <p>Arlington, Lexington, Medford & Winchester</p>
          <PhoneDisplay phoneNumber={arlingtonPhone} />
        </div>
      </div>
    );
  };

  const PageFooter = () => {
    return (
      <div>
        <div
          className='footing justify-content-evenly'
          style={{
            padding: '3%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <a href='/' target='_blank' rel='noopener noreferrer'>
            <img src={logoImg} alt='logo' className='site-title' />
          </a>
          <div className='d-flex' style={{ paddingLeft: '20%' }}>
            <div className='align-items-center me-2'>
              <div style={{ width: '80%' }}>
                <PhoneDisplay
                  phoneNumber={bostonPhone}
                  isPhoneButton={false}
                  className='phone-link'
                />
                <p className='display-text'>
                  Belmont, Cambridge, Waltham, Watertown, Newton
                </p>
              </div>
              <div>
                <PhoneDisplay
                  phoneNumber={arlingtonPhone}
                  isPhoneButton={false}
                  className='phone-link'
                />
                <p className='display-text'>
                  Arlington, Lexington, Medford & Winchester
                </p>
              </div>
              <div>
                <a href={`mailto: ${emailAddress}`}>
                  <i
                    className='bi bi-envelope-fill'
                    style={{ paddingRight: '1rem', color: 'black' }}
                  />
                  {emailAddress}
                </a>
              </div>
            </div>
          </div>
          <div style={{ width: '50%', paddingLeft: '10rem' }}>
            <div className='d-flex'>
              <i
                className='bi bi-clock-fill'
                style={{ paddingRight: '1rem', color: 'black' }}
              />
              <div className='align-items-center me-2'>
                <p style={{ fontWeight: 'bold' }}>Office Hours</p>
                <div className='display-text'>
                  <p>Monday - Friday 8:00am - 4:00pm</p>
                  <p>(excluding federal holidays)</p>
                </div>
              </div>
            </div>
            <div className='d-flex' style={{ paddingBottom: '1rem' }}>
              <i
                className='bi bi-clock-fill'
                style={{ paddingRight: '1rem', color: 'black' }}
              />
              <div className='align-items-center me-2'>
                <p style={{ fontWeight: 'bold' }}>Field Hours</p>
                <div className='display-text'>
                  <p>7:00 am - 9:00 pm 365 days of the year</p>
                </div>
              </div>
            </div>
            <div className='d-flex'>
              <a href={facebookLink} style={{paddingRight: '1rem'}}>
                {' '}
                <i className='bi bi-facebook site-logos' style={{padding: '1rem'}}/>
              </a>
              <a href={instagramLink} style={{paddingRight: '1rem'}}>
                {' '}
                <i
                  className='bi bi-instagram site-logos'
                  style={{ padding: '1rem' }}
                />
              </a>
              <a href={yelpLink} style={{paddingRight: '1rem'}}>
                {' '}
                <i className='bi bi-yelp site-logos' style={{ padding: '1rem' }} />
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '1%',
          }}
        >
          <Navbar className='align-items-center' />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Helmet>
        <title>
          {pageTitle}
          {pageTitleSuffix}
        </title>
        <meta name='description' content={`AAB Pet Services - ${pageTitle}`} />
        <meta
          name='keywords'
          content='pet services, dog walking, pet sitting, pet care'
        />
        <meta name='author' content='AAB Pet Services' />
      </Helmet>
      <div>
        <PageHeader />
      </div>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              isLogin={isLogin}
              setLogin={setLogin}
              setPageTitle={setPageTitle}
            />
          }
        />
        <Route path='/Story' element={<Story setPageTitle={setPageTitle} />} />
        <Route path='/Team' element={<Team setPageTitle={setPageTitle} />} />
        <Route
          path='/Contact'
          element={<Contact setPageTitle={setPageTitle} />}
        />
        <Route
          path='/Services'
          element={<Services setPageTitle={setPageTitle} />}
        />
        <Route
          path='/Login'
          element={
            <Login
              setLogin={setLogin}
              setUsername={setUsername}
              setPageTitle={setPageTitle}
            />
          }
        />
        <Route
          path='/Login/Logout'
          element={
            <Login
              setLogin={setLogin}
              setUsername={setUsername}
              setPageTitle={setPageTitle}
            />
          }
        />
        <Route
          path='/Login/Register'
          element={
            <Register
              setLogin={setLogin}
              setUsername={setUsername}
              setPageTitle={setPageTitle}
            />
          }
        />
        <Route path='/Employees' element={<Employees setPageTitle={setPageTitle} />} />
      </Routes>
      <div>
        <PageFooter />
      </div>
      <footer className='footing display-text' style={{ padding: '1%' }}>
        © 2025, AAB Pet Services. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
