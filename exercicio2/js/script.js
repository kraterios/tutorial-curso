function idade(){
	var anoAtual = 2018;
	var form = document.getElementById('formulario');
	var ano = form.nascimento.value;
	var nome = form.nome.value;

	alert("O seu nome é "+ nome);

	var idade = anoAtual - ano;

	alert(" Sua idade é "+idade +" anos")

	

var escreve = document.getElementById("div1")
escreve.innerHTML="<p> ola"+nome+ " sua idade é "+idade+"</p>"
}