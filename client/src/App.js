import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from './views/Auth'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          render={(props) => <Auth {...props} authRoute="login" />}
        />
        <Route
          path="/register"
          render={(props) => <Auth {...props} authRoute="register" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
