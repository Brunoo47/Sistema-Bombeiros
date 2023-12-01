const BotãoPrincipal = (props) => {
  return (
    <>
      <button
        className="botaoPrincipal"
        style={props.style}
        onClick={props.onClick}
      >
        {props.nome}
      </button>
    </>
  );
};

export default BotãoPrincipal;
