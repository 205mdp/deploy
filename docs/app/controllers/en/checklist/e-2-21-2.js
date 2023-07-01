//cambiar 
//TodoCtrl_2_21_2
//localStorageDemo_2_21_2
//simpleFactoryx_2_21_2

demoApp.controller('TodoCtrl_2_21_2', function ($scope, $http, localStorageService, simpleFactoryx_2_21_2) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_21_2');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_21_2', simpleFactoryx_2_21_2.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_21_2');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_21_2', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_21_2", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.21.2 HEATING OR AC FAILURE",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'GENERAL MANAGER',

            datos: [
            { done: false, id: 1, text: 'Contact Engineering if they have not already been notified.' },
            { done: false, id: 1, text: 'Notify Security and obtain a list from the Front Desk of guests who may require special assistance. Instruct Security to check on these guests.' },
            { done: false, id: 1, text: 'Establish a Command Center where information can be gathered and disseminated on the status of equipment repairs.' },
            { done: false, id: 1, text: 'Obtain additional fans and space heaters from a rental equipment company, if necessary. Distribute them from the Command Center keeping careful track of where they are being used.' },
            { done: false, id: 1, text: 'Have additional fans and space heaters on hand to provide to special-needs guests (elderly, infant or disabled guests.) If you distribute space heaters, have Security set-up the heaters in the room and advise guests to keep the area around the heater clear. All additional fans and heaters should be used in public spaces only.' },
            { done: false, id: 1, text: 'Set-up a meeting or banquet room as a “Guest and Associate Comfort Area.” Put fans in the room during hot weather and space heaters in the room during cold weather. If the outage will last for more than a few hours, set-up cots, provide temperature-appropriate linens and pillows.' },
            { done: false, id: 1, text: 'Post updates on an easel in the lobby.' },
            { done: false, id: 1, text: 'Make an announcement over the Public address system or available communication process.' },
            { done: false, id: 1, text: 'Example: “Attention Ladies and Gentlemen. We are experiencing problems with our (heating or air conditioning system). We are currently working to restore service. Please keep windows and doors closed to preserve the current air temperature as long as possible. We invite you to visit ??? room. It has been established as our “Guest Comfort Area” where we are maintaining temperatures with (fans or heaters). We will keep you informed as we repair the system. We apologize for any inconvenience and thank you for your cooperation.”' },
            { done: false, id: 1, text: 'If the heating and cooling system will not be repaired for more than 24 hours, contact other facilities and make arrangements to move guests, if necessary.' },
            { done: false, id: 1, text: 'During hot weather provide plenty of bottled water to guests.' },
            { done: false, id: 1, text: 'During cold weather provide guests with extra blankets.' },
            { done: false, id: 1, text: 'Direct all department heads to keep track of costs. Complete incident report and collect cost information from all departments for insurance purposes. ' }

            ]
        },
        {
            titulo: 'SECURITY',
            datos: [
            { done: false, id: 1, text: 'Patrol the Hotel and help guests who require special assistance. Answer all guest questions.' },
            { done: false, id: 1, text: 'If guests who require special assistance need a space heater placed in their room, set the heater up for them in an open space. Carefully instruct guests to keep the area clear and warn them that the heater unit could pose a burn or fire hazard.' },
            { done: false, id: 1, text: 'Report to the Command Center frequently with status updates on any guest issues.' }

            ]
        },
        {
            titulo: 'ENGINEERING',	
            datos: [
            { done: false, id: 1, text: 'Immediately inspect the heating and cooling system to determine the cause of the problem and try to repair it quickly.' },
            { done: false, id: 1, text: 'Contact an outside repair vendor if necessary. Assist them when they arrive.' },
            { done: false, id: 1, text: 'Submit regular progress updates to the Command Center and General Manager.' },
            { done: false, id: 1, text: 'Record all costs associated with the system failure and repairs.' },
            { done: false, id: 1, text: 'With loss of heating, prevent pipes from freezing with use of portable heaters.' }
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