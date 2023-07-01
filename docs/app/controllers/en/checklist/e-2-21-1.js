//cambiar 
//TodoCtrl_2_21_1
//localStorageDemo_2_21_1
//simpleFactoryx_2_21_1

demoApp.controller('TodoCtrl_2_21_1', function ($scope, $http, localStorageService, simpleFactoryx_2_21_1) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_21_1');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_21_1', simpleFactoryx_2_21_1.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_21_1');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_21_1', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_21_1", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.21 UTILITY OUTAGES",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'E:2.21.1 GAS LEAK',
            texto: 'GENERAL MANAGER',
            datos: [


            { done: false, id: 1, text: 'Should immediately investigate whether there is a gas leak and instruct engineering to shut off the gas as soon as possible.' },
            { done: false, id: 1, text: 'Instruct associates to extinguish any flames in the area as well as to shut off electronic devices being used.' },
            { done: false, id: 1, text: 'Remove guests from affected area if necessary.' },
            { done: false, id: 1, text: 'Notify the local gas company to immediately investigate the leak and to get the problem fixed quickly.' },
            { done: false, id: 1, text: 'Record the number of rooms and areas affected and log the costs to file a report for insurance purposes.' }

            ]
        },
        {
            titulo: 'SECURITY',
            datos: [
            { done: false, id: 1, text: 'Evacuate the affected area and guard it to ensure all guest and associates are safely away from the area.' },
            { done: false, id: 1, text: 'Assist general manager and engineering to keep everyone safe and maintain order when evacuating an area of the hotel.' },
            { done: false, id: 1, text: 'Assist emergency crews if they are needed.' },
            { done: false, id: 1, text: 'Write a report with photographs if appropriate.' }

            ]
        },
        {
            titulo: 'ENGINEERING',
            datos: [
            { done: false, id: 1, text: 'Turn off gas to affected area or entire hotel if the source of leak is not known.' },
            { done: false, id: 1, text: 'Investigate the source of the leak and determine if it can be repaired quickly.' },
            { done: false, id: 1, text: 'Assist local gas company in their assessment of the situation to fix the leak.' },
            { done: false, id: 1, text: 'Prior to restarting gas supplies, ensure all equipment is manually turned off and inspect for any gas buildup.  Turn on kitchen exhaust fans prior to gas activation.' }
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