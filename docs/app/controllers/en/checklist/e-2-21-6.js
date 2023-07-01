//cambiar 
//TodoCtrl_2_21_6
//localStorageDemo_2_21_6
//simpleFactoryx_2_21_6

demoApp.controller('TodoCtrl_2_21_6', function ($scope, $http, localStorageService, simpleFactoryx_2_21_6) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_21_6');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_21_6', simpleFactoryx_2_21_6.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_21_6');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_21_6', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_21_6", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.21.6 WATER LEAK",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'GENERAL MANAGER ',
            texto:'CAUTION: If a shock hazard exists in the affected area, DO NOT ENTER until Engineering has shut off ALL power to the area.',      
            datos: [
            { done: false, id: 1, text: 'Use the Public address system or available communication process to explain the problem with the water system and assure guests that the hotel is working to resolve the problem as quickly as possible. Regularly update the guests with a progress report as the issue is addressed.' },
            { done: false, id: 1, text: 'Also use the Public address system or available communication process to notify guests that Housekeeping will be bringing drinking water to each room if needed.' },
            { done: false, id: 1, text: 'Answer guest questions.' },
            { done: false, id: 1, text: 'Inform engineering and security of the problem if they have not already been notified.' },
            { done: false, id: 1, text: 'Instruct housekeeping to clean excess water. If the damage is severe, call in an outside cleaning/water removal company.' },
            { done: false, id: 1, text: 'Maintain cost records for insurance purposes and file a report.' }
            ]
        },
        {
            titulo: 'HOUSEKEEPING',
            datos: [
            { done: false, id: 1, text: 'Mop up excess water on the floors.' },
            { done: false, id: 1, text: 'If an outside cleaning/water removal company is called in, assist as needed.' },
            { done: false, id: 1, text: 'Put cones around water on the floor to keep guests from slipping on wet areas.' },
            { done: false, id: 1, text: 'Bring drinking water to guests if needed.' }

            ]
        },
        {
            titulo: 'SECURITY',
            datos: [
            { done: false, id: 1, text: 'Patrol the hotel to ensure guest safety and to turn off running faucets or tap outlets.' },
            { done: false, id: 1, text: 'Report additional water leaks or damaged pipes if you come across them while you are patrolling.' },
            { done: false, id: 1, text: 'Cordon off wet areas on the floor or carpet and keep guests away from these areas.' },
            { done: false, id: 1, text: 'Answer guest questions.' },
            { done: false, id: 1, text: 'Provide assistance to guests as needed.' },
            { done: false, id: 1, text: 'Assist plumbing crews by keeping guests away from trucks and repair equipment and guiding crews to the problem areas.' }

            ]
        },
        {
            titulo: 'ENGINEERING',
            datos: [
            { done: false, id: 1, text: 'Shut down the zone or main water supply immediately.' },
            { done: false, id: 1, text: 'Investigate the source of the water loss. Repair the situation if possible or call a plumbing company for assistance.' },
            { done: false, id: 1, text: 'Keep the General Manager informed of progress.' },
            { done: false, id: 1, text: 'Help the plumbing crew as needed.' }
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