import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/LogIn/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastro' element={<SignUp  />}/>
        <Route path='/entrar' element={<Login  />}/>
        <Route path='/registrar' element={<Register  />}/>
      </Routes>
    </div>
  );
}

export default App;
