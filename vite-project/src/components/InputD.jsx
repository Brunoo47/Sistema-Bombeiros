const InputD = (props) => {
  return (
    <>
      <input
        type={props.type}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        className={props.className}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default InputD;
