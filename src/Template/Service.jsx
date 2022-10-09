
import Titulo from "../Componentes/Titulo/Titulo"
import Botones from "../Componentes/Botones/Boton_group/Botongroup"
import Acordeon from "../Componentes/Acordeon/Acordeon"
const Service=() => {
    return(
    <div className="container-sm">
        <Titulo Tit="Servicio" />
        {Botones(["Autor","Categoría"])}
        <Acordeon></Acordeon>
    </div>
    )
}


export default Service