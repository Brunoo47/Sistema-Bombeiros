const Checkbox = (props) => {
  return (
    <>
      <div className="campo campo2">
        <input
          className={props.className}
          type="checkbox"
          name={props.name}
          checked={props.value}
          value={props.value}
          onChange={props.onChange}
          style={props.style}
          onClick={props.onClick}
        />
        <h4>{props.titulo}</h4>
      </div>
    </>
  );
};

export default Checkbox;
