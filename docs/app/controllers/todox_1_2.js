//cambiar 
//TodoCtrl_1_2
//localStorage_1_2
//simpleFactoryx_1_2

demoApp.controller('TodoCtrl_1_2', function ($scope, $http, localStorageService, simpleFactoryx_1_2) {
    init();
    function init() {
       
        var tempx = localStorageService.get('localStorage_1_2');
        if (tempx == null) {
            localStorageService.add('localStorage_1_2', simpleFactoryx_1_2.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorage_1_2');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorage_1_2', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_1_2", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "1.2 EVACUACION:",
        version: "1.0",
        fecharevision: "27-03-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'EVACUACION',
            texto: 'Dirigirse inmediatamente al área afectada y ordenar la evacuación de huéspedes y del personal.',
            datos: [
				{ done: false, id: 1, text: 'Chequear Orden de evacuación.' },
				{ done: false, id: 1, text: 'Notificar a la Brigada del Hotel.' },
				{ done: false, id: 1, text: 'Chequear anuncios pertinentes.' },
				{ done: false, id: 1, text: 'Estar preparado para establecer un Puesto de Mando de Evacuación.' },
				{ done: false, id: 1, text: 'Mantener a la Brigada del Hotel informado, por medio de radio.' },
				{ done: false, id: 1, text: 'Acompañar al personal de policía o bomberos.' },
				{ done: false, id: 1, text: 'Proveer al personal de policía o bomberos la lista de ocupación.' },
				{ done: false, id: 1, text: 'Avisar a policías y bomberos si hay personal o huéspedes que no figuren en la lista.' },
				{ done: false, id: 1, text: 'Asistir a policías y bomberos si es necesario.' },
				{ done: false, id: 1, text: 'Concluido el incidente, preparar informe.' }
            ]
        },
    {
        titulo: 'Jefe  de Seguridad o quien esté a cargo de Seguridad.',
        datos: [
			{ done: false, id: 1, text: 'Asegurarse  que el personal asista a las áreas designadas.' },
			{ done: false, id: 1, text: 'Avisar si hay algún huésped con necesidades especiales.' },
			{ done: false, id: 1, text: 'Chequear entrega de llaves maestras de habitaciones  al personal que asiste en la evacuación.' },
			{ done: false, id: 1, text: 'Asignar personal al pié de las escaleras para dirigir a los huéspedes hacia las áreas de reunión.' },
			{ done: false, id: 1, text: 'Responder a las llamadas de atención médica, avisando al SEM del Hotel.' },
			{ done: false, id: 1, text: 'Asegurarse de la evacuación total de las áreas afectadas.' },
			{ done: false, id: 1, text: 'Notificar a los Gerentes y Jefes de Departamento si no se encuentran en el establecimiento.' },
			{ done: false, id: 1, text: 'Asistir a los huéspedes a reingresar al Hotel una vez que pasó la emergencia.' }
        ]
    },
    {
        titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
        datos: [
			{ done: false, id: 1, text: 'Hacer anuncio de evacuación por el sistema de altoparlantes.' },
			{ done: false, id: 1, text: 'Instruir a Recepción para guardar cajas, folios, vouchers tarjetas de crédito, etc.' },
			{ done: false, id: 1, text: 'Si hay tiempo, visitar las áreas de reunión para hablar y ayudar a los huéspedes.' },
			{ done: false, id: 1, text: 'Estar preparado para entregar a los huéspedes artículos como por ejemplo mantas.' },
			{ done: false, id: 1, text: 'Estar preparado para entrevistas con medios de comunicación.' },
			{ done: false, id: 1, text: 'Entregar un “All Clear” concluido el incidente.' },
			{ done: false, id: 1, text: 'Obtener un “Go Kit” si es pertinente.  Contactarse con el Representante del Equipo de Crisis de la División.' }
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