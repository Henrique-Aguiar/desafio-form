import './styles.css'

export function Labels({title}) {
    return(

            <div className="data-people">
                <label htmlFor={title}>{title}</label>
                <input type="text" id={title} required/>
            </div>
            /* <div className="data-people">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" required/>
            </div>
            <div className="data-people">
                <label htmlFor="telefone">Telefone</label>
                <input type="text" id="telefone" required/>
            </div>
            <div className="data-people">
                <label htmlFor="cpf">CPF</label>
                <input type="text" id="cpf" required/>
            </div> */

    )
}