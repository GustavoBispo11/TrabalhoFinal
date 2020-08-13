function setarAba() {
  var variavel = window.location.href;
  var parametrosDaUrl = variavel.split("Site")[1];
  
    switch (parametrosDaUrl) {
    case "/index.html":
      document.getElementById("home").classList.add("active");
      break;
    case "/jogo1.html":
      document.getElementById("jogo1").classList.add("active");
      break;
    case "/jogo2.html":
      document.getElementById("jnavbarDropdownogos").classList.add("active");
      break;
    case "/jogo3.html":
      document.getElementById("jogo3").classList.add("active");
      break;
    case "/cadastrar.html":
      document.getElementById("cadastrar").classList.add("active");
      break;
    case "/preco.html":
      document.getElementById("preco").classList.add("active");
      break;
    case "/fale conosco.html":
      document.getElementById("fale conosco").classList.add("active");
      break;

  }
}
$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});

function Opacidade(id){
document.getElementById(id).style.opacity = 1;
}
function Opacidade1(id){
document.getElementById(id).style.opacity = 0.6;
}


function validaEmail()
{
  var obj = eval("document.forms[0].Email");
  var txt = obj.value;
  if ((txt.length != 0) && ((txt.indexOf("@") < 1) || (txt.indexOf('.') < 7)))
  {
    alert('Email inválido');
    obj.focus();
  }
}
