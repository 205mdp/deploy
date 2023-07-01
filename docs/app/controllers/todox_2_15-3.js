//cambiar 
//TodoCtrl_2_15_3
//localStorageDemo_2_15_3
//simpleFactoryx_2_15_3

demoApp.controller('TodoCtrl_2_15_3', function ($scope, $http, localStorageService, simpleFactoryx_2_15_3) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_15_3');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_15_3', simpleFactoryx_2_15_3.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_15_3');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_15_3', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_15_3", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "2.15 CORTE o INTERRUPCIÓN de los SERVICIOS",
        version: "1.0",
        fecharevision: "27-03-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: '2.15.3 Corte de Energía:',
            texto: 'Seguridad',
            datos: [
				{ done: false, id: 1, text: 'Se debe presentar en el Puesto de Mando.' },
				{ done: false, id: 1, text: 'Llevar al Puesto de Mando radios, baterías, localizadores, linternas, y equipos de emergencia.' },
				{ done: false, id: 1, text: 'Asegurarse que uno de los ascensores sea provisto de energía de emergencia.' },
				{ done: false, id: 1, text: 'Convocar al personal de Seguridad de franco y pedirles que se vengan a trabajar si es necesario.' },
				{ done: false, id: 1, text: 'Incrementar patrullas de vigilancia detectar posibles incendios, actos de vandalismo.' },
				{ done: false, id: 1, text: 'Se debe realizar un informe del incidente.' },
				{ done: false, id: 1, text: 'Recaudar información sobre los gastos para presentar a la Compañía de Seguros.' }
            ]
        },
    {
        titulo: 'Jefe de Seguridad  o quien esté a cargo de Seguridad.',
        datos: [
				{ done: false, id: 1, text: 'Establecer un Puesto de Mando.' },
				{ done: false, id: 1, text: 'Solicitar lleven al Puesto de Mando radios, baterías, localizadores, linternas, y equipos de emergencia.' },
				{ done: false, id: 1, text: 'Se deben cerrar todas las entradas y salidas con excepción de la entrada al lobby.' },
				{ done: false, id: 1, text: 'Organizar una Brigada del Hotel.' },
				{ done: false, id: 1, text: 'Hacer patrullar el Hotel en búsqueda de huéspedes y/o personal posiblemente heridos.' },
				{ done: false, id: 1, text: 'Hacer anuncio por altoparlantes si puede ser operado a baterías o por el generador eléctrico.' },
				{ done: false, id: 1, text: 'Ver ejemplo en Manual de procedimientos. 2.15.3' }
        ]
    },
    {
        titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
        datos: [
			{ done: false, id: 1, text: 'Asignar personal en el área del lobby y cerca de los ascensores para dirigir a los huéspedes.' },
			{ done: false, id: 1, text: 'Asignar un miembro del personal para que distribuya equipo de emergencia (linternas, barras luminosas).' },
			{ done: false, id: 1, text: 'Recordar al personal de apagar las computadoras para evitar daños al restablecer la energía eléctrica.' },
			{ done: false, id: 1, text: 'Convocar a los Gerentes que sean necesarios y estén  de franco a presentarse al Hotel.' },
			{ done: false, id: 1, text: 'Dar directivas a Recepción para que los check in/out se realicen manualmente.' },
			{ done: false, id: 1, text: 'Tratar que la mayor cantidad de personal esté visible para los huéspedes.' },
			{ done: false, id: 1, text: 'Asistir al personal de emergencias que se presente en escena.' }
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