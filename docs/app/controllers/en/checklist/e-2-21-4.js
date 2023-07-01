//cambiar 
//TodoCtrl_2_21_4
//localStorageDemo_2_21_4
//simpleFactoryx_2_21_4

demoApp.controller('TodoCtrl_2_21_4', function ($scope, $http, localStorageService, simpleFactoryx_2_21_4) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_21_4');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_21_4', simpleFactoryx_2_21_4.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_21_4');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_21_4', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_21_4", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.21.4 SANITARY/SEWAGE",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'GENERAL MANAGER ',
            
            datos: [

            { done: false, id: 1, text: 'Immediately inform engineering if there is a plumbing problem and instruct them to turn off the water to the affected area if needed.' },
            { done: false, id: 1, text: 'If the situation is a sanitary spill, instruct housekeeping to clean the area as quickly as possible. Also, if an odor is a problem, instruct housekeeping to use materials to disguise the odor.' },
            { done: false, id: 1, text: 'Relocate guests from affected rooms without charge to the guest.' },
            { done: false, id: 1, text: 'Use the Public address system or available communication process to keep guests informed of the situation if it is community or Hotel-wide.' },
            { done: false, id: 1, text: 'Instruct security to keep guests away from the area.' },
            { done: false, id: 1, text: 'If problem is too large for housekeeping to handle, consult an outside cleaning agency to expedite the cleaning process.' },
            { done: false, id: 1, text: 'Also use an outside cleaning agency if housekeeping does not have proper safety equipment to deal with the hazard. Refer to hazardous materials section for further instructions.' },
            { done: false, id: 1, text: 'In extreme cases where the problem affects the entire Hotel and will take more than one day to repair, make arrangements with another hotel or facility in the area to house guests at the Hotel’s expense.' },
            { done: false, id: 1, text: 'Document any property damage or costs incurred for insurance purposes.' }
            

            ]
        },
        {
            titulo: 'ENGINEERING',
            datos: [
            { done: false, id: 1, text: 'Locate the source and fix any plumbing problem to stop the spread of the leak or spill of sewage.' },
            { done: false, id: 1, text: 'If necessary, turn off the water to the affected area to prevent further damage to the Hotel or building.' },
            { done: false, id: 1, text: 'Assess the problem and record the cost of repairing the damage to the Hotel’s infrastructure. Report this number to the General Manager.' },
            { done: false, id: 1, text: 'Keep the General Manager informed of progress.' },
            { done: false, id: 1, text: 'Contact utility company if necessary for assistance in repairing the problem.' },
            { done: false, id: 1, text: 'If main sewage line is damaged, ensure there is no cross-contamination into domestic water tanks.' }
            ]
        },
        {
            titulo: 'SECURITY',	
            datos: [
            { done: false, id: 1, text: 'Help general manager  remove guests from the affected area and place them in a non-contaminated room.' },
            { done: false, id: 1, text: 'Cordon off the area to prevent any further contact.' },
            { done: false, id: 1, text: 'Patrol the Hotel to ensure all guests are safe and further damage is not occurring.' }
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