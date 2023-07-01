//cambiar 
//TodoCtrl_2_6_4_2
//localStorageDemo_2_6_4_2
//simpleFactoryx_2_6_4_2

demoApp.controller('TodoCtrl_2_6_4_2', function ($scope, $http, localStorageService, simpleFactoryx_2_6_4_2) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_6_4_2');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_6_4_2', simpleFactoryx_2_6_4_2.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_6_4_2');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_6_4_2', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_6_4_2", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.6.4.2	ATTEMPTED OR THREATENED SUICIDE",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'OPERATOR',

            datos: [
            { done: false, id: 1, text: 'Immediately contact Security with details of the situation, including location and description of the individual.' },
            { done: false, id: 1, text: 'Ask the Emergency Response Team to contact the Operator immediately.  Do not announce over the radio the nature of the situation.' }
            ]
        },
        {
            titulo: 'SECURITY',
            datos: [
            { done: false, id: 1, text: 'Contact police emergency (9-1-1 in U.S.), giving all details known.' },
            { done: false, id: 1, text: 'See instructions for the Director of Security (below) and assist as needed.' },
            { done: false, id: 1, text: 'Cordon off the area and keep on-lookers away from the scene.' },
            { done: false, id: 1, text: 'Prepare the appropriate incident report.' },
            ]
        },
        {
            titulo: 'DIRECTOR OF SECURITY ',
            datos: [
            { done: false, id: 1, text: 'Immediately respond to the scene.  Address the individual threatening suicide in a calm and soothing manner until experts from the police or fire department arrive.' },
            { done: false, id: 1, text: 'Do not put yourself at risk.' },
            { done: false, id: 1, text: 'Attempt to isolate the surrounding area.' },
            { done: false, id: 1, text: 'Dispatch a member of the Emergency Response Team to meet police and fire department personnel responding to the call.' },
            { done: false, id: 1, text: 'If the individual is a registered guest, have the Front Office print out a folio and obtain a copy of the registration card for authorities.' },
            { done: false, id: 1, text: 'Assist local authorities as needed.' },
            { done: false, id: 1, text: 'Notify senior management.' },
            { done: false, id: 1, text: 'Confirm with local authorities that they will notify relatives or associates of the individual in duress.' },
            { done: false, id: 1, text: 'If clean up of body fluids is necessary, ensure that Bloodborne Pathogen guidelines are followed.' }
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
            { done: false, id: 1, text: 'Advise associates of EAP and counseling resources available.' },
            

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