const conteudoMutavel = document.getElementById("conteudo-mutavel");

function mudarConteudo() {
	opcoes = ["Sim", "Não", "Talvez"];

	opcaoEscolhida = Math.floor(Math.random() * 3); //Multiplica o número aleatório pelo número de opções
	console.log(opcaoEscolhida);

	conteudoMutavel.innerHTML = opcoes[opcaoEscolhida];
}
