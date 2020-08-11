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
