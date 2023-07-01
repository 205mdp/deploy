//cambiar 
//TodoCtrl_2_20
//localStorageDemo_2_20
//simpleFactoryx_2_20

demoApp.controller('TodoCtrl_2_20', function ($scope, $http, localStorageService, simpleFactoryx_2_20) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_20');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_20', simpleFactoryx_2_20.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_20');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_20', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_20", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.20 TRANSPORTATION INCIDENT",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'VEHICLE DRIVER',
            texto:'If a Hotel vehicle is involved in a collision or other transportation incident, the following procedures apply and assume the driver is not seriously injured.',

            datos: [


                { done: false, id: 1, text: 'Determine if there are any injuries.  DO NOT MOVE INJURED INDIVIDUALS.' },
                { done: false, id: 1, text: 'If there are injuries or incident is serious, contact local emergency services (9-1-1 in the U.S.)' },
                { done: false, id: 1, text: 'Contact Hotel dispatch' },
                { done: false, id: 1, text: 'Retrieve insurance information from any other drivers involved in the incident.' },
                { done: false, id: 1, text: 'Answer all law enforcement questions.' },
                { done: false, id: 1, text: 'Assist passengers as needed.' },
                { done: false, id: 1, text: 'Get names of all passengers.' },
                { done: false, id: 1, text: 'Inform the General Manager of all details pertaining to the incident.' },
                { done: false, id: 1, text: 'If there are no injuries, help passengers move items to the other vehicle sent from the Hotel.' }
                ]
            },
            {
                titulo: 'ANY HOTEL PERSONNEL INVOLVED',
                datos: [
                { done: false, id: 1, text: 'DO NOT admit fault or negligence.' },
                { done: false, id: 1, text: 'DO NOT assume that the Hotel is liable.' },
                { done: false, id: 1, text: 'DO NOT refer to previous incidents.' }
                ]
            },
            {
                titulo: 'HOTEL DISPATCH',
                datos: [
                { done: false, id: 1, text: 'Contact local emergency services (9-1-1 in the U.S.) if not contacted already.' },
                { done: false, id: 1, text: 'Notify the General Manager.' },
                { done: false, id: 1, text: 'Remain on the line with the driver until emergency help arrives if necessary.' },
                { done: false, id: 1, text: 'If there are uninjured passengers, dispatch another vehicle to retrieve them.' }
                ]
            },
            {
                titulo: 'GENERAL MANAGER ',
                datos: [
                { done: false, id: 1, text: 'If necessary, report to the scene of the incident after making arrangements for a replacement manager to handle responsibilities at the Hotel.' },
                { done: false, id: 1, text: 'Determine the severity of the incident.' },
                { done: false, id: 1, text: 'Assist passengers, emergency teams and law enforcement as needed.' },
                { done: false, id: 1, text: 'Instruct injured passengers to send related medical expenses to the attention of the General Manager at the Hotel.' },
                { done: false, id: 1, text: 'Fill out a full report with a full outline of costs for insurance purposes.' },
                { done: false, id: 1, text: 'Contact the Corporate Risk Management Department and Corporate Legal Division with specifics of the incident.  If there are multiple injuries or fatalities, contact the Division Representative of the Crisis Response Team.' },
                { done: false, id: 1, text: 'Ensure appropriate compassionate follow-up with the injured/ill person.' },
                { done: false, id: 1, text: 'Consult with Human Resources as to need for drug/alcohol testing.' }
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