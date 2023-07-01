//cambiar 
//TodoCtrl_2_15_7
//localStorageDemo_2_15_7
//simpleFactoryx_2_15_7

demoApp.controller('TodoCtrl_2_15_7', function ($scope, $http, localStorageService, simpleFactoryx_2_15_7) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_15_7');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_15_7', simpleFactoryx_2_15_7.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_15_7');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_15_7', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_15_7", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "2.15 CORTE o INTERRUPCIÓN de los SERVICIOS",
        version: "1.0",
        fecharevision: "27-03-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: '2.15.7 Falta de Agua:',
            texto: 'Seguridad',
            datos: [
				{ done: false, id: 1, text: 'Se debe recorrer el Hotel para garantizar la seguridad de los huéspedes y cerrar las canillas que pudieran haber quedado abiertas.' },
				{ done: false, id: 1, text: 'Contestar las preguntas de los huéspedes.' },
				{ done: false, id: 1, text: 'Se debe asistir a los huéspedes en lo que sea necesario.' },
				{ done: false, id: 1, text: 'Se debe asistir a las cuadrillas de reparación, guiándolas hasta el área afectada.' },
				{ done: false, id: 1, text: 'Mantener a los huéspedes alejados de los camiones y equipos.' }
            ]
        },
    {
        titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
        datos: [
			{ done: false, id: 1, text: 'Si la falta de agua es en todo el Hotel, se deberá hacer un anuncio por altoparlantes informando de la situación.' },
			{ done: false, id: 1, text: 'También se debe anunciar por altoparlantes que Ama de Llaves entregará botellas de agua en las habitaciones que lo soliciten.' },
			{ done: false, id: 1, text: 'Responder a las preguntas de los huéspedes.' },
			{ done: false, id: 1, text: 'Notificar a Mantenimiento y a Seguridad si todavía no se ha hecho.' },
			{ done: false, id: 1, text: 'Se debe llevar un registro de los costos para presentar a la compañía de seguros.' }
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