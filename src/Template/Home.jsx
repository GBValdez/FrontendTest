import Boton_Dir from "../Componentes/Botones/Boton_A/Boton_Dir";
import Titulo from "../Componentes/Titulo/Titulo";
/* eslint-disable react/jsx-pascal-case */

const Home= ()=>{
    return(
        <div className="container-sm">
                <Titulo Tit="Explora" Sub="el mundo a traves de los libros"></Titulo>
                <p className="Descriptcion">Aqui inicia tu historia, deja que Libraty te de la mano brindándote <br /> 
                información, para que puedas aventurarte a grandes 
                <br /> experiencias a traves de la escritura.
                </p>
                <Boton_Dir text="Empezar" tam="lg" url="/Service" ></Boton_Dir>
        </div>
    )
}

export default Home;