//cambiar 
//TodoCtrl_2_2_1
//localStorageDemo_2_2_1
//simpleFactoryx_2_2_1

demoApp.controller('TodoCtrl_2_2_1', function ($scope, $http, localStorageService, simpleFactoryx_2_2_1) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_2_1');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_2_1', simpleFactoryx_2_2_1.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_2_1');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_2_1', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_2_1", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.2.1	PEACEFUL DEMONSTRATION",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
          titulo: 'OPERATOR',
          
          datos: [
          {
              
            datos: [
            { done: false, id: 1, text: 'Call Security with the details of the demonstration and approximate number of people involved.' },
            { done: false, id: 1, text: 'Notify the Emergency Response Team of the disturbance and its location.' },
            { done: false, id: 1, text: 'Be prepared to contact local emergency services (9-1-1 in the U.S.) for assistance if needed.' }

            ]
        },

        {
            titulo: 'SECURITY',
            datos: [
            { done: false, id: 1, text: 'Assist the Director of Security in his/her duties (outlined below).' },
            { done: false, id: 1, text: 'Take a loud speaker (bullhorn) to the scene to be used if needed.' },
            { done: false, id: 1, text: 'If necessary, contact local emergency services (9-1-1 in the U.S.).  Give details of the demonstration, such as the location, number of people involved, and general demeanor of the protestors.' },
            { done: false, id: 1, text: 'Monitor the situation during the demonstration, but in a way that does not threaten, intimidate or provoke the protestors.  DO NOT insert yourself into the demonstration or attempt to disrupt it.' }

            ]
        },
        {
            titulo: 'DIRECTOR OF SECURITY ',
            datos: [
            { done: false, id: 1, text: 'With the assistance of Security personnel, attempt to identify the protest group’s leader(s) and determine the reason for the disturbance.' },
            { done: false, id: 1, text: 'Identify yourself and politely ask the protest leader to relocate the protest off the property.' },
            { done: false, id: 1, text: 'If the request to relocate is refused, ask the cooperation of the group leader in not entering the hotel, blocking the entrances or disturbing the activities of hotel guests.' },
            { done: false, id: 1, text: 'If the demonstration is directed against a guest or group in the hotel, attempt to locate the guest or leader of the group and inform them of the situation.' },
            { done: false, id: 1, text: 'Be prepared to place hotel associates at the entrances and exits in order to help ensure the safety of guests and hotel staff.' },
            { done: false, id: 1, text: 'Contact local law enforcement.' }
            ]
        }]
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