import './SignIn.scss';

function SignIn() {
  return (
    <div className="login">
      <div className="login__inner form-container">
        <form action="" className="login__form form">
          <h2 className="login__title title">Login</h2>
          <input type="text" className="login__email" placeholder="Enter your email" />
          <input type="password" className="login__password" placeholder="Enter your password" />
          <div className="login__button button-form">
            <button className="button-form__reset" type="reset">Reset</button>
            <button className="button-form__sumbit" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;