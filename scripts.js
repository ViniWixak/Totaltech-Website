const elementos = document.querySelectorAll('[data-anima]');

const animacaoClasse = 'animacao';

animaScroll();

function animaScroll(){
    const topoPaginaNaJanela = window.pageYOffset + ((window.innerHeight*3/4));
    elementos.forEach(function(elemento){
        if(topoPaginaNaJanela > elemento.offsetTop){
            elemento.classList.add(animacaoClasse);
        }else{
            elemento.classList.remove(animacaoClasse);
        }
    });
}

if(elementos.length){
    window.addEventListener('scroll', function(){
        animaScroll();
    })
}
