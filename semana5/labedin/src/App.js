import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoPerfil  from './components/imagens/foto-perfil.jpeg'
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil}
          nome="Felipe Gomes" 
          descricao="Oi, meu nome é felipe tenho 18 anos sou recém formado no ensino médio e estudo desenvolvimento Web Full-Stack pela Lanebu_
          não tenho muitas experiencias profissionais por conta da minha idade, venho adiquirindo muito conhecimento na área de desenvolmento
          Web, não vejo a hora de colocar isso tudo em pratica trabalhando em alguma empresa. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />   

        <CardPequeno
        imagem="https://www.ocirurgiaovascular.com.br/backend/wp-content/uploads/2016/04/email-icone-png.png"
        enderecoDeEmail="felipe@Labenu.com"
        />

        <CardPequeno
        imagem="https://image.flaticon.com/icons/png/512/1275/1275228.png"
        endereco='Rua já ta tarde'
        />

      </div>
    </div>
  );
}

export default App;
