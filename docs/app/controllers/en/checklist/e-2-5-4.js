//cambiar 
//TodoCtrl_2_5_4
//localStorageDemo_2_5_4
//simpleFactoryx_2_5_4

demoApp.controller('TodoCtrl_2_5_4', function ($scope, $http, localStorageService, simpleFactoryx_2_5_4) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_5_4');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_5_4', simpleFactoryx_2_5_4.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_5_4');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_5_4', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_5_4", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.5.4	THEFT",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'SECURITY',
            
            datos: [
            { done: false, id: 1, text: 'When notified of a theft, immediately respond to the scene.  ENSURE THAT NOTHING IN THE THEFT AREA IS DISTURBED.' },
            { done: false, id: 1, text: 'Talk with the victim and get as much information as possible, including a description and estimated value of the item(s) stolen.' },
            { done: false, id: 1, text: 'Determine if there are any witnesses to the theft.' },
            { done: false, id: 1, text: 'Notify police of the crime, providing as much detail as possible.' },
            { done: false, id: 1, text: 'Keep any on-lookers away in a calm, professional manner.' },
            { done: false, id: 1, text: 'Determine if videotape of the theft exists.' },
            { done: false, id: 1, text: 'See instructions for the Director of Security (below) as assist as needed.' },
            { done: false, id: 1, text: 'Prepare the appropriate incident report with photos or diagrams.' }
            ]
        },

        {
            titulo: 'DIRECTOR OF SECURITY ',
            datos: [
            { done: false, id: 1, text: 'Respond to the scene.  Cordon off the area if necessary.' },
            { done: false, id: 1, text: 'Interview the victim.  Determine the victim’s recent activities to try and establish a time frame for the theft.' },
            { done: false, id: 1, text: 'Ask victim and associates if they noticed any suspicious persons or activity in the area.' },
            { done: false, id: 1, text: 'Interview witnesses, if available.' },
            { done: false, id: 1, text: 'Turn over all information to police and assist as needed.' },
            { done: false, id: 1, text: 'If the victim is a registered guest, have the Front Office print out a folio and obtain a copy of the registration card for authorities.' },
            { done: false, id: 1, text: 'If the theft occurred from a guest’s room, pull room lock information for the entire period the guest has been registered and give to authorities.' },
            { done: false, id: 1, text: 'If theft occurred from a guest room, double lock the room until police release it for clean up.' },
            { done: false, id: 1, text: 'Notify senior management.' }
            ]
        },
        {
            titulo: 'GENERAL MANAGER',
            datos: [
            { done: false, id: 1, text: 'Follow-up with victim and express sincere concern.' },
            { done: false, id: 1, text: 'Contact the Division Representative for any significant theft.' },
            { done: false, id: 1, text: 'Advise appropriate Risk Management or insurance representative.' }
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