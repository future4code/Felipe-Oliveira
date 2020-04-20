import React from 'react'
import './etapa01.css'

export class Etapa01 extends React.Component {
    render(){
        return <div className="Etapa01-conteiner">
            <h3>ETAPA 1- DADOS GERAIS</h3>
            
            <label for="Nome">01- Qual è seu Nome?</label>
            <input type="text" className="Nome"/>

            <label for="Idade">02- Qual é sua idade?</label>
            <input type="text" className="Idade"/>

            <label for="Email">03- Qual é seu Email?</label>
            <input type="text" className="Email"/>

            <label for="escolaridade">04- Qual a sua escolaridade?</label>
            <select className="escolaridade">
                <option value="01"> Ensino Médio Incompleto</option>
                <option value="02"> Ensino Médio Completo</option>
                <option value="03"> Ensino Superior Incompleto</option>
                <option value="04"> Ensino Superior Completo</option>
            </select>

            <button>Proxima Etapa</button>
               
               </div>
    }
}

export default Etapa01