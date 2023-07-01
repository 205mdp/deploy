//cambiar 
//TodoCtrl_2_21_7
//localStorageDemo_2_21_7
//simpleFactoryx_2_21_7

demoApp.controller('TodoCtrl_2_21_7', function ($scope, $http, localStorageService, simpleFactoryx_2_21_7) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_21_7');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_21_7', simpleFactoryx_2_21_7.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_21_7');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_21_7', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_21_7", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.21.7 WATER LOSS",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'GENERAL MANAGER ',

            
            datos: [
            { done: false, id: 1, text: 'If water is lost throughout the building or resort, use the Public address system or available communication process to explain the problem with the water system and assure guests that the hotel is working to resolve the problem as quickly as possible. Regularly update the guests with a progress report as the issue is addressed.' },
            { done: false, id: 1, text: 'Also use the Public address system or available communication process to notify guests that Housekeeping will be bringing drinking water to each room.' },
            { done: false, id: 1, text: 'Answer guest questions.' },
            { done: false, id: 1, text: 'Inform engineering and security of the problem if they have not already been notified.' },
            { done: false, id: 1, text: 'Maintain cost records for insurance purposes and file a report.' }
            ]
        },
        {
            titulo: 'SECURITY',
            datos: [
            { done: false, id: 1, text: 'Patrol the hotel to ensure guest safety and to turn off running faucets or tap outlets.' },
            { done: false, id: 1, text: 'Answer guest questions.' },
            { done: false, id: 1, text: 'Provide assistance to guests as needed.' },
            { done: false, id: 1, text: 'Assist utility crews by keeping guests away from trucks and repair equipment and guiding them to the problem areas.' }
            ]
        },
        {
            titulo: 'ENGINEERING',
            datos: [
            { done: false, id: 1, text: 'Shut down the main water supply to prevent water damage when water access is restored.' },
            { done: false, id: 1, text: 'Investigate the source of the water loss. Repair the situation if possible or call the appropriate utility assistance.' },
            { done: false, id: 1, text: 'Keep the General Manager informed of progress.' },
            { done: false, id: 1, text: 'Help the utility crew as needed.' },
            { done: false, id: 1, text: 'If water is to be replenished with water trucks, ensure trucks have not been used for non-potable water purposes.' }
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