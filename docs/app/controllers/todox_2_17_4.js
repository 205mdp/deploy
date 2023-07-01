//cambiar 
//TodoCtrl_2_17_4
//localStorageDemo_2_17_4
//simpleFactoryx_2_17_4

demoApp.controller('TodoCtrl_2_17_4', function ($scope, $http, localStorageService, simpleFactoryx_2_17_4) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_17_4');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_17_4', simpleFactoryx_2_17_4.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_17_4');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_17_4', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_17_4", function ($http) {

    //////////////////////
    var todotemp =  {
        titulogeneral: "EMERGENCIAS CLIMATICAS",
    version: "1.0",
    fecharevision: "27-03-2014",
    revisadopor: "Ron Ziv",
    elementos: [{
        titulo: '2.17.4 Tormentas de Viento',
        texto: 'Designar a los asociados apropiados para realizar lo siguiente:',
        datos: [
            { done: false, id: 1, text: 'Identificar el procedimiento para comunicar el estado de las tormentas a los huéspedes y asociados.' },
            { done: false, id: 1, text: 'Instalar cercos para la nieve.' },
            { done: false, id: 1, text: 'Realizar reparaciones de emergencia según se designen.' },
            { done: false, id: 1, text: 'Inspeccionar en el techo la acumulación y estancamiento de nieve.' },
            { done: false, id: 1, text: 'Identificar que provisiones de emergencia reunir en una ubicación central y segura.' },
            { done: false, id: 1, text: 'Identificar donde se almacenan las linternas, radio a batería y baterías de repuesto, etc.' },
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