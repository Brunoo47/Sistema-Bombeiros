import React from "react";
import IndexAdult from "./indexAdult";
import IndexChild from "./indexChild";
import "./style.css";


function MetodoOcorrencias3() {

  const idade = 6;


  if (idade > 5) {
    return <IndexAdult />
  } else {
    return <IndexChild />
  }

}

export default MetodoOcorrencias3;
