//cambiar 
//TodoCtrl_2_8
//localStorageDemo_2_8
//simpleFactoryx_2_8

demoApp.controller('TodoCtrl_2_8', function ($scope, $http, localStorageService, simpleFactoryx_2_8) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_8');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_8', simpleFactoryx_2_8.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_8');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_8', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_8", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "2.8 INCENDIO o EXPLOSIÓN",
        version: "1.0",
        fecharevision: "27-03-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: '2.8.1 Incendio',
            texto: 'Todo el personal debe conocer sus responsabilidades de antemano como parte de sus obligaciones laborales. Seguridad',
            datos: [
				{ done: false, id: 1, text: 'Contactarse inmediatamente con el servicio de emergencias (911) dando todos los detalles conocidos.' },
				{ done: false, id: 1, text: 'Convocar a la Brigada del Hotel  al Puesto de Mando de inmediato.' },
				{ done: false, id: 1, text: 'Asegurarse de que todos los miembros del equipo respondan.' },
				{ done: false, id: 1, text: 'Dar instrucciones a Seguridad para que registre toda llamada hecha y recibida.' },
				{ done: false, id: 1, text: 'Ir a la escena del incendio si es razonablemente seguro hacerlo.' },
				{ done: false, id: 1, text: 'Entregar la información pertinente a la Brigada del Hotel.' },
				{ done: false, id: 1, text: 'Notificar por medio de radio a: Ama de Llaves y Banquetes.' },
				{ done: false, id: 1, text: 'Dar la orden de evacuación si el Gerente General o Gerente de Guardia no están disponible.' },
				{ done: false, id: 1, text: 'Hacer el anuncio a los huéspedes y al personal a través del equipo de altoparlantes.' },
				{ done: false, id: 1, text: 'Notificar al personal de Recepción para que asista a los huéspedes en la evacuación.' },
				{ done: false, id: 1, text: 'Bell Boys que deben despejar la Entrada Principal para los vehículos de bomberos.' },
				{ done: false, id: 1, text: 'Enviar un miembro de la Brigada del Hotel  a recibir al personal de bomberos.' },
				{ done: false, id: 1, text: 'Entregar al personal de bomberos cualquier equipo que puedan necesitar.' },
				{ done: false, id: 1, text: 'Asistir en lo que sea necesario.' },
				{ done: false, id: 1, text: 'Patrullar las áreas afectadas, controlar y proteger huéspedes y la propiedad del Hotel.' },
				{ done: false, id: 1, text: 'Asistir a los huéspedes y cerrar el área a medida que se van evacuando los pisos.' },
				{ done: false, id: 1, text: 'Cerrar las puertas contra incendio, pero no cerrarlas con llave.' },
				{ done: false, id: 1, text: 'Responder a las preguntas de los huéspedes y socorrer a las personas heridas.' },
				{ done: false, id: 1, text: 'Tratar de mantener las líneas de teléfono abiertas para comunicaciones de emergencia.' },
				{ done: false, id: 1, text: 'Monitorear el sistema de alarmas contra incendio.' },
				{ done: false, id: 1, text: 'Informar a los bomberos sobre cualquier alarma adicional que se active.' },
				{ done: false, id: 1, text: 'Una vez que el fuego ha sido extinguido, hacer los anuncios correspondientes.' },
				{ done: false, id: 1, text: 'Con la aprobación de bomberos, volver a instalar el sistema de alarmas.' },
				{ done: false, id: 1, text: 'Caminar perímetro y escaleras del Hotel, asegurarse de que los huéspedes han sido notificados, y asistirlos a volver a entrar al Hotel.' },
				{ done: false, id: 1, text: 'Investigar la escena, sacar fotos y preparar un informe con una estimación de los daños.' },
				{ done: false, id: 1, text: 'Notificar a Corporate Security.' }
            ]
        },
    {
        titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
        datos: [
			{ done: false, id: 1, text: 'Acusar recibo del anuncio de incendio y dirigirse al Puesto de Mando de Incendio.' },
			{ done: false, id: 1, text: 'De ser necesario, dar la orden de evacuación  a través de altoparlantes.' },
			{ done: false, id: 1, text: 'Asignar personal en las salidas contra incendio para orientar a los huéspedes al área de reunión.' },
			{ done: false, id: 1, text: 'Instruir a Recepción para poner a resguardo, cajas, vouchers, tarjetas de crédito, cajas seguridad, etc.' },
			{ done: false, id: 1, text: 'Asistir a requerimiento de bomberos, ofreciendo personal del Hotel.' },
			{ done: false, id: 1, text: 'Emitir un “All Clear” cuando el incidente haya concluido.' },
			{ done: false, id: 1, text: 'Entregar art. De emergencia a los huéspedes, como ser mantas.' },
			{ done: false, id: 1, text: 'Buscar a los huéspedes, expresar preocupación, y verificar el bienestar de los mismos.' },
			{ done: false, id: 1, text: 'Tratar de proteger a los huéspedes de los medios, pero NO impedir de hablar si ellos quieren hacerlo.' },
			{ done: false, id: 1, text: 'Chequear la limpieza necesaria y reemplazo de artículos dañados.' },
			{ done: false, id: 1, text: 'Ordenar levantamiento de barricadas cercando áreas afectadas, para disminuir riesgos a huéspedes.' },
			{ done: false, id: 1, text: 'Utilizar personal de Ama de Llaves para minimizar daños al Hotel. Ejemplo aspirar daños por agua.' },
			{ done: false, id: 1, text: 'Estar preparados para consulta de medios, pero derivarlos a bomberos y/o policía.' },
			{ done: false, id: 1, text: 'Contactar al Departamento de Managment de Riesgos de la Corporación y al Dto. Legales de la Corporación.' }
        ]
    },
    {
        titulo: '2.8.2 Explosión ',
        texto: 'Seguridad',
        datos: [
			{ done: false, id: 1, text: 'Contactarse inmediatamente con el servicio de emergencias (911) dando todos los detalles conocidos.' },
			{ done: false, id: 1, text: 'Convocar a la Brigada del Hotel  al Puesto de Mando de inmediato.' },
			{ done: false, id: 1, text: 'Asegurarse de que todos los miembros del equipo respondan.' },
			{ done: false, id: 1, text: 'Dar instrucciones a Seguridad para que registre toda llamada hecha y recibida.' },
			{ done: false, id: 1, text: 'Ir a la escena de la explosión, si es razonablemente seguro hacerlo.' },
			{ done: false, id: 1, text: 'Tomar nota de la magnitud del daño y si hay áreas con estructura debilitada.' },
			{ done: false, id: 1, text: 'Entregar la información pertinente a la  Brigada del Hotel.' },
			{ done: false, id: 1, text: 'Asistir a huéspedes y personal herido e informar a la Brigada del Hotel  la cantidad aproximada. Si se siente olor a gas, evacuar el área inmediatamente.' },
			{ done: false, id: 1, text: 'Preguntar al operador de Recepción si se ha recibido llamada telefónica de amenaza.' },
			{ done: false, id: 1, text: 'Dar la orden de evacuación si el Gerente General o Gerente de Guardia no están disponible.' },
			{ done: false, id: 1, text: 'Hacer el anuncio a los huéspedes y al personal a través del equipo de altoparlantes.' },
			{ done: false, id: 1, text: 'Notificar al personal de Recepción para que asista a los huéspedes en la evacuación.' },
			{ done: false, id: 1, text: 'Bell Boys deben despejar la Entrada Principal para los vehículos de emergencias y/o bomberos.' },
			{ done: false, id: 1, text: 'Enviar un miembro de la Brigada del Hotel a recibir al personal de emergencias y/o bomberos.' },
			{ done: false, id: 1, text: 'Entregar al personal de bomberos cualquier equipo que puedan necesitar.' },
			{ done: false, id: 1, text: 'Asistir en lo que sea necesario.' },
			{ done: false, id: 1, text: 'Patrullar las áreas afectadas, controlar y proteger huéspedes y la propiedad del Hotel.' },
			{ done: false, id: 1, text: 'Asistir a los huéspedes y cerrar el área a medida que se van evacuando los pisos.' },
			{ done: false, id: 1, text: 'Cerrar las puertas contra incendio, pero no cerrarlas con llave.' },
			{ done: false, id: 1, text: 'Tratar de mantener las líneas de teléfono abiertas para comunicaciones de emergencia.' },
			{ done: false, id: 1, text: 'Una vez que el área ha sido declarado seguro, hacer los anuncios correspondientes.' },
			{ done: false, id: 1, text: 'Caminar el perímetro del Hotel y las escaleras asegurarse de que los huéspedes han sido notificados, y asistirlos a volver a entrar al Hotel.' },
			{ done: false, id: 1, text: 'Investigar la escena, sacar fotos y preparar un informe con una estimación de los daños.' },
			{ done: false, id: 1, text: 'Notificar a Corporate Security.' }
        ]
    },
    {
        titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
        datos: [
			{ done: false, id: 1, text: 'Acusar recibo del anuncio de incendio y dirigirse al Puesto de Mando de Incendio.' },
			{ done: false, id: 1, text: 'De ser necesario, dar la orden de evacuación  a través de altoparlantes.' },
			{ done: false, id: 1, text: 'Asignar personal en las salidas contra incendio para orientar a los huéspedes al área de reunión.' },
			{ done: false, id: 1, text: 'Instruir a Recepción para poner a resguardo, cajas, vouchers, tarjetas de crédito, cajas seguridad, etc.' },
			{ done: false, id: 1, text: 'Asistir a requerimiento de bomberos, ofreciendo personal del Hotel.' },
			{ done: false, id: 1, text: 'Emitir un “All Clear” cuando el incidente haya concluido.' },
			{ done: false, id: 1, text: 'Entregar art. De emergencia a los huéspedes, como ser mantas.' },
			{ done: false, id: 1, text: 'Buscar a los huéspedes, expresar preocupación, y verificar el bienestar de los mismos.' },
			{ done: false, id: 1, text: 'Tratar de proteger a los huéspedes de los medios, pero NO impedir de hablar si ellos quieren hacerlo.' },
			{ done: false, id: 1, text: 'Chequear la limpieza necesaria y reemplazo de artículos dañados.' },
			{ done: false, id: 1, text: 'Ordenar levantamiento de barricadas cercando áreas afectadas, para disminuir riesgos a huéspedes.' },
			{ done: false, id: 1, text: 'Estar preparados para consulta de medios, pero derivarlos a bomberos y/o policía.' },
			{ done: false, id: 1, text: 'Contactar al Departamento de Managment de Riesgos de la Corporación y al Dto. Legales de la Corporación.' }


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