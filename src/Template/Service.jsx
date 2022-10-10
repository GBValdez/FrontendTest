import Agrupacion from "../Componentes/Agrupacion/Agrupacion"
import Titulo from "../Componentes/Titulo/Titulo"
import Botones from "../Componentes/Botones/Boton_group/Botongroup"
import { ApolloProvider } from '@apollo/client'
import Cliente from "../Componentes/Cliente apollo/Cliente"
import CreateCard from "../Componentes/Agrupacion/Card/CreateCard"

const Service=() => {
    return(
    <div className="container-sm">
        <Titulo Tit="Servicio" />
        {Botones(["Autor","Categoría"])}
        <br />
        <br />
        <ApolloProvider client={Cliente}>
        <Agrupacion Titulo="Autores" etiqueta={<CreateCard/>}></Agrupacion>
        </ApolloProvider>
    </div>
    )
}


export default Service