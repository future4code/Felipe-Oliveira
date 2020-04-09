// objeto de crição de posts



const titulo = document.getElementById("titulo").value
const author = document.getElementById("author").value
const conteudo = document.getElementById("conteudo").value


const criadorDePost = {
    tituloDoPost: titulo,
    authorDoPost: author,
    conteudoDoPost: conteudo
}

const botaoCriarPost = (ev) => {
    console.log(criadorDePost)
}


arrayDePosts = [
    {criadorDePost}
 ]

 console.log(criadorDePost.titulo)