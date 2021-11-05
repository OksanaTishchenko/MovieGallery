import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Browse from "./components/Browse/Browse";

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/browse" component={Browse} />
        <Redirect to="/browse" />
      </Switch>
    );
  };

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/browse" component={Browse} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Redirect to="/browse" />
    </Switch>
  );
};