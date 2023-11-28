import React from "react";
import olho from "../../assets/olho-aberto.png";
import balao from "../../assets/balao-fala.png";
import andar from "../../assets/andando.png";
import MenuButtonO from "../../components/MenuButtonO";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Arrow from "../../components/arrow"
import CheckboxG from "../../components/checkboxG";
import "./style.css";
import { Link } from "react-router-dom";

function IndexChild() {
    return (
        <>
            <div className="metGlassgowPage">
                <div className="metOcorreTitle">
                    <Arrow />
                    <MenuButtonO />
                </div>
                <div className="tarjaV">
                    <div className="metTitle">
                        <h1>Avaliação Glassgow</h1>
                    </div>
                </div>

                <div className="containerGlassgow">
                    <div className="containerFieldGlassGow">
                        <div className="titleGlassGow">
                            <h4>Abertura Ocular</h4>
                            <img src={olho} className="logomin" alt="Abertura ocular" />
                        </div>
                        <div className="checkboxG">
                            <CheckboxG
                                titulo="Nenhuma"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    marginBottom: "3px",
                                }}
                            />

                            <CheckboxG
                                titulo="Espontânea"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    marginBottom: "3px",
                                }}
                            />

                            <CheckboxG
                                titulo="Comando Verbal"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    marginBottom: "3px",
                                }}
                            />

                            <CheckboxG
                                titulo="Estímulo Doloroso"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    marginBottom: "3px",
                                }}
                            />
                        </div>
                    </div>

                    <div className="containerFieldGlassGow">
                        <div className="titleGlassGow">
                            <h4>Resposta Verbal</h4>
                            <img src={balao} className="logomin" alt="Abertura ocular" />
                        </div>
                        <div className="checkboxG">
                            <CheckboxG
                                titulo="Palavras e frases inapropriadas"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    marginBottom: "3px",
                                }}
                            />

                            <CheckboxG
                                titulo="Palavras inapropriadas"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    marginBottom: "3px",
                                }}
                            />

                            <CheckboxG
                                titulo="Choro persistente ou grito"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    marginBottom: "3px",
                                }}
                            />

                            <CheckboxG
                                titulo="Sons inconpreesíveis"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    marginBottom: "3px",
                                }}
                            />

                            <CheckboxG
                                titulo="Nenhuma Resposta Verbal"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    marginBottom: "3px",
                                }}
                            />
                        </div>
                    </div>

                    <div className="containerFieldGlassGow">
                        <div className="titleGlassGow">
                            <h4>Resposta Motora</h4>
                            <img src={andar} className="logomin" alt="Abertura ocular" />
                        </div>
                        <div className="checkboxG">
                            <CheckboxG
                                titulo="Nenhuma"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    marginBottom: "3px",
                                }}
                            />

                            <CheckboxG
                                titulo="Espontânea"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    marginBottom: "3px",
                                }}
                            />

                            <CheckboxG
                                titulo="Comando Verbal"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    marginBottom: "3px",
                                }}
                            />

                            <CheckboxG
                                titulo="Estímulo Doloroso"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    marginBottom: "3px",
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className='areaNavigation'>
                    <Link to="/metodoOcorrencias2">
                        <button className="arrowNavigation">
                            <FaArrowLeft size={55} color="#FFF" />
                        </button>
                    </Link>
                    <Link to="/metodoOcorrencias4">
                        <button className="arrowNavigation">
                            <FaArrowRight size={55} color="#FFF" />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default IndexChild;
