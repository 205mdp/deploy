//cambiar 
//TodoCtrl_2_7
//localStorageDemo_2_7
//simpleFactoryx_2_7

demoApp.controller('TodoCtrl_2_7', function ($scope, $http, localStorageService, simpleFactoryx_2_7) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_7');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_7', simpleFactoryx_2_7.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_7');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_7', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_7", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "2.7 EMERGENCIA con ASCENSORES",
        version: "1.0",
        fecharevision: "27-03-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: '2.7 EMERGENCIA con ASCENSORES',
            texto: 'Seguridad',
            datos: [
				{ done: false, id: 1, text: 'Contactarse inmediatamente con Mantenimiento del Hotel.' },
				{ done: false, id: 1, text: 'Si es necesario contactarse con el Servicio de Mantenimiento de Ascensores.' },
				{ done: false, id: 1, text: 'Asistir al Jefe de Seguridad en lo que necesite.' },
				{ done: false, id: 1, text: 'Asegurarse contacto telefónico permanente con los pasajeros atrapados en cabina.' },
				{ done: false, id: 1, text: 'Obtener los nombres de los pasajeros y preparar el informe pertinente del incidente.' }
            ]
        },
    {
        titulo: 'Jefe de Seguridad  o quien esté a cargo de Seguridad.',
        datos: [
			{ done: false, id: 1, text: 'Presentarse inmediatamente en la escena.' },
			{ done: false, id: 1, text: 'Servicio de Emergencias Médicas del Hotel, para huéspedes si todavía no se ha hecho.' },
			{ done: false, id: 1, text: 'Solicitar inmediatamente un mecánico, al Servicio de Mantenimiento de Ascensores.' },
			{ done: false, id: 1, text: 'SOLAMENTE UN MECÁNICO AUTORIZADO DEBE TRATAR DE RESCATAR A LOS PASAJEROS DE UN ASCENSOR QUE NO FUNCIONA.' },
			{ done: false, id: 1, text: 'Si la empresa de Mantenimiento de Ascensores no puede acudir, llamar al Emergencia (911).' },
			{ done: false, id: 1, text: 'Permanecer cerca del ascensor, tranquilizar a los pasajeros.' },
			{ done: false, id: 1, text: 'Asistir al mecánico de ascensores o de emergencias, en todo lo que se necesite.' },
			{ done: false, id: 1, text: 'Permanecer en la escena hasta que los pasajeros hayan sido rescatados.' },
			{ done: false, id: 1, text: 'Estar disponible para atender preocupaciones o quejas de los pasajeros.' }]
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