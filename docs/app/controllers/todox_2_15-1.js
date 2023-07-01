//cambiar 
//TodoCtrl_2_15_1
//localStorageDemo_2_15_1
//simpleFactoryx_2_15_1

demoApp.controller('TodoCtrl_2_15_1', function ($scope, $http, localStorageService, simpleFactoryx_2_15_1) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_15_1');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_15_1', simpleFactoryx_2_15_1.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_15_1');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_15_1', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_15_1", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "2.15 CORTE o INTERRUPCIÓN de los SERVICIOS",
        version: "1.0",
        fecharevision: "27-03-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: '2.15.1 Escape de Gas:',
            texto: 'Seguridad',
            datos: [
				{ done: false, id: 1, text: 'Evacuar el área afectada y acordonarla.' },
				{ done: false, id: 1, text: 'Se debe asistir al Gerente General/ Gerente de Guardia y a Mantenimiento.' },
				{ done: false, id: 1, text: 'Se debe asistir a los equipos de emergencias en lo que sea necesario.' },
				{ done: false, id: 1, text: 'Realizar el informe pertinente con fotografías.' }
            ]
        },
    {
        titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
        datos: [
			{ done: false, id: 1, text: 'Investigar inmediatamente si hay escape y dar la orden a Mantenimiento que corte el suministro.' },
			{ done: false, id: 1, text: 'Dar instrucciones al personal para que extinga las llamas en el área y que apague los art. Electrónicos en uso.' },
			{ done: false, id: 1, text: 'Hacer retirar a los huéspedes del área afectada, si es necesario.' },
			{ done: false, id: 1, text: 'Tomar nota del número de habitaciones y del área afectada y llevar registro de gastos para Compañía de Seguros.' }
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