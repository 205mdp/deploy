//cambiar 
//TodoCtrl_2_15_6
//localStorageDemo_2_15_6
//simpleFactoryx_2_15_6

demoApp.controller('TodoCtrl_2_15_6', function ($scope, $http, localStorageService, simpleFactoryx_2_15_6) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_15_6');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_15_6', simpleFactoryx_2_15_6.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_15_6');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_15_6', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_15_6", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "2.15 CORTE o INTERRUPCIÓN de los SERVICIOS",
        version: "1.0",
        fecharevision: "27-03-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: '2.15.6 Pérdida de Agua:',
            texto: 'Seguridad',
            datos: [
                { done: false, id: 1, text: 'Recorrer el Hotel para garantizar la seguridad de los huéspedes y cerrar canillas abiertas.' },
                { done: false, id: 1, text: 'Reportar nuevas pérdidas de agua o cañerías dañadas que se encuentren en el recorrido.' },
                { done: false, id: 1, text: 'Acordonar las áreas en que el piso o las alfombras estén mojadas, y mantener a los huéspedes alejados de esas áreas.' },
                { done: false, id: 1, text: 'Contestar las preguntas de los huéspedes.' },
                { done: false, id: 1, text: 'Se debe asistir a los huéspedes en lo que sea necesario.' },
                { done: false, id: 1, text: 'Asistir a las cuadrillas de reparación, manteniendo a los huéspedes alejados de los camiones y equipos y guiarlos hasta el área afectada.' }
            ]
        },
    {
        titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
        datos: [
            { done: false, id: 1, text: 'Se debe hacer un anuncio por altoparlantes informando de la situación.' },
            { done: false, id: 1, text: 'También se debe anunciar por altoparlantes que Ama de Llaves entregará botellas de agua en las habitaciones que lo soliciten.' },
            { done: false, id: 1, text: 'Responder a las preguntas de los huéspedes.' },
            { done: false, id: 1, text: 'Notificar a Mantenimiento y a Seguridad si todavía no se ha hecho.' },
            { done: false, id: 1, text: 'Dar instrucciones a Ama de Llaves para que limpie el exceso de agua.' },
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