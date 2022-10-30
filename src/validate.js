export const validate = (data, setStatus) => {
    if(!data.nome) return setStatus({type: 'error', menssage: 'Erro: Necessário prencher o campo Nome!'})
    if(!data.email) return setStatus({type: 'error', menssage: 'Erro: Necessário prencher o campo Email!'})
    if(!data.telefone) return setStatus({type: 'error', menssage: 'Erro: Necessário prencher o campo Telefone!'})
    if(data.telefone.length < 14)return setStatus({type: 'error', menssage: 'Erro: Campo Telefone invalido!'})
    if(!data.cpf) return setStatus({type: 'error', menssage: 'Erro: Necessário prencher o campo CPF!'})
    if(data.cpf.length < 14) return setStatus({type: 'error', menssage: 'Erro: Campo CPF invalido!'})
    if(data.counties.length === 0) return setStatus({type: 'error', menssage: 'Erro: Necessário prencher o campo de Países!'})
    if(data.cities.length === 0) return setStatus({type: 'error', menssage: 'Erro: Necessário prencher o campo de Cidades!'})
    return true
  }