const body = document.body;

var tit = document.getElementById('titulo');
tit.innerHTML='Teste Imagem com HTML'
var bulba = document.getElementById('imagem');
//bulba.src='file:///C:/Users/ana_p/OneDrive/Imagens/Saved%20Pictures/05rpg.jpg';
bulba.src='./imagens/bulbasaurs_01.jpg';
bulba.removeAttribute('alt');