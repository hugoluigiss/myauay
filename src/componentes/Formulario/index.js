import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"


const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time,setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um desejo.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Seu Desejo'
                    placeholder='Digite o seu desejo'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label='Descrição'
                    placeholder='Digite mais sobre seu desejo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label='Imagem'
                    placeholder='Digite link da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Categoria" 
                itens={props.times} 
                valor={time}
                aoAlterado ={valor => setTime(valor)}

                />
                <Botao>Criar Desejo</Botao>
            </form>
        </section>
    )
}
export default Formulario