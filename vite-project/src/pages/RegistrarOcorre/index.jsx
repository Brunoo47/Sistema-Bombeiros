import Button from "../../components/Button";
import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./style.css";
import { Component } from "react";
import axios from "axios";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class RegistrarOcorre extends Component {
  state = {
    nome: "",
    idade: "",
    cpf: "",
    telefone: "",
    acompanhante: "",
    local_da_ocorrencia: "",
    m: "",
    s1: "",
    s2: "",
    s3: "",
    demandante: "",
    equipe: "",
    registroProblemasEncontrados: "",
  };

  componentDidMount() {
    if (this.props && this.props.params && this.props.params.id) {
      axios
        .get(
          "http://localhost:8000/registroOcorrencias/?id=" +
            this.props.params.id
        )
        .then((response) => {
          console.log(response.data[0]);
          Object.entries(response.data[0]).forEach((element) => {
            this.setState({
              [element[0]]: element[1],
            });
          });
        })
        .catch((err) => {
          alert("Falha ao buscar informações");
          console.error(err);
        });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    if (e.target.type == "checkbox") {
      this.setState({
        [name]: value === "false",
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Evite o comportamento padrão do formulário
    if (localStorage.getItem("ProblemasEncontrados")) {
      this.setState({
        registroProblemasEncontrados: JSON.parse(
          localStorage.getItem("ProblemasEncontrados")
        ).id,
      });
    }
    console.log(this.state);
    axios
      .post("http://localhost:8000/registroOcorrencias/", this.state)
      .then((response) => {
        localStorage.removeItem("ProblemasEncontrados");
      })
      .catch((err) => {
        alert("Falha ao salvar informações");
        console.error(err);
      });
  };

  render() {
    const showCheck = () => {
      const pickCheck = document.getElementById("companionCheck");
      const containerCompanion = document.getElementById("containerCompanion");

      if (pickCheck.checked) {
        containerCompanion.style.display = "flex";
      } else {
        containerCompanion.style.display = "none";
      }
    };

    return (
      <>
        <div className="RegistrarOcorreContainer">
          <div className="metOcorreTitle">
            <div className="arrowIcon">
              <Link to="/menu">
                <AiOutlineArrowLeft size={55} color={"#000"} />
              </Link>
            </div>
          </div>
          <div className="containerInfo">
            <div className="titleInfo">
              <span>Paciente</span>
            </div>
            <div className="firstInfo">
              <div className="marginInput">
                <label htmlFor="">Nome:</label>
                <input
                  type="text"
                  name="nome"
                  value={this.state.nome}
                  onChange={this.handleChange}
                  className="inputRegistrarOcorre"
                />
              </div>
              <div className="marginInput">
                <label htmlFor="">Idade:</label>
                <input
                  type="text"
                  name="idade"
                  value={this.state.idade}
                  onChange={this.handleChange}
                  className="inputRegistrarOcorre"
                />
              </div>
            </div>
            <div className="secondInfo">
              <div className="marginInput">
                <label htmlFor="">CPF:</label>
                <input
                  type="text"
                  className="inputRegistrarOcorre additionalWidth"
                />
              </div>
              <div className="marginInput">
                <label htmlFor="">Sexo:</label>
                <select name="" id="" placeholder="Selecione uma opção">
                  <option value="">M</option>
                  <option value="">F</option>
                </select>
              </div>
            </div>
            <div className="thirdInfo">
              <div className="marginInput">
                <label htmlFor="">Telefone:</label>
                <input
                  type="text"
                  className="inputRegistrarOcorre additionalWidth"
                />
              </div>
            </div>
            <div className="fourthInfo">
              <div className="titleCompanion">
                <div className="marginInput">
                  <label htmlFor="">Acompanhante:</label>
                  <input
                    type="checkbox"
                    id="companionCheck"
                    onClick={showCheck}
                  />
                </div>
              </div>
              <div
                id="containerCompanion"
                className="containerCompanion"
                style={{ display: "none" }}
              >
                <div className="marginInput">
                  <label htmlFor="">Nome:</label>
                  <input type="text" className="inputRegistrarOcorre" />
                </div>
                <div className="marginInput">
                  <label htmlFor="">Idade:</label>
                  <input type="text" className="inputRegistrarOcorre" />
                </div>
              </div>
            </div>
            <div className="fifthInfo">
              <div className="marginInput">
                <label htmlFor="">Local da Ocorrência:</label>
                <input type="text" className="inputRegistrarOcorre" />
              </div>
            </div>
            <div className="sixthInfo">
              <Link to="/metodoOcorrencias">
                <button className="buttonRegistrarOcorre">
                  Tipo de Ocorrência
                </button>
              </Link>
              <Link to="/metodoHistorico1">
                <button className="buttonRegistrarOcorre">
                  Histórico de Ocorrência
                </button>
              </Link>
            </div>
            <div className="seventhInfo">
              <span>Equipe de atendimento: </span>
              <div>
                <div className="marginInput">
                  <label htmlFor=""> M:</label>
                  <input
                    type="text"
                    className="inputRegistrarOcorre configurationTeam"
                  />
                </div>
                <div className="marginInput">
                  <label htmlFor="">S1:</label>
                  <input
                    type="text"
                    className="inputRegistrarOcorre configurationTeam "
                  />
                </div>
                <div className="marginInput">
                  <label htmlFor="">S2:</label>
                  <input
                    type="text"
                    className="inputRegistrarOcorre configurationTeam"
                  />
                </div>
                <div className="marginInput">
                  <label htmlFor="">S3:</label>
                  <input
                    type="text"
                    className="inputRegistrarOcorre configurationTeam"
                  />
                </div>
                <div className="marginInput">
                  <label htmlFor=""> Demandante:</label>
                  <input
                    type="text"
                    className="inputRegistrarOcorre configurationTeam"
                  />
                </div>
                <div className="marginInput">
                  <label htmlFor="">Equipe:</label>
                  <input
                    type="text"
                    className="inputRegistrarOcorre configurationTeam"
                  />
                </div>
              </div>
            </div>
            <div className="fieldButtonRegistrarOcorre">
              <Button
                nome={"Registrar ocorrência"}
                onClick={this.handleSubmit}
                style={{
                  width: "270px",
                  height: "60px",
                  fontSize: "20px",
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withParams(RegistrarOcorre);
