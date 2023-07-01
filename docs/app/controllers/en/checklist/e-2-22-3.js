//cambiar 
//TodoCtrl_2_22_3
//localStorageDemo_2_22_3
//simpleFactoryx_2_22_3

demoApp.controller('TodoCtrl_2_22_3', function ($scope, $http, localStorageService, simpleFactoryx_2_22_3) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_22_3');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_22_3', simpleFactoryx_2_22_3.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_22_3');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_22_3', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_22_3", function ($http) {
    var todotemp = {
        titulogeneral: "E:2.22.3 TORNADOES",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
         
         texto:'Weather Terms:',
         datos: [



         { done: false, id: 1, text: 'Tornado Watch- conditions are right for the formation of a tornado' },
         { done: false, id: 1, text: 'Tornado Alert- a tornado has been spotted' },
         { done: false, id: 1, text: 'Tornado Warning- a tornado is on a path moving toward the general area.' }
         ]
     },
     

     {
        titulo: 'SECURITY',
        datos: [
        { done: false, id: 1, text: 'Listen to the Emergency Radio for updates on the status such as “watch, alert or warning”. If the status is “warning,” notify the Director of Security immediately so that he or she can instruct guests.' },
        { done: false, id: 1, text: 'Keep phone lines clear so that you can contact management staff and local emergency services (9-1-1 in the U.S.) if necessary.' },
        { done: false, id: 1, text: 'Relay all information on injuries, property damage and elevator status to the Emergency response Team or Command Post.' },
        { done: false, id: 1, text: 'Make sure all doors are securely closed.' },
        { done: false, id: 1, text: 'Make sure that all emergency supplies are ready and be prepared to establish a first-aid room.' },
        { done: false, id: 1, text: 'Assist in evacuation of guests and associates to lower levels and safer areas.' },
        { done: false, id: 1, text: 'Assess damage and prepare the appropriate incident report once the danger has passed.' }
        ]
    },
    {
        titulo: 'DIRECTOR OF SECURITY ',
        datos: [
        { done: false, id: 1, text: 'Monitor news and radio stations for warnings and establish a command post.' },
        { done: false, id: 1, text: 'Order all moveable objects from the exposed areas to be moved if time permits.' },
        { done: false, id: 1, text: 'If tornado contact appears imminent, address associates and guest via the public address system or available communication process.' },
        { done: false, id: 1, text: 'Example: “Ladies and gentlemen, your attention please. We have been informed that a tornado has been spotted in the area. Please stand away from windows and exterior walls. Calmly and quickly take shelter in the interior corridors. All guests and associates in the public areas must proceed to the nearest interior meeting room or stairwell. Please listen for further announcements.”' },
        { done: false, id: 1, text: 'Request all cashiers to secure their banks.' },
        { done: false, id: 1, text: 'Be prepared to follow evacuation procedures of guests and associates and assign Emergency Response Team members to guide them.' },
        { done: false, id: 1, text: 'When the danger has passed, notify the guest and associates via the public address system or available communication process' },
        { done: false, id: 1, text: 'Example: “Ladies and gentlemen, your attention please. We have been advised that there is no longer a threat of a tornado and the warning has been canceled. I repeat - the tornado warning has been canceled. We apologize for any inconvenience. Thank you for your cooperation.”' },
        { done: false, id: 1, text: 'If a tornado hits the Hotel, assess the damage when it is safe and advise all department heads to track expenses including labor.' }

        ]
    },
    {
        titulo: 'ENGINEERING',
        datos: [
        { done: false, id: 1, text: 'Ensure that all emergency equipment is operative and be prepared to shut off gas and other critical equipment in the event of structural damage.' },
        { done: false, id: 1, text: 'Refer to Hurricane procedures for tasks completed in the event of a Tornado.' },
        { done: false, id: 1, text: 'Assist Emergency Response Team as needed.' },
        { done: false, id: 1, text: 'Assess damage and make repairs once the threat has passed.' }
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