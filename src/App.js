import AdministrarReceta from "./components/views/receta/AdministrarReceta";
import CrearReceta from "./components/views/receta/CrearReceta";
import EditarReceta from "./components/views/receta/EditarReceta";
import Home from "./components/views/Home";
import Error from "./components/views/Error";
import InicioSesion from "./components/views/InicioSesion"
import Detalle from "./components/views/Detalle";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import './app.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App body colorFondo">
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path='/' element= {< Home ></Home>}></Route>
          <Route exact path='/administrar' element= {< AdministrarReceta></AdministrarReceta>}></Route>
          <Route exact path='/iniciosesion' element={<InicioSesion></InicioSesion>}></Route>
          <Route exact path='/administrar/crear' element= {<CrearReceta></CrearReceta>}></Route>
          <Route exact path='/administrar/editar/:id' element= {<EditarReceta></EditarReceta>}></Route>
          <Route exact path='*' element= {<Error></Error>}></Route>
          <Route exact path='/detalle/:id' element= {<Detalle></Detalle>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
