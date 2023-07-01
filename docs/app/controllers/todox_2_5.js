//cambiar 
//TodoCtrl_2_5
//localStorageDemo_2_5
//simpleFactoryx_2_5

demoApp.controller('TodoCtrl_2_5', function ($scope, $http, localStorageService, simpleFactoryx_2_5) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_5');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_5', simpleFactoryx_2_5.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_5');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_5', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_5", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "2.5 ACTIVIDADES DELICTIVAS",
        version: "1.0",
        fecharevision: "27-03-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: '2.5.1 Ataque Físico o Sexual',
            texto: 'Seguridad. Al recibir una llamada acerca de un ataque o asalto determinar inmediatamente:',
            datos: [
				{ done: false, id: 1, text: 'La ubicación del incidente.' },
				{ done: false, id: 1, text: 'Si el ataque está sucediendo en ese momento.' },
				{ done: false, id: 1, text: 'Ponerse en contacto inmediatamente con los servicios de emergencia (911)' },
				{ done: false, id: 1, text: 'Notificar a la Brigada del Hotel y dirigirse a la escena.' },
				{ done: false, id: 1, text: 'No hablar por radio sobre la naturaleza de la situación.' },
				{ done: false, id: 1, text: 'Conseguir un kit de primeros auxilios y llevarlos a la escena.' },
				{ done: false, id: 1, text: 'Mantener alejados a los curiosos, haciéndolo de una manera calmada.' },
				{ done: false, id: 1, text: 'Llevar a la víctima a un lugar seguro y atender sus necesidades físicas y emocionales.' },
				{ done: false, id: 1, text: 'Preguntarle si desea que avise a alguien.' },
				{ done: false, id: 1, text: 'Asegurarse que la policía haya sido notificada.' },
				{ done: false, id: 1, text: 'Ver las instrucciones para el Jefe de Seguridad y asistir según sea necesario.' },
				{ done: false, id: 1, text: 'Chequear que el incidente haya sido grabado en video.' },
				{ done: false, id: 1, text: 'Conservar el tape y guardarlo en lugar seguro.' },
				{ done: false, id: 1, text: 'Preparar un informe adecuado del incidente, con fotos y diagramas.' }
            ]
        },
    {
        titulo: 'Jefe de Seguridad  o quien esté a cargo de Seguridad.',
        datos: [
				{ done: false, id: 1, text: 'Presentarse en el lugar. Acordonar el área y protegerlo.' },
				{ done: false, id: 1, text: 'NO TOCAR NI PERMITIR QUE SE CAMBIE ALGO EN LA ESCENA.' },
				{ done: false, id: 1, text: 'Enviar un miembro de la Brigada del Hotel a recibir al personal de policía o bomberos.' },
				{ done: false, id: 1, text: 'Si la víctima está estable, se le debe preguntar si conoce la identidad de su atacante.' },
				{ done: false, id: 1, text: 'Comenzar inmediatamente búsqueda del atacante ya sea huésped o personal.' },
				{ done: false, id: 1, text: 'Cerrar las entradas del Hotel al igual que los puntos de salidas.' },
				{ done: false, id: 1, text: 'Sugerirle a la víctima hospitales y clínicas donde derivarla para su atención.' },
				{ done: false, id: 1, text: 'Determinar si hay testigos del incidente, que permanezcan en el Hotel para entrevista.' },
				{ done: false, id: 1, text: 'Obtener la mayor cantidad de información que sea posible para entregar a las autoridades.' },
				{ done: false, id: 1, text: 'Identidad de la víctima y del supuesto atacante, si se conoce.' },
				{ done: false, id: 1, text: 'Lugar y hora del ataque.' },
				{ done: false, id: 1, text: 'Lista de los testigos.' },
				{ done: false, id: 1, text: 'Video tape del ataque, si se lo tiene.' },
				{ done: false, id: 1, text: 'Huésped registrado, imprimir folio y copia de tarjeta de registro, para entregar a las autoridades.' },
				{ done: false, id: 1, text: 'Si el huésped es hospitalizado, cerrar la habitación.' },
				{ done: false, id: 1, text: 'Si la hospitalización es prolongada, poner las pertenencias del huésped en depósito.' },
				{ done: false, id: 1, text: 'Mantener cerrada con llave la habitación mientras la policía lo considere necesario.' },
				{ done: false, id: 1, text: 'No permitir que la habitación sea limpiada hasta que la policía lo indique.' },
				{ done: false, id: 1, text: 'Asegurar estudios Patógenos en Sangre, en la limpieza de fluidos corporales.' },
				{ done: false, id: 1, text: 'Asistir a las autoridades locales en todo lo que sea necesario.' },
				{ done: false, id: 1, text: 'Notificar a los Gerentes y Jefes de Departamentos.' },
				{ done: false, id: 1, text: 'Confirmar quien notificará a los familiares o colegas de la víctima.' }
        ]
    },
    {
        titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
        datos: [
				{ done: false, id: 1, text: 'Derivar los medios de comunicación a las Fuerzas de Seguridad.' },
				{ done: false, id: 1, text: 'Ponerse en contacto con el Representante de Crisis de la División.' },
				{ done: false, id: 1, text: 'Asegurarse de que se haga el apropiado seguimiento de la víctima del ataque.' }
        ]
    },
    {
        titulo: '2.5.2 Homicidio',
        texto: 'Seguridad. Cuando se notifique un supuesto homicidio en el establecimiento, inmediatamente determinar: ',
        datos: [
				{ done: false, id: 1, text: 'La ubicación del deceso.' },
				{ done: false, id: 1, text: 'Si se ha llamado al Servicio de Emergencia (911). Si no se ha hecho, hacerlo inmediata- mente.' },
				{ done: false, id: 1, text: 'Si hay testigos.' },
				{ done: false, id: 1, text: 'Si alguien en el área está actuando en forma sospechosa.' },
				{ done: false, id: 1, text: 'Notificar ala Brigada del Hotel. No comunicar por radio la naturaleza de la situación.' },
				{ done: false, id: 1, text: 'Presentarse en la escena. ASEGURARSE DE QUE NADA SEA CAMBIADO DE LUGAR.' },
				{ done: false, id: 1, text: 'Mantener a los curiosos alejados del lugar, haciéndolo de una manera calmada.' },
				{ done: false, id: 1, text: 'Usar los ascensores de servicio, en lo posible.' },
				{ done: false, id: 1, text: 'Homicidio ocurrido en área pública del Hotel, si existe video tape del crimen. Protegerlo.' },
				{ done: false, id: 1, text: 'Ver las instrucciones para el Jefe de Seguridad y asistir en lo que sea necesario.' },
				{ done: false, id: 1, text: 'Asistir a las autoridades en lo que necesiten.' },
				{ done: false, id: 1, text: 'Preparar el informe pertinente del incidente con fotos y diagramas.' }
        ]
    },
    {
        titulo: 'Jefe de Seguridad  o quien esté a cargo de Seguridad',
        datos: [
				{ done: false, id: 1, text: 'Presentarse en la escena del crimen.' },
				{ done: false, id: 1, text: 'Acordonar el área y protegerlo.' },
				{ done: false, id: 1, text: 'NO TOCAR NI PERMITIR QUE SE CAMBIE ALGO DE LUGAR EN LA ESCENA.' },
				{ done: false, id: 1, text: 'Huésped registrado, imprimir folio y copia de tarjeta de registro, para entregar a las autoridades.' },
				{ done: false, id: 1, text: 'Conseguir la información del room lock y entregarlo a las autoridades.' },
				{ done: false, id: 1, text: 'Mantener cerrada con llave la habitación mientras la policía lo considere necesario.' },
				{ done: false, id: 1, text: 'NO permitir que la habitación sea aseada hasta que lo indiquen las Fuerzas de Seguridad.' },
				{ done: false, id: 1, text: 'Asegurar estudios Patógenos en Sangre, en la limpieza de fluidos corporales.' },
				{ done: false, id: 1, text: 'Asistir a las autoridades locales en lo que sea necesario.' },
				{ done: false, id: 1, text: 'Notificar a los Gerentes y Jefes de Departamentos.' },
				{ done: false, id: 1, text: 'Confirmar con las autoridades que ellos notificarán al familiar más cercano.' }

        ]
    },
    {
        titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
        datos: [
			{ done: false, id: 1, text: 'Derivar los medios de comunicación a las Fuerzas de Seguridad.' },
			{ done: false, id: 1, text: 'Ponerse en contacto con el Representante de Crisis de la División.' }
        ]
    },
    {
        titulo: '2.5.3 Robo',
        texto: 'Seguridad',
        datos: [
			{ done: false, id: 1, text: 'Al ser notificado un robo en curso, contactarse con el Servicio de Emergencias (911).' },
			{ done: false, id: 1, text: 'Notificar a la Brigada del Hotel por teléfono o por radio.' },
			{ done: false, id: 1, text: 'Usar un código, para que los ladrones al escuchar, no se den cuenta.' },
			{ done: false, id: 1, text: 'Quitarse cualquier elemento identificatorio, caminar y observar que está pasando.' },
			{ done: false, id: 1, text: 'NO TRATAR DE INTERFERIR O PONERSE EN PELIGRO BAJO NINGÚN CONCEPTO.' },
			{ done: false, id: 1, text: 'Hacer una descripción mental de el/los malhechores.' },
			{ done: false, id: 1, text: 'Si el malhechor/es se va, tratar discretamente de seguirlo.' },
			{ done: false, id: 1, text: 'Conseguir el número de patente/marca/modelo/color del auto que esté usando.' },
			{ done: false, id: 1, text: 'NO TRATAR DE DETENER A LOS MALHECHORES.' },
			{ done: false, id: 1, text: 'Proteger y conservar la escena del robo.' },
			{ done: false, id: 1, text: 'No permitir el acceso al área.' },
			{ done: false, id: 1, text: 'No permitir que algo sea tocado o examinado hasta que la policía haya liberado el área.' },
			{ done: false, id: 1, text: 'Que los testigos permanezcan en el Hotel para dar mayor información a la policía.' },
			{ done: false, id: 1, text: 'ES IMPORTANTE QUE LOS TESTIGOS NO DISCUTAN O HABLEN ENTRE ELLOS SOBRE LO QUE HA SUCEDIDO.' },
			{ done: false, id: 1, text: 'Proporcionar papel y lapiceras para que escriban los detalles y descripciones del evento.' },
			{ done: false, id: 1, text: 'Estar preparados para asistir a la policía.' },
			{ done: false, id: 1, text: 'Avisar a la policía si se dispone de grabaciones en video tape del delito.' },
			{ done: false, id: 1, text: 'Preparar el informe pertinente del incidente.' }
        ]
    },
    {
        titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
        datos: [
			{ done: false, id: 1, text: 'Referirse a las instrucciones /lineamientos para Seguridad y asistir en lo necesario.' },
			{ done: false, id: 1, text: 'Chequear si el delito fue grabado, de ser si, copiar y guardar según políticas de conservación.' },
			{ done: false, id: 1, text: 'Organizar reunión informativa con personal afectado por el incidente.' },
			{ done: false, id: 1, text: 'Derivar los medios de comunicación a las Fuerzas de Seguridad.' },
			{ done: false, id: 1, text: 'Ponerse en contacto con el Representante de Crisis de la División.' }
        ]
    },
    {
        titulo: '2.5.4 Hurto',
        texto: 'Seguridad',
        datos: [
				{ done: false, id: 1, text: 'Cuando un hurto es notificado, se debe presentar inmediatamente en la escena.' },
				{ done: false, id: 1, text: 'SE DEBE ASEGURAR DE QUE NADA EN EL ÁREA DEL HURTO HA SIDO MODIFICADO.' },
				{ done: false, id: 1, text: 'Hablar con la víctima y obtener mayor información, incluyendo valor de los objetos sustraídos.' },
				{ done: false, id: 1, text: 'Determinar si hay algún testigo del hurto.' },
				{ done: false, id: 1, text: 'Notificar a la policía del delito, dando la mayor cantidad de detalles.' },
				{ done: false, id: 1, text: 'Mantener a los curiosos alejados, con tranquilidad y de manera profesional.' },
				{ done: false, id: 1, text: 'Determinar si existe un video tape del hurto.' },
				{ done: false, id: 1, text: 'Ver las instrucciones para el Jefe de Seguridad y ayudar en lo que sea necesario.' },
				{ done: false, id: 1, text: 'Preparar el informe pertinente del incidente con fotos y diagramas.' }

        ]
    },
    {
        titulo: 'Jefe de Seguridad  o quien esté a cargo de Seguridad.',
        datos: [
			{ done: false, id: 1, text: 'Presentarse en la escena. Acordonar el área si es necesario.' },
			{ done: false, id: 1, text: 'Entrevistar a la víctima. Averiguar últimas actividades para determinar la hora del hurto.' },
			{ done: false, id: 1, text: 'Preguntar a la víctima y al personal si habían notado personas o actividades sospechosas en el área.' },
			{ done: false, id: 1, text: 'Entrevistar a los testigos, si los hubiera.' },
			{ done: false, id: 1, text: 'Entregar toda la información a la policía y proporcionar toda la ayuda necesaria.' },
			{ done: false, id: 1, text: 'Huésped registrado, imprimir folio y copia de tarjeta de registro, para entregar a las autoridades.' },
			{ done: false, id: 1, text: 'Mantener cerrada con llave la habitación mientras la policía lo considere necesario.' },
			{ done: false, id: 1, text: 'Notificar a los Gerentes y Jefes de Departamentos.' }
        ]
    },
    {
        titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
        datos: [
			{ done: false, id: 1, text: 'Investigar con la víctima y demostrar sincera preocupación.' },
			{ done: false, id: 1, text: 'Ponerse en contacto con Representante de la división si es un hurto importante.' },
			{ done: false, id: 1, text: 'Dar aviso a Gerencia de Riesgos y al representante de la Compañía de Seguros.' }
        ]
    }
        ]
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