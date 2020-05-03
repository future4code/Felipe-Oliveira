import React from "react"
import './etapa02.css'

export class Etapa02 extends React.Component {
    render() {
        return <div className="Etapa02-conteiner">
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            
            <label for="Curso">05- Qual Curso?</label>
            <input type="text" className="Curso"/>

            <label for="unidadeEnsino">06- Qual a unidade de ensino?</label>
            <input type="text" className="unidadeEnsino"/>
        </div>
    }
}

export default Etapa02