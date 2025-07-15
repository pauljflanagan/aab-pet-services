import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setLogin, setUsername, setPageTitle }) {
  // const [visible, setVisible] = useState(false);
  const [oldUser, setOldUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setPageTitle('Login');
  }, []);

  // const [oldUser, setOldUser] = useState({
  //   username: '',
  //   passwordHash: '',
  // });

  const handleChange = (e) => {
    let formerUser = { ...oldUser };
    formerUser = { ...formerUser, [e.target.name]: e.target.value };
    const { name, value } = e.target;
    setOldUser({ ...oldUser, [name]: value });
  };

  const logIn = async (e) => {
    e.preventDefault();

    navigate('/Employees');
  }

  // const logIn = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('http://localhost:8001/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(oldUser),
  //     });
  //     const result = await response.json();
  //     if (response.ok) {
  //       window.location.href = '/';
  //       localStorage.setItem('isLogin', true);
  //       localStorage.setItem('username', oldUser.username);
  //       setUsername(oldUser.username);
  //       console.log(result);
  //     } else {
  //       e.target.elements.username.value = '';
  //       e.target.elements.passwordHash.value = '';
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <div className='page-format'>
      <h1 className='page-title'>Login</h1>
      <form className='login-form' onSubmit={logIn}>
        <input
          name='username'
          label='username'
          type='text'
          className='login-form-item'
          placeholder='Username'
          value={oldUser.username}
          onChange={handleChange}
        />
        <input
          name='passwordHash'
          label='password'
          type='text'
          className='login-form-item'
          placeholder='Password'
          value={oldUser.passwordHash}
          onChange={handleChange}
        />
        <input
          type='Submit'
          value='Submit'
          className='login-form-item submit-form'
        />
      </form>
    </div>
  );
}
