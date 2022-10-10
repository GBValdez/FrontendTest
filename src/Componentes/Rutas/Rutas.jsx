/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../Template/Home";
import Nav_Bar from "../C_Nav_Bar/Nav_Bar";
import About from "../../Template/About"
import Service from "../../Template/Service";
import Final from "../Agrupacion/Autor/ConsulAuthor";
const Rutas= ()=>{
    return(
    <div>
    <Router>
        <Nav_Bar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/About" element={<About/>}/>
            <Route exact path="/Service" element={<Service/>}/>
            <Route exact path="/Contact" element={<Home/>}/>
            <Route exact path="/Author/:id/:name" element={<Final/>} />
        </Routes>
    </Router>
    </div>
    )
}

export default Rutas;