import { useState } from 'react';
import Banner from './componentes/Banner';
import Colaborador from './componentes/Colaborador';
import FaixaDescricao from './componentes/FaixaDescricao';
import Final from './componentes/Final';
import Formulario from './componentes/Formulario';
import Head from './componentes/Head';
import Time from './componentes/Time';


function App() {

  const times = [
    {
      nome: 'Quero Conhecer',
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome: 'Quero Comprar',
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8FFFF"
    },
    {
      nome: 'Quero Aprender',
      corPrimaria: "#A6D157",
      corSecundaria: "#E9FFE3"
    },
    {
      nome: 'Quero Fazer',
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    },
    {
      nome: 'Quero Assistir',
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    },
    {
      nome: 'Quero Adrenalina',
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9"
    },
    {
      nome: 'Quero Comer e Beber',
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF"
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
      setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Head/>
      <Banner />
      <FaixaDescricao/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores= {colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      
      <Final criador={"by Hugo Luigi"}/>
 
    </div>
  );
}

export default App;
