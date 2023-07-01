//cambiar 
//TodoCtrl_2_13_2
//localStorageDemo_2_13_2
//simpleFactoryx_2_13_2

demoApp.controller('TodoCtrl_2_13_2', function ($scope, $http, localStorageService, simpleFactoryx_2_13_2) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_13_2');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_13_2', simpleFactoryx_2_13_2.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_13_2');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_13_2', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_13_2", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.13.2 ASSOCIATE ACCIDENT OR INJURY",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'ASSOCIATE',
            texto: 'Any associate injured at the Hotel should contact Hotel Security immediately. ',
         
                datos: [
                { done: false, id: 1, text: 'Report all injuries.  Complete an Associate Accident Report.  Accident report must be neatly printed or typed and distributed to the Department Head or Supervisor and Security immediately.' },
                { done: false, id: 1, text: 'If the injured associate leaves the Hotel in order to receive professional medical care, he or she must report to Security or Human Resources before returning to work. This is to ensure that the associate has a medical professional’s permission to return to work.' },
                { done: false, id: 1, text: 'If additional medical care is needed after initial treatment, notify Human Resources and the Security Director or Assistant Director. ' }

                ]
            },
            {
                titulo: 'DEPARTMENT HEAD OR SUPERVISOR',
                datos: [
                { done: false, id: 1, text: 'If Security has not already been contacted, contact them immediately for all injuries. Relay the location, identify the associate and the extent of injury. If the injury is minor, the associate can be escorted to Security Control.' },
                { done: false, id: 1, text: 'Determine the extent of the injury.' },
                { done: false, id: 1, text: 'If necessary, request the assistance of personnel trained in first aid or Emergency Medical Response.' },
                { done: false, id: 1, text: 'Complete an Associate Accident Report. Accident Reports must be neatly printed or typed and distributed to:' ,
                datos: [
                    { done: false, id: 1, text: 'Safety and Security Department (Original document)' },
                    { done: false, id: 1, text: 'Department Head' },
                    { done: false, id: 1, text: 'General Manager' },
                    { done: false, id: 1, text: 'Human Resources' }
                ]}
                ]
            },
            
            {
                titulo: 'SECURITY',
                datos: [
                { done: false, id: 1, text: 'Assess the severity of the injury.' },
                { done: false, id: 1, text: 'If required, contact local emergency services (9-1-1 in the U.S.).' },
                { done: false, id: 1, text: 'Dispatch a Security officer to the front entrance to guide arriving paramedics.' },
                { done: false, id: 1, text: 'Contact Rick Management.' },
                { done: false, id: 1, text: 'If the injury involves five or more people or a fatality results, contact the Division Representative to the Corporate Crisis Response Team and notify OSHA within 48 hours. ' }
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