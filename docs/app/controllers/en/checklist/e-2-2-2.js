//cambiar 
//TodoCtrl_2_2_2
//localStorageDemo_2_2_2
//simpleFactoryx_2_2_2

demoApp.controller('TodoCtrl_2_2_2', function ($scope, $http, localStorageService, simpleFactoryx_2_2_2) {
	init();
	function init() {
		var tempx = localStorageService.get('localStorageDemo_2_2_2');
		if (tempx == null) {
			localStorageService.add('localStorageDemo_2_2_2', simpleFactoryx_2_2_2.gettodos());
		}
		$scope.todosx = localStorageService.get('localStorageDemo_2_2_2');
	}


	$scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_2_2', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_2_2", function ($http) {
    //////////////////////
    var todotemp = {
    	titulogeneral: "E:2.2.2	VIOLENT DISTURBANCE",
    	version: "1.0",
    	fecharevision: "27-08-2014",
    	revisadopor: "Ron Ziv",
    	elementos: [{
    		titulo: 'EQUIPMENT NEEDED',
    		datos: [
    		{ done: false, id: 1, text: 'Flashlights' },
    		{ done: false, id: 1, text: 'Two-way radios' },
    		{ done: false, id: 1, text: 'Loud speakers (bullhorns)' },
    		{ done: false, id: 1, text: 'Stanchions' },
    		{ done: false, id: 1, text: 'Fire extinguishers' },
    		{ done: false, id: 1, text: 'Plywood (to cover windows)' },
    		{ done: false, id: 1, text: 'First-aid supplies' },
    		{ done: false, id: 1, text: 'Still and video cameras' },
    		{ done: false, id: 1, text: 'Metal can with lid' },
    		{ done: false, id: 1, text: 'Flame retardant gloves' }

    		]
    	},

    	{
    		titulo: 'OPERATOR',
    		datos: [
    		{ done: false, id: 1, text: 'Immediately contact Security with the details of the demonstration and approximate number of people involved.' },
    		{ done: false, id: 1, text: 'Notify the Emergency Response Team of the disturbance and its location.' },
    		{ done: false, id: 1, text: 'Secure the door to the telephone room, allowing only authorized personnel to enter.' },
    		{ done: false, id: 1, text: 'Obtain the location of any disabled guests who may need special attention or assistance.  Provide this information to Security.' },
    		{ done: false, id: 1, text: 'Notify senior management (at home if they are not on the property).' },
    		{ done: false, id: 1, text: 'Contact all department heads or supervisors on duty and have them report to the Command Post for briefing.' }
    		]
    	},
    	{
    		titulo: 'SECURITY',
    		datos: [
    		{ done: false, id: 1, text: 'Immediately report to the Security Office or Command Post (if one has already been established) and notify the Director of Security.' },
    		{ done: false, id: 1, text: 'Collect all two-way radios and loud speakers (bullhorns) and place them in the Command Post.' },
    		{ done: false, id: 1, text: 'If needed, contact the hotel’s radio vendor to obtain emergency rental of additional two-way radios.' },
    		{ done: false, id: 1, text: 'Keep all radio transmissions short and concise.  Transmit as much information as possible by land-line telephone in order to keep the radio channels open for emergency situations.' },
    		{ done: false, id: 1, text: 'Relocate guests sitting near windows in restaurants and lounges.' },
    		{ done: false, id: 1, text: 'Bring all hotel associates inside the building.  Secure the associate entrance and post the area with a security guard.' },
    		{ done: false, id: 1, text: 'Secure the loading dock area.  If deliveries are due, have Purchasing contact vendors to reschedule.' },
    		{ done: false, id: 1, text: 'Chain dumpsters so they can’t be moved.' },
    		{ done: false, id: 1, text: 'Control usage of elevators to the extent reasonable.' },
    		{ done: false, id: 1, text: 'Post Security observers in strategic locations to monitor protestors’ activity and provide information to the Command Post.' },
    		{ done: false, id: 1, text: 'Ensure that first-aid supplies are ready and available.  Establish a first-aid room if appropriate.' },
    		{ done: false, id: 1, text: 'If requested by senior management or police to make an announcement to guests and associates, use the public address system or available communication process.  (Sample announcement: “Ladies and Gentlemen, your attention please.  There is a disturbance outside the hotel.  For your safety, please return to your room and stay inside.  Hotel staff, please report to your supervisor.  We will keep you advised.”)  Provide status reports as directed by senior management or police.' },
    		{ done: false, id: 1, text: 'If needed, arrange for additional security officers through a contract security agency.' },
    		{ done: false, id: 1, text: 'Videotape and/or take still photographs of the disturbance as it is occurring.' },
    		{ done: false, id: 1, text: 'Attempt to identify protestors who damage property or trespass.' },
    		{ done: false, id: 1, text: 'Schedule 12-hour work shifts, if needed.' },
    		{ done: false, id: 1, text: 'Once the disturbance is over, prepare an incident report.  Ensure that all evidence is preserved and noted on the report.  Include photographs and diagrams if available.  Note any action taken by protestors against hotel guests, associates or property.' }


    		]
    	},
    	{
    		titulo: 'DIRECTOR OF SECURITY',	
    		datos: [
    		{ done: false, id: 1, text: 'With the help of Security staff, assess the situation and contact local emergency services (9-1-1 in the U.S.).  Give police the full details of the situation, including the approximate number of protestors involved, exact location of the disturbance, any injuries observed, weapons involved, damage, etc.' },
    		{ done: false, id: 1, text: 'Provide any assistance requested by police.' },
    		{ done: false, id: 1, text: 'Notify General Manager and Division Representative to Corporate Crisis Team.' },
    		{ done: false, id: 1, text: 'Establish a Command Post and assign duties to the Emergency Response Team.' },
    		{ done: false, id: 1, text: 'Assign hotel staff to all entrance and exit points, including fire exits.  Secure entrances and direct the flow of traffic to one or two locations that can be best controlled.' },
    		{ done: false, id: 1, text: 'Ensure that lobby control is scheduled on a 24-hour basis.' },
    		{ done: false, id: 1, text: 'Initiate 24-hour key check.' },
    		{ done: false, id: 1, text: 'Ensure security of the hotel water supply, electrical generating station, and vital equipment.  If these are in adjacent buildings, secure these facilities.' },
    		{ done: false, id: 1, text: 'Have Banquet staff bring all available stanchions to the Command Post.' },
    		{ done: false, id: 1, text: 'Ensure that all unused meeting space is secured.' },
    		{ done: false, id: 1, text: 'Have Front Office agents secure their banks in the vaults.  No balancing will be required at this time if it appears protestors may enter the hotel.' },
    		{ done: false, id: 1, text: 'Have the general cashier secure the safe and all records.' },
    		{ done: false, id: 1, text: 'Have Valet staff move all vehicles from the driveways and close garage entrances.' },
    		{ done: false, id: 1, text: 'Close bars and lounges.  Remove liquor from street-level stores and bars/lounges.' },
    		{ done: false, id: 1, text: 'Do not check in anyone who does not have a confirmed reservation.' },
    		{ done: false, id: 1, text: 'Print and distribute the current guest lists to members of the Emergency Response Team as well as staff assigned to lobby control.  Print lists by guest last name and by room number.' },
    		{ done: false, id: 1, text: 'Assign an official “Recorder” to document all information regarding the disturbance.  Be prepared to assign Recorders for 24-hour coverage.' },
    		{ done: false, id: 1, text: 'Ensure that all closed circuit televisions are being monitored continuously and recorded.  Ensure that tapes are preserved and are not being taped over.  If tapes show incidents, copy to disk and maintain per document retention policy.' },
    		{ done: false, id: 1, text: 'If needed, assign additional associates to assist the Front Office with phone calls from guests.' },
    		{ done: false, id: 1, text: 'Consider hiring outside transportation for guests and associates.' },
    		{ done: false, id: 1, text: 'Have Concierge or Front Office agents maintain contact with the airport for flight delay or cancellation information.  Assist guests with alternate travel plans if possible.' },
    		{ done: false, id: 1, text: 'If Sales and Marketing staff are on the property, ensure they are maintaining contact with meeting planners and groups.' },
    		{ done: false, id: 1, text: 'Provide accommodations for associates unable to leave the property.' },
    		{ done: false, id: 1, text: 'Assign a Security officer to videotape any interaction with demonstrators (to prevent allegations of wrongdoing and minimize litigation).' }

    		]
    	},
    	
    	{
    		titulo: 'ENGINEER',
    		datos: [
    		{ done: false, id: 1, text: 'Report to the Security Office or Command Post for instructions.' },
    		{ done: false, id: 1, text: 'Secure HVAC outlets/intakes.' },
    		{ done: false, id: 1, text: 'Obtain additional fire extinguishers and place them in the Security Office and Command Post.' },
    		{ done: false, id: 1, text: 'Assist in securing entrance and exit points, including fire exits.' },
    		{ done: false, id: 1, text: 'Be prepared to place plywood over windows.' },
    		{ done: false, id: 1, text: 'If police use tear gas, be prepared to start or stop air-handling units.' },
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