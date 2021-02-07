//Osvaldo Sanches
//Projeto - POC PUC Minas
//2020-2021

import React, {useState, useEffect} from "react";
import "./App.css";
import Axios from "axios";

function App() {

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [normaList, setNormaList] = useState([]);

  //chamada de busca
  useEffect(()=>{
    Axios.get("https://pos-backend-sqs-2021.herokuapp.com/api/get").then((response) => {

      setNormaList(response.data);

    });
  },[]);

  // chamada para inserir
  const enviar = () =>{

    Axios.post("https://pos-backend-sqs-2021.herokuapp.com/api/insert",{
      nome:nome, 
      descricao:descricao,
    });

    setNormaList([
      ...normaList,
      {nome: nome, descricao: descricao},
    ]);  

  };

  return (
    <div className="App">

      <h1>SOLICITAÇÃO DE RELATÓRIO</h1>
      < br />

      <div className = "form"> 
        <label>Nome do relatório:</label>
        <input type="text" name="nome" onChange={(e)=>{
          setNome(e.target.value);  
        }}/>
        <label>Observação:</label>
        <input type="text" name="descricao" onChange={(e)=>{
          setDescricao(e.target.value);  
        }}/>
        <button onClick={enviar}>Enviar</button>
        < br /> 

        {normaList.map((val) => {
          return (
           
           <div className="card"> 
                    <h1>{val.nome} </h1>
                    <p>{val.descricao}</p> 
            </div>
         );
        })}
      </div>

    </div>
  );

}

export default App;