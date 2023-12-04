import IndexAdult from "./IndexAdult";
import IndexChild from "./IndexChild";
import "./style.css";

function MetodoOcorrencias3() {
  const idade = 6;

  if (idade > 5) {
    return <IndexAdult />;
  } else {
    return <IndexChild />;
  }
}

export default MetodoOcorrencias3;
