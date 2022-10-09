/* eslint-disable react/jsx-pascal-case */
import "./Assets/CSS/main.css";
import "../node_modules/bootstrap/dist/js/bootstrap"
import "./Assets/CSS/Menu.css"
import Nav_Bar from "./Componentes/C_Nav_Bar/Nav_Bar";
import C_Fondo from "./Componentes/C_Fondo/C_Fondo";
import Boton_Dir from "./Componentes/Botones/Boton_A/Boton_Dir";
import Componente from "./Componentes/Prueba/Componente";
function Menu(){
    return(
        <div>
            <C_Fondo></C_Fondo>
            <Nav_Bar></Nav_Bar>
            <div className="container-sm">
                <h3 className="Titulo"> <div className="Explora"> Explora </div><div className="Explora2">el mundo a traves de los libros</div></h3>
                <p className="Descriptcion">Aqui inicia tu historia, deja que Libraty te de la mano brindándote <br /> 
                información, para que puedas aventurarte a grandes 
                <br /> experiencias a traves de la escritura.
                </p>
                <Boton_Dir text="Empezar" tam="lg" ></Boton_Dir>
            
            </div>
            <Componente/>
        </div>
    );
}

export default Menu;