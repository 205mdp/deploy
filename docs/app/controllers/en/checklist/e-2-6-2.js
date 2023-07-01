//cambiar 
//TodoCtrl_2_6_2
//localStorageDemo_2_6_2
//simpleFactoryx_2_6_2

demoApp.controller('TodoCtrl_2_6_2', function ($scope, $http, localStorageService, simpleFactoryx_2_6_2) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_6_2');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_6_2', simpleFactoryx_2_6_2.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_6_2');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_6_2', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_6_2", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.6.2	DROWNING",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'SECURITY',
            texto:'Contact Hotel Security or call the emergency services number (9-1-1 in the U.S.). ',
            datos: [

            { done: false, id: 1, text: 'When receiving a call regarding a possible or confirmed drowning, immediately determine:' ,	
            datos: [
            { done: false, id: 1, text: 'The location of the incident' },	
            { done: false, id: 1, text: 'If the person has a pulse or is breathing' },	
            { done: false, id: 1, text: 'If the person is conscious' },	
            { done: false, id: 1, text: 'Whether local emergency services (9-1-1 in the U.S.) has been contacted.  If not, immediately do so.' },
            ]
        },


        { done: false, id: 1, text: 'If a drowning is confirmed, notify the Emergency Response Team.  Do not announce over the radio the nature of the situation.' },	
        { done: false, id: 1, text: 'Respond to the scene.  Keep on-lookers away in a calm manner.' },	
        { done: false, id: 1, text: 'See instructions for the Director of Security (below) and assist as needed.' },
        { done: false, id: 1, text: 'Prepare the appropriate incident report with photos or diagrams.' },
        ]
    },
    {
        titulo: 'DIRECTOR OF SECURITY ',
        datos: [
        { done: false, id: 1, text: 'Respond to the scene.  Cordon off the area and post Security personnel to ensure that only authorized persons are allowed to enter the scene.' },
        { done: false, id: 1, text: 'DO NOT TOUCH OR ALLOW ANYONE TO DISTURB ANYTHING AT THE SCENE.' },
        { done: false, id: 1, text: 'Dispatch a member of the Emergency Response Team to meet police and fire department personnel responding to the call.' },
        { done: false, id: 1, text: 'Obtain as much information as possible for authorities:' ,
        datos: [
        { done: false, id: 1, text: 'Who discovered the body' },
        { done: false, id: 1, text: 'Time of discovery' },
        { done: false, id: 1, text: 'Name and address of deceased, as well as persons knowing the deceased' },

        ]
    },
    { done: false, id: 1, text: 'If the deceased was a registered guest, have the Front Office print out a folio and obtain a copy of the registration card for authorities.' },
    { done: false, id: 1, text: 'If the deceased drowned in a pool or beach staffed with a lifeguard, determine the whereabouts and actions of the lifeguard at the time of the drowning and immediately afterward.' },
    { done: false, id: 1, text: 'If the deceased drowned in the bathtub, pull room lock information for the entire period the guest was registered and give to authorities. ' },
    { done: false, id: 1, text: 'Once the deceased has been removed from the property, double-lock the victim’s room until police release it for clean up.  (Note:  Inventory of the deceased’s property shall be done by police and documented by Security).' },
    { done: false, id: 1, text: 'Do not reopen the pool or beach until authorized to do so by police.  If clean up of bodily fluids is necessary, ensure that Bloodborne Pathogen guidelines are adhered to.' },
    { done: false, id: 1, text: 'Assist local authorities as needed.' },
    { done: false, id: 1, text: 'Notify senior management.' },
    { done: false, id: 1, text: 'Confirm with authorities that they will notify next of kin.' }

    ]
},

{
    titulo: 'GENERAL MANAGER ',
    datos: [
    { done: false, id: 1, text: 'Refer media inquires to law enforcement.' },
    { done: false, id: 1, text: 'Contact the Division Representative to the Corporate Crisis Response Team.' }
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