import './styles.css'
import { SelectCounties } from '../SelectCountries'
import { SelectCities } from '../SelectCities'
import { Labels } from '../Labels'
import { useState } from 'react'
import { validate } from '../../validate'

function Form() {
  const [data, setData] = useState({
    nome: '',
    email:'',
    telefone: '',
    cpf: '',
    counties: [],
    cities: [],
  })
  const [status, setStatus] = useState({
    type: '',
    menssage: '',
  })

  const valuesInput = (e) => {
    const value = e.target.value
    const id = e.target.id

    switch(id){
      case 'Nome': 
        setData({...data, nome: value})
        break;
      case 'Email':
        setData({...data, email: value})
        break;
      case 'Telefone':
        setData({...data, telefone: value})
        break;
      case 'CPF':
        setData({...data, cpf: value})
        break;
    }
  }

  const valuesCounty = (values) => {
    setData({...data, counties: values})
  }
  const valuesCity = (values) => {
    setData({...data, cities: values})
  }

  const addDataForm = (e) => {
    e.preventDefault()

    if(!validate(data, setStatus)) return

    const saveDataForm = true

    if(saveDataForm) {
      setStatus({
        type: 'success',
        menssage: 'Dados enviados com sucesso!'
      })
      setData({
        nome: '',
        email:'',
        telefone: '',
        cpf: '',
        counties: [],
        cities: [],
      })
    }
    else {
      setStatus({
        type: 'error',
        menssage: 'Erro: Dados não foram enviados!'
      })
    }
  }

 
  return (
      <form className='form' onSubmit={addDataForm}>
        {status.type === 'success' ? <p style={{color: 'green'}}>{status.menssage}</p> : null}
        {status.type === 'error' ? <p style={{color: 'red'}}>{status.menssage}</p> : null}
        <div className='information'>
          <div>
            <p>Dados Pessoais</p>
            <Labels title="Nome" onChange={valuesInput} value={data.nome}/>
            <Labels title="Email" onChange={valuesInput} value={data.email}/>
            <Labels title="Telefone" onChange={valuesInput} value={data.telefone  }/>
            <Labels title="CPF" onChange={valuesInput} value={data.cpf}/>
          </div>
          <div className='select'>
            <p>Destinos de Interesse</p>
            <SelectCounties valuesCounty={valuesCounty} value={data.counties}/>
            <SelectCities valuesCity={valuesCity} value={data.cities}/>
          </div>
        </div>
        <button type='submit'>Enviar</button>
      </form>
  )
}

export default Form
