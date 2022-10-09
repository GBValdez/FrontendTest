import { BrowserRouter as Routeres, Route, Routes } from "react-router-dom";
import {render} from "react-dom";
const Componente= ()=>{
    return(
    <div>

    <Routeres>
        <Routes>
            <Route exact path="/" element={<Home></Home>}/>
            <Route exact path="/Tartaro" element={<Toto/>}/>

        </Routes>
    </Routeres>
    </div>
    )
}

const Home = ()=>{
    return(
        <p>Hola</p>
        
    )
}
const Toto=()=>{return(<p>Tartaro</p>)}


export default Componente;