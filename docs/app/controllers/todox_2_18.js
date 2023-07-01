//cambiar 
//TodoCtrl_2_18
//localStorageDemo_2_18
//simpleFactoryx_2_18

demoApp.controller('TodoCtrl_2_18', function ($scope, $http, localStorageService, simpleFactoryx_2_18) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_18');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_18', simpleFactoryx_2_18.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_18');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_18', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_18", function ($http) {

    //////////////////////
    var todotemp =  {
        titulogeneral: "2.18 Terremotos",
    version: "1.0",
    fecharevision: "27-03-2014",
    revisadopor: "Ron Ziv",
    elementos: [{
        titulo: '',
        texto: 'Designar a los asociados apropiados para realizar lo siguiente:',
        datos: [
            { done: false, id: 1, text: 'Seguir los procedimientos adecuados, incluyendo en donde reunirse luego de la evacuación.' },
            { done: false, id: 1, text: 'Apagar fuente de energía y gas.' },
            { done: false, id: 1, text: 'Contactar a las autoridades locales para pedir asistencia.' },
            { done: false, id: 1, text: 'Asistir en conducir la búsqueda y rescate de las personas atrapadas.' },
            { done: false, id: 1, text: 'Acordonar las áreas peligrosas.' },
            { done: false, id: 1, text: 'Proveer primeros auxilios.' },
            { done: false, id: 1, text: 'Evaluar el daño luego del movimiento.' },
            { done: false, id: 1, text: 'Contactar a los constructores para una reparación temporaria.' },
            { done: false, id: 1, text: 'Identificar quien traerá el equipo de emergencia y las provisiones a las áreas seguras designadas (incluyendo guantes de cuero).' },
            { done: false, id: 1, text: 'Identificar donde se guardan las linternas, radios con baterías/pilas y baterías/pilas extras, etc.' }
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