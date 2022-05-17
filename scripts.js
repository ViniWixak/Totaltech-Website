const elementos = document.querySelectorAll('[data-anima]');
const animacaoClasse = 'animacao';
const btn = document.querySelector('button');
const inputs = document.querySelector('form');

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

if(elementos.length ){
    window.onload = (event) => {
        animaScroll();
    };
    window.addEventListener('scroll', function(){
        animaScroll();
    })
}


btn.addEventListener('click', () => {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "7767cacef8240c",
        Password: "17f7fc470678f5",
        To: ["atendimento@totaltechclimatizacao.com.br", "viniciuswixak@gmail.com"],
        From: inputs.elements["email"].value,
        Subject: "Fale Conosco Email",
        Body: inputs.elements["message"].value + "<br>" + inputs.elements["name"].value + "<br>" + inputs.elements["phone"].value
    }).then(console.log(inputs.elements["email"].value + " " +inputs.elements["message"].value + "<br>" + inputs.elements["name"].value + "<br>" + inputs.elements["phone"].value ));
})