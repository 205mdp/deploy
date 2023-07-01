//cambiar 
//TodoCtrl_2_18
//localStorageDemo_2_18
//simpleFactoryx_2_18

demoApp.controller('TodoCtrl_2_18', function ($scope, $http, localStorageService, simpleFactoryx_2_18) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_18');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_18', simpleFactoryx_2_18.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_18');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_18', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_18", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.18	SUSPICIOUS ITEM OR PACKAGE",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
           titulo: 'SECURITY',
           texto:'If you become aware of an item or package that seems suspicious or out-of-place, notify Security immediately. Do not touch or move the item. Move guests and personnel as far away as possible from the item. ',

        
            datos: [
            { done: false, id: 1, text: 'Respond immediately to the location of the item. ' },
            { done: false, id: 1, text: 'Cordon off the area and move guest and associates away from the area.' },
            { done: false, id: 1, text: 'If possible, determine the nature of the item without touching it.' },
            { done: false, id: 1, text: 'Do not shake, open or empty the contents of any suspicious envelope or package.' },
            { done: false, id: 1, text: 'Do not sniff, touch, taste or look closely at it or at any contents that may have spilled.' },
            { done: false, id: 1, text: 'Do not carry the package or envelope, show it to others or allow others to examine it.' },
            { done: false, id: 1, text: 'If the item must be handled or opened in order to determine what it is, contact the appropriate law enforcement authorities.' },
            { done: false, id: 1, text: 'If the suspicious item is believed to be a bomb, follow Bomb Threat (17.1) procedures' },
            { done: false, id: 1, text: 'Assist law enforcement as needed.' },
            { done: false, id: 1, text: 'Respectfully question associates or guest who may be aware of where the item came from. Report any evidence or important information to law enforcement.' },
            { done: false, id: 1, text: 'Complete a report on the incident that documents what was found and any evidence that could help in an investigation.' }

            ]
        },
        {
            titulo: 'GENERAL MANAGER ',
            datos: [
            { done: false, id: 1, text: 'Ensure guests and associates do not go near the item.' },
            { done: false, id: 1, text: 'Assist Security as needed.' },
            { done: false, id: 1, text: 'Contact the appropriate authorities if Security has not done this already.' },
            { done: false, id: 1, text: 'Reassure guests that everything is being done to protect their safety.' }
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