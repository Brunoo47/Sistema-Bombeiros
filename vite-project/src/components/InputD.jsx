const InputD = (props) => {
  return (
    <>
      <input
        type={props.type ? props.type : ""}
        onChange={props.onChange ? props.onChange : ""}
        name={props.name ? props.name : ""}
        value={props.value ? props.value : ""}
        className={props.className ? props.className : ""}
        placeholder={props.placeholder ? props.placeholder : ""}
      />
    </>
  );
};

export default InputD;
