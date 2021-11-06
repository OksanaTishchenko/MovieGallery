import Header from "./components/Header/Header";
import { useRoutes } from "./routes";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./Hooks/Auth.hook";

import "./App.scss";

function App() {
  const { userId, name, login, logout } = useAuth();
  const isAuth = !!userId;
  const routes = useRoutes(isAuth);

  return (
    <AuthContext.Provider value={{
      userId,
      name,
      login,
      logout,
      isAuth
    }}>
      <div className="wrapper">
        <Header />
        {routes}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
