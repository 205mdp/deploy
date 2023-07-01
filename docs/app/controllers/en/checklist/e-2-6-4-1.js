//cambiar 
//TodoCtrl_2_6_4_1
//localStorageDemo_2_6_4_1
//simpleFactoryx_2_6_4_1

demoApp.controller('TodoCtrl_2_6_4_1', function ($scope, $http, localStorageService, simpleFactoryx_2_6_4_1) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_6_4_1');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_6_4_1', simpleFactoryx_2_6_4_1.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_6_4_1');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_6_4_1', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_6_4_1", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.6.4.1	DEATH OR SUICIDE ",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'OPERATOR',

            datos: [
            { done: false, id: 1, text: 'Call Security with details about the discovery of the body and its location.' },
            { done: false, id: 1, text: 'Ask the Emergency Response Team to immediately contact the Director of Security.  Do not announce over the radio the nature of the situation.' }
            ]
        },
        {
            titulo: 'SECURITY',
            datos: [
            { done: false, id: 1, text: 'Contact local emergency services (9-1-1 in the U.S.), giving all details known.' },
            { done: false, id: 1, text: 'See instructions for the Director of Security (below) and assist as needed.' },
            { done: false, id: 1, text: 'Ensure that no unauthorized persons enter the cordoned off area.' },
            { done: false, id: 1, text: 'Keep on-lookers away from the scene in a calm, respectful manner.' },
            { done: false, id: 1, text: 'Once the deceased has been removed, double-lock the room until police release the room for clean up.  (Note:  Inventory of the deceased’s property shall be done by police and documented by Security).' },
            { done: false, id: 1, text: 'Prepare the appropriate incident report.  Include photographs or diagrams if available.' }

            ]
        },
        {
            titulo: 'DIRECTOR OF SECURITY ',	
            datos: [
            { done: false, id: 1, text: 'Respond to the scene.  Do not assume that the person is deceased; resuscitation efforts may be necessary.' },
            { done: false, id: 1, text: 'DO NOT TOUCH OR ALLOW ANYONE TO DISTURB ANYTHING AT THE SCENE.' },
            { done: false, id: 1, text: 'Cordon off the area and post Security personnel to ensure that only authorized persons are allowed to enter the scene.' },
            { done: false, id: 1, text: 'Keep a log of all persons entering the scene, including times.' },
            { done: false, id: 1, text: 'Obtain as much information as possible for authorities:' ,
            datos: [
            { done: false, id: 1, text: 'Who discovered the body or witnessed the death?' },
            { done: false, id: 1, text: 'Time of discovery or death?' },
            { done: false, id: 1, text: 'Name and address of deceased, as well as persons knowing the deceased?' },
            ]
        },

        { done: false, id: 1, text: 'Dispatch a member of the Emergency Response Team to meet police and fire department personnel responding to the call.' },
        { done: false, id: 1, text: 'If the individual is a registered guest, have the Front Office print out a folio and obtain a copy of the registration card for authorities.' },
        { done: false, id: 1, text: 'Pull room lock information for the entire period the guest was registered and give to authorities.' },
        { done: false, id: 1, text: 'If clean up of body fluids is necessary, ensure that Bloodborne Pathogen guidelines are followed.' },
        { done: false, id: 1, text: 'Assist local authorities as needed.' },
        { done: false, id: 1, text: 'Notify senior management.' },
        { done: false, id: 1, text: 'Confirm with local authorities that they will notify next of kin.' }

        ]
    },
    {
        titulo: 'GENERAL MANAGER ',
        datos: [
        { done: false, id: 1, text: 'Refer media inquires to law enforcement.' },
        { done: false, id: 1, text: 'Contact the Division Representative to the Corporate Crisis Response Team.' }

        ]
    },
    {
        titulo: 'HUMAN RESOURCES',
        datos: [
        { done: false, id: 1, text: 'Contact EAP and arrange for deployment of onsite grief counselors. ' },
        { done: false, id: 1, text: 'Advise associates of EAP and counseling resources available.' }

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