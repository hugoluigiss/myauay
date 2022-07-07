import "./ListaSuspensa.css"

const ListaSuspensa = (props) =>{
    return(
        <div className="listaSupensa">
            <label className="titulo-selecao">{props.label}</label>
            <select required={props.obrigatorio} onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor} className="campo-selecao">
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa