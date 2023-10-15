import arrowBack from "../../assets/seta-esquerda.png";
import InputD from "../../components/InputD";
import Checkbox from "../../components/checkbox";
import InputText from "../../components/InputText";

function MetodoOcorrencias() {
  return (
    <>
      <div className="metOcorrrenciasPage">
        <div className="metOcorreTitle"></div>
        <div className="tarjaV">
          <div className="metTitle">
            <h1>Sinais vitais</h1>
          </div>
        </div>

        <div className="containerSS">
          <div className="fieldSS">
            <div className="titleSS">
              <h4>Pressão arterial: </h4>
            </div>
            <div className="asideSS">
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

          <div className="fieldSS">
            <div className="titleSS">
              <h4>Pulso: </h4>
            </div>
            <div className="asideSS">
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

          <div className="fieldSS">
            <div className="titleSS">
              <h4>Respiração: </h4>
            </div>
            <div className="asideSS">
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

          <div className="fieldSS">
            <div className="titleSS">
              <h4>Saturação: </h4>
            </div>
            <div className="asideSS">
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

          <div className="fieldSS">
            <div className="titleSS">
              <h4>HGT </h4>
            </div>
            <div className="asideSS">
              <InputD
                style={{
                  width: "60px",
                  height: "25px",
                  borderRadius: "50px",
                }}
              />
            </div>
          </div>

          <div className="fieldSS">
            <div className="titleSS">
              <h4>Temperatura </h4>
            </div>
            <div className="asideSS">
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

          <div className="fieldSS">
            <div className="titleSS">
              <h4>Saturação: </h4>
            </div>
            <div className="asideSS">
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

          <div className="fieldSS">
            <div className="titleSS">
              <h4>Perfissão: </h4>
            </div>
            <div className="asideSS">
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

export default MetodoOcorrencias;
