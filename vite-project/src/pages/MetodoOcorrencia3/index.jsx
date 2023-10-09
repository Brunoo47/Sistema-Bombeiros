import React, { useState } from 'react';
import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox"

function MetodoOcorrencias3() {
    return (
        <>
            <div className="metOcorrrenciasPage">
                    <div className="tarjaV">
                            <div className="metTitle metTitle2">
                                <h1>Avaliação Glassgow</h1>
                             </div>
                     </div>
            

                    <div className="containercampo containerGlassgow">           
                    <select style={{ width: '100px', height: '25px', marginBottom: '10px', marginLeft: "40px" }}>
                            <option value="">Selecione idade</option>
                            <option value="opcao1">&lt; Menor de 5 anos</option>
                            <option value="opcao2">Maior de 5 anos &gt;</option>
                            </select>      
                       </div>
            </div>
            




        
        </>


    )



}

export default MetodoOcorrencias3;