import arrowBack from "../../assets/arrow-back-up.png";
import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox"
import InputText from "../../components/InputText";

function MetodoOcorrencias() {
    return (
        <>
            <div className="metOcorrrenciasPage">
                    <div className="tarjaV">
                        <div className="metOcorreTitle">
                            <img className="arrow" src={arrowBack} alt="Flecha Back" />
                            </div>
                            <div className="metTitle">
                                <h1>Tipo de ocorrência</h1>
                             </div>
                     </div>
                     <div className="inputs">
                         <InputD type={"text"} placeholder={"Digite o tipo de ocorrência"} style={{width: '80%', height: '15px'}}  />
                    </div>

                    <div className="containercampo">
                       <Checkbox titulo="Campos"/>
                       <Checkbox titulo="Campos"/>
                       <Checkbox titulo="Campos"/>
                       <Checkbox titulo="Campos"/>
                       <Checkbox titulo="Campos"/>
                       <Checkbox titulo="Campos"/>
                       <Checkbox titulo="Campos"/>
                       <Checkbox titulo="Campos"/>
                       
                       


                    </div>



            </div>




        
        </>


    )



}

export default MetodoOcorrencias;