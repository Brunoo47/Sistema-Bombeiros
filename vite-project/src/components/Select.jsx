import Checkbox from "./checkbox";

function Select() {

    return (
        <>
<div className="containerSelect">
                       <Checkbox  />
                       <select
                          style={props.style}
                             >
                        <option value=""></option>
                        <option value="opcao1"></option>
                        <option value="opcao2"></option>
                        <option value="opcao3"></option>
                        </select>
                        </div>
                        </>
    )

}

export default Select;