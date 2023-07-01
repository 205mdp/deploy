//cambiar 
//TodoCtrl_2_17
//localStorageDemo_2_17
//simpleFactoryx_2_17

demoApp.controller('TodoCtrl_2_17', function ($scope, $http, localStorageService, simpleFactoryx_2_17) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_17');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_17', simpleFactoryx_2_17.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_17');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_17', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_17", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.17 STRUCTURAL COLLAPSE",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'FRONT DESK',
            
         
               
                datos: [
                { done: false, id: 1, text: 'Print out a list of all guests and associates, particularly any lists that would help rescue workers identify people in the collapsed area.  Provide to the Emergency Response Team.' },
                { done: false, id: 1, text: 'Answer guest questions and reassure them that everything is being done to handle the situation. Remain calm.' },
                { done: false, id: 1, text: 'Help keep guests away from unstable debris that could pose additional dangers such as falling objects and broken glass.' }
                ]
            },
            {
                titulo: 'GENERAL MANAGER',
                datos: [
                { done: false, id: 1, text: 'Instruct Security to set-up an Emergency Command Post. Ensure the Command Post is stocked with emergency supplies.' },
                { done: false, id: 1, text: 'Establish and staff a “Missing Persons Reporting Area” where guests and associates can officially report anyone they fear may be in the collapsed area. Regularly submit updates to emergency response teams.' },
                { done: false, id: 1, text: 'Request that guests report back if they discover the person they believed was missing was not harmed in the collapse.' },
                { done: false, id: 1, text: 'As guests and associates are found, update the list.' },
                { done: false, id: 1, text: 'Assign an associate to relay information about specific persons as they are found. ' },
                { done: false, id: 1, text: 'Have Managers report to the Emergency Command Post for instructions. Each Manager should report any missing associates who were on-duty during the collapse. Submit these names to emergency response teams.' },
                { done: false, id: 1, text: 'Remind all associates, guests and rescue workers that the area is stable and they should be careful to avoid glass and objects that could fall.' },
                { done: false, id: 1, text: 'Direct Food and Beverage to supply food and water to rescue workers.' },
                { done: false, id: 1, text: 'Assist emergency personnel as they arrive on the scene.' },
                { done: false, id: 1, text: 'Direct Managers to keep track of costs as much as possible during the emergency.' },
                { done: false, id: 1, text: 'Remain calm and encourage associates to stay calm and reassure guests.' },
                { done: false, id: 1, text: 'In the event evacuation is required, follow Evacuation procedures in Section E1.2.' },
                { done: false, id: 1, text: 'Contact the Division Representative to the Crisis Response Team.' }

                ]
            },
            {
                titulo: 'OPERATOR',
                datos: [
                { done: false, id: 1, text: 'If Senior Management and Department Heads are not on the property, begin contacting them at home. Request that they report to the Hotel.' },
                { done: false, id: 1, text: 'Be prepared to assist in contacting outside agencies.' },
                { done: false, id: 1, text: 'Keep phone lines and radio channels open for emergency communication.' },
                { done: false, id: 1, text: 'Reassure guests that the Hotel is doing everything possible to handle the situation.' },
                { done: false, id: 1, text: 'Notify Hotel Central Reservations and request that they handle all reservation requests during the emergency.' }


                ]
            },

            {
                titulo: 'DIRECTOR OF SECURITY OR DESIGNEE',
                datos: [
                { done: false, id: 1, text: 'Establish and staff an Emergency Command Post. Gather emergency supplies such as flash lights, first-aid kits, hard hats and two-way radios and bring them to the Command Post. ' },
                { done: false, id: 1, text: 'Obtain a list of guests and associates from the Front Desk.' },
                { done: false, id: 1, text: 'Cordon off the area and ensure that only authorized personnel are allowed to enter.' },
                { done: false, id: 1, text: 'Cordon off or remove additional debris such as glass and fallen objects that could pose additional risks. ' },
                { done: false, id: 1, text: 'Be aware as you work around the scene that the area is unstable. ' },
                { done: false, id: 1, text: 'Assist emergency response crews as needed.' },
                { done: false, id: 1, text: 'Direct guests and associates with questions about missing persons to the “Missing Persons Reporting Area.”' },
                { done: false, id: 1, text: 'Keep the General Manager regularly informed of status updates.' },
                { done: false, id: 1, text: 'Patrol the area and assist special needs guests or mildly injured persons.' },
                { done: false, id: 1, text: 'Answer guest questions with calmly-stated, factual information as it is available.' },
                { done: false, id: 1, text: 'Complete an incident report after the emergency has been resolved.' }

                ]
            },
            {
                titulo: 'ENGINEERING',
                datos: [	
                { done: false, id: 1, text: 'Immediately shut off water, power and gas to the collapsed area of the building.' },
                { done: false, id: 1, text: 'Obtain building plans and submit to emergency response teams.' },
                { done: false, id: 1, text: 'Remove loose debris that could pose additional hazards, such as broken glass and unstable objects that could fall.' },
                { done: false, id: 1, text: 'Assist emergency response crews.' },
                { done: false, id: 1, text: 'Help emergency response crews obtain additional rescue equipment such as cranes and generators, if necessary.' },
                { done: false, id: 1, text: 'Update General Manager with status information regularly.' }

                ]
            },
            {
                titulo: 'HOUSEKEEPING',
                datos: [
                { done: false, id: 1, text: 'Gather all clean blankets and bring them to the Command Post.' },
                { done: false, id: 1, text: 'Help distribute blankets to affected associates and guests. ' }
                ]
            },
            {
                titulo: 'FOOD AND BEVERAGE',
                datos: [
                { done: false, id: 1, text: 'Supply bottled water and food to rescue workers and affected guests and associates.' }
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