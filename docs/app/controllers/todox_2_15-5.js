//cambiar 
//TodoCtrl_2_15_5
//localStorageDemo_2_15_5
//simpleFactoryx_2_15_5

demoApp.controller('TodoCtrl_2_15_5', function ($scope, $http, localStorageService, simpleFactoryx_2_15_5) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_15_5');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_15_5', simpleFactoryx_2_15_5.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_15_5');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_15_5', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_15_5", function ($http) {

    //////////////////////
    var todotemp  = {
        titulogeneral: "2.15 CORTE o INTERRUPCIÓN de los SERVICIOS",
        version: "1.0",
        fecharevision: "27-03-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: '2.15.5 Fallas en las Telecomunicaciones:',
            texto:'Seguridad',
            datos: [
			{ done: false, id: 1, text: 'Se debe tener el personal adecuado para mantener el orden.' }, 
			{ done: false, id: 1, text: 'Personal de Seguridad deberá estar de guardia hasta que el servicio de telefonía sea restaurado.' },
			{ done: false, id: 1, text: 'Se debe identificar a los huéspedes con necesidades especiales que requieran asistencia.' },
			{ done: false, id: 1, text: 'Se debe activar el teléfono celular de Seguridad para comunicarse con las autoridades locales.' },
			{ done: false, id: 1, text: 'Asignar personal para que recorra el Hotel y asista a huéspedes y personal que lo necesiten.' },
            ]
        }]
    };


    ///////////////////////////////
    var factory = {};
    factory.gettodos = function () {
        var todoreturn;
        var temp;

        temp = todotemp;
        return temp;
    }

    return factory;
});