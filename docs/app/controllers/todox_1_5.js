//cambiar 
//TodoCtrl_1_5
//localStorageDemo_1_5
//simpleFactoryx_1_5

demoApp.controller('TodoCtrl_1_5', function ($scope, $http, localStorageService, simpleFactoryx_1_5) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_1_5');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_1_5', simpleFactoryx_1_5.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_1_5');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_1_5', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_1_5", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "1.5  REFUGIO EN EL LUGAR:",
        version: "1.0",
        fecharevision: "27-03-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: '1.5  REFUGIO EN EL LUGAR:',
            datos: [
             { done: false, id: 1, text: 'Por orden del Jefe de Seguridad o del Gerente General, hacer un anuncio específico.' },
			{ done: false, id: 1, text: 'Solicitar a huéspedes y personal permanecer dentro del hotel.' }
            ]
        },
    {
        titulo: 'Jefe de Seguridad o quien esté a cargo de Seguridad.',
        datos: [
			{ done: false, id: 1, text: 'Cerrar todas las puertas y ventanas que dan al exterior rápidamente.' },
			{ done: false, id: 1, text: 'Enviar personal de seguridad a todas las entradas o salidas del Hotel.' },
			{ done: false, id: 1, text: 'Asegurarse que huéspedes y personal permanezcan adentro.' },
			{ done: false, id: 1, text: 'Que todas las puertas exteriores permanezcan cerradas.' },
			{ done: false, id: 1, text: 'Seleccionar habitaciones para albergar a huéspedes y personal que no sea requerido.' },
			{ done: false, id: 1, text: 'Utilizar teléfono de línea en lugar de telefonía celular.' },
			{ done: false, id: 1, text: 'Tener acceso a televisores para seguir los informes de los medios.' },
			{ done: false, id: 1, text: 'Por peligro de explosión exterior, cerrar todas las persianas o cortinas de las ventanas.' },
			{ done: false, id: 1, text: 'Sellar todas las entradas de ventilación de las habitaciones seleccionadas.' },
			{ done: false, id: 1, text: 'Mantener cerradas todas las entradas a las habitaciones seleccionadas.' },
			{ done: false, id: 1, text: 'Recoger alimentos no perecederos, botellas de agua, radios a pilas, pilas y equipo de primeros auxilios.' },
			{ done: false, id: 1, text: 'Recoger información sobre huéspedes y personal presentes.' },
			{ done: false, id: 1, text: 'Asistir a huéspedes con necesidades especiales, tales como los discapacitados.' },
			{ done: false, id: 1, text: 'Seguir las informaciones de los medios de comunicación.' },
			{ done: false, id: 1, text: 'No tratar de determinar por medio de exploración personal si la amenaza ha concluido.' }
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