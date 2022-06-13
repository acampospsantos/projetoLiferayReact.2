import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Pagina1 from './1ºPágina/Pag1';
import Pagina2 from './2ºPágina/Pag2';
import Pagina3 from './3ºPágina/Pag3';
import Pagina4 from './4ºPágina/Pag4';
import Pagina5 from './5ºPágina/Pag5';
import Pagina6 from './6ºPágina/Pag6';
import Pagina7 from './7ºPágina/Pag7';
import Pagina8 from './8ºPágina/Pag8';
import Pagina9 from './9ºPágina/Pag9';
import Pagina10 from './10ºPágina/Pag10';
import Pagina11 from './11ºPágina/Pag11';

const App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Pagina1 />} />
        <Route path="/2" element={<Pagina2 />} />
        <Route path="/3" element={<Pagina3 />} />
        <Route path="/4" element={<Pagina4 />} />
        <Route path="/5" element={<Pagina5 />} />
        <Route path="/6" element={<Pagina6 />} />
        <Route path="/7" element={<Pagina7 />} />
        <Route path="/8" element={<Pagina8 />} />
        <Route path="/9" element={<Pagina9 />} />
        <Route path="/10" element={<Pagina10 />} />
        <Route path="/11" element={<Pagina11 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;