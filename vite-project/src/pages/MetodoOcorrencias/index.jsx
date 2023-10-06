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
                         <InputD type={"text"} placeholder={"Digite o tipo de ocorrência"} style={{width: '85%', height: '10px', marginBottom: '20px'}}  />
                    </div>

                    <div className="containercampo">
                       <Checkbox titulo="Causado por animais" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                       <Checkbox titulo="Desmoronamento/Deslizamento" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                       <Checkbox titulo="Queda de altura " style={{width: '25px', height: '25px', marginBottom: '10px' }}/>
                       <Checkbox titulo="Afogamento" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                       <Checkbox titulo="Atropelamento" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                       <Checkbox titulo="Desabamento" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                       <Checkbox titulo="Esportivo" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                       <Checkbox titulo="Queda de bicicleta" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                       <Checkbox titulo="Com meio de transporte" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                       <Checkbox titulo="Emergência médica" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                       <Checkbox titulo="Tentativa suicídio" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                       <Checkbox titulo="Agressão" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                       <Checkbox titulo="Choque elétrico" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                       <Checkbox titulo="Doméstico" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                       <Checkbox titulo="Intoxicação" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                       <Checkbox titulo="Queda de moto" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                       <Checkbox titulo="Transferência" style={{width: '25px', height: '25px', marginBottom: '10px'}}/>
                  
                       
                    </div>
                    <span className="spanOcorrencia">Há outra ocorrência?</span>
                    <div className="inputs">
                    <InputD type={"text"} placeholder={"Digite o tipo de ocorrência"} style={{width: '85%', height: '10px', marginBottom: '20px'}}  />
                    </div>
                   
            </div>
            




        
        </>


    )



}

export default MetodoOcorrencias;