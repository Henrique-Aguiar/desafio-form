import { IMaskInput } from "react-imask"
import './styles.css'

export function Labels({title}) {
    const type = title == "Email" ? "email" : "text"
    const mask = {
        Nome: '',
        Email: '',
        Telefone: '(00) 00000-0000',
        CPF: '000.000.000-00'
    }
    return(
            <div className="data-people">
                {title == "Nome" || title == "Email" ?
                <>
                    <label htmlFor={title}>{title}</label> 
                    <input type={type} id={title} required/>
                </>
                :
                <>
                    <label htmlFor={title}>{title}</label>
                    <IMaskInput mask={mask[title]} required/>
                </>
                }
            </div>
    )
}