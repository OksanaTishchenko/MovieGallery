import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.scss';
import closeBtn from '../../images/close.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const [currentUser, setCurrentUser] = useState({
    userId: null,
    isAutheticated: false
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailTouch, setEmailTouch] = useState(false);
  const [passwordTouch, setPasswordTouch] = useState(false);
  const [emailError, setEmailError] = useState('This field cannot be empty');
  const [passwordError, setPasswordError] = useState('This field cannot be empty');
  const [formValid, setFormValid] = useState(false);

  const onBlurInput = e => {
    //console.log(e.target.name);
    if (e.target.name === 'email') {
      setEmailTouch(true);
    }
    if (e.target.name === 'password') {
      setPasswordTouch(true);
    }
  }

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
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError]);

  const formSubmit = e => {
    e.preventDefault();
    // setEmail('');
    // setPassword('');
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => {
      return user.email === email && user.password === password;
    })
    if (!user) {
      toast.error('Invalid email or password', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setCurrentUser({ userId: user.id, isAutheticated: true });
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
  }

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem('currentUser')) || {})
  }, [])

  return (
    <div className="login">
      <div className="container">
        <form onSubmit={formSubmit} className="form">
          <h2 className="from__title">Login</h2>
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
            <button disabled={!formValid} className="form__submit" type="submit">Login</button>
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

export default SignIn;