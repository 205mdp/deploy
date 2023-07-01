//cambiar 
//TodoCtrl_2_12
//localStorageDemo_2_12
//simpleFactoryx_2_12

demoApp.controller('TodoCtrl_2_12', function ($scope, $http, localStorageService, simpleFactoryx_2_12) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_12');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_12', simpleFactoryx_2_12.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_12');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_12', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_12", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "2.12 HERIDAS o ENFERMEDAD",
        version: "1.0",
        fecharevision: "27-03-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: '2.12.1 Emergencias Médicas de los Huéspedes:',
            texto: 'Seguridad',
            datos: [
				{ done: false, id: 1, text: 'Ante una llamada por emergencia médica de un huésped, determinar inmediatamente:' },
				{ done: false, id: 1, text: 'La ubicación de la emergencia.' },
				{ done: false, id: 1, text: 'El tipo de lesiones u otras características de la emergencia.' },
				{ done: false, id: 1, text: 'Si la persona respira.' },
				{ done: false, id: 1, text: 'Si la persona tiene pulso.' },
				{ done: false, id: 1, text: 'Si la persona está consiente.' },
				{ done: false, id: 1, text: 'Edad aproximada.' },
				{ done: false, id: 1, text: 'Si se conocen sus antecedentes médicos.' },
				{ done: false, id: 1, text: 'Se debe llamar inmediatamente al Servicio de Emergencias Médicas del Hotel.' },
				{ done: false, id: 1, text: 'Se debe notificar a la  Brigada del Hotel.' },
				{ done: false, id: 1, text: 'Preparar el kit de primeros auxilios.' },
				{ done: false, id: 1, text: 'Presentarse en la escena para dar seguridad.' },
				{ done: false, id: 1, text: 'Proporcionar los primeros auxilios o CPR según sea necesario.' },
				{ done: false, id: 1, text: 'Asegurar estudios Patógenos en Sangre, en la limpieza de fluidos corporales.' },
				{ done: false, id: 1, text: 'Presentarse ante el Jefe de Seguridad para recibir instrucciones.' },
				{ done: false, id: 1, text: 'Ofrecer toda la asistencia que sea necesaria.' },
				{ done: false, id: 1, text: 'Preparar el informe pertinente con fotos.' }
            ]
        },
    {
        titulo: 'Jefe de Seguridad  o quien esté a cargo de Seguridad.',
        datos: [
			{ done: false, id: 1, text: 'Presentarse en la escena para dar seguridad.' },
			{ done: false, id: 1, text: 'Asistir con los primeros auxilios o CPR si son necesarios y si se es diplomado en Primeros Auxilios y en Resucitación Cardíaca Pulmonar.' },
			{ done: false, id: 1, text: 'Asegurar estudios Patógenos en Sangre, en la limpieza de fluidos corporales.' },
			{ done: false, id: 1, text: 'Se debe determinar que nivel de atención médica es necesaria: el servicio de emergencia del Hotel o un servicio médico privado.' },
			{ done: false, id: 1, text: 'Si la persona no está consiente se debe contactar el servicio de emergencias médicas del Hotel.' },
			{ done: false, id: 1, text: 'Avisar a Seguridad -1 si son necesarios el servicio de emergencias médicas del hotel u otro privado.' },
			{ done: false, id: 1, text: 'Solicitar que la entrada principal no se encuentre obstaculizada por vehículos.' },
			{ done: false, id: 1, text: 'Enviar un miembro de la Brigada del Hotel a recibir a la unidad médica y guiarlos.' },
			{ done: false, id: 1, text: 'Si no es necesario el traslado del paciente en ambulancia, conseguir un medio de transporte alternativo como un taxi o un servicio de remis.' },
			{ done: false, id: 1, text: 'Se debe hacer saber al huésped que el Hotel se mantendrá en contacto con él.' },
			{ done: false, id: 1, text: 'Se debe hacer un seguimiento de una manera oportuna.' },
			{ done: false, id: 1, text: 'Si el huésped es hospitalizado, cerrar la habitación.' },
			{ done: false, id: 1, text: 'Si la hospitalización es prolongada, poner las pertenencias del huésped en depósito.' },
			{ done: false, id: 1, text: 'Establecer una cuenta de “mensajes”.' },
			{ done: false, id: 1, text: 'Si las heridas/enfermedad son de importancia contactar al Gerente General o Gerente de Guardia.' },
			{ done: false, id: 1, text: 'Organizar una reunión informativa con los miembros de la Brigada del Hotel u otros miembros del personal involucrados.' }
        ]
    },
    {
        titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
        datos: [
			{ done: false, id: 1, text: 'Ponerse en contacto con el representante del Equipo de Crisis de la División especificando el incidente.' },
			{ done: false, id: 1, text: 'Asegurarse de que se haga un seguimiento del estado de salud de la persona herida/enferma.' }

        ]
    },
    {
        titulo: '2.12.2 Accidente o Lesiones de un Miembro del Personal',
        texto: 'Cualquier miembro del personal lesionado en el Hotel se debe contactar inmediatamente con Seguridad.',
        datos: [
				{ done: false, id: 1, text: 'Al recibir una llamada por un caso de emergencia médica para un miembro del personal, debe evaluar la gravedad de las lesiones.' },
				{ done: false, id: 1, text: 'Si es necesario se debe contactar con el Servicio de Emergencias Médicas del Hotel.' },
				{ done: false, id: 1, text: 'Se debe enviar a un miembro de Seguridad a la entrada para recibir a los miembros de la ayuda médica.' },
				{ done: false, id: 1, text: 'Si la cantidad de heridos o lesionados es de cinco (5) o más personas o es el resultado de una fatalidad, se debe contactar al representante del Equipo de Crisis de la División dentro de las 48 horas.' }


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