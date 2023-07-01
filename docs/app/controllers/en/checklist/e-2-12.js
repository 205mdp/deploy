//cambiar 
//TodoCtrl_2_12
//localStorageDemo_2_12
//simpleFactoryx_2_12

demoApp.controller('TodoCtrl_2_12', function ($scope, $http, localStorageService, simpleFactoryx_2_12) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_12');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_12', simpleFactoryx_2_12.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_12');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_12', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_12", function ($http) {

    var todotemp = {
        titulogeneral: "E:2.12	HOSTAGE SITUATION",
    version: "1.0",
    fecharevision: "27-08-2014",
    revisadopor: "Ron Ziv",
    elementos: [{
        titulo: 'SECURITY',
        texto: 'Hostage incidents create a unique set of challenges.  Because lives are in immediate danger, it is likely that both the hostage and the hostage taker will be highly emotional and perhaps irrational.  As a result, it is important that all hotel associates remain calm and give the appearance of control and calmness at all times.',

        datos: [
	{ done: false, id: 1, text: 'Notify the Emergency Response Team and ask them to contact Security Control immediately.  (Note: DO NOT announce over the radio that there is a hostage situation).' },
	{ done: false, id: 1, text: 'Contact local emergency services (9-1-1 in the U.S.); give them all the details that are currently known.' },
	{ done: false, id: 1, text: 'Calmly evacuate the area and cordon off the surroundings.' },
	{ done: false, id: 1, text: 'Notify the Director of Security.' },
	{ done: false, id: 1, text: 'Assist police in establishing emergency phone lines if requested to do so.' },
	{ done: false, id: 1, text: 'Assist the General Manager with the above tasks, or any task deemed necessary.' },
	{ done: false, id: 1, text: 'At the conclusion of the hostage incident, prepare a full report.' }
	
 ]
        },
 {
        titulo: 'DIRECTOR OF SECURITY OR ON-DUTY DESIGNEE',
        datos: [
	{ done: false, id: 1, text: 'DO NOT attempt to interfere with law enforcement officials or endanger yourself or others in any way.' },
	{ done: false, id: 1, text: 'Obtain as many details about the incident as possible.  If the hostage taker is making demands, relay the information to police.' },
	{ done: false, id: 1, text: 'If it has not already been done, quickly and calmly evacuate the immediate and surrounding areas.  Cordon off the affected area to prevent unauthorized people from entering.' },
	{ done: false, id: 1, text: 'Provide police with floor plans and information regarding utilities.' },
	{ done: false, id: 1, text: 'Assist in establishing emergency phone lines if requested by police.' },
	{ done: false, id: 1, text: 'Make provisions to establish a Command Post for the hotel, and a separate one for police, if needed.' },
	{ done: false, id: 1, text: 'Make provisions for the control of utilities (e.g. shutting off power and water), if directed by police.' },
	{ done: false, id: 1, text: 'Establish a de-briefing room, and at the conclusion of the incident, conduct a de-briefing session as soon as possible.' }
 ]
        },
 {
        titulo: 'GENERAL MANAGER',
        datos: [
	{ done: false, id: 1, text: 'Contact the Division Representative to the Corporate Crisis Response Team' }
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