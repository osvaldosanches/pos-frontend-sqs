import React, {useState, useEffect} from "react";
import "./App.css";
import Axios from "axios";

function App() {


  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [normaList, setNormaList] = useState([]);

  const [novaDescricao, setNovaDescricao] = useState("");

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response) => {

      setNormaList(response.data);
      //alert(response);
      //alert(response.data);
      //alert(response.data.ReceiveMessageResponse.ReceiveMessageResult.messages[0].Body);

    });
  },[]);

  const enviar = () =>{


    Axios.post("http://localhost:3001/api/insert",{
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