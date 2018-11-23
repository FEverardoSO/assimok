var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

    //remove o # da url
    $locationProvider.html5Mode(true);

    $routeProvider

    // para a rota '/', carregamos o template home.html e o controllers 'HomeCtrl'
    .when('/', {
        templateUrl : 'app/views/home.html', controller : 'HomeCtrl',
    })
    // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
    .when('/clientes', {
        templateUrl : 'app/views/clientes.html', controller : 'ClientesCtrl',
    })
    .when('/sistema', {
        templateUrl : 'app/views/sistema.html', controller : 'SistemaCtrl',
    })
    .when('/equipe', {
        templateUrl : 'app/views/equipe.html', controller : 'EquipeCtrl',
    })
    //para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
   .when('/contato', {
      templateUrl : 'app/views/contato.html', controller  : 'ContatoCtrl',
   })
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});
