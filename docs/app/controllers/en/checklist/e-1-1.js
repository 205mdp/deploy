//cambiar 
//TodoCtrl_1_1
//localStorageDemo_1_1
//simpleFactoryx_1_1

demoApp.controller('TodoCtrl_1_1', function ($scope, $http, localStorageService, simpleFactoryx_1_1) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_1_1');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_1_1', simpleFactoryx_1_1.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_1_1');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_1_1', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_1_1", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "E:1.1 ASSISTING DISABLED GUESTS",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'E:1.1 ASSISTING DISABLED GUESTS',
            texto:'Many emergencies will require special assistance for guests with disabilities.  The most obvious are emergencies which require evacuation, search and rescue or shelter-in-place.',
            datos: [
            	{ done: false, id: 1, text: 'Method of identifying guests with special needs' },
            	{ done: false, id: 1, text: 'Location of list of disabled guests – front desk is recommended' },
            	{ done: false, id: 1, text: 'Frequency of list updates' },
            	{ done: false, id: 1, text: 'Responsibility for maintaining list' },
            	{ done: false, id: 1, text: 'Procedures for assuring disabled guests are attended during any emergency' }
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