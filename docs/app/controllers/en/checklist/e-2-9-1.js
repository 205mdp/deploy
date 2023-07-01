//cambiar 
//TodoCtrl_2_9_1
//localStorageDemo_2_9_1
//simpleFactoryx_2_9_1

demoApp.controller('TodoCtrl_2_9_1', function ($scope, $http, localStorageService, simpleFactoryx_2_9_1) {
	init();
	function init() {
		var tempx = localStorageService.get('localStorageDemo_2_9_1');
		if (tempx == null) {
			localStorageService.add('localStorageDemo_2_9_1', simpleFactoryx_2_9_1.gettodos());
		}
		$scope.todosx = localStorageService.get('localStorageDemo_2_9_1');
	}


	$scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_9_1', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_9_1", function ($http) {
    //////////////////////
    var todotemp = {
    	titulogeneral: "FIRE",
    	version: "1.0",
    	fecharevision: "27-08-2014",
    	revisadopor: "Ron Ziv",
    	elementos: [{
    		titulo: '<strong>N Notify </strong>the Hotel Operator ', 
    		texto:'The first associate to discover a fire must act quickly and calmly.  There are four action steps to take -- just remember “NEED.”',
    		datos: [
    		{ done: false, id: 1, text: 'Activate the nearest pull station if available.' },
    		{ done: false, id: 1, text: 'Call the hotel operator, the Hotels’ emergency number or Security; give specific details.' },
    		{ done: false, id: 1, text: 'Operator will call the fire department and notify the Emergency Response Team.  ' },
    		]
    	},
    	{
    		titulo: '<strong>E	Evacuate the immediate area!</strong>',
    		datos: [
    		{ done: false, id: 1, text: 'Isolate the fire -- close doors, windows, etc.' },
    		{ done: false, id: 1, text: 'If on guest floors, begin evacuating the affected floor first, followed by the floor above and the floor below.  Assist guests to the nearest stairwell.  Do not use elevators.  Instruct guests to go to the designated assembly area.' },
    		{ done: false, id: 1, text: 'Clear area of all carts and obstructions.' }

    		]
    	},
    	{
    		titulo: '<strong>E	Extinguish fire if reasonably safe to do so.</strong> ',
    		datos: [
    		{ done: false, id: 1, text: 'Only extinguish after the Operator has been notified and the above steps have been taken.' },
    		{ done: false, id: 1, text: 'Locate nearest fire extinguisher and follow the operating instructions on the extinguisher.' },
    		{ done: false, id: 1, text: 'Do not try to fight the fire if it is too big.  Extinguish the fire with a fire extinguisher only if it is safe to do so and you have been trained.  DO NOT ATTEMPT TO FIGHT FIRES ALONE.  DO NOT ATTEMPT TO EXTINGUISH FIRES THAT ARE LARGER THAN ‘WASTEPAPER BASKET’ SIZE.  (Be aware that larger fires can give off toxic fumes).' },
    		{ done: false, id: 1, text: 'If the fire is larger than a wastepaper basket size, isolate the fire by closing the door(s) to the area, and move to safety using the nearest fire exit. ' }

    		]
    	},
    	{
    		titulo: '<strong>D	Direct the Emergency Response Team to the fire.</strong>',
    		datos: [
    		{ done: false, id: 1, text: 'Relay all information to the Emergency Response Team.' },
    		{ done: false, id: 1, text: 'Assist as directed by the Emergency Response Team.' },
    		{ done: false, id: 1, text: 'Be prepared to assist in evacuation or to evacuate yourself.' }
    		]
    	},	

    	{
    		titulo: 'UPON SMELLING SMOKE, AN ASSOCIATE SHOULD:',
    		datos: [
    		{ done: false, id: 1, text: 'Call the Hotel’s emergency number and/or operator and give specific details (for example, room, floor, location). ' },
    		{ done: false, id: 1, text: 'Be prepared to activate the nearest fire alarm.' },
    		{ done: false, id: 1, text: 'Find the nearest fire stairwell.' },
    		{ done: false, id: 1, text: 'Be prepared to assist evacuating guests and associates if necessary.' }

    		]
    	},
    	{

    		titulo: 'IF A FIRE DETECTION DEVICE IS ACTIVATED OR SMOKE IS REPORTED, BUT THERE IS NO CONFIRMATION OF FIRE:',
    		datos: [
    		{ done: false, id: 1, text: 'Security should immediately notify the Emergency Response Team via two-way radio.  Give location and type of device activated.' },
    		{ done: false, id: 1, text: '(Sample announcement:  Code-1, Ballroom, Fire Alarm)' },
    		{ done: false, id: 1, text: 'All members of the Emergency Response Team should acknowledge the radio transmission.' },
    		{ done: false, id: 1, text: 'Appropriate Emergency Response Team members should respond to the location of the alarm and physically check the area for smoke or other cause of alarm.' },
    		{ done: false, id: 1, text: 'All other members of the ERT should respond to the Command Center.' },
    		{ done: false, id: 1, text: 'Engineering should bring appropriate tools (fire extinguisher, bolt cutters, flashlight, etc.).' },
    		{ done: false, id: 1, text: 'If utilizing elevators to respond to the alarm, stop two floors below the fire floor and walk to the fire floor.  (Note, some systems prevent elevator use when alarm sounds.)' },
    		{ done: false, id: 1, text: 'Upon arrival at the alarmed floor, notify the Emergency Response Team by radio. ' },
    		{ done: false, id: 1, text: 'Once at the door to the alarmed floor, feel the door handle or frame to see if it is hot.  If it is hot or smoke is visible, DO NOT OPEN.  Contact local emergency services (9-1-1 in the U.S.) and wait for the fire department to arrive.  The General Manager should begin evacuation procedures.' },
    		{ done: false, id: 1, text: 'If it is not hot, open the door and proceed to the location of the alarm.' },
    		{ done: false, id: 1, text: 'General Manager should request that an announcement be made over the public address system or available communication process for floors affected by the alarm.  (Sample announcement:  Ladies and gentlemen, a fire alarm has been activated on your floor.  We are currently investigating the cause of the alarm and will keep you informed.)' },
    		{ done: false, id: 1, text: 'Begin searching for evidence of fire, smoke, and the activated alarm device.' },
    		{ done: false, id: 1, text: 'If it is determined that the activated alarm was not caused by smoke or fire, await arrival of the Fire Department and their authorization to reset the fire alarm system.' },
    		{ done: false, id: 1, text: 'General Manager should request that appropriate announcements be made over the public address system or available communication process.' }
    		
    		]
    	},
    	{
    		titulo: 'IF THERE IS A CONFIRMED FIRE (REPORTED BY AN ASSOCIATE OR GUEST), OR FIRE IS OBSERVED WHEN RESPONDING TO AN ALARM: OPERATOR',
    		datos: [
    		{ done: false, id: 1, text: 'Immediately contact Security giving all known details.' },
    		{ done: false, id: 1, text: 'Contact Guest Reception and obtain a list of all occupied rooms.  List should highlight all rooms containing disabled, elderly or very young guests.  Have Guest Reception give a copy of the list to the Emergency Response Team at the Fire Command Post once established. ' },
    		{ done: false, id: 1, text: 'If given the order to evacuate by the General Manager or Security, start calling occupied rooms to inform guests to evacuate.  The order of the calls should be:  fire floor; one floor above; one floor below; all remaining floors starting with floors above the fire.  INSTRUCT EVACUEES TO USE FIRE STAIRWELLS, NOT ELEVATORS.' },


    		]
    	},

    	{
    		titulo: 'SECURITY',
    		datos: [
    		{ done: false, id: 1, text: 'Immediately contact local emergency services (9-1-1 in the U.S.) stating hotel address, location/size of fire, and number of guests at the hotel.  Maintain contact with local emergency services (9-1-1 in the U.S.).' },
    		{ done: false, id: 1, text: 'Dispatch Emergency Response Team to the Fire Command Post via radio and pager.  (Example:  Security to General Manager and Engineering.  We have a Code-1 on the 4th floor.  Report to the Fire Command Post immediately).  Ensure that members of the team respond.' },
    		{ done: false, id: 1, text: 'Instruct Security dispatcher to log all calls made and received.' },
    		{ done: false, id: 1, text: 'Go to the fire scene, if reasonably safe to do so.  Relay pertinent information to the Emergency Response Team.  ' },
    		{ done: false, id: 1, text: 'Notify the following departments via radio:  Housekeeping, Banquets.' },
    		{ done: false, id: 1, text: 'Make appropriate announcements to guests and staff over the public address system or available communication process.' },
    		{ done: false, id: 1, text: 'Be prepared to give the order for evacuation if the General Manager is not available.' },
    		{ done: false, id: 1, text: 'Notify Guest Reception staff to standby to assist guests with evacuation if necessary.' },
    		{ done: false, id: 1, text: 'Notify Valet/Bellman staff to clear the Front Entrance for arriving fire department vehicles.' },
    		{ done: false, id: 1, text: 'Instruct the Emergency Response Team to meet responding fire department personnel to advise them of the status of the fire and direct them to the scene.' },
    		{ done: false, id: 1, text: 'Give fire department personnel any equipment they made need (for example, fire phones, elevator keys).  Assist as needed.  ' },
    		{ done: false, id: 1, text: 'Patrol affected areas to control the scene and protect guest and hotel property, if safe to do so.' },
    		{ done: false, id: 1, text: 'Assist guests and secure the area as they evacuate floors.  Close fire doors, but do not lock.' },
    		{ done: false, id: 1, text: 'Respond to guest inquiries and aid injured persons.' },
    		{ done: false, id: 1, text: 'Attempt to keep phone lines open for emergency communication.' },
    		{ done: false, id: 1, text: 'Monitor the fire alarm system.  Report any additional alarms that may have activated to the fire department.' },
    		{ done: false, id: 1, text: 'Once the fire has been extinguished, make the appropriate announcements to guests and associates if the General Manager is not available.' },
    		{ done: false, id: 1, text: 'Upon receiving approval of the fire department, reset the fire alarm system.' },
    		{ done: false, id: 1, text: 'Walk the stairwells and perimeter of the property to ensure that guests are notified.  Assist them in re-entering the hotel.' },
    		{ done: false, id: 1, text: 'Investigate the scene, take pictures, and prepare a damage estimate.  Notify Corporate Security.' }


    		]
    	},
    	{
    		titulo: 'GENERAL MANAGER ',
    		datos: [
    		{ done: false, id: 1, text: 'Acknowledge radio transmission by Security announcing fire and proceed to the Fire Command Post.' },
    		{ done: false, id: 1, text: 'If necessary, order that an evacuation announcement be made over the public address system or available communication process.' },
    		{ done: false, id: 1, text: 'Assign associates to the fire exits leading outside the building to direct guests to the assembly area.' },
    		{ done: false, id: 1, text: 'Instruct Guest Reception to secure cash registers, folios, credit card vouchers and safe deposit boxes.' },
    		{ done: false, id: 1, text: 'Assist responding fire department personnel by providing hotel staff for escorts, if needed.' },
    		{ done: false, id: 1, text: 'Issue an “All Clear” at the conclusion of the incident.' },
    		{ done: false, id: 1, text: 'Be prepared to supply emergency relief items to guests, such as blankets.' },
    		{ done: false, id: 1, text: 'Seek out guests, express concern and verify their well-being.' },
    		{ done: false, id: 1, text: 'Attempt to discreetly shield guests from the media if possible, but do not prevent guests from talking to the media if they wish to do so.' },
    		{ done: false, id: 1, text: 'Ensure necessary clean up and replacement of damaged items.' },
    		{ done: false, id: 1, text: 'Arrange to have barricades placed around areas with significant damage to lessen the risk of injury to guests and associates.' },
    		{ done: false, id: 1, text: 'Deploy Housekeeping staff to minimize any damage to the hotel.  For example, vacuums should be deployed as necessary to lessen any water damage.' },
    		{ done: false, id: 1, text: 'Be prepared for media inquiries.  However, it is preferable to direct media to fire and police department personnel for information and comment.' },
    		{ done: false, id: 1, text: 'Contact the Corporate Risk Management Department and Corporate Legal Division with specifics of the fire.' }

    		]
    	},

    	{
    		titulo: 'ENGINEERING',
    		datos: [
    		{ done: false, id: 1, text: 'Acknowledge radio transmission by Security and proceed to the Fire Command Post.  If instructed by Security or the General Manager, proceed to the fire area.' },
    		{ done: false, id: 1, text: 'Take appropriate tools (for example, fire extinguisher, bolt cutters, flashlight, etc.)' },
    		{ done: false, id: 1, text: 'Elevators should be returned to the main floor to be available to the fire department.' },
    		{ done: false, id: 1, text: 'Shut down electrical equipment, electricity and gas, if needed.' },
    		{ done: false, id: 1, text: 'Monitor smoke evacuation and air-handling units.' },
    		{ done: false, id: 1, text: 'Stand by to assist evacuating guests.  Direct guests to the evacuation assembly area.  If on guest floors assisting with evacuation, direct guests to fire stairwells.  Ensure that fire doors are closed, but not locked.' },
    		{ done: false, id: 1, text: 'Follow instructions of the General Manager and assist as needed.' },
    		{ done: false, id: 1, text: 'Assist fire department personnel as needed.' }
    		]
    	},
    	{
    		titulo: 'GUEST RECEPTION AND SERVICES',
    		datos: [
    		{ done: false, id: 1, text: 'Prepare a list of all occupied rooms, making note of those occupied by the disabled, elderly and/or children.  Give to the Emergency Response Team.' },
    		{ done: false, id: 1, text: 'Assist with evacuation if the General Manager or Security orders one.' },
    		{ done: false, id: 1, text: 'Ensure that the front ramp, driveway and entrances to the hotel are cleared of all vehicles.  In addition, clear areas around fire hydrants and sprinkler connections.' },
    		{ done: false, id: 1, text: 'Fix lobby and other doors to enable firemen to enter with their equipment.' },
    		{ done: false, id: 1, text: 'When the fire department arrives, give explicit instructions where the fire is located and the best way to reach it.' },
    		{ done: false, id: 1, text: 'Have Housekeeping ready with key cards to all rooms in affected areas, to minimize the need for breaking down locked doors.' },
    		{ done: false, id: 1, text: 'DO NOT allow anyone, except emergency personnel, to use the elevators.' },
    		{ done: false, id: 1, text: 'Assist guests, visitors and other associates as needed.' },
    		{ done: false, id: 1, text: 'Prepare for securing of cash registers, folios, credit card vouchers and safe deposit boxes.  Actual securing should not begin until ordered by the General Manager or their designee.' },
    		{ done: false, id: 1, text: 'Secure luggage storage areas.' }

    		]
    	},
    	{
    		titulo: 'IF THE FIRE DETECTION DEVICE IS DETERMINED TO BE A FALSE ALARM:',
    		datos: [
    		{ done: false, id: 1, text: 'Security will stop the fire alarm once authorized to do so by the fire department.' },
    		{ done: false, id: 1, text: 'Security will announce an “All Clear” on the public address system or available communication process.' },
    		{ done: false, id: 1, text: 'Security will reset the alarm once authorized to do so by the fire department.' }
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