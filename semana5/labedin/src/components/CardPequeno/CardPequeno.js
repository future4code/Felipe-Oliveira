import React from 'react';
import './cardPequeno.css'

function CardPequeno(props) {
   return(
        <div className = "small-Card">
            <img src={ props.imagem }/>
            <p>{props.enderecoDeEmail } </p>

            <p>{props.endereco} </p>
        </div>
   )
}

export default CardPequeno
   