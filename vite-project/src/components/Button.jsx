const BotãoPrincipal = (props) => {
  return (
    <>
      <button
        className="botaoPrincipal"
        onClick={props.onClick}
        style={props.style}
      >
        {props.nome}
      </button>
    </>
  );
};

export default BotãoPrincipal;
