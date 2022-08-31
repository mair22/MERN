import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/layouts/Landing";
import Auth from "./views/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import DashBoard from "./views/DashBoard";
import ProtectedRoute from "./components/routing/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Auth authRoute="/login" />} />
          <Route path="/register" element={<Auth authRoute="/register" />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
