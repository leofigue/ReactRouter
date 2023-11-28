import { Route, Routes } from 'react-router-dom';
import BarraNav from './components/barranav/BarraNav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <BarraNav></BarraNav>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/contacto' element={<Contacto />}> </Route>
        <Route path='*' element={<NotFound />}> </Route>
      </Routes>
        
    </>
  )
}

export default App

