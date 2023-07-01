//cambiar 
//TodoCtrl_2_6_5
//localStorageDemo_2_6_5
//simpleFactoryx_2_6_5

demoApp.controller('TodoCtrl_2_6_5', function ($scope, $http, localStorageService, simpleFactoryx_2_6_5) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_6_5');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_6_5', simpleFactoryx_2_6_5.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_6_5');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_6_5', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_6_5", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.6.5	ELECTROCUTION",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'General',
            
        

            datos: [
            { done: false, id: 1, text: 'NEVER touch a victim until the power is off.' },
            { done: false, id: 1, text: 'First, shut off the current at the fuse box or unplug the electrical equipment/appliance in use.  Simply turning off the equipment is inadequate.' },
            { done: false, id: 1, text: 'If it is not possible to shut off the power, stand on a dry insulated surface (for example, a rubber mat, a stack of newspapers, a board, or pile of clothes) and use a NON-METAL object such as wood or rubber to separate the victim from the wires.' },
            { done: false, id: 1, text: 'Take caution to avoid contact with anything damp or wet.  Make sure your hands and feet are dry.' }
            ]
        },


        
        {
            titulo: 'DIRECTOR OF SECURITY',
            datos: [
            { done: false, id: 1, text: 'If notified about an electrocution incident, immediately contact local emergency services (9-1-1 in the U.S.).  Give the location of the victim, as well as their condition if known, and the source of the electrical shock.' },
            { done: false, id: 1, text: 'Contact Engineering to shut off power to the affected area, if applicable.' },
            { done: false, id: 1, text: 'Cordon off the scene and do not allow anyone to enter the area or touch any objects.' }


            ]
        },
        {
            titulo: 'ENGINEERING',
            datos: [
            { done: false, id: 1, text: 'Shut off power to the affected area, if applicable, and assist Security in keeping onlookers away from the scene.' },
            { done: false, id: 1, text: 'Contact a trained electrician, if appropriate, to inspect and repair any electrical components suspected of causing the electrocution.' },
            { done: false, id: 1, text: 'Inform Security and the General Manager when the area has been declared safe.' }
            ]
        },
        {
            titulo: 'GENERAL MANAGER',
            datos: [
            { done: false, id: 1, text: 'Follow up with the victim after a reasonable period to inquire about their well-being.' },
            { done: false, id: 1, text: 'If the victim does not survive the electrocution, confirm with local authorities that they will notify the next of kin.  (See below).' },
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