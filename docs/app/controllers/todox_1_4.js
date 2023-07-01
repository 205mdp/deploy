//cambiar 
//TodoCtrl_1_4
//localStorageDemo_1_4
//simpleFactoryx_1_4

demoApp.controller('TodoCtrl_1_4', function ($scope, $http, localStorageService, simpleFactoryx_1_4) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_1_4');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_1_4', simpleFactoryx_1_4.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_1_4');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_1_4', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_1_4", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "1.4. BUSQUEDA y RESCATE:",
        version: "1.0",
        fecharevision: "27-03-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: '1.4. BUSQUEDA y RESCATE:',
            texto: 'El Jefe de Seguridad debe tomar el mando. De lo contario el organismo oficial. Seguir los siguientes procedimientos de búsqueda y rescate:',
            datos: [
				{ done: false, id: 1, text: 'Notificar a la Brigada del Hotel.' },
				{ done: false, id: 1, text: 'Establecer un Puesto de Mando para Búsqueda.' },
				{ done: false, id: 1, text: 'Reunir a los participantes en el Puesto de Mando y dividirlos en equipos de dos.' },
				{ done: false, id: 1, text: 'Dividir el Hotel en áreas y asignarle a cada equipo un área especifica de búsqueda.' },
				{ done: false, id: 1, text: 'También se debe asignar equipos de búsqueda para el exterior del edificio.' },
				{ done: false, id: 1, text: 'Búsqueda X explosión o colapso del edificio, dividir X áreas y asignar a cada equipo una sección.' },
				{ done: false, id: 1, text: 'Asegurar que los equipos de búsqueda controlen huéspedes con necesidades especiales.' },
				{ done: false, id: 1, text: 'Búsqueda X emergencia X fuego, enviar al área inmediata al incendio.' },
				{ done: false, id: 1, text: 'Continuar al piso de arriba del incendio, siguiendo por los pisos superiores.' },
				{ done: false, id: 1, text: 'Trabajar bajando desde los pisos más altos.' },
				{ done: false, id: 1, text: 'NO ENVIAR encargados de búsqueda si el incendio no está controlado.' },
				{ done: false, id: 1, text: 'Asegurar de que se disponga de linternas, intercomunicadores y equipos de primeros auxilios.' },
				{ done: false, id: 1, text: 'Búsqueda es de una persona perdida, entregar descripción o foto de la persona.' },
				{ done: false, id: 1, text: 'Hacer saber cualquier información médica pertinente que se conozca.' },
				{ done: false, id: 1, text: 'Personas perdidas, controlar si la persona ha abandonado el establecimiento.' },
				{ done: false, id: 1, text: 'Registrar área de piletas y zonas con agua.' },
				{ done: false, id: 1, text: 'Registrar las cocheras o áreas de estacionamiento.' },
				{ done: false, id: 1, text: 'Permanecer en Puesto de Mando para impartir instrucciones y monitorear el progreso.' },
				{ done: false, id: 1, text: 'Controlar las condiciones de las victimas rescatadas.' },
				{ done: false, id: 1, text: 'Asegurarse de que se provea atención médica con rapidez a quienes la requieran.' },
				{ done: false, id: 1, text: 'Si hay gran cantidad de víctimas heridas, establecer área para  personas heridas.' },
				{ done: false, id: 1, text: 'Formar grupos, basándose en sus necesidades inmediatas de atención médica.' },
				{ done: false, id: 1, text: 'Informar X radio a todos los equipos fin de búsqueda, emitir un “Todo Claro”.' },
				{ done: false, id: 1, text: 'Una vez concluida la operación de búsqueda y rescate, preparar el informe pertinente.' },
				{ done: false, id: 1, text: 'Con el Gerente General, contactarse con representante de Equipo de Crisis de la División.' }
            ]
        },
    {
        titulo: 'Los puntos a seguir son los pasos en caso que se encuentro artefacto',
        datos: [
            { done: false, id: 1, text: "<strong><span class='glyphicon glyphicon-earphone'></span> Notificar a Gerente general con todos los detalles necesarios</strong>." },
            { done: false, id: 3, text: "<span class='glyphicon glyphicon-earphone'></span> contactar a las autoridades - preparar el encargado de Seguridad para recibirlos." },
            { done: false, id: 3, text: "<strong><span class='glyphicon glyphicon-earphone'></span> Activar cadena de llamadas comité de Emergencia del Hotel.</strong>" },
            { done: false, id: 3, text: "Llevar un registro del personal involucrado, horarios y de todas las actividades – log book" },
            { done: false, id: 3, text: "Procedimiento de evacuación – parcial o Total – Tomar decisiones junto con El GM atreves de comunicaciones abiertas." },
            { done: false, id: 3, text: "Distribuir tarjetas de búsqueda a cada equipo." },
            { done: false, id: 3, text: "Entregar a cada equipo de búsqueda una linterna." },
            { done: false, id: 3, text: "Establecer un plazo para abandonar la búsqueda." },
            { done: false, id: 3, text: "Las partidas de búsqueda informar inmediatamente hallazgo de objeto sospechoso." },
            { done: false, id: 3, text: "Los miembros de los equipos de búsqueda NO DEBEN tocar o mover ningún objeto sospechoso." },
            { done: false, id: 3, text: "Estar preparados para evacuar el Hotel." },
            { done: false, id: 3, text: "Si es necesaria una evacuación, se debe anunciar a los huéspedes." },
            { done: false, id: 3, text: "Cooperar con la Fuerza de Seguridad en todo momento." },
            { done: false, id: 3, text: "Si no se ha encontrado el artefacto y las Fuerzas de Seguridad consideran que el área es segura, emitir una notificación de “todo Claro” al personal del Hotel." }
        ]
    },
    {
        titulo: 'Áreas comunes de Búsqueda',
        datos: [
            { done: false, id: 1, text: "Cajas de ascensores." },
            { done: false, id: 3, text: "Vestuarios." },
            { done: false, id: 3, text: "Maceteros." },
            { done: false, id: 3, text: "Debajo de las escaleras." },
            { done: false, id: 3, text: "Ductos de Ventilación," },
            { done: false, id: 3, text: "Gabinetes de matafuegos y mangueras." },
            { done: false, id: 3, text: "Falsos Cielorrasos." },
            { done: false, id: 3, text: "Lobby." },
            { done: false, id: 3, text: "Áreas de depósito y servicios." },
            { done: false, id: 3, text: "Carritos." },
            { done: false, id: 3, text: "Detrás de cortinados." },
            { done: false, id: 3, text: "Detrás y debajo de muebles." },
            { done: false, id: 3, text: "Automóviles." },
            { done: false, id: 3, text: "Lugares bajos" },
            { done: false, id: 3, text: "Cestos de basura" },
            { done: false, id: 3, text: "Cajones y gabinetes" },
            { done: false, id: 3, text: "Armarios" },
            { done: false, id: 3, text: "Lavandería y tolvas" },
            { done: false, id: 3, text: "Cabinas o habitaciones de teléfonos" },
            { done: false, id: 3, text: "Dentro de bases huecas" },
            { done: false, id: 3, text: "Salas de reunión" },
            { done: false, id: 3, text: "Sanitarios y dispensers de toallas de papel" },
            { done: false, id: 3, text: "Depósitos de inodoros" },
            { done: false, id: 3, text: "Máquinas expendedoras" },
            { done: false, id: 3, text: "Equipajes" },
            { done: false, id: 3, text: "Sala de correo (por cartas bombas)" }
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