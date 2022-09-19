import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/layouts/Landing";
import Auth from "./views/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import DashBoard from "./views/DashBoard";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import PostContextProvider from "./contexts/PostContext";
import NavbarMenu from "./components/layouts/NavbarMenu";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <PostContextProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Auth authRoute="/login" />} />
            <Route path="/register" element={<Auth authRoute="/register" />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <NavbarMenu />
                  <DashBoard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </PostContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
