import Login from './componentes/Login';
import CrearUsuario from './componentes/CrearUsuario';
import Recuperar from './componentes/Recuperar';
import Principal from './componentes/Principal';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={ <Login/>}/>
          <Route path="/crear" element={<CrearUsuario/>} />
          <Route path="/editar" element={<Recuperar/>}/>
          <Route path="/principal" element ={<Principal/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
