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
        titulogeneral: "E:1.4 QUARANTINE",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'GENERAL MANAGER ',
            texto: 'If an illness, hazardous chemical exposure or any other situation requires that guests or associates be prevented from contact with others, contact Security and the General Manager as quickly as possible.  Immediately direct the affected persons to a comfortable room away from high traffic areas. ',
            datos: [
                
            
                     { done: false, id: 1, text: 'If guests or associates require medical attention, contact the Emergency Response Team immediately. ' },
                     { done: false, id: 1, text: 'Limit associate exposure to quarantined individuals if possible.' },
                     { done: false, id: 1, text: 'Inform security of the problem if they have not already been notified.' },
                     { done: false, id: 1, text: 'Provide food and drinks to the affected individuals if necessary.' },
                     { done: false, id: 1, text: 'Maintain cost records for insurance purposes and file a report.' }
                 ]
            },
             {
                 titulo: 'SECURITY',
                 datos: [
             { done: false, id: 1, text: 'Secure the quarantined area and ensure no one enters or exits.' },
             { done: false, id: 1, text: 'Patrol the hotel to ensure guest safety and look for other affected guests or associates.' },
             { done: false, id: 1, text: 'Provide assistance to guests as needed.' },
             { done: false, id: 1, text: 'Assist medical or law enforcement teams as needed.' },
             { done: false, id: 1, text: 'Post “Do Not Enter” signs at a safe distance from the quarantined area to deter others and prevent further exposure.' }
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