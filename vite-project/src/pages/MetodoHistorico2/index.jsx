import React, { useState } from "react";
import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import "./style.css";

function MetodoHistorico2() {
  const [selectedOption, setSelectedOption] = useState('opcao1');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

const renderContent = () => {
  if (selectedOption === "opcao1") {
    return (
      <>
        <div className="fieldLeftMateriais">
      <div className="titleFieldMateriais">
        <div>
          <h5>Material</h5>
        </div>
        <div>
          <h5>Quantidade</h5>
        </div>
      </div>
      <div className="fieldMateriais">
        <div className="containerSelect">
          <Checkbox
            titulo="Ataduras "
            style={{
              width: "25px",
              height: "25px",
              marginBottom: "10px",
            }}
          />
          <select
            style={{
              width: "100px",
              height: "25px",
              marginBottom: "10px",
              marginLeft: "40px",
            }}
          >
            <option value="">Selecione a altura</option>
            <option value="opcao1">&lt;2m</option>
            <option value="opcao2">2m</option>
            <option value="opcao3">2m&gt;</option>
          </select>
        </div>
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <Checkbox
          titulo="Cateter TP. Óculos"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <div className="containerSelect">
          <Checkbox
            titulo="Kit's "
            style={{
              width: "25px",
              height: "25px",
              marginBottom: "10px",
            }}
          />
          <select
            style={{
              width: "100px",
              height: "25px",
              marginBottom: "10px",
              marginLeft: "40px",
            }}
          >
            <option value="">Selecione a altura</option>
            <option value="opcao1">&lt;2m</option>
            <option value="opcao2">2m</option>
            <option value="opcao3">2m&gt;</option>
          </select>
        </div>
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <Checkbox
          titulo="Cateter TP. Óculos"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <Checkbox
          titulo="Cateter TP. Óculos"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <Checkbox
          titulo="Cateter TP. Óculos"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <Checkbox
          titulo="Cateter TP. Óculos"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <Checkbox
          titulo="Cateter TP. Óculos"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <Checkbox
          titulo="Cateter TP. Óculos"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>

      <div className="fieldMateriais">
        <div className="containerSelect">
          <Checkbox
            titulo="Kit's "
            style={{
              width: "25px",
              height: "25px",
              marginBottom: "10px",
            }}
          />
          <select
            style={{
              width: "100px",
              height: "25px",
              marginBottom: "10px",
              marginLeft: "40px",
            }}
          >
            <option value="">Selecione a altura</option>
            <option value="opcao1">&lt;2m</option>
            <option value="opcao2">2m</option>
            <option value="opcao3">2m&gt;</option>
          </select>
        </div>
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>

      <div className="fieldMateriais">
        <input
          type="checkbox"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <input
          type="text"
          style={{
            width: "130px",
            marginLeft: "10px",
            marginRight: "5px",
            height: "25px",
            marginBottom: "10px",
            borderRadius: "40px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
    </div>
    </>
    );
  } else {
    return(
    <>
       <div className="fieldLeftMateriais">
      <div className="titleFieldMateriais">
        <div>
          <h5>Pau</h5>
        </div>
        <div>
          <h5>Quantidade</h5>
        </div>
      </div>
      <div className="fieldMateriais">
        <div className="containerSelect">
          <Checkbox
            titulo="Ataduras "
            style={{
              width: "25px",
              height: "25px",
              marginBottom: "10px",
            }}
          />
          <select
            style={{
              width: "100px",
              height: "25px",
              marginBottom: "10px",
              marginLeft: "40px",
            }}
          >
            <option value="">Selecione a altura</option>
            <option value="opcao1">&lt;2m</option>
            <option value="opcao2">2m</option>
            <option value="opcao3">2m&gt;</option>
          </select>
        </div>
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <Checkbox
          titulo="Cateter TP. Óculos"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <div className="containerSelect">
          <Checkbox
            titulo="Kit's "
            style={{
              width: "25px",
              height: "25px",
              marginBottom: "10px",
            }}
          />
          <select
            style={{
              width: "100px",
              height: "25px",
              marginBottom: "10px",
              marginLeft: "40px",
            }}
          >
            <option value="">Selecione a altura</option>
            <option value="opcao1">&lt;2m</option>
            <option value="opcao2">2m</option>
            <option value="opcao3">2m&gt;</option>
          </select>
        </div>
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <Checkbox
          titulo="Cateter TP. Óculos"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <Checkbox
          titulo="Cateter TP. Óculos"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <Checkbox
          titulo="Cateter TP. Óculos"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <Checkbox
          titulo="Cateter TP. Óculos"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <Checkbox
          titulo="Cateter TP. Óculos"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
      <div className="fieldMateriais">
        <Checkbox
          titulo="Cateter TP. Óculos"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>

      <div className="fieldMateriais">
        <div className="containerSelect">
          <Checkbox
            titulo="Kit's "
            style={{
              width: "25px",
              height: "25px",
              marginBottom: "10px",
            }}
          />
          <select
            style={{
              width: "100px",
              height: "25px",
              marginBottom: "10px",
              marginLeft: "40px",
            }}
          >
            <option value="">Selecione a altura</option>
            <option value="opcao1">&lt;2m</option>
            <option value="opcao2">2m</option>
            <option value="opcao3">2m&gt;</option>
          </select>
        </div>
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>

      <div className="fieldMateriais">
        <input
          type="checkbox"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "10px",
          }}
        />
        <input
          type="text"
          style={{
            width: "130px",
            marginLeft: "10px",
            marginRight: "5px",
            height: "25px",
            marginBottom: "10px",
            borderRadius: "40px",
          }}
        />
        <InputD
          style={{
            width: "110px",
            height: "20px",
            alignSelf: "center",
            borderRadius: "50px",
          }}
        />
      </div>
    </div>
    </>
    );
  }
  
}

  return (
    <>
<div className="metMatHistoricoPage">
<div className="metOcorreTitle"></div>
<div className="tarjaV">
  <div className="metTitle">
    <h1>Materiais</h1>
  </div>
</div>
<div className="containerMateriais">
  <div className="selectMateriais">
    <select onChange={handleSelectChange}>
      <option value="opcao1">Materiais Utilizados Descartável</option>
      <option value="opcao2">Materiais Utilizados Deixado no Hospital</option>
    </select>
  </div>
  <div className="containerFieldMateriais">
  {renderContent()} 
  </div>
</div>
</div>
</>
);
}

export default MetodoHistorico2;
