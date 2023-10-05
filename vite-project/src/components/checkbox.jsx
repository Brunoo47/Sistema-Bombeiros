const Checkbox = (props) => {
    return (
        <>
        <div className="campo">
            <input classname="campomarcado" type="checkbox" />
            <h4>{props.titulo}</h4>
        </div>
        </>
    );
};

export default Checkbox;