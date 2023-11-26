const InputText = (props) => {
  return (
    <>
      <input
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        className={props.className}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default InputText;
