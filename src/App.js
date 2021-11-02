import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./components/Home/Home";
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Browse from "./components/Browse/Browse";

import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <header className="header">
          <div className="header__inner">
            <div><Link to="/" className="header__logo">MovieGallery</Link></div>
            <div className="header__user button">
              <Link to="/signup"><button className="button__sign-up">Sign up</button></Link>
              <Link to="/signin"><button className="button__sign-in">Sign in</button></Link>
              <Link to="/browse"><button className="button__browse">Browse</button></Link>
            </div>
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/browse" component={Browse} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
