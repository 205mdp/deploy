//cambiar 
//TodoCtrl_2_1
//localStorageDemo_1_6
//simpleFactoryx_1_6

demoApp.controller('TodoCtrl_2_1', function ($scope, $http, localStorageService, simpleFactoryx_1_6) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_1_6');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_1_6', simpleFactoryx_1_6.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_1_6');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_1_6', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_1_6", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "Amenaza de Bomba",
        version: "1.0",
        fecharevision: "27-03-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: '2.1-Amenaza de Bomba',
            datos: [
                { done: false, id: 1, text: 'Llegar inmediato a la persona que recibió la llamada.' },
                { done: false, id: 2, text: 'Investigar todos los datos del formulario – análisis – decisión de activación de búsqueda' },
                { done: false, id: 3, text: "<strong><span class='glyphicon glyphicon-earphone'></span> Notificar a Seguridad</strong>" },
                { done: false, id: 3, text: "Establecer Puesto de Mando y canales de comunicación." },
                { done: false, id: 3, text: "Permanecer en el Puesto de Mando para dirigir y recibir notificaciones" },
                { done: false, id: 3, text: "<strong><span class='glyphicon glyphicon-earphone'></span> Notificar a Gerente general.</strong>" },
                { done: false, id: 3, text: "Activación de la brigada de búsqueda Comenzar búsqueda. Ver “Áreas Comunes para Buscar” y “Técnicas de Búsqueda”." },
                { done: false, id: 3, text: "<strong>En caso que no se encuentro artefacto – volver a la normalidad</strong>" }
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
    },
    {
        titulo: 'SI SE ENCUENTRA UNA BOMBA O UN OBJETO SOSPECHOSO',
        datos: [
            { done: false, id: 1, text: "Contactar inmediatamente con el Puesto de Mando." },
            { done: false, id: 3, text: "Evacuar inmediatamente el área incluyendo los pisos superior e inferior." },
            { done: false, id: 3, text: "Acordonar el área para evitar el paso de cualquier persona no autorizada." },
            { done: false, id: 3, text: "Asistir al personal de policía o bomberos en lo que sea necesario." },
            { done: false, id: 3, text: "El Jefe de Seguridad debe reunirse con los equipos en el Puesto de Mando." },
            { done: false, id: 3, text: "Iniciar la impresión de la lista de los Huéspedes Registrados." },
            { done: false, id: 3, text: "No admitir nuevos huéspedes." },
            { done: false, id: 3, text: "Seguir las instrucciones dadas por las autoridades." }

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