import Colaborador from "../Colaborador";
import "./Time.css"

const Time = (props) => {

    const estiloSecundaria = { backgroundColor: props.corSecundaria };
    const estiloPrimaria = { borderColor: props.corPrimaria };

    return (
        
        (props.colaboradores.length > 0) && <section className="time" style={estiloSecundaria}>
            <h3 style={estiloPrimaria}>{props.nome}</h3>
            <div className="container-colaborador">
                {props.colaboradores.map(colaborador => <Colaborador
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    key={colaborador.nome}
                    corDeFundo={props.corPrimaria}
                />)}
            </div>
        </section>
    )
}
export default Time