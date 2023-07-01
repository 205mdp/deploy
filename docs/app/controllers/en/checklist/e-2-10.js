//cambiar 
//TodoCtrl_2_10
//localStorageDemo_2_10
//simpleFactoryx_2_10

demoApp.controller('TodoCtrl_2_10', function ($scope, $http, localStorageService, simpleFactoryx_2_10) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_10');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_10', simpleFactoryx_2_10.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_10');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_10', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_10", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.10 FOODBORNE ILLNESS/DEATH",
    version: "1.0",
    fecharevision: "27-08-2014",
    revisadopor: "Ron Ziv",
    elementos: [{
        titulo: 'DIRECTOR OF FOOD & BEVERAGE OR DEPARTMENT MANAGER',
     
       
        datos: [
	{ done: false, id: 1, text: 'Inform the General Manager as soon as possible.' },
	{ done: false, id: 1, text: 'Immediately discontinue serving any items that may be suspected of causing the illness.' },
	{ done: false, id: 1, text: 'Interview associates who may have prepared the food or served the guests who are ill to determine not only the foodservice details but also whether any associates were sick when they were preparing or serving the food.' },
	{ done: false, id: 1, text: 'Ensure that hotel food service staff reacts in a low-key, professional manner so as not to alarm guests needlessly.' },
	{ done: false, id: 1, text: 'If contacted by local health authorities, immediately notify the General Manager.' },
	{ done: false, id: 1, text: 'Cooperate with local authorities at all times.  Do not destroy or remove items that may be important to an investigation.' },
	{ done: false, id: 1, text: 'DO NOT comment about any previous incidents of food illness to those who are ill or to other guests.' },
	{ done: false, id: 1, text: 'Assist the General Manager in gathering all necessary information from those who have become ill (see General Manager duties below).' },
	{ done: false, id: 1, text: 'Maintain a copy of the “Suspected Foodborne Illness Questionnaire” (sample attached) and any other pertinent information concerning the outbreak for a period of two years.  If serving seafood, maintain tags and/or box label if box is still available.' }

 ]
        },
 {
        titulo: 'GENERAL MANAGER ',
 
        datos: [
	{ done: false, id: 1, text: 'Contact the person(s) who have become ill as soon as possible and attempt – at a minimum – to gather the following information requested on the attached “Suspected Foodborne Illness Questionnaire.” ' },
	{ done: false, id: 1, text: 'Be sympathetic to those who are ill; don’t minimize their condition.' },
	{ done: false, id: 1, text: 'Assure guests that the situation is being investigated promptly.' },
	{ done: false, id: 1, text: 'Notify the Division Representative to the Corporate Crisis Response Team with specifics of the incident.' },
	{ done: false, id: 1, text: 'Fax copies of all information and completed forms (such as those attached) to the Corporate Office.' },
	{ done: false, id: 1, text: 'Cooperate with local health authorities if they become involved.' },
	{ done: false, id: 1, text: 'After the incident has been closed, follow up with guests who became ill to express concern and determine their well-being.' }
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