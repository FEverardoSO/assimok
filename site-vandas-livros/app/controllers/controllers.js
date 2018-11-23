app.contrller('HomeCtrl', function($rootScoope, $location){
    $rootScoope.activetab = $location.path();

    function mudaPagina(){
        alert('cliquei');
    }
    $state.go("sistema"); //exemplo do .state abaixo

    state("sistema", {
        url:"/sistema",
        controller: "SistemaCtrl",
        templateUrl: "app/views/sistema.html"
})

})

app.contrller('ClientesCtrl', function($rootScoope, $location){
    $rootScoope.activetab = $location.path();
})

app.contrller('SistemaCtrl', function($rootScoope, $location){
    $rootScoope.activetab = $location.path();
})

app.contrller('EquipeCtrl', function($rootScoope, $location){
    $rootScoope.activetab = $location.path();
})

app.contrller('ContatoCtrl', function($rootScoope, $location){
    $rootScoope.activetab = $location.path();
})