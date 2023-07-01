//cambiar 
//TodoCtrl_2_22_1
//localStorageDemo_2_22_1
//simpleFactoryx_2_22_1

demoApp.controller('TodoCtrl_2_22_1', function ($scope, $http, localStorageService, simpleFactoryx_2_22_1) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_22_1');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_22_1', simpleFactoryx_2_22_1.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_22_1');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_22_1', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_22_1", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.22	WEATHER EMERGENCIES - E:2.22.1 FLOOD",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'SECURITY',
            texto: 'CAUTION: If a shock hazard exists in the affected area. DO NOT ENTER until Engineering has shut off ALL power to the area.',
            

             
                datos: [
                { done: false, id: 1, text: 'Complete Pre-Flood Checklist at the back of this section.' },
                { done: false, id: 1, text: 'Assess the situation to determine:' ,
                datos: [
                { done: false, id: 1, text: 'Where is the location and extent of the flooding?' },
                { done: false, id: 1, text: 'Are there any injuries or dangers to residents or Hotel staff?' },
                { done: false, id: 1, text: 'Are there any other dangers, such as an Electric shock hazard?' },
                { done: false, id: 1, text: 'Is the flooding contained or is it spreading?' },
                { done: false, id: 1, text: 'Can emergency supplies reach the area?' }
                ]
            },
            { done: false, id: 1, text: 'Notify the following departments:' ,
            datos: [
            { done: false, id: 1, text: 'Emergency Response Team' },
            { done: false, id: 1, text: 'Housekeeping Department' },
            { done: false, id: 1, text: 'Engineering Department' },
            { done: false, id: 1, text: 'Guest Services/Valet' }
            ]
        },	
        { done: false, id: 1, text: 'Control communications by assuring guests and associates that the situation has been reported and response crews are in route.' },
        { done: false, id: 1, text: 'Coordinate and assist with distributing emergency supplies if necessary.' },
        { done: false, id: 1, text: 'Cordon off area until there is no danger' },
        { done: false, id: 1, text: 'Prepare an incident report with photos of damage' },
        { done: false, id: 1, text: 'Refer to instructions for the General Manager and assist as needed.' }

        ]
    },
    {
        titulo: 'DIRECTOR OF SECURITY ',
        datos: [
        { done: false, id: 1, text: 'Respond to the scene and assess the situation by determining the cause of the flood and current dangers.' },
        { done: false, id: 1, text: 'Take immediate action to prevent further damage to the property( i.e., request wet vacuums, mops, buckets and necessary clean-up equipment).' },
        { done: false, id: 1, text: 'Call an outside water damage team, if necessary, for water extraction.' },
        { done: false, id: 1, text: 'Cordon off affected areas with “wet floor” signs and relocate guests.' },
        { done: false, id: 1, text: 'Check all adjacent and lower floors for water damage.' },
        { done: false, id: 1, text: 'Advise all departments to closely track all costs associated with the damage, including labor expenses, particularly if water damage appears to exceed the property insurance deductible.' },
        { done: false, id: 1, text: 'NOTE: Property loss exceeding the Hotel property insurance deductible should be reported to the corporate risk management department (or the owner’s insurance company, if applicable) as soon as possible. ENGINEER' },
        { done: false, id: 1, text: 'Assist General Manager as needed.' },
        { done: false, id: 1, text: 'Be prepared to immediately shut-off electrical power to the affected area(s).' },
        { done: false, id: 1, text: 'Attempt to identify the source and take appropriate action to abate flooding if possible. ' }
        ]
    },
    {
        titulo: 'GENERAL MANAGER',
        datos: [
        { done: false, id: 1, text: 'Interface with local emergency management authorities for guidance on whether to shelter guests in place or evacuate, and if evacuation is recommended determine location.' },
        { done: false, id: 1, text: 'If there are injuries or fatalities, or significant damage to the Hotel, contact the Division Representative to the Crisis Response Team.' }
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