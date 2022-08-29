import './App.css';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/layouts/Landing';
import Auth from './views/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' render={props => <Auth {...props} authRoute='/login' />} />
        <Route path='/register' render={props => <Auth {...props} authRoute='/register' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
