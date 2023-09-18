const BotãoPrincipal = (props) => {
  return (
    <>
      <button className="botaoPrincipal" style={props.style}>
        {props.nome}
      </button>
    </>
  );
};

export default BotãoPrincipal;
