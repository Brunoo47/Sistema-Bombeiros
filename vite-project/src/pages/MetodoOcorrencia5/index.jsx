import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import MenuButtonO from "../../components/MenuButtonO";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css"

function MetodoOcorrencias5() {
  return (
    <>
      <div className="metSVPage">
        <div className="metOcorreTitle">
          <div className="arrowIcon">
            <Link to="/RegistrarOcorre">
              <AiOutlineArrowLeft size={55} color={"#000"} />
            </Link>
          </div>
          <MenuButtonO />
        </div>
        <div className="tarjaV">
          <div className="metTitle">
            <h1>Sinais vitais</h1>
          </div>
        </div>

        <div className="containerSV">
          <div className="fieldSV">
            <div className="titleSV">
              <h4>Pressão arterial: </h4>
            </div>
            <div className="asideSV" style={{ justifySelf: "start" }}>
              <InputD
                style={{
                  width: "60px",
                  height: "25px",
                  borderRadius: "20px",
                  border: "1px solid #000"
                }}
              />
              <span>
                <b>x</b>
              </span>
              <InputD
                style={{
                  width: "60px",
                  height: "25px",
                  borderRadius: "20px",
                  border: "1px solid #000"
                }}
              />
              <span>
                <b>mmgg</b>
              </span>
            </div>
          </div>

          <div className="fieldSV">
            <div className="titleSV">
              <h4>Pulso: </h4>
            </div>
            <div className="asideSV">
              <InputD
                style={{
                  width: "60px",
                  height: "25px",
                  borderRadius: "20px",
                  border: "1px solid #000"
                }}
              />
              <span>
                <b>B. C. P. M.</b>
              </span>
            </div>
          </div>

          <div className="fieldSV">
            <div className="titleSV">
              <h4>Respiração: </h4>
            </div>
            <div className="asideSV">
              <InputD
                style={{
                  width: "60px",
                  height: "25px",
                  borderRadius: "20px",
                  border: "1px solid #000"
                }}
              />
              <span>
                <b>M. R. M.</b>
              </span>
            </div>
          </div>

          <div className="fieldSV">
            <div className="titleSV">
              <h4>Saturação: </h4>
            </div>
            <div className="asideSV">
              <InputD
                style={{
                  width: "60px",
                  height: "25px",
                  borderRadius: "20px",
                  border: "1px solid #000"
                }}
              />
              <span>
                <b>%</b>
              </span>
            </div>
          </div>

          <div className="fieldSV">
            <div className="titleSV">
              <h4>HGT: </h4>
            </div>
            <div className="asideSV">
              <InputD
                style={{
                  width: "60px",
                  height: "25px",
                  borderRadius: "20px",
                  border: "1px solid #000"
                }}
              />
            </div>
          </div>

          <div className="fieldSV">
            <div className="titleSV">
              <h4>Temperatura: </h4>
            </div>
            <div className="asideSV">
              <InputD
                style={{
                  width: "60px",
                  height: "25px",
                  borderRadius: "20px",
                  border: "1px solid #000"
                }}
              />
              <span>
                <b>°C</b>
              </span>
            </div>
          </div>

          <div className="fieldSV">
            <div className="titleSV">
              <h4>Saturação: </h4>
            </div>
            <div className="asideSV">
              <InputD
                style={{
                  width: "60px",
                  height: "25px",
                  borderRadius: "20px",
                  border: "1px solid #000"
                }}
              />
              <span>
                <b>%</b>
              </span>
            </div>
          </div>

          <div className="fieldSV">
            <div className="titleSV">
              <h4>Perfissão: </h4>
            </div>
            <div className="asideSV">
              <div className="asideCheckLeft">
                <div className="containerCheckBox">
                  <input type="checkbox" className="checkBoxSV" />
                  <span className="spanSV">&gt;2 seg</span>
                </div>
                <div className="containerCheckBox">
                  <input type="checkbox" className="checkBoxSV" />
                  <span className="spanSV">&lt;2 seg</span>
                </div>
              </div>
              <div className="asideCheckRight">
                <div className="containerCheckBox">
                  <input type="checkbox" className="checkBoxSV" />
                  <span className="spanSV">Normal</span>
                </div>
                <div className="containerCheckBox">
                  <input type="checkbox" className="checkBoxSV" />
                  <span className="spanSV">Anormal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MetodoOcorrencias5;
