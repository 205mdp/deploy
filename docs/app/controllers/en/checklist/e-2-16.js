//cambiar 
//TodoCtrl_2_16
//localStorageDemo_2_16
//simpleFactoryx_2_16

demoApp.controller('TodoCtrl_2_16', function ($scope, $http, localStorageService, simpleFactoryx_2_16) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_16');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_16', simpleFactoryx_2_16.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_16');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_16', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_16", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.16 OTHER EMERGENCIES",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'GENERAL MANAGER',
            datos: [
            { done: false, id: 1, text: 'Request all necessary assistance and contact all appropriate emergency response teams, community officials and associates.' },
            { done: false, id: 1, text: 'Maintain a calm attitude and establish a sense of order and organization.' },
            { done: false, id: 1, text: 'Assist emergency personnel and community officials who arrive on the scene.' },
            { done: false, id: 1, text: 'Make every effort to stay informed of accurate facts as they occur whether information is being supplied by the media, community officials or associates.' },
            { done: false, id: 1, text: 'Ensure guest and associate safety is a priority.' },
            { done: false, id: 1, text: 'Assist guests and associates or designate someone to help.' },
            { done: false, id: 1, text: 'Keep guests and associates informed of important facts and instructions.  Be compassionate.' },
            { done: false, id: 1, text: 'Direct Managers to keep track of costs associated with the emergency.' },
            { done: false, id: 1, text: 'Complete an incident report, or if the emergency involved a large amount of Security assistance, instruct Security to complete the report. Include all costs, including labor costs, for insurance purposes.' },
            { done: false, id: 1, text: 'Communicate to the Crisis Team representative if warranted.' }
            ]
        },
        {
            titulo: 'DIRECTOR OF SECURITY',
            datos: [
            { done: false, id: 1, text: 'Establish and maintain order during the emergency. Remain calm.' },
            { done: false, id: 1, text: 'Ensure the safety of guests and associates.' },
            { done: false, id: 1, text: 'Cordon off any areas that pose a risk or danger and make certain only authorized personnel have access to the area.' },
            { done: false, id: 1, text: 'Assign Security Officers to patrol the entire facility to make sure Hotel Management is aware of all related events or guest requiring special assistance.' },
            { done: false, id: 1, text: 'Assist emergency personnel and community officials who arrive on the scene.' },
            { done: false, id: 1, text: 'Answer guest and associate questions with calmly stated, factual information.' },
            { done: false, id: 1, text: 'Assist guests and associates as needed.' },
            { done: false, id: 1, text: 'Regularly report status updates to the General Manager.' },
            { done: false, id: 1, text: 'Ensure that adequate emergency supplies are on hand.' },
            { done: false, id: 1, text: 'Keep track of emergency-related costs, including labor. ' },
            { done: false, id: 1, text: 'Complete an incident report if Security was more involved in the emergency than the General Manager.' }

            ]
        },
        {
            titulo: 'DEPARTMENT HEADS AND MANAGERS',
            datos: [
            { done: false, id: 1, text: 'Ensure the safety of your staff members. Account for each staff member that is on-duty during the emergency.' },
            { done: false, id: 1, text: 'Relay important information and instructions to your staff members.' },
            { done: false, id: 1, text: 'Assist the General Manager as needed.' },
            { done: false, id: 1, text: 'Keep track of costs related to the emergency. Report this information to the General Manager or Security.' }

            ]
        },
        {
            titulo: 'ENGINEERING',
            datos: [
            { done: false, id: 1, text: 'Immediately assess whether or not utilities need to be either shut off or restored in affected areas.' },
            { done: false, id: 1, text: 'When necessary, supply building plans to help officials navigate through the building when responding to an emergency.' },
            { done: false, id: 1, text: 'Ensure the safety of guests and associates as a first priority. Secure and prevent property damage as a second priority.' },
            { done: false, id: 1, text: 'Update the General Manager with status information regularly.' },
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