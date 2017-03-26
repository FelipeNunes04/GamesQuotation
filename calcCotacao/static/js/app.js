/*
	Autor: Felipe Nunes
	Data: 26/03/2017
 */

var app = angular.module("solicitaCotacao", 
    ['ngCookies'], function($interpolateProvider){
    // Contorna prroblema de interpolação da renderização de template do django
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
}).run( function run($http, $cookies ){
    // Evita problemas relacionados ao CSRF
    $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
});
