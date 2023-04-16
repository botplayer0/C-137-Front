import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import { routeConfig } from "./consts/routeConfig";
import MyLayout from "./pages/Dashboard";
import LoginPage from "./pages/login";
import { outletRender } from "./utils/routerMapper";

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
                <MyLayout />
              </AuthRoute>
            }
          >
            {outletRender(routeConfig.route.routes).map((items) => (
              <Route
                path={items.path}
                key={items.path}
                element={items.element}
              />
            ))}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
