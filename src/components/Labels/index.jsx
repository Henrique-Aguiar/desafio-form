import { IMaskInput } from "react-imask"
import './styles.css'

export const Labels = ({ title, onChange, value }) => {
    const type = title == "Email" ? "email" : "text"
    const mask = {
        Telefone: '(00) 00000-0000',
        CPF: '000.000.000-00'
    }
    return(
            <div className="data-people">
                {title == "Nome" || title == "Email" ?
                <>
                    <label htmlFor={title}>*{title}</label> 
                    <input type={type} id={title} value={value}
                        onChange={onChange} />
                </>
                :
                <>
                    <label htmlFor={title}>*{title}</label>
                    <IMaskInput mask={mask[title]} id={title}
                    onChange={onChange} value={value}
                    />
                </>
                }
            </div>
    )
}