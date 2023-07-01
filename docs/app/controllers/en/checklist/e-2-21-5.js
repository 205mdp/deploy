//cambiar 
//TodoCtrl_2_21_5
//localStorageDemo_2_21_5
//simpleFactoryx_2_21_5

demoApp.controller('TodoCtrl_2_21_5', function ($scope, $http, localStorageService, simpleFactoryx_2_21_5) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_21_5');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_21_5', simpleFactoryx_2_21_5.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_21_5');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_21_5', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_21_5", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.21.5 TELECOMMUNICATIONS FAILURE",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
           titulo: 'OPERATOR OR FRONT DESK MANAGER',
           
           datos: [ 
           { done: false, id: 1, text: 'Assess the situation and contact the General Manager and IT Manager. Relay all important information.' },
           { done: false, id: 1, text: 'If needed, gather associates and establish a command post.' },
           { done: false, id: 1, text: 'Notify local authorities and the telephone utility service, if necessary, that the phone system is down.' },
           { done: false, id: 1, text: 'Communicate via cellular phone.' },
           { done: false, id: 1, text: 'Assign associate to check the function of all public telephones.' }

           ]
       },
       {
        titulo: 'DIRECTOR OF ROOMS',
        datos: [
        { done: false, id: 1, text: 'If the failure is expected to last more than half an hour, broadcast a message on the Fire Alarm Voice System to inform guests.' },
        { done: false, id: 1, text: 'Have cellular phones available at the reception desk and at the concierge station.' },
        { done: false, id: 1, text: 'Assign associates to distribute 10 minute calling cards to guests for use at nearby pay phones.' }

        ]
    },
    {
        titulo: 'SECURITY',
        datos: [
        { done: false, id: 1, text: 'Ensure adequate staffing to maintain order. Officers should be asked to stay on shift until phone service has been restored.' },
        { done: false, id: 1, text: 'Identify any guests with disabilities that may require assistance.' },
        { done: false, id: 1, text: 'Activate Security cellular phone to communicate with local authorities.' },
        { done: false, id: 1, text: 'Assign officers to conduct patrols and assist guests and associates where needed.' }
        ]
    },
    {
        titulo: 'ENGINEERING',
        datos: [
        { done: false, id: 1, text: 'Ensure that there is adequate staffing by requesting engineers to stay on shift until the phone system is restored.' },
        { done: false, id: 1, text: 'Discover the cause and extent of the failure.' },
        { done: false, id: 1, text: 'Communicate with Director of Rooms via two-way radio and assist where needed.' }

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