import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.scss';
import closeBtn from '../../images/close.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameTouch, setNameTouch] = useState(false);
  const [emailTouch, setEmailTouch] = useState(false);
  const [passwordTouch, setPasswordTouch] = useState(false);
  const [nameError, setNameError] = useState('This field cannot be empty');
  const [emailError, setEmailError] = useState('This field cannot be empty');
  const [passwordError, setPasswordError] = useState('This field cannot be empty');
  const [formValid, setFormValid] = useState(false);

  const onBlurInput = e => {
    //console.log(e.target.name);
    if (e.target.name === 'name') {
      setNameTouch(true);
    }
    if (e.target.name === 'email') {
      setEmailTouch(true);
    }
    if (e.target.name === 'password') {
      setPasswordTouch(true);
    }
  }

  const nameHandler = e => {
    //console.log(e.target.value);
    const value = e.target.value;
    setName(value);
    if (value.length < 2) {
      setNameError('There should be more letters');
      if (!value) {
        setNameError('This field cannot be empty');
      }
    } else {
      setNameError('');
    }
  };

  function validationEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const emailHandler = e => {
    const value = e.target.value;

    setEmail(value);
    if (!validationEmail(value)) {
      setEmailError('The email is incorrect');
      if (!value) {
        setEmailError('This field cannot be empty');
      }
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = e => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 6) {
      setPasswordError('The password must be longer');
      if (!value) {
        setPasswordError('This field cannot be empty');
      }
    } else {
      setPasswordError('');
    }
  };

  useEffect(() => {
    if (nameError || emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [nameError, emailError, passwordError]);

  const messageToast = (text, type) => {
    if (type === 'error') {
      return toast.error(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    return toast.success(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const formSubmit = e => {
    e.preventDefault();

    const usersClone = [...users];
    const candidate = usersClone.find(user => {
      return user.email === email;
    })

    if (candidate) {
      messageToast('User already exists', 'error');
    } else {
      const user = {
        name: name,
        email: email,
        password: password,
        id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
      };
      setUsers([...users, user]);
      setName('');
      setEmail('');
      setPassword('')
      messageToast('User was created');
    }
  };

  const saveUsersToLS = (arr) => {
    return localStorage.setItem('users', JSON.stringify(arr));
  }

  useEffect(() => {
    saveUsersToLS(users);
  }, [users])



  return (
    <div className="registration">
      <div className="container">
        <form onSubmit={formSubmit} className="form">
          <h2 className="form__title">Sign Up</h2>
          <div className="form__input-field">
            <label htmlFor="nameInput">Name:</label>
            <input name="name" value={name} id="nameInput" type="text" className="form__name" placeholder="Enter your name" onBlur={e => onBlurInput(e)} onChange={e => nameHandler(e)} />
            {(nameTouch && nameError) && <span className="form__error-field">{nameError}</span>}
          </div>
          <div className="form__input-field">
            <label htmlFor="emailInput">Email:</label>
            <input name="email" value={email} id="emailInput" type="text" className="form__email" placeholder="Enter your email" onBlur={e => onBlurInput(e)} onChange={e => emailHandler(e)} />
            {(emailTouch && emailError) && <span className="form__error-field">{emailError}</span>}
          </div>
          <div className="form__input-field">
            <label htmlFor="passwordInput">Password:</label>
            <input name="password" value={password} id="passwordInput" type="password" className="form__password" placeholder="Enter your password" onBlur={e => onBlurInput(e)} onChange={e => passwordHandler(e)} />
            {(passwordTouch && passwordError) && <span className="form__error-field">{passwordError}</span>}
          </div>
          <div className="form__button">
            <button disabled={!formValid} className="form__submit" type="submit">Sign up</button>
            {/* <button className="form__submit" type="submit">Send</button> */}
          </div>
          <div className="form__close">
            <Link to="/">
              <img src={closeBtn} alt="" />
            </Link>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default SignUp;