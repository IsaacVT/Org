import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const Colaborador = (props) => {

    const { nombre, puesto, foto, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, likeColab } = props

    const colorFondo = { backgroundColor: colorPrimario }

    return <div className="colaborador">
        <AiFillCloseCircle
            className="eliminar"
            onClick={() => eliminarColaborador(id)}
            style={colorFondo}
        />
        <div className="encabezado" style={colorFondo}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            <span className="like" onClick={() => likeColab(id)}>
                {fav ? <AiFillHeart color="white" /> : <AiOutlineHeart />}
            </span>
        </div>
    </div>
}

export default Colaborador