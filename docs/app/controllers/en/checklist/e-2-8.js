//cambiar 
//TodoCtrl_2_8
//localStorageDemo_2_8
//simpleFactoryx_2_8

demoApp.controller('TodoCtrl_2_8', function ($scope, $http, localStorageService, simpleFactoryx_2_8) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_8');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_8', simpleFactoryx_2_8.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_8');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_8', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_8", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.8 ELEVATOR EMERGENCIES",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'General',
            texto:'Any associate hearing an alarm ringing from an elevator should immediately attempt to determine:',
            
            datos: [
            { done: false, id: 1, text: 'The elevator that the alarm is coming from.' },
            { done: false, id: 1, text: 'Whether the elevator doors are open or closed.' },
            { done: false, id: 1, text: 'Whether any persons are trapped in the elevator, and if any are in need of medical attention.' },
            { done: false, id: 1, text: 'The floor number the elevator is on.' }

            ]
        },
        {
            titulo: 'OPERATOR',
            datos: [
            { done: false, id: 1, text: 'Upon being notified of an elevator failure, call the elevator to determine if any guests or associates are trapped inside.' },
            { done: false, id: 1, text: 'If the elevator is empty, report the incident to Engineering.' },
            { done: false, id: 1, text: 'If the elevator has passengers inside, advise them to remain calm and let them know help is on the way.  Maintain phone contact with the passengers to reassure them.' },
            { done: false, id: 1, text: 'Determine if any passengers are in need of medical attention.  If so, immediately contact local emergency services (9-1-1 in the U.S.).' },
            { done: false, id: 1, text: 'Confirm which elevator is inoperative and notify the Emergency Response Team.' },
            { done: false, id: 1, text: 'Call Security with the details of the elevator failure.' },
            { done: false, id: 1, text: 'Ask passengers if they would like anyone to be notified that they are delayed.' }
            ]
        },
        {
            titulo: 'SECURITY',
            datos: [
            { done: false, id: 1, text: 'Contact local emergency services (9-1-1 in the U.S.), if needed.' },
            { done: false, id: 1, text: 'Contact Engineering if they have not already been notified.' },
            { done: false, id: 1, text: 'Assist the Director of Security as needed.' },
            { done: false, id: 1, text: 'Ensure that hotel staff is in constant communication with passengers by telephone.' },
            { done: false, id: 1, text: 'Obtain the names of the passengers and prepare the appropriate incident report.' }


            ]
        },
        {
            titulo: 'DIRECTOR OF SECURITY ',
            datos: [
            { done: false, id: 1, text: 'After learning of passengers trapped in an inoperative elevator, immediately respond to the scene.' },
            { done: false, id: 1, text: 'If any passengers are in need of medical attention, instruct the Operator to contact local emergency services (9-1-1 in the U.S.) if that has not already been done.' },
            { done: false, id: 1, text: 'Request that the elevator maintenance company immediately dispatch a mechanic.  ONLY AN AUTHORIZED MECHANIC SHOULD ATTEMPT TO RELEASE PASSENGERS FROM AN INOPERATIVE ELEVATOR.' },
            { done: false, id: 1, text: 'If elevator maintenance company is not able to respond in a reasonable amount of time, contact local emergency response authorities.' },
            { done: false, id: 1, text: 'Stay near the elevator, if possible, to give added reassurance to passengers and let them know help is coming.' },
            { done: false, id: 1, text: 'Assist the elevator mechanic, or other emergency personnel as needed.' },
            { done: false, id: 1, text: 'Stay on the scene or assign a Security Officer to remain with the elevator until passengers have been released.' },
            { done: false, id: 1, text: 'Be available upon the release of the passengers to assist in handling concerns or complaints.' }

            ]
        },
        {
            titulo: 'ENGINEERING',
            datos: [
            { done: false, id: 1, text: 'If passengers are trapped in the inoperative elevator, refer to the duties of the Director of Security and assist as needed.' },
            { done: false, id: 1, text: 'If it is determined with certainty that the inoperative elevator does not have passengers onboard, turn off the lights, lock the elevator, and place a barricade in front.' },
            { done: false, id: 1, text: 'Attempt to determine the nature of the problem.' },
            { done: false, id: 1, text: 'If needed, contact the elevator maintenance company to immediately dispatch a mechanic.  Meet the mechanic upon arrival to inform him of all known details.' }
           
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