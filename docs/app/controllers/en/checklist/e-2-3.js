//cambiar 
//TodoCtrl_2_3
//localStorageDemo_2_3
//simpleFactoryx_2_3

demoApp.controller('TodoCtrl_2_3', function ($scope, $http, localStorageService, simpleFactoryx_2_3) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_3');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_3', simpleFactoryx_2_3.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_3');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_3', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_3", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.3 COMMUNICABLE DISEASE",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'GENERAL MANAGER',
            datos: [
            { done: false, id: 1, text: 'Contact the Legal Department and the Division Crisis Representative.' },
            { done: false, id: 1, text: 'Assure all guests that everything is being done for their health and safety.  Encourage guests to remain calm.  Regularly update the guests with a progress report as the issue is addressed.' },
            { done: false, id: 1, text: 'Contact County/State Health Officials or the Center for Disease Control (if in U.S.) as soon as necessary to prevent the problem from expanding. ' },
            { done: false, id: 1, text: 'Maintain guest/associate privacy but cooperate with health department officials.' },
            { done: false, id: 1, text: 'Answer guest inquiries and keep them informed about what is happening, instruct non-affected guests to keep away from affected areas or people.' },
            { done: false, id: 1, text: 'Inform Security of the problem and request their assistance.' },
            { done: false, id: 1, text: 'If the Hotel seems to be affected, take direction from local health officials for cleaning areas.' },
            { done: false, id: 1, text: 'Provide the affected guests with food and drinks.' },
            { done: false, id: 1, text: 'Track and record all costs incurred for insurance purposes and file a report.' },
            { done: false, id: 1, text: 'Don’t speak with news media.  Refer all media inquiries to the health department contact.' }

            ]
        },
        {
            titulo: 'SECURITY',
            datos: [
            { done: false, id: 1, text: 'Secure affected areas and keep unaffected guests from these parts of the Hotel.' },
            { done: false, id: 1, text: 'KEEP FIRE EXITS OPEN, but place a guard at each location.' },
            { done: false, id: 1, text: 'Answer guest questions and provide assistance to guests as needed.' },
            { done: false, id: 1, text: 'Assist medical or law enforcement teams as needed.' },
            { done: false, id: 1, text: 'Ensure that guests or associates do not leave or enter the Hotel or affected area without the approval of Health Officials.' }
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