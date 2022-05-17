const elementos = document.querySelectorAll('[data-anima]');
const animacaoClasse = 'animacao';
const btn = document.querySelector('button');
const inputs = document.querySelector('form');
const radioButtons = document.querySelectorAll('input[name="slide"]');


// const interval = setInterval(function() {
//     document.querySelector('input[name=slide]:checked').nextElementSibling.checked = true;
//   }, 2000);

  function changePortifolioSlide(){
    // do whatever you like here
    document.querySelector('input[name=slide]:checked').nextElementSibling.checked = true;
    setTimeout(changePortifolioSlide, 5000);
}

changePortifolioSlide();

for(const radioButton of radioButtons){
    radioButton.addEventListener('change', slideTheDiv);
}        

function slideTheDiv(e) {
    console.log(e);
    if (this.checked) {
        document.getElementById("carousel").style.transition = "all .8s"
        switch (e.currentTarget.id) {
            case "slide2":
                document.getElementById("carousel").style.transform = "translate(-80%)";
            break;
            case "slide3":
                document.getElementById("carousel").style.transform = "translate(-167%)";
            break;
            case "slide4":
                document.getElementById("carousel").style.transform = "translate(-247%)";
            break;
            case "slide5":
                document.getElementById("carousel").style.transform = "translate(-328%)";
            break;
            case "slide6":
                document.getElementById("carousel").style.transform = "translate(-410%)";
            break;
            case "slide1":
            default:
                document.getElementById("carousel").style.transform = "translate(0%)";
                break;
        }
        
    }
}

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