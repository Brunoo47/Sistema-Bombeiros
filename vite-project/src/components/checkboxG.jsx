const CheckboxG = (props) => {
  return (
    <>
      <div className="campoGlassGow">
        <h4>{props.titulo}</h4>
        <input className="campomarcado" type="checkbox" style={props.style} />
      </div>
    </>
  );
};

export default CheckboxG;
