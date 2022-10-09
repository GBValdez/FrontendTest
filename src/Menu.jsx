/* eslint-disable react/jsx-pascal-case */
import "../node_modules/bootstrap/dist/js/bootstrap"
import "./Assets/CSS/main.css";
import "./Assets/CSS/Menu.css"
import C_Fondo from "./Componentes/C_Fondo/C_Fondo";
import Rutas from "./Componentes/Rutas/Rutas";
function Menu(){
    return(
        <>
            <C_Fondo></C_Fondo>
            <Rutas></Rutas>
            
        </>
    );
}

export default Menu;