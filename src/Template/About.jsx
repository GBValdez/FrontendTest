/* eslint-disable react/jsx-pascal-case */
import Titulo from "../Componentes/Titulo/Titulo"

const About= ()=>{
    return(
    <div className="container-sm">
        <Titulo Tit="Librity" Sub="La casa de la información"/>
        <p className="Descriptcion">
            Somos un sitio web que se dedica a divulgar información sobre libros <br />
            Nuestro servicio te permite buscar información sobre libros por categorías y autores.
            <br />
            <br />
            Ven y pruebalo.

        </p>
    </div>
    )
}

export default About;