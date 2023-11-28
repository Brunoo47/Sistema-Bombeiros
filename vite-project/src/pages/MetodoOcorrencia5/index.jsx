import InputD from "../../components/InputD";
import MenuButtonO from "../../components/MenuButtonO";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Arrow from "../../components/arrow"
import "./style.css"
import { Link } from "react-router-dom";

function MetodoOcorrencias5() {
  return (
    <>
      <div className="metSVPage">
        <div className="metOcorreTitle">
          <Arrow />
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
        <div className='areaNavigation'>
          <Link to="/metodoOcorrencias4">
            <button className="arrowNavigation">
              <FaArrowLeft size={55} color="#FFF" />
            </button>
          </Link>
          <Link to="/metodoOcorrencias6">
            <button className="arrowNavigation">
              <FaArrowRight size={55} color="#FFF" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MetodoOcorrencias5;
