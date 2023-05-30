import "./Campo.css"

const Campo = (props) => {
    const { titulo, aux, required, valor, actualizarValor, type = 'text' } = props

    const manejarCambio = (e) => {
        actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{titulo}</label>
        <input
            placeholder={aux}
            required={required}
            value={valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo