import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    const { titulo, colorPrimario, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, likeColab } = props

    const colorBorde = { borderColor: colorPrimario }
    const colorFondo = { backgroundColor: hexToRgba(colorPrimario, 0.2) }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={colorFondo}>
                <input
                    type='color'
                    className='input-color'
                    value={colorPrimario}
                    onChange={(event) => {
                        actualizarColor(event.target.value, id);
                    }}
                />
                <h3 style={colorBorde}>{titulo}</h3>
                <div className="colaboradores">
                    {colaboradores.map((colaborador, index) => <Colaborador
                        datos={colaborador}
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        likeColab={likeColab}
                    />)}
                </div>
            </section>
        }
    </>
}

export default Equipo