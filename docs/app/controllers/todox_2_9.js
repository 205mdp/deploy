﻿//cambiar 
//TodoCtrl_2_9
//localStorageDemo_2_9
//simpleFactoryx_2_9

demoApp.controller('TodoCtrl_2_9', function ($scope, $http, localStorageService, simpleFactoryx_2_9) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_9');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_9', simpleFactoryx_2_9.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_9');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_9', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_9", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "2.9 ENFERMEDAD o MUERTE CAUSADA POR ALIMENTOS",
        version: "1.0",
        fecharevision: "27-03-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: '',
            texto: 'Se puede considerar un brote de enfermedad causada por alimentos cuando dos o más personas no relacionadas reportan enfermedad ocasionada por alimentos. Un brote serio de enfermedad o muerte causado por alimentos contaminados puede resultar interesante para los medios de comunicación. NO se debe tratar de responder las preguntas de los medios. Será el Gerente General o la persona designada para ello quien los atienda.',
            datos: [

				{ done: false, id: 1, text: 'Contactar a las personas afectadas y preguntar según “Cuestionario p/Enfermo. Causadas por alimentos”.' },
				{ done: false, id: 1, text: 'Mostrar solidaridad a los enfermos; no minimizar su condición.' },
				{ done: false, id: 1, text: 'Se debe asegurar a los huéspedes que la situación está siendo investigada.' },
				{ done: false, id: 1, text: 'Notificar al representante del Equipo de Crisis de la División dando los detalles específicos del incidente.' },
				{ done: false, id: 1, text: 'Cooperar con autoridades de Salud Pública, si intervienen.' },
				{ done: false, id: 1, text: 'Finalizado el incidente, interesarse por los huéspedes afectados y determinar su bienestar.' }
            ]
        },
    {
        titulo: 'Seguridad',
        texto: 'Ponerse a disposición del Gerente General o Gerente de Guardia y Gerente de Alimentos y Bebidas, asistirlos en lo que sea necesario.',


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