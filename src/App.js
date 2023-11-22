import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Register from './pages/Register/Register';
import Registers from './pages/Registers/Registers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastro' element={<SignUp  />}/>
        <Route path='/registrar' element={<Register  />}/>
        <Route path='/registros' element={<Registers  />}/>

      </Routes>
    </div>
  );
}

export default App;
