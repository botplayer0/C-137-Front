import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import BaseRoute from "./consts/BaseRoute";
import Dashboard from "./pages/dashoboard";
import LoginPage from "./pages/login";
import { routerMapper } from "./utils/routerMapper";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <AuthRoute>
                <Dashboard />
              </AuthRoute>
            }
          >
            {routerMapper(BaseRoute.route).map((item) => (
              <Route
                key={item.path}
                path={item.path}
                element={item.component}
              />
            ))}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
