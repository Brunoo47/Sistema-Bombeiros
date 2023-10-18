import React, { useState } from 'react';
import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import "./style.css";

function MetodoOcorrencias2() {

    return (
        <>
            <div className="metPEPage">
            <div className="metPETitle"></div>
                    <div className="tarjaV">
                            <div className="metTitle">
                                <h1>Problemas Encontrados</h1>
                             </div>
                     </div>    

                    <div className="PEContainercampo ">                 
                       <Checkbox titulo="Psiquiátrico " style={{width: '25px', height: '25px', marginBottom: '10px' }}/>
                        <div className="containerSelect">
                       <Checkbox titulo="Respiratório " style={{width: '25px', height: '25px', marginBottom: '10px' }}/>
                        <select style={{ width: '100px', height: '25px', marginBottom: '10px', marginLeft: "40px" }}>
                            <option value="">Selecione uma opção</option>
                            <option value="opcao1">DPOC</option>
                            <option value="opcao2">Inalação fumaça</option>
                            </select>
                        </div>
                        <div className="containerSelect">
                       <Checkbox titulo="Diabetes " style={{width: '25px', height: '25px', marginBottom: '10px' }}/>
                        <select style={{ width: '100px', height: '25px', marginBottom: '10px', marginLeft: "40px" }}>
                            <option value="">Selecione uma opção</option>
                            <option value="opcao1">Hiperglicemia</option>
                            <option value="opcao2">Hipoglicemia</option>
                            </select>
                        </div>
                        <div className="containerSelect">
                       <Checkbox titulo="Obstétrico " style={{width: '25px', height: '25px', marginBottom: '10px' }}/>
                        <select style={{ width: '100px', height: '25px', marginBottom: '10px', marginLeft: "40px" }}>
                            <option value="">Selecione a altura</option>
                            <option value="opcao1">Parto Emergencial</option>
                            <option value="opcao2">Gestante</option>
                            <option value="opcao3">Hemorr. Excessiva</option>
                            </select>
                        </div>
                        <span className="spanOcorrencia">Há outra ocorrência?</span>
                    <div className="inputs">
                    <InputD type={"text"} placeholder={"Digite o tipo de ocorrência"} style={{width: '85%', height: '10px', marginBottom: '20px'}}  />
                    </div>
                    </div>
                   
                   
            </div>
            




        
        </>


    )



}

export default MetodoOcorrencias2;