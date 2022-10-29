import './styles.css'
import { SelectCounties } from '../SelectCountries'
import { SelectCities } from '../SelectCities'
import { Labels } from '../Labels'

function Form() {
 
  return (
      <form className='form' method='post' action="">
        <div className='information'>
          <div>
            <p>Dados Pessoais</p>
            <Labels title="Nome"/>
            <Labels title="Email"/>
            <Labels title="Telefone"/>
            <Labels title="CPF"/>
          </div>
          <div className='select'>
            <p>Destinos de Interesse</p>
            <SelectCounties />
            <SelectCities />
          </div>
        </div>
        <button type='submit'>Enviar</button>
      </form>
  )
}

export default Form
