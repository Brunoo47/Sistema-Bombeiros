import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import MenuButtonO from "../../components/MenuButtonO";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./style.css"

function MetodoOcorrencias5() {
  return (
    <>
      <div className="metSVPage">
      <div className="metOcorreTitle">
          <div className="arrowIcon">
            <AiOutlineArrowLeft size={55} color={"#000"} />
            </div>
            <MenuButtonO/>
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
            <div className="asideSV">
              <InputD
                style={{
                  width: "60px",
                  height: "25px",
                  borderRadius: "50px",
                }}
              />
              <span>
                <b>x</b>
              </span>
              <InputD
                style={{
                  width: "60px",
                  height: "25px",
                  borderRadius: "50px",
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
                  borderRadius: "50px",
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
                  borderRadius: "50px",
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
                  borderRadius: "50px",
                }}
              />
              <span>
                <b>%</b>
              </span>
            </div>
          </div>

          <div className="fieldSV">
            <div className="titleSV">
              <h4>HGT </h4>
            </div>
            <div className="asideSV">
              <InputD
                style={{
                  width: "60px",
                  height: "25px",
                  borderRadius: "50px",
                }}
              />
            </div>
          </div>

          <div className="fieldSV">
            <div className="titleSV">
              <h4>Temperatura </h4>
            </div>
            <div className="asideSV">
              <InputD
                style={{
                  width: "60px",
                  height: "25px",
                  borderRadius: "50px",
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
                  borderRadius: "50px",
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
                <Checkbox
                  titulo="&lt;2m"
                  style={{
                    width: "35px",
                    height: "35px",
                    marginBottom: "2px",
                  }}
                />
                <Checkbox
                  titulo="&gt;2m"
                  style={{
                    width: "35px",
                    height: "35px",
                    marginBottom: "2px",
                  }}
                />
              </div>

              <div className="asideCheckRight">
                <Checkbox
                  titulo="Normal"
                  style={{
                    width: "35px",
                    height: "35px",
                    marginBottom: "2px",
                  }}
                />
                <Checkbox
                  titulo="Anormal"
                  style={{
                    width: "35px",
                    height: "35px",
                    marginBottom: "2px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MetodoOcorrencias5;
