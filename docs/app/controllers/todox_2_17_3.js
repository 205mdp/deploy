//cambiar 
//TodoCtrl_2_17_3
//localStorageDemo_2_17_3
//simpleFactoryx_2_17_3

demoApp.controller('TodoCtrl_2_17_3', function ($scope, $http, localStorageService, simpleFactoryx_2_17_3) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_17_3');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_17_3', simpleFactoryx_2_17_3.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_17_3');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_17_3', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_17_3", function ($http) {

    //////////////////////
    var todotemp =  {
        titulogeneral: "EMERGENCIAS CLIMATICAS",
    version: "1.0",
    fecharevision: "27-03-2014",
    revisadopor: "Ron Ziv",
    elementos: [{
        titulo: '2.17.3 Inundaciones',
        texto: 'Designar a los asociados apropiados para realizar lo siguiente:',
        datos: [
            { done: false, id: 1, text: 'Monitorear las advertencias de tormentas emitidas por el Servicio Meteorológico Nacional y seguir los consejos de la autoridad local.' },
            { done: false, id: 1, text: 'Identificar que provisiones de emergencia reunir en una ubicación central y segura.' },
            { done: false, id: 1, text: 'Identificar aberturas para ser rellenadas con bolsas de arena si en necesario.' },
            { done: false, id: 1, text: 'Identificar que maquinaria y equipo mudar a pisos más altos.' },
            { done: false, id: 1, text: 'Cerrar las válvulas de líquidos inflamables y combustibles líquidos y gases.' },
            { done: false, id: 1, text: 'Actualizar y mudar los registros hacia áreas no vulnerables a las inundaciones.' },
            { done: false, id: 1, text: 'Localizar las válvulas y e interruptores de cierre de gas y apagado de electricidad.' },
            { done: false, id: 1, text: 'Monitorear los niveles de combustible del generador de emergencia.' }
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