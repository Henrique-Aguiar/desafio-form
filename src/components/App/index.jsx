import './styles.css'
import { Destinations } from '../Destinations'
import { Labels } from '../Labels'

function App() {
 
  return (
    <div className="App">
      <form method='post' action="">
        <h1>Dados Pessoais</h1>
        <Labels title="Nome"/>
        <Labels title="Email"/>
        <Labels title="Telefone"/>
        <Labels title="CPF"/>
      </form>
      <div>
        <Destinations/>
      </div>
    </div>
  )
}

export default App
