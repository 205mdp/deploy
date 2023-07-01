//cambiar 
//TodoCtrl_1_3
//localStorageDemo_1_3
//simpleFactoryx_1_3

demoApp.controller('TodoCtrl_1_3', function ($scope, $http, localStorageService, simpleFactoryx_1_3) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_1_3');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_1_3', simpleFactoryx_1_3.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_1_3');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_1_3', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_1_3", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:1.3 EVACUATION",
    version: "1.0",
    fecharevision: "27-08-2014",
    revisadopor: "Ron Ziv",
    elementos: [{
        titulo: 'GENERAL EVACUATION GUIDELINES',
        texto: 'The primary factor in determining whether or not a hotel evacuation will be successful is planning.  In other words, hotels should have evacuation plans ready and in place – including primary and secondary assembly areas – for all guests and associates.  There is no time to develop plans once an emergency has begun; evacuation plans must be created beforehand and all associates should be familiar with them as part of their job duties.',

        datos: [
				{ done: false, id: 1, text: 'Prepare for evacuation upon hearing the fire alarm or being given verbal instructions to evacuate.' },
				{ done: false, id: 1, text: 'In a fire, use fire stairwells – never the elevators.  Elevators are fine in a non-fire related evacuation.' },
				{ done: false, id: 1, text: 'Walk.  Do not run.  Stay calm.' },
				{ done: false, id: 1, text: 'Ensure that fire doors are not blocked open.' },
				{ done: false, id: 1, text: 'Assist guests and other associates, including those with disabilities, as needed.' },
				{ done: false, id: 1, text: 'Proceed to the designated evacuation assembly areas.' },
				{ done: false, id: 1, text: 'Associates should stay with their departmental colleagues once in the assembly areas so that a head count can be performed.' },
				{ done: false, id: 1, text: 'Always place your hand on the back of a door before opening it.  If hot, do not open and find an alternate route.' },
				{ done: false, id: 1, text: 'If you enter a smoke-filled area, seek another exit route if possible.' },
				{ done: false, id: 1, text: 'If you must pass through an area filled with smoke, cover your nose and mouth with a towel or piece of clothing, dampened with water if possible.  Crawl low along the wall to the nearest exit.' },
				{ done: false, id: 1, text: 'If unable to evacuate due to a blocked exit or other barrier, attempt to enter a guest room or other area free from fire and smoke.  Immediately call Security and advise them of your location.' },
				{ done: false, id: 1, text: 'Once in the guest room, fill the bathtub with as much water as possible.  Soak towels, sheets, etc. and place them in the cracks between the door and the floor.  Turn off the heat and air conditioning.  Cover the vent.  DO NOT open the window or try to break glass unless directed by fire department personnel.' },
				{ done: false, id: 1, text: 'Immediately report anyone stranded to Security, the Emergency Response Team, or fire/police personnel. WORK AREA PREPARATION' },
				{ done: false, id: 1, text: 'If an evacuation is imminent – and it is safe to attempt – the following tasks should be undertaken:' },
				{ done: false, id: 1, text: 'All equipment should be returned to its storage areas.' },
				{ done: false, id: 1, text: 'Cashiers should drop all monies in the General Cashier’s safe.' },
				{ done: false, id: 1, text: 'Food and Beverage should ensure that all food and liquor storage rooms are secure.' },
				{ done: false, id: 1, text: 'Lock down as much as possible to prevent vandalism and theft during the emergency.' }
			 ]
        },
 {
        titulo: 'OPERATOR',
        datos: [
	{ done: false, id: 1, text: 'Be prepared to begin calling all guest rooms if an evacuation is ordered.' },
	{ done: false, id: 1, text: 'Obtain the occupancy list from Guest Reception.  Give a copy to Security.' },
	{ done: false, id: 1, text: 'Notify the Emergency Response Team of any guests requiring special assistance (for example, the disabled, elderly, young children, people with language barriers).' },
	{ done: false, id: 1, text: 'Provide clear instructions to guests.  Advise guests to use only the stairwells to exit – not the elevators.  Direct guests to the predetermined guest assembly area(s).' },
	{ done: false, id: 1, text: 'Keep phone lines open for emergency communication.  Limit the length of calls.' },
	{ done: false, id: 1, text: 'Do not accept outside calls, except on the emergency phone.' },
	{ done: false, id: 1, text: 'Be prepared to contact management staff if required.' },
	{ done: false, id: 1, text: 'Relay pertinent information to the Emergency Response Team.' }

 ]
        },
	
 {
        titulo: 'DIRECTOR OF SECURITY ',
        datos: [
	{ done: false, id: 1, text: 'Initiate evacuation procedures if that has not already been done.' },
	{ done: false, id: 1, text: 'Ensure that the General Manager (or other senior manager) makes the evacuation announcement over the public address system or available communication process if that has not been done.' },
	{ done: false, id: 1, text: 'Ensure that associates respond to their designated areas to assist in the evacuation.  Advise associates of any guest needing special assistance and direct that they be assisted first.' },
	{ done: false, id: 1, text: 'Ensure that room master keys are given to associates to assist in the evacuation.' },
	{ done: false, id: 1, text: 'Dispatch members of the Emergency Response Team to evacuate all guests requiring special assistance.' },
	{ done: false, id: 1, text: 'Assign associates to the base of the stairwells to direct guests to the assembly area(s).  (Note:  An alternate area may be necessary depending upon circumstances and the location of the emergency).' },
	{ done: false, id: 1, text: 'Respond to calls for medical attention, advising the fire department of any medical emergency.' },
	{ done: false, id: 1, text: 'Ensure the complete evacuation of affected areas.' },
	{ done: false, id: 1, text: 'Notify senior management if they are not on the property. ' },
	{ done: false, id: 1, text: 'Assist guests in re-entering the hotel once the emergency is over.' }

 ]
        },
 {
        titulo: 'SECURITY (OR SECURITY DESIGNEE)',
        datos: [
	{ done: false, id: 1, text: 'Immediately proceed to the affected area and direct the evacuation of guests and associates.' },
	{ done: false, id: 1, text: 'Give the order to evacuate if the General Manager or Director of Security is not available.' },
	{ done: false, id: 1, text: 'Notify the Emergency Response Team to assist with the evacuation.' },
	{ done: false, id: 1, text: 'Ensure that appropriate announcements are made over the public address system or available communication process.' },
	{ done: false, id: 1, text: 'Be prepared to establish an Evacuation Command Post.' },
	{ done: false, id: 1, text: 'Keep the Emergency Response Team updated, via radio.' },
	{ done: false, id: 1, text: 'Escort fire/police personnel once they’ve arrived on the property.' },
	{ done: false, id: 1, text: 'Provide fire/police with an occupancy list, if necessary.  Note those rooms with guests requiring special assistance.' },
	{ done: false, id: 1, text: 'Advise fire/police of any associates or guests not accounted for.' },
	{ done: false, id: 1, text: 'Assist fire/police as needed.' },
	{ done: false, id: 1, text: 'At the conclusion of the incident, prepare the appropriate incident report with photos or diagrams.' }

 ]
        },

 
 {
        titulo: 'GENERAL MANAGER ',
        datos: [
	{ done: false, id: 1, text: 'Make the evacuation announcement over the public address system or available communication process if that has not already been done.  (Sample announcement:  “May I have you attention please?  Hotel management and the fire department have determined, for your safety, that you should exit your room and calmly move toward the nearest stairwell exit.  Do not use the elevator.  All guests should proceed to the (designated assembly area).”  Repeat the message.' },
	{ done: false, id: 1, text: 'Instruct Guest Reception to secure cash registers, folios, credit card vouchers, safe deposit boxes and luggage storage areas.' },
	{ done: false, id: 1, text: 'If time permits, visit the guest assembly area(s) to talk with and assist guests.' },
	{ done: false, id: 1, text: 'Be prepared to supply emergency relief items to guests, such as blankets.' },
	{ done: false, id: 1, text: 'Be prepared for media inquiries.  However, it is preferable to direct media to fire and police department personnel for information and comment.' },
	{ done: false, id: 1, text: 'Issue an “All Clear” at the conclusion of the incident.' },
	{ done: false, id: 1, text: 'Obtain Go Kit, if applicable.' },
	{ done: false, id: 1, text: 'Contact the Divisional Contact for Corporate Crisis Team.' }


 ]
        },
 {
        titulo: 'ENGINEERING',
        datos: [
	{ done: false, id: 1, text: 'Return all elevators to the lobby in the event of a fire-related evacuation only.  Elevators should be locked off once returned.' },
	{ done: false, id: 1, text: 'Proceed to the affected location if safe and assist in the evacuation of guests and associates.' },
	{ done: false, id: 1, text: 'Shut down electrical equipment and utilities, if needed.  (When restarting, ensure all gas equipment is manually turned off and inspect for gas buildup.  Turn on kitchen exhaust fans.)' },
	{ done: false, id: 1, text: 'Keep the Emergency Response Team updated, via radio.' },
	{ done: false, id: 1, text: 'Assist fire/police as needed.' }
	
 ]
        },
	
 {
        titulo: 'DEPARTMENT HEADS OR SUPERVISORS',
        datos: [
	{ done: false, id: 1, text: 'Ensure that associate evacuation routes are usable (safe).' },
	{ done: false, id: 1, text: 'Direct associates to leave calmly using the primary evacuation route, or a secondary route if the first is unusable.' },
	{ done: false, id: 1, text: 'Upon arriving at the designated assembly area, determine if all associates are accounted for.' },
	{ done: false, id: 1, text: 'Contact the Evacuation Command Post once the associate count has been completed.  Provide the number of people on duty and the number accounted for.' },
	
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