//cambiar 
//TodoCtrl_1_6
//localStorageDemo_1_6
//simpleFactoryx_1_6

demoApp.controller('TodoCtrl_1_6', function ($scope, $http, localStorageService, simpleFactoryx_1_6) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_1_6');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_1_6', simpleFactoryx_1_6.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_1_6');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_1_6', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_1_6", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:1.6 SHELTER-IN-PLACE",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'OPERATOR',
            texto: 'Depending upon the nature of the emergency, it may be safer to keep guests and associates inside the Hotel rather than evacuate.  Such events that require shelter-in-place include:',


            datos: [
               { done: false, id: 1, text: 'At the direction of Director of Security or the General Manager, make a specific announcement requesting all guests and associates to remain inside the hotel.  The specific content of the message will be provided.' }
            ]
        },
             {
                 titulo: 'DIRECTOR OF SECURITY',
                 datos: [
             { done: false, id: 1, text: 'Quickly close all exterior doors and windows.' },
             { done: false, id: 1, text: 'Post security personnel or designated associates at all Hotel exits/entrances to ensure guests and associates remain inside and that exterior doors remain closed.' },
             { done: false, id: 1, text: 'Select interior rooms above the ground floor with the fewest windows or vents to temporarily house guests and associates not required to assist with shelter-in-place procedures.  The room or rooms should have adequate space for everyone to be able to sit.  Avoid overcrowding as it may create discomfort and panic.' },
             { done: false, id: 1, text: 'Access to hard-line phone is preferred as cellular service could be overwhelmed by a widespread event.' },
             { done: false, id: 1, text: 'Have access to television to monitor media reports.' },
             { done: false, id: 1, text: 'If there appears to be a danger of explosion outside, close all window shades, blinds or curtains.' },
             { done: false, id: 1, text: 'Seal any air vents into the selected rooms.' },
             { done: false, id: 1, text: 'Keep all entrances to selected rooms closed as much as possible and seal areas around doorways with towels, tablecloths or other malleable material.' },
             { done: false, id: 1, text: 'Gather essential emergency supplies such as non-perishable food, bottled water, battery-powered radio, batteries and first-aid kit.' },
             { done: false, id: 1, text: 'Gather information on all guests and associates present and review status and assist any guests with special needs such as the disabled.' },
             { done: false, id: 1, text: 'Monitor public media and law enforcement to determine when emergency has cleared.  Do not attempt to determine by personal exploration whether threat has ended.' }

                 ]
             },

     {
         titulo: 'ENGINEERING',
         datos: [
     { done: false, id: 1, text: 'Turn off all HVAC equipment to prevent spread of dangerous airborne agents.' },
     { done: false, id: 1, text: 'Using duct tape and plastic sheeting or bags, cover all accessible air inlets which draw outside air into the HVAC system.' },
     { done: false, id: 1, text: 'Assist security in sealing room or rooms selected for shelter-in-place.' }
         ]
     },

     {
         titulo: 'FOOD & BEVERAGE',
         datos: [
     { done: false, id: 1, text: 'If possible without adding personal risk, gather bottled water or other sealed beverages which do not need refrigeration, along with non-perishable food items.' },
     { done: false, id: 1, text: 'Ensure all kitchen heat sources are turned off. ' }

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