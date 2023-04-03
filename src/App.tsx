import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import Dashboard from "./pages/dashoboard";
import LoginPage from "./pages/login";

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
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
