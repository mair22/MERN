import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/layouts/Landing";
import Auth from "./views/Auth";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Auth authRoute="/login" />} />
          <Route path="/register" element={<Auth authRoute="/register" />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
