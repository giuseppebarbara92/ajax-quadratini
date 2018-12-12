// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 0 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready(function(){

for (var i = 0; i < 36; i++) {
  var quadrato = $('.template .square').clone();
  $('.wrapper_square').append(quadrato);
}

var posizione = []

$('.square').click(function(){
  var posizione_quadrato = $(this).index();
  console.log(posizione_quadrato);
  var numeroCpu = 0;
  var quadrato =  $(this);
  if (posizione.includes(posizione_quadrato)) {
    alert('non puoi cliccare 2 volte');
  }
  else {
    posizione.push(posizione_quadrato);
  }
$.ajax({

    url: 'https://www.boolean.careers/api/random/int',

    method: 'GET',

    success: function(data)
    {
      numeroCpu = data.response;
      console.log(data);
      console.log(numeroCpu);
      quadrato.find('h1').text(numeroCpu);
      if (numeroCpu <= 5) {
      quadrato.addClass('green');
      }
      else if (numeroCpu > 5 ) {
        quadrato.addClass('yellow');
      }

    },
    error: function()
    {
    console.log('error');
    }
  });

});




});
