//cambiar 
//TodoCtrl_2_1
//localStorageDemo_2_1
//simpleFactoryx_2_1

demoApp.controller('TodoCtrl_2_1', function ($scope, $http, localStorageService, simpleFactoryx_2_1) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_1');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_1', simpleFactoryx_2_1.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_1');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_1', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_1", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.1 BOMB THREAT",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'OPERATOR',
            texto:'<strong>IF A BOMB – OR WHAT IS POSSIBLY A BOMB – IS FOUND, DO NOT OPERATE RADIOS AND CELLPHONES IN THE IMMEDIATE VICINITY.  </strong><strong>IF A SUSPICIOUS ITEM IS DISCOVERED, DO NOT TOUCH OR MOVE IT.  THE JOB OF THE SEARCH TEAM IS ONLY TO FIND THE BOMB AND REPORT IN.  LEAVE THE REMOVAL TO LAW ENFORCEMENT EXPERTS.</strong>',
     
         datos: [
          { done: false, id: 1, text: 'If a bomb threat is received, complete as much of the “Bomb Threat Checklist” as possible while the caller is still on the line (Checklist attached).' },
             { done: false, id: 1, text: 'Call Security with the exact threat and specifics of the call.' },
             { done: false, id: 1, text: 'Notify the Emergency Response Team, Security and other radio users (e.g. Managers and Engineering) via telephone.  DO NOT announce over the radio that there is a bomb threat. ' }

         ]
     },
     {
         titulo: 'SECURITY',
         datos: [
     { done: false, id: 1, text: 'Notify the Director of Security or Security Manager.' },
     { done: false, id: 1, text: 'Contact law enforcement authorities with the specifics of the call.' },
     { done: false, id: 1, text: 'Begin a search of the property if instructed to do so by the Security Director, General Manager or MOD.  See “Common Areas to Search” and “Search Techniques” (attached).' },
     { done: false, id: 1, text: 'Maintain a log of associates involved, times, and all activities.' },
     { done: false, id: 1, text: 'Once a Command Post has been established by the Director of Security, keep the Post updated on the status of the search.' },
     { done: false, id: 1, text: 'Be prepared to initiate evacuation procedures if required.' }

         ]
     },
     {
         titulo: 'DIRECTOR OF SECURITY OR SECURITY MANAGER',
         datos: [
     { done: false, id: 1, text: 'Establish a Command Post and communications channels (land telephone lines most preferred) between the Post, search parties and local authorities.  Stay at the Command Post to direct team members and receive calls.' },
     { done: false, id: 1, text: 'Determine from law enforcement authorities if they will conduct the search or if Hotel is to conduct the search.' },
     { done: false, id: 1, text: 'If Hotel is to conduct the search, dispatch the Emergency Response Team to search the property.' },
     { done: false, id: 1, text: 'Dispatch searchers in teams of two if possible.  Give searchers the complete information received from the caller.  Issue search cards to each team (“Common Areas to Search” and “Search Techniques”).' },
     { done: false, id: 1, text: 'Ensure that each search team member has a flashlight.  (Flashlights are kept in the Security Office).' },
     { done: false, id: 1, text: 'Establish a deadline for discontinuing the search.' },
     { done: false, id: 1, text: 'Instruct search parties to immediately report any suspicious objects.  Search team members SHOULD NOT touch or move any item.  ' },
     { done: false, id: 1, text: 'Be prepared to evacuate the hotel.  If an evacuation is necessary, an announcement should be made to guests that the hotel is “experiencing an emergency situation.”  DO NOT say that a bomb threat has been received.' },
     { done: false, id: 1, text: 'Cooperate with law enforcement authorities at all times.  If a device has not been found and the area is considered secure by law enforcement, issue an “All Clear” notice to hotel associates.' }

         ]
     },

    {

        titulo: 'COMMON AREAS TO SEARCH',
        datos: [
	{ done: false, id: 1, text: 'Elevator shafts • Crawl spaces' },
	{ done: false, id: 1, text: 'Locker rooms • Trash cans' },
	{ done: false, id: 1, text: 'Planters • Drawers/cabinets' },
	{ done: false, id: 1, text: 'Under stairwells	•	Closets' },
	{ done: false, id: 1, text: 'Vents/ducts	•	Laundry chutes' },
	{ done: false, id: 1, text: 'Fire extinguisher/Hose cabinets	•	Telephone boxes/room' },
	{ done: false, id: 1, text: 'False ceilings	•	Inside hollow bases' },
	{ done: false, id: 1, text: 'Lobby	•	Meeting rooms' },
	{ done: false, id: 1, text: 'Service/storage areas	•	Restrooms & paper towel dispensers' },
	{ done: false, id: 1, text: 'Carts	•	Toilet water tanks' },
	{ done: false, id: 1, text: 'Behind curtains	•	Vending machines' },
	{ done: false, id: 1, text: 'Under/behind furniture	•	Luggage' },
	{ done: false, id: 1, text: 'Automobiles 	•	Mail Room (for letter bombs)' }

        ]
    },

     {
         titulo: 'SEARCH TECHNIQUES',
         datos: [
         { done: false, id: 1, text: 'Develop search parameters.' },
         { done: false, id: 1, text: 'Be alert to sounds and smells.' },
         { done: false, id: 1, text: 'Develop a systematic pattern of searching from right to left.' },
         { done: false, id: 1, text: 'Divide the area in half.  During the first visual sweep: Enter the room and go to opposite ends of the area.  Stand still and become attuned to the sounds, smells and vibrations of the area.  Look around and notice anything new or obviously out of place' },
         { done: false, id: 1, text: 'During the second visual sweep: Search from floor to waist height.  Search should begin at the given point and work outward, one person going to the right – the other going to the left.  Search everything from the floor to waist height.  Continue around the area until the search team meets.' },
         { done: false, id: 1, text: 'During a third visual sweep: Search from waist height to the ceiling.  The search team should return to the starting point and again work outward – one to the right, the other to the left.' },
         { done: false, id: 1, text: 'During the fourth visual sweep: Search drapes, doors, false ceilings, etc.' },
         { done: false, id: 1, text: 'Look for anything that looks unusual or out of place (e.g., packages, pieces of pipe, fuses, lumps of clay-type plastic, etc.).' },
         { done: false, id: 1, text: 'Avoid changing the environment.  If going into a dark area, do not turn on the lights.  Use a flashlight.' },
         { done: false, id: 1, text: 'DO NOT TOUCH any suspicious item(s).' }
         ]
     },
     {
         titulo: 'IF A BOMB OR SUSPICIOUS ITEM IS LOCATED',
         datos: [
     { done: false, id: 1, text: 'Immediately contact the Command Post, via land telephone line (if by radio, do not use it in the immediate vicinity of the suspicious item), and report findings.' },
     { done: false, id: 1, text: 'Immediately evacuate the area including the floor above and the floor below.' },
     { done: false, id: 1, text: 'Cordon off the area to prevent any unauthorized entry.' },
     { done: false, id: 1, text: 'Assist police and fire department personnel as needed.' },
     { done: false, id: 1, text: 'Security Director should direct other search team members to re-assemble at the Command Post.' },
     { done: false, id: 1, text: 'Initiate printing of the Registered Guest list.' },
     { done: false, id: 1, text: 'Cease checking in guests.' },
     { done: false, id: 1, text: 'Follow instructions given by authorities.' }

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