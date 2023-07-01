//cambiar 
//TodoCtrl_2_22_4
//localStorageDemo_2_22_4
//simpleFactoryx_2_22_4

demoApp.controller('TodoCtrl_2_22_4', function ($scope, $http, localStorageService, simpleFactoryx_2_22_4) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_22_4');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_22_4', simpleFactoryx_2_22_4.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_22_4');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_22_4', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_22_4", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.22.4 WINTER STORMS/SEVERE FREEZES",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'GENERAL MANAGER',

            
            datos: [
            { done: false, id: 1, text: 'Receive weather news reports and stay informed of weather conditions.' },
            { done: false, id: 1, text: 'Assign an associate to call the airport and receive travel delay information to relay to guests.' },
            { done: false, id: 1, text: 'Using the public address system or available communication process let all guests know the status of the weather and update them regularly.  Encourage them to stay safely in the Hotel. ' },
            { done: false, id: 1, text: 'Have the transportation dispatcher instruct transportation associates to return to the Hotel immediately if they are able to do so.  Do not allow other Hotel vehicles to leave the premises.' },
            { done: false, id: 1, text: 'Set-up a “Hospitality Area” for associates and Hotel visitors who are stranded at the Hotel.  Instruct Housekeeping to provide blankets, sheets, towels and cots if necessary.' },
            { done: false, id: 1, text: 'Obtain a report of disabled guests.  Regularly send an associate to check on them to make sure they do not require assistance.' },
            { done: false, id: 1, text: 'Assess staffing needs and determine if staff should be held over, particularly if relief staff may be unable to reach the Hotel.' }

            ]
        },

        {
            titulo: 'DIRECTOR OF SECURITY ',
            datos: [
            { done: false, id: 1, text: 'Assign Security personnel to monitor Hotel entrances and exits to discourage guests and associates from leaving.' },
            { done: false, id: 1, text: 'Have Security Officers patrol the Hotel to ensure guest safety and comfort.' },
            { done: false, id: 1, text: 'Establish a first-aid room to handle any emergencies in the event that Emergency Services can not reach the Hotel.' },
            { done: false, id: 1, text: 'Answer guest questions.' },
            { done: false, id: 1, text: 'Assist the General Manager as needed.' }
            
            ]
        },
        {
            titulo: 'SECURITY',	
            datos: [
            { done: false, id: 1, text: 'Patrol the Hotel to ensure guest safety and comfort.' },
            { done: false, id: 1, text: 'Report any issues or problems to the Director of Security.' },
            { done: false, id: 1, text: 'Assist the Director of Security with establishing a first-aid room.' },
            { done: false, id: 1, text: 'Answer guest questions.' }

            ]
        },
        {
            titulo: 'ENGINEERING',	
            datos: [
            { done: false, id: 1, text: 'Establish key areas to drip the faucets in the Hotel to keep water moving through the pipes and prevent pipe breaks.' },
            { done: false, id: 1, text: 'Protect fire suppression sprinkler heads, using space heaters if necessary.' },
            { done: false, id: 1, text: 'Ensure an ample supply of snow & ice melt and apply as directed.' },
            { done: false, id: 1, text: 'In addition, sprinkle sand on pavement areas in front of Hotel entrances and exits.' },
            { done: false, id: 1, text: 'Have associates use snow shovels to clear all entrances and exits.  Ensure associates are suitably attired.' },
            { done: false, id: 1, text: 'All exits must be kept clear of obstruction.' },
            { done: false, id: 1, text: 'Ensure all heating equipment and other utilities are working properly.' },
            { done: false, id: 1, text: 'Schedule pre-arranged vendor for snow & ice removal.' },
            { done: false, id: 1, text: 'Check areas around downspout drains.  Check all known low areas where water may accumulate and freeze.' },
            { done: false, id: 1, text: 'Check all outdoor walkways.' },
            { done: false, id: 1, text: 'If you have an event hall entrance, but no event taking place, take automatic door off automatic.' }
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