//cambiar 
//TodoCtrl_2_6
//localStorageDemo_2_6
//simpleFactoryx_2_6

demoApp.controller('TodoCtrl_2_6', function ($scope, $http, localStorageService, simpleFactoryx_2_6) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_6');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_6', simpleFactoryx_2_6.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_6');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_6', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_6", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "2.6 MUERTE EN EL ESTABLECIMIENTO",
        version: "1.0",
        fecharevision: "27-03-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: '2.6.1 Muerte de un Miembro del Personal Relacionado con el Trabajo',
            texto: 'Seguridad. Al recibir una llamada acerca de la muerte en el establecimiento de un miembro del personal, determinar inmediatamente:',
            datos: [
				{ done: false, id: 1, text: 'La ubicación de la persona o del cadáver' },
				{ done: false, id: 1, text: 'Si se ha controlado si la persona tiene pulso o respira' },
				{ done: false, id: 1, text: 'Determinar si se ha llamado o no a el servicio de emergencia' },
				{ done: false, id: 1, text: 'Si la muerte ha sido confirmada, notificar a la Brigada del Hotel.' },
				{ done: false, id: 1, text: 'No anunciar la situación por radio.' },
				{ done: false, id: 1, text: 'Presentarse en la escena con rapidez y mantener a los curiosos alejados.' },
				{ done: false, id: 1, text: 'Miembros del personal pueden colaborar si el área es grande o hay mucha gente.' },
				{ done: false, id: 1, text: 'Acordonar el área y protegerlo.' },
				{ done: false, id: 1, text: 'Tener mucho cuidado de NO MOVER NI CAMBIAR NADA DE LUGAR EN LA ESCENA.' },
				{ done: false, id: 1, text: 'Enviar un miembro de la Brigada del Hotel  a recibir al personal de policía o bomberos.' },
				{ done: false, id: 1, text: 'Obtener la siguiente información:' },
				{ done: false, id: 1, text: 'Quién encontró el cadáver.' },
				{ done: false, id: 1, text: 'Cuándo fue encontrado.' },
				{ done: false, id: 1, text: 'Nombre y domicilio del fallecido.' },
				{ done: false, id: 1, text: 'Recursos Humanos preparar copia archivo de trabajo de persona fallecida para la policía.' },
				{ done: false, id: 1, text: 'Preparar el informe pertinente del incidente con fotos y diagramas.' },
				{ done: false, id: 1, text: 'Una vez retirado el cadáver, cerrar y mantener acordonado el área hasta que la policía indique que se puede limpiar.' },
				{ done: false, id: 1, text: 'Asegurar estudios Patógenos en Sangre, en la limpieza de fluidos corporales.' },
				{ done: false, id: 1, text: 'Asistir a las autoridades locales en lo que sea necesario.' },
				{ done: false, id: 1, text: 'Notificar a los Gerentes y Jefes de Departamentos.' },
				{ done: false, id: 1, text: 'Confirmar con las autoridades de que ellos notificarán a los miembros de la familia.' }
            ]
        },
    {
        titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
        datos: [
			{ done: false, id: 1, text: 'Estar preparado para las preguntas de los medios de comunicación.' },
			{ done: false, id: 1, text: 'Ponerse en contacto con Representante Legal lo antes posible.' },
			{ done: false, id: 1, text: 'Evaluar el efecto producido en el resto del personal.' },
			{ done: false, id: 1, text: 'Si hay alguno con problemas emocionales, enviarlo a su domicilio.' },
			{ done: false, id: 1, text: 'Tener extremo cuidado al hablar con el personal, hacerlo calmo y respetuosamente.' }
        ]
    },
    {
        titulo: '2.6.2 Ahogo',
        texto: 'Seguridad',
        datos: [
				{ done: false, id: 1, text: 'Al recibir una llamada sobre un ahogo, determinar inmediatamente:' },
				{ done: false, id: 1, text: 'El lugar del incidente.' },
				{ done: false, id: 1, text: 'Si la persona tiene pulso o respira.' },
				{ done: false, id: 1, text: 'Si la persona está consiente.' },
				{ done: false, id: 1, text: 'Si se ha llamado al servicio de emergencias. Si no se ha hecho hacerlo inmediatamente.' },
				{ done: false, id: 1, text: 'Si un ahogo está confirmado, notificar a la Brigada del Hotel.' },
				{ done: false, id: 1, text: 'No anunciar por radio la naturaleza de la situación.' },
				{ done: false, id: 1, text: 'Presentarse en la escena con rapidez y mantener a los curiosos alejados.' },
				{ done: false, id: 1, text: 'Ver las instrucciones para el Jefe de Seguridad y asistir en lo que sea necesario.' },
				{ done: false, id: 1, text: 'Preparar el informe pertinente del incidente con fotos y diagramas.' }
        ]
    },
    {
        titulo: 'Jefe de Seguridad  o quien esté a cargo de Seguridad.',
        datos: [
				{ done: false, id: 1, text: 'Presentarse en la escena. Acordonar el área y protegerla.' },
				{ done: false, id: 1, text: 'NO TOCAR NI PERMITIR QUE SE CAMBIEN COSAS DE LUGAR EN LA ESCENA.' },
				{ done: false, id: 1, text: 'Enviar un miembro de la Brigada del Hotel  a recibir al personal de policía o bomberos.' },
				{ done: false, id: 1, text: 'Conseguir la mayor cantidad de información posible para entregar a las autoridades.' },
				{ done: false, id: 1, text: 'Quién encontró el cuerpo.' },
				{ done: false, id: 1, text: 'Hora del hallazgo.' },
				{ done: false, id: 1, text: 'Nombre y domicilio del fallecido y de las personas que lo conocían.' },
				{ done: false, id: 1, text: 'Huésped registrado, imprimir folio y copia de tarjeta de registro, para entregar a las autoridades. Si el fallecido se ahogó en la pileta con guardavidas, determinar a dónde se encontraba y que estaba haciendo en el momento del ahogo e inmediatamente después.' },
				{ done: false, id: 1, text: 'Si el fallecido se ahogó en una bañera, conseguir información del room lock y entregarlo a las autoridades.' },
				{ done: false, id: 1, text: 'Una vez retirado el cadáver, cerrar con doble cerradura y/o mantener acordonado el área hasta que la policía indique que se puede limpiar.' },
				{ done: false, id: 1, text: 'No reabrir la pileta hasta que la policía lo autorice.' },
				{ done: false, id: 1, text: 'Asegurar estudios Patógenos en Sangre, en la limpieza de fluidos corporales.' },
				{ done: false, id: 1, text: 'Asistir a las autoridades locales en lo que sea necesario.' },
				{ done: false, id: 1, text: 'Notificar a los Gerentes y Jefes de Departamentos.' },
				{ done: false, id: 1, text: 'Confirmar con las autoridades de que ellos notificarán a los miembros de la familia.' }
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
        titulo: '2.6.3 Muerte Natural',
        texto: 'Seguridad',
        datos: [
			{ done: false, id: 1, text: 'Al recibir una llamada por una muerte por causas aparentemente naturales, determinar:' },
			{ done: false, id: 1, text: 'El lugar del deceso.' },
			{ done: false, id: 1, text: 'Si se ha comprobado si la persona tiene pulso o respira.' },
			{ done: false, id: 1, text: 'Si se ha llamado al servicio de emergencias. Si no se ha hecho hacerlo inmediatamente.' },
			{ done: false, id: 1, text: 'Si la muerte ha sido confirmada, notificar a la Brigada del Hotel.' },
			{ done: false, id: 1, text: 'No anunciar por radio la naturaleza de la situación.' },
			{ done: false, id: 1, text: 'Presentarse en la escena con rapidez y mantener a los curiosos alejados.' },
			{ done: false, id: 1, text: 'Ver las instrucciones para el Jefe de Seguridad y asistir en lo que sea necesario.' },
			{ done: false, id: 1, text: 'Preparar el informe pertinente del incidente con fotos y diagramas.' }
        ]
    },
    {
        titulo: 'Jefe de Seguridad  o quien esté a cargo de Seguridad.',

        datos: [
				{ done: false, id: 1, text: 'Presentarse en la escena. Acordonar el área y protegerla.' },
				{ done: false, id: 1, text: 'NO TOCAR NI PERMITIR QUE SE CAMBIEN COSAS DE LUGAR EN LA ESCENA.' },
				{ done: false, id: 1, text: 'Enviar un miembro de la Brigada del Hotel  a recibir al personal de policía o bomberos.' },
				{ done: false, id: 1, text: 'Conseguir la mayor cantidad de información posible para entregar a las autoridades.' },
				{ done: false, id: 1, text: 'Quién encontró el cuerpo.' },
				{ done: false, id: 1, text: 'Hora del hallazgo.' },
				{ done: false, id: 1, text: 'Nombre y domicilio del fallecido y de las personas que lo conocían.' },
				{ done: false, id: 1, text: 'Huésped registrado, imprimir folio y copia de tarjeta de registro, para entregar a las autoridades.' },
				{ done: false, id: 1, text: 'Una vez retirado el cadáver, cerrar con doble cerradura y/o mantener acordonado el área hasta que la policía indique que se puede limpiar.' },
				{ done: false, id: 1, text: 'Asegurar estudios Patógenos en Sangre, en la limpieza de fluidos corporales.' },
				{ done: false, id: 1, text: 'Asistir a las autoridades locales en lo que sea necesario.' },
				{ done: false, id: 1, text: 'Notificar a los Gerentes y Jefes de Departamentos.' },
				{ done: false, id: 1, text: 'Confirmar con las autoridades de que ellos notificarán a los miembros de la familia.' }
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
        titulo: '2.6.4 Muerte por Suicidio o Tentativa/Amenaza de Suicidio',
        texto: '2.6.4.1 Muerte o Suicidio',
        datos: [
			{ done: false, id: 1, text: 'Contactar con el servicio de emergencias (911) dando todos los detalles conocidos.' },
			{ done: false, id: 1, text: 'Ver las instrucciones para el Jefe de Seguridad y asistir en lo que sea necesario.' },
			{ done: false, id: 1, text: 'Asegurarse de que no entren al área acordonada personas no autorizadas.' },
			{ done: false, id: 1, text: 'Mantener a los curiosos alejados de la escena, haciéndolo de una manera respetuosa.' },
			{ done: false, id: 1, text: 'Una vez retirado el cadáver, cerrar con doble cerradura y/o mantener acordonado el área hasta que la policía indique que se puede limpiar.' },
			{ done: false, id: 1, text: 'Preparar el informe pertinente del incidente con fotos y diagramas.' }


        ]
    },
    {
        titulo: 'Jefe de Seguridad  o quien esté a cargo de Seguridad.',
        datos: [
			{ done: false, id: 1, text: 'Presentarse en la escena. Constatar que la persona está muerta.' },
			{ done: false, id: 1, text: 'Acordonar el área y protegerla.' },
			{ done: false, id: 1, text: 'NO TOCAR NI PERMITIR QUE SE CAMBIEN COSAS DE LUGAR EN LA ESCENA.' },
			{ done: false, id: 1, text: 'Llevar un registro de las personas que entren a la escena, incluyendo los horarios.' },
			{ done: false, id: 1, text: 'Enviar un miembro de la Brigada del Hotel  a recibir al personal de policía o bomberos.' },
			{ done: false, id: 1, text: 'Conseguir la mayor cantidad de información posible para entregar a las autoridades.' },
			{ done: false, id: 1, text: '¿Quién encontró el cuerpo o presenció la muerte?' },
			{ done: false, id: 1, text: 'Hora del hallazgo o muerte.' },
			{ done: false, id: 1, text: 'Nombre y domicilio del fallecido y de las personas que lo conocían.' },
			{ done: false, id: 1, text: 'Huésped registrado, imprimir folio y copia de tarjeta de registro, para entregar a las autoridades.' },
			{ done: false, id: 1, text: 'Si el fallecido se ahogó en una bañera, conseguir información del room lock y entregarlo a las autoridades.' },
			{ done: false, id: 1, text: 'Asegurar estudios Patógenos en Sangre, en la limpieza de fluidos corporales.' },
			{ done: false, id: 1, text: 'Asistir a las autoridades locales en lo que sea necesario.' },
			{ done: false, id: 1, text: 'Notificar a los Gerentes y Jefes de Departamentos.' },
			{ done: false, id: 1, text: 'Confirmar con las autoridades de que ellos notificarán a los miembros de la familia.' }
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
        titulo: '2.6.4.2 Tentativa o Amenaza de Suicidio',
        texto: 'Seguridad',
        datos: [
			{ done: false, id: 1, text: 'Contactar con el servicio de emergencias (911) dando todos los detalles conocidos.' },
			{ done: false, id: 1, text: 'Ver las instrucciones para el Jefe de Seguridad y asistir en lo que sea necesario.' },
			{ done: false, id: 1, text: 'Mantener a los curiosos alejados de la escena, haciéndolo de una manera respetuosa.' },
			{ done: false, id: 1, text: 'Preparar el informe pertinente incluyendo fotos y diagramas de ser posible.' }
        ]
    },
    {
        titulo: 'Jefe de Seguridad  o quien esté a cargo de Seguridad.',
        datos: [
			{ done: false, id: 1, text: 'Presentarse inmediatamente en la escena.' },
			{ done: false, id: 1, text: 'Hablarle a la persona que amenaza suicidarse de una manera calma y tranquilizadora.' },
			{ done: false, id: 1, text: 'No correr riesgos personales.' },
			{ done: false, id: 1, text: 'Tratar de aislar el área circundante.' },
			{ done: false, id: 1, text: 'Enviar un miembro de la Brigada del Hotel  a recibir al personal de policía o bomberos.' },
			{ done: false, id: 1, text: 'Huésped registrado, imprimir folio y copia de tarjeta de registro, para entregar a las autoridades.' },
			{ done: false, id: 1, text: 'Asegurar estudios Patógenos en Sangre, en la limpieza de fluidos corporales.' },
			{ done: false, id: 1, text: 'Asistir a las autoridades locales en lo que sea necesario.' },
			{ done: false, id: 1, text: 'Notificar a los Gerentes y Jefes de Departamentos.' },
			{ done: false, id: 1, text: 'Confirmar con las autoridades de que ellos notificarán a los miembros de la familia.' }
        ]
    },
    {
        titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
        datos: [
			{ done: false, id: 1, text: 'Derivar los medios de comunicación a las Fuerzas de Seguridad.' },
			{ done: false, id: 1, text: 'Ponerse en contacto con el Representante de Crisis de la División.' },
        ]
    },
    {
        titulo: '2.6.5 Electrocución',
        texto: 'Jefe de Seguridad  o quien esté a cargo de Seguridad.',
        datos: [
				{ done: false, id: 1, text: 'Contactarse inmediatamente con el servicio de emergencias (911) dando todos los detalles conocidos.' },
				{ done: false, id: 1, text: 'Dar la ubicación de la víctima, el estado en que se encuentra, si se sabe, y la causa del shock eléctrico.' },
				{ done: false, id: 1, text: 'Contactarse con Mantenimiento para que corte el suministro de la corriente eléctrica. Acordonar el área de la escena y no permitir que nadie entre o toque ningún objeto.' }
        ]
    },
    {
        titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
        datos: [
			{ done: false, id: 1, text: 'Interesarse por la víctima y preguntar por su estado después de un período razonable.' },
			{ done: false, id: 1, text: 'Si la víctima no ha sobrevivido, confirmar con las autoridades para que ellos notifiquen a la familia.' },
			{ done: false, id: 1, text: 'Derivar los medios de comunicación a las Fuerzas de Seguridad.' },
			{ done: false, id: 1, text: 'Ponerse en contacto con el Representante de Crisis de la División.' }
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