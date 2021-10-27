import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import Browse from './Browse/Browse';

import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <header className="header">
          <div className="header__inner">
            <div className="header__logo">MovieGallery</div>
            <div className="header__user button">
              <NavLink to="/signup"><button className="button__sign-up">Sign up</button></NavLink>
              <NavLink to="/signin"><button className="button__sign-in">Sign in</button></NavLink>
              <NavLink to="/browse"><button className="button__browse">Browse</button></NavLink>
            </div>
          </div>
        </header>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/browse" component={Browse} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
