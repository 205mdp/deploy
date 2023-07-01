//cambiar 
//TodoCtrl_2_21_3
//localStorageDemo_2_21_3
//simpleFactoryx_2_21_3

demoApp.controller('TodoCtrl_2_21_3', function ($scope, $http, localStorageService, simpleFactoryx_2_21_3) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_21_3');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_21_3', simpleFactoryx_2_21_3.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_21_3');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_21_3', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_21_3", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.21.3 POWER FAILURE",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
           titulo: 'OPERATOR',
           
           datos: [ 

           { done: false, id: 1, text: 'Notify the Emergency Response Team (ERT) over the radio.' },
           { done: false, id: 1, text: 'If the repeater system is down, instruct the ERT to turn their radios to the Emergency Channel in order to communicate with line-of-sight transmissions.' },
           { done: false, id: 1, text: 'Call each elevator and advise passengers to remain calm. Advise engineering of any passengers in elevators.' },
           { done: false, id: 1, text: 'If Senior Management and Department Heads are not on the property, begin contacting them at home. Request that they report to the Hotel.' },
           { done: false, id: 1, text: 'Be prepared to assist in contacting outside agencies.' },
           { done: false, id: 1, text: 'Keep phone lines and radio channels open for emergency communication.' },
           { done: false, id: 1, text: 'Reassure guests that the Hotel is doing everything possible to restore power.' },
           { done: false, id: 1, text: 'Keep track of the names and numbers of guests who may require assistance, have medical problems or are physically challenged. Report this information to Security.' },
           { done: false, id: 1, text: 'Notify Hotel Central Reservations and request that they handle all reservation requests for the duration of the power outage.' }
           ]
       },
       {
        titulo: 'DIRECTOR OF SECURITY ',
        datos: [
        { done: false, id: 1, text: 'Establish a command post. Have all emergency supplies such as flashlights, glow sticks, first-aid kit and loud speaker, brought to the command post.' },
        { done: false, id: 1, text: 'Lock all entrances and exits except the front lobby entrance.' },
        { done: false, id: 1, text: 'Organize the Emergency Response Team. Direct them to patrol the property to determine if there are any injured guests or associates.' },
        { done: false, id: 1, text: 'If your public address system is operating on battery or generator power, make an announcement.' }
        ]
    },



    {
        titulo: 'SECURITY',
        texto:'Example: “Ladies and gentlemen, your attention please. We are experiencing a power failure. We have emergency lighting and power only. Normal Hotel services have been interrupted. Please remain calm and stay where you are. The emergency crews are working to restore power and we will keep you posted on the progress. We apologize for the inconvenience.”',

        datos: [
        { done: false, id: 1, text: 'Report to the Command Post as directed.' },
        { done: false, id: 1, text: 'Gather all radios, batteries, pagers, chargers, flashlights, glow sticks and emergency equipment and bring items to the Command Post.' },
        { done: false, id: 1, text: 'Ensure that emergency power has been designated for one elevator.' },
        { done: false, id: 1, text: 'Call off-duty Security Officers and have them report to work if needed.' },
        { done: false, id: 1, text: 'Increase floor patrols to check areas for fire hazards, vandalism, theft and general guest safety.' },
        { done: false, id: 1, text: 'Complete incident reports. Collect cost information from all Department Heads for insurance purposes.' }
        ]
    },
    {
        titulo: 'GENERAL MANAGER ',
        texto:'Progress Announcement Example: “Ladies and gentlemen, your attention please. The emergency crews are making progress towards resolving the power failure. We will inform you when Hotel services have been returned to a normal state. Thank you for your patience.”',

        datos: [
        { done: false, id: 1, text: 'Assign associates to the lobby area and near the elevators to direct guests. ' },
        { done: false, id: 1, text: 'Assign an associate to begin distributing equipment such as flashlights and glow sticks. Request status reports on equipment inventory.' },
        { done: false, id: 1, text: 'Instruct all associates to shut down computer equipment to avoid damage when power returns.' },
        { done: false, id: 1, text: 'Contact off-duty managers as needed and request that they report to the Hotel.' },
        { done: false, id: 1, text: 'Direct Front Office Agents to convert to a manual check-in/check-out system utilizing “fail safe” keys.' },
        { done: false, id: 1, text: 'Keep as many associates as possible visible to the guests.' },
        { done: false, id: 1, text: 'Assist emergency personnel who may arrive on the scene.' }
        ]
    },
    {
        titulo: 'ENGINEERING',
        datos: [
        { done: false, id: 1, text: 'Monitor the emergency generator to ensure it is operating properly.  Check fuel levels in the main tank and ensure there is adequate fuel in the reserve tank.' },
        { done: false, id: 1, text: 'Make sure all generator transfer switches are activated.' },
        { done: false, id: 1, text: 'Reduce load on the generator to service only emergency equipment.' },
        { done: false, id: 1, text: 'Shut down unnecessary heavy equipment, switches, air conditioning/heating and other equipment that may be damaged when power is returned.' },
        { done: false, id: 1, text: 'Contact the elevator maintenance company to assist in retrieving people from the elevators.' },
        { done: false, id: 1, text: 'Shut off main power switches so that power can be restored systematically.' },
        { done: false, id: 1, text: 'Procure portable generators and contact electrical contractors as appropriate.' },
        { done: false, id: 1, text: 'Locate and repair the damage if possible.' },
        { done: false, id: 1, text: 'Report to the Fire Command Station periodically with progress updates.' }

        ]
    },
    {
        titulo: 'ACCOUNTING',
        datos: [
        { done: false, id: 1, text: 'Secure all cash registers. Lock money in the safe.' },
        { done: false, id: 1, text: 'Report to the Fire Station Command Station and be prepared to assist as needed.' },
        { done: false, id: 1, text: 'Limit cash handling.' }
        ]
    },
    {
        titulo: 'DEPARTMENT HEADS',
        datos: [
        { done: false, id: 1, text: 'Ensure all computers and heavy electrical equipment are turned off.' },
        { done: false, id: 1, text: 'Keep track of costs for insurance purposes.' },
        { done: false, id: 1, text: 'Assist the General Manager as needed.' },
        { done: false, id: 1, text: 'Report all progress, requests for assistance and information to the Command Post.' },
        { done: false, id: 1, text: 'Consider establishing a “Safe Room” in a meeting room or ballroom where guests can gather and receive information if the outage is expected to be lengthy.' },
        { done: false, id: 1, text: 'Place flip charts with status updates in common areas such as the lobby for guest reference.' }

        ]
    },
    {
        titulo: 'KITCHEN MANAGER',
        datos: [
        { done: false, id: 1, text: 'Turn off all ovens and cooking tools.' },
        { done: false, id: 1, text: 'If the power outage will be lengthy, prepare a three-day cold menu using perishable items first.' },
        { done: false, id: 1, text: 'Be prepared to request a refrigerated truck from purchasing. Park the truck in the loading dock to store perishable items.' },
        { done: false, id: 1, text: 'Secure liquor and food storage areas.' }

        ]
    },
    {
        titulo: 'HOUSEKEEPING',
        datos: [
        { done: false, id: 1, text: 'Remove carts from the hallways.' },
        { done: false, id: 1, text: 'Report to the Fire Command Station and be prepared to assist as needed.' },
        
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