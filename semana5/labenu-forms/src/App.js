import React from 'react';
import Etapa01 from './component/Etapa01/etapa01'
import Etapa02 from './component/Etapa02/etapa02'
import Etapa03 from './component/Etapa03/etapa03'
import Etapa04 from './component/Etapa04/etapa04'
import './App.css';

class App extends React.Component{
  state = {
    etapa: 1
  }

  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa01/>;
      
      case 2:
         return <Etapa02/>;

      case 3: 
          return <Etapa03/>;

      case 4:
          return <Etapa04/>;
    
      default:
        break;
    }
  }

  onCLickIrParaProximaEtapa = () => {
    const valorAtual = this.state.etapa
    const proximoValor = valorAtual +1
    this.setState({ etapa: proximoValor})
    console.log('clicou')
  }
  
  render() { 
    if(this.state.etapa === 4) {
      return <div>
     {this.renderizarEtapa()}
     <button className ='someBotao' onClick = {this.onCLickIrParaProximaEtapa}>Proxima Etapa</button>
   </div>;
    } else {
      return <div>
      {this.renderizarEtapa()}
      <button onClick = {this.onCLickIrParaProximaEtapa}>Proxima Etapa</button>
    </div>;
    }
   
  }
}

export default App
