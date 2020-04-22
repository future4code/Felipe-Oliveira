import React from 'react'
import './etapa03.css'

export class Etapa03 extends React.Component {
    render() {
        return <div className = 'Etapa03-conteiner'>
            <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>

            <label for="graduacaoIncompleta"> 06- Qual Curso?</label>
            <input type="text" className="graduacaoIncompleta"/>

            <label for="cursoComplementar">07- Você fez algum curso complementar?</label>
            <select className="cursoComplementar">
                <option> Curso técnico</option>
                <option> Cursos de inglês</option>
                <option> Não fiz curso complementar</option>
            </select>
        </div>
    }
}

export default Etapa03