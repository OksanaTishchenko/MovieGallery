import './SignUp.scss';

function SignUp() {
  return (
    <div className="registration">
      <div className="registration__inner form-container">
        <form action="" className="registration__form form">
          <h2 className="registration__title title">Sign Up</h2>
          <div className="registration__field">
            <label> Name:
              <input type="text" className="registration__name" placeholder="Enter your name" />
            </label>
          </div>
          <div className="registration__field">
            <label> Email:
              <input type="text" className="registration__email" placeholder="Enter your email" />
            </label>
          </div>
          <div className="registration__field">
            <label> Password:
              <input type="password" className="registration__password" placeholder="Enter your password" />
            </label>
          </div>
          <div className="registration__button button-form">
            <button className="button-form__reset" type="reset">Reset</button>
            <button className="button-form__sumbit" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;