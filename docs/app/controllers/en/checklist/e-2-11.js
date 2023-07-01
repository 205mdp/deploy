//cambiar 
//TodoCtrl_2_11
//localStorageDemo_2_11
//simpleFactoryx_2_11

demoApp.controller('TodoCtrl_2_11', function ($scope, $http, localStorageService, simpleFactoryx_2_11) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_11');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_11', simpleFactoryx_2_11.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_11');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_11', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_11", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.11 HAZARDOUS MATERIAL/CHEMICAL SPILL",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'OPERATOR',

            datos: [
        { done: false, id: 1, text: 'If notified of a chemical or HAZMAT spill, contact Security immediately.  Provide the location, name of the chemical and extent of the spill, if known.' },
        { done: false, id: 1, text: 'Notify the Emergency Response Team and provide all information known.' }
            ]
        },
     {
         titulo: 'SECURITY',
         datos: [
     { done: false, id: 1, text: 'Immediately respond to the scene with the Material Safety Data Sheet book (MSDS).' },
     { done: false, id: 1, text: 'Notify Engineering, via radio or pager, that there is a chemical or HAZMAT spill.  Give the location, name of the chemical (if known) and extent of the spill.' },
     { done: false, id: 1, text: 'Notify the Director of Security.' },
     { done: false, id: 1, text: 'If necessary, calmly inform guests of the situation through the hotel’s public address system or available communication process.  Evacuate and isolate the area around the spill.' },
     { done: false, id: 1, text: 'Provide first aid to affected individuals.' },
     { done: false, id: 1, text: 'Obtain required personal protective equipment (PPE) as outlined in the MSDS.' },
     { done: false, id: 1, text: 'Perform traffic and crowd control functions.' },
     { done: false, id: 1, text: 'Be prepared to contact local authorities, providing them with all information known.  Request that a HAZMAT unit be dispatched.' }


         ]
     },
     {
         titulo: 'DIRECTOR OF SECURITY ',
         datos: [
     { done: false, id: 1, text: 'Immediately respond to the scene and assess the situation.' },
     { done: false, id: 1, text: 'Direct Security to contact local emergency services (9-1-1 in the U.S.), if necessary.' },
     { done: false, id: 1, text: 'Alert Engineering of the spill if that has not already been done.' },
     { done: false, id: 1, text: 'Attempt to identify the chemical or HAZMAT involved.  Use caution when approaching.' },
     { done: false, id: 1, text: 'Follow the instructions in the MSDS.' },
     { done: false, id: 1, text: 'Ensure that the affected area has been evacuated and cordoned off.' },
     { done: false, id: 1, text: 'Establish a first-aid room if necessary.' },
     { done: false, id: 1, text: 'Establish a Command Post if necessary.' },
     {
         done: false, id: 1, text: 'In the U.S., contact the following governmental agencies if the situation warrants:',
         datos: [
     { done: false, id: 1, text: 'Federal Government' },
     { done: false, id: 1, text: 'Action:  Environmental Protection Agency (EPA)' },
     { done: false, id: 1, text: 'Coordination:  Federal Emergency Management Agency (FEMA)' }

         ]
     },

     { done: false, id: 1, text: 'State Government' },
     { done: false, id: 1, text: 'Action:  Department of Environmental Protection' },
     { done: false, id: 1, text: 'Coordination:  Division of Emergency Management (Note: State government agency names may vary from state to state).' },
     { done: false, id: 1, text: 'If appropriate, notify the local fire department to assist in clean-up efforts.' }

         ]
     },

     {
         titulo: 'ENGINEERING',
         datos: [
     { done: false, id: 1, text: 'Immediately respond to the scene.' },
     {
         done: false, id: 1, text: 'Locate the following items:',
         datos: [
     { done: false, id: 1, text: 'Nearest safety shower – if available' },
     { done: false, id: 1, text: 'Nearest eyewash' },
     { done: false, id: 1, text: 'Chemical Spill Response Kit' },
         ]
     },
     { done: false, id: 1, text: 'Obtain from Security the required personal protective equipment (PPE) as outlined in the MSDS.' },
     { done: false, id: 1, text: 'Follow instructions for clean up as directed in the MSDS.  Decontaminate the area.  (Note: Contaminated materials must be disposed of at a permitted hazardous waste management facility).' },
     { done: false, id: 1, text: 'Ventilate the affected area(s) if appropriate.' },
     { done: false, id: 1, text: 'Isolate the fumes by closing vents leading to other areas of the hotel.' },
     { done: false, id: 1, text: 'Assist responding authorities as needed.' }
         ]
     },
     {
         titulo: 'GENERAL MANAGER',
         datos: [
     { done: false, id: 1, text: 'Contact the Division Representative to the Corporate Crisis Response Team if spill is more than minor or if there are any injuries.' },
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