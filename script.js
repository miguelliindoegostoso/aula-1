const imagens = Document.querySelectAll('galeria img')//Pegando todas as imagens do container 
const modal = document.getElementById('modal');
const modalImg = document.querySelector('#modal img')
imagens.forEach(imagem =>{
    imagem.addEventListener('click', () =>{
        const imgSelecionada = imagem.src;
        modalImg.src = imgSelecionada;
        

    })
})