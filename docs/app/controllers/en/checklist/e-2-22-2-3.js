//cambiar 
//TodoCtrl_2_22_2_3
//localStorageDemo_2_22_2_3
//simpleFactoryx_2_22_2_3

demoApp.controller('TodoCtrl_2_22_2_3', function ($scope, $http, localStorageService, simpleFactoryx_2_22_2_3) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_22_2_3');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_22_2_3', simpleFactoryx_2_22_2_3.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_22_2_3');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_22_2_3', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_22_2_3", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "POST-HURRICANE CHECKLIST:",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'EMERGENCY COMMAND CENTER',
            
            datos: [
            { done: false, id: 1, text: 'Notify the Area Managing Director, Regional Vice President, General Manager and Management Team that an “All Clear” notification has been received indicating that the hurricane is over.' },
            { done: false, id: 1, text: 'Assign teams to assess the property before attempting to assume normal operations.' },
            { done: false, id: 1, text: 'Shut down when directed by the General Manager if the damage is extensive.' }

            ]
        },
        {
            titulo: 'SECURITY',	
            datos: [
            { done: false, id: 1, text: 'Ensure property assessment teams are dispatched to look for remaining hazards and obvious structural damage, loose or dangling electrical power lines or broken sewer and water pipes before allowing associates and guests to move around the property.' },
            { done: false, id: 1, text: 'Provide property assessment teams with cameras and notepads to record damage.' },
            { done: false, id: 1, text: 'Coordinate the submission of all property damage reports to the insurance company.' }
            
            ]
        },
        {
            titulo: 'CUSTOMER RELATIONS',
            datos: [
            { done: false, id: 1, text: 'Ensure associates and guests are advised not to drink from faucets until notified by local officials that the water is safe from contamination.' },
            { done: false, id: 1, text: 'Update guests on potential hazards as they move around the property.' },
            { done: false, id: 1, text: 'Inform guests of operational services as Hotel operations return.' }
            
            ]
        },
        {
            titulo: 'ENGINEERING',
            datos: [
            { done: false, id: 1, text: 'Inspect all wiring, panels, piping and equipment for damage before restoring electricity, gas or water after the storm. Before turning electrical power on, ensure all electrical outlets and equipment throughout the property are completely dry.' },
            { done: false, id: 1, text: 'Separate damaged from undamaged property and keep damaged items on hand until an insurance adjuster has visited the premises.' },
            { done: false, id: 1, text: 'Take an inventory of damaged property.' },
            { done: false, id: 1, text: 'Record damage-related costs and assess the value of the damaged property and the cost of subsequent business interruption. ' }
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