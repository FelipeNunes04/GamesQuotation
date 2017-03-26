/*
	Autor: Felipe Nunes
	Data: 26/03/2017
 */

// Retorna lista de jogos e Solicita Cotação
app.controller("cotacaoCtrl",["$scope","$http",
 function($scope,$http){
	
	$scope.appname = "Solicitar Cotação";

	$scope.preco = $scope.jogo;

	$scope.lista_jogos = [];


	var carregarJogos = function () {

		$http({ method: 'GET', url: 'http://127.0.0.1:8000/jogos/' })	
		  .success(function (data) {
		      $scope.jogos = data;
		  })
		  .error(function (data, status, headers, config) {

		  });

	};
	carregarJogos();

	function toFixed(number){
	    number = parseFloat(number);
	    if(number % 1 != 0){
	        return parseFloat(number.toFixed(2));
	    }else{
	        return number;
	    }
	} 

	function pegaData() {
		var date = new Date();
		var month = (date.getMonth()+1) > 9 ? (date.getMonth()+1) : "0" + (date.getMonth()+1);
		var day = (date.getDate()) > 9 ? (date.getDate()) : "0" + (date.getDate());
		var hours = (date.getHours()) > 9 ? (date.getHours()) : "0" + (date.getHours());
		var minutes = (date.getMinutes()) > 9 ? (date.getMinutes()) : "0" + (date.getMinutes());
		var seconds = (date.getSeconds()) > 9 ? (date.getSeconds()) : "0" + (date.getSeconds());

		var dateString = 
		    day + "/" + 
		    month + "/" + 
		    date.getFullYear() + " - " + 
		    hours + ":" + 
		    minutes + ":" + 
		    seconds;
		return dateString;
	}
	
	$scope.adicionarJogo = function (jogo) {
		var jogo = {nome:"",quantidade:0,subTotal:0};
		jogo.nome = $scope.jogo.nome.fields.nome;
		jogo.quantidade = $scope.jogo.quantidade;
		jogo.subTotal = $scope.jogo.quantidade * $scope.jogo.nome.fields.preco;
		$scope.lista_jogos.push(jogo);
		$scope.jogo.quantidade = "";
		$scope.jogo.nome = "";

	}

	$scope.enviarSolicitacao = function(cliente, lista_jogos){
		alert(cliente.nome);
	}

}]);


