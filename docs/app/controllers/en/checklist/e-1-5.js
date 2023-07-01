//cambiar 
//TodoCtrl_1_5
//localStorageDemo_1_5
//simpleFactoryx_1_5

demoApp.controller('TodoCtrl_1_5', function ($scope, $http, localStorageService, simpleFactoryx_1_5) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_1_5');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_1_5', simpleFactoryx_1_5.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_1_5');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_1_5', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_1_5", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:1.5 SEARCH & RESCUE",
    version: "1.0",
    fecharevision: "27-08-2014",
    revisadopor: "Ron Ziv",
    elementos: [{
        titulo: 'DIRECTOR OF SECURITY',
        texto: 'While search and rescue operations may normally be thought of as necessary only in remote or wilderness areas, they may be required in hotel properties as well.  For example, if guests are unaccounted for during a fire emergency or natural disaster; an Alzheimer’s victim or child has wandered off and is missing; a building collapses and surviving victims must be located and recovered.',

        datos: [
	{ done: false, id: 1, text: 'Notify the Emergency Response Team.  Establish a Search Command Post.' },
	{ done: false, id: 1, text: 'Assemble searchers at the Command Post and divide into teams of two, if possible.' },
	{ done: false, id: 1, text: 'Divide the hotel into areas and assign each team a specific area to search.  Assign teams to search the outside of the building(s) as well.' },
	{ done: false, id: 1, text: 'If the search is the result of an explosion or building collapse, divide the affected area(s) into a grid and assign each team a section.' },
	{ done: false, id: 1, text: 'Ensure search teams specifically check on each special needs guest.' },
	{ done: false, id: 1, text: 'If searching is due to a fire emergency, direct searchers first to the immediate fire area, then the floor above the fire, followed by the uppermost floors.  Work down from the upper floors.  (Note:  DO NOT send searchers into an uncontrolled fire).  ' },
	{ done: false, id: 1, text: 'Ensure that each team has a flashlight, two-way radio, and first-aid equipment.' },
	{ done: false, id: 1, text: 'If searching for a missing person, provide each team with a description or photo of the person and relay any pertinent medical information, if known.' },
	{ done: false, id: 1, text: 'When searching for missing persons, check with Guest Reception and taxi dispatchers or operators at the hotel to see if the person may have left the property.' },
	{ done: false, id: 1, text: 'Ensure that the pool area and any/all bodies of water on property are checked.  Check parking garages as well if they are on the property.' },
	{ done: false, id: 1, text: 'Stay at the Command Post at all times to issue instructions and monitor progress.' },
	{ done: false, id: 1, text: 'Check on the condition of rescued victims.  Ensure that medical attention is promptly provided to those needing it.' },
	{ done: false, id: 1, text: 'If large numbers of injured victims are anticipated, be prepared to establish a triage area.' },
	{ done: false, id: 1, text: 'Inform search teams by radio when all areas have been searched and all missing people are believed to be accounted for.  Issue an “All Clear.”' },
	{ done: false, id: 1, text: 'At the conclusion of the search and rescue operation, prepare the appropriate report.' },
	{ done: false, id: 1, text: 'Along with the General Manager, contact the Divisional Representative to the Corporate Crisis Team.' }

 ]
        },

 {
        titulo: 'SEARCH TEAM MEMBERS',
        datos: [
	{ done: false, id: 1, text: 'Use buddy system: search in pairs. ' },
	{ done: false, id: 1, text: 'Search quickly, but do not rush.  Be methodical in your search.' },
	{ done: false, id: 1, text: 'When searching an area, be sure to listen carefully for sounds coming from victims.' },
	{ done: false, id: 1, text: 'Stay in the area to which you have been assigned.  Do not move to other areas unless instructed to do so by the Director of Security or search coordinator.' },
	{ done: false, id: 1, text: 'Stay in close contact by radio with the Search Command Post and other teams.' },
	{ done: false, id: 1, text: 'Report immediately by radio to the Command Post when victims have been found and indicate whether or not they need medical attention.' },
	{ done: false, id: 1, text: 'Look for signs of shock in rescued victims.  Ensure that victims stay warm and calm.' }
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