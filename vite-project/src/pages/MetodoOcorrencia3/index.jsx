import React, { useState } from 'react';
import olho from "../../assets/olho-aberto.png";
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
                        <div className='containerOcular'>
                            <div className='titleOcular'>
                                <h4>Abertura Ocular</h4>
                                <img src={olho} className="logomin" alt="Abertura ocular" />
                            </div>
                         
                        </div>

                       </div>
            </div>
            




        
        </>


    )



}

export default MetodoOcorrencias3;