//cambiar 
//TodoCtrl_2_9_2
//localStorageDemo_2_9_2
//simpleFactoryx_2_9_2

demoApp.controller('TodoCtrl_2_9_2', function ($scope, $http, localStorageService, simpleFactoryx_2_9_2) {
	init();
	function init() {
		var tempx = localStorageService.get('localStorageDemo_2_9_2');
		if (tempx == null) {
			localStorageService.add('localStorageDemo_2_9_2', simpleFactoryx_2_9_2.gettodos());
		}
		$scope.todosx = localStorageService.get('localStorageDemo_2_9_2');
	}


	$scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_9_2', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_9_2", function ($http) {
    //////////////////////
    var todotemp = {
    	titulogeneral: "EXPLOSION",
    	version: "1.0",
    	fecharevision: "27-08-2014",
    	revisadopor: "Ron Ziv",
    	elementos: [{
    		titulo: 'General',
    		
    		datos: [
    		{ done: false, id: 1, text: 'Go to the nearest manual fire alarm and activate the device.' },
    		{ done: false, id: 1, text: 'Call the operator from the nearest house phone and give specific details (for example, location, seriousness, injuries, if known).' },
    		{ done: false, id: 1, text: 'If on guest floors, begin evacuating the affected floor first, followed by the floor above and the floor below.' },
    		{ done: false, id: 1, text: 'Instruct guests to go to the designated assembly area.' }
    		]
    	},
    	{
    		titulo: 'OPERATOR',
    		datos: [
    		{ done: false, id: 1, text: 'If an explosion is heard or information about an explosion is received, immediately contact Security giving all known details.' },
    		{ done: false, id: 1, text: 'Operator should answer guest phone calls quickly.  Advise guests the situation is being evaluated.  Tell them to stay in their rooms to await ' },
    		{ done: false, id: 1, text: 'further instructions.' },
    		{ done: false, id: 1, text: 'If given the order to evacuate by the General Manager or Security, start calling occupied rooms to inform guests to evacuate.  The order of the calls should be:  explosion area; one floor above; one floor below; all remaining floors starting with floors above the explosion.  INSTRUCT EVACUEES TO USE FIRE STAIRWELLS, NOT ELEVATORS.' }

    		]
    	},

    	{
    		titulo: 'SECURITY',
    		datos: [
    		{ done: false, id: 1, text: 'Immediately contact local emergency services (9-1-1 in the U.S.) stating hotel address, location/size of explosion, injuries if known, and number of guests at the hotel.  Maintain contact with local emergency services (9-1-1 in the U.S.).' },
    		{ done: false, id: 1, text: 'Dispatch Emergency Response Team to the Explosion Command Post via radio and pager.  Ensure that members of the team respond.' },
    		{ done: false, id: 1, text: 'Give the order to evacuate if the General Manager is not available.' },
    		{ done: false, id: 1, text: 'Instruct Security dispatcher to log all calls made and received.' },
    		{ done: false, id: 1, text: 'Go to the explosion scene, if reasonably safe to do so.  Make note of the extent of the damage and any structurally weak areas.  Relay pertinent information to the Emergency Response Team.' },
    		{ done: false, id: 1, text: 'Assist any injured guests or associates and inform the Emergency Response Team of the extent of injuries.' },
    		{ done: false, id: 1, text: 'Attempt to determine the cause of the explosion.  In particular, be aware of any smell of natural gas.  If gas is smelled, leave and evacuate the area immediately.' },
    		{ done: false, id: 1, text: 'Ask the Operator if any threatening messages or phone calls have been received.  If so, notify emergency personnel.' },
    		{ done: false, id: 1, text: 'Make appropriate announcements to guests and staff over the public address system or available communication process.' },
    		{ done: false, id: 1, text: 'Notify Guest Reception staff to assist guests with evacuation.' },
    		{ done: false, id: 1, text: 'Notify Valet/Bell staff to clear the Front Entrance for arriving emergency vehicles.' },
    		{ done: false, id: 1, text: 'Instruct the Emergency Response Team to meet responding emergency personnel and direct them to the scene.' },
    		{ done: false, id: 1, text: 'Give emergency personnel any equipment they made need (for example, fire phones, elevator keys).  Assist as needed.  ' },
    		{ done: false, id: 1, text: 'Patrol affected areas to control the scene and protect guest and hotel property, if safe to do so.' },
    		{ done: false, id: 1, text: 'Assist guests and secure the area as they evacuate floors.  Close fire doors, but do not lock.' },
    		{ done: false, id: 1, text: 'Attempt to keep phone lines open for emergency communication.' },
    		{ done: false, id: 1, text: 'Once the area has been deemed safe, make the appropriate announcements to guests and associates if the General Manager is not available.' },
    		{ done: false, id: 1, text: 'Walk the stairwells and perimeter of the property to ensure that guests are notified.  Assist them in re-entering the hotel.' },
    		{ done: false, id: 1, text: 'Investigate the scene, take pictures, and prepare a damage estimate.  Notify Corporate Security.' }


    		]
    	},
    	{
    		titulo: 'GENERAL MANAGER ',
    		datos: [
    		{ done: false, id: 1, text: 'Acknowledge radio transmission by Security and proceed to the Explosion Command Post.' },
    		{ done: false, id: 1, text: 'Order that an evacuation announcement be made over the public address system or available communication process, if not already done.' },
    		{ done: false, id: 1, text: 'Assign associates to the fire exits leading outside the building to direct guests to the assembly area.' },
    		{ done: false, id: 1, text: 'Instruct Guest Reception to secure cash registers, folios, credit card vouchers and safe deposit boxes.' },
    		{ done: false, id: 1, text: 'Assist responding emergency personnel by providing hotel staff for escorts, if needed.' },
    		{ done: false, id: 1, text: 'Issue an “All Clear” at the conclusion of the incident.' },
    		{ done: false, id: 1, text: 'Be prepared to supply emergency relief items to guests, such as blankets.' },
    		{ done: false, id: 1, text: 'Seek out guests, express concern and verify their well-being.' },
    		{ done: false, id: 1, text: 'Attempt to discreetly shield guests from the media if possible, but do not prevent guests from talking to the media if they wish to do so.' },
    		{ done: false, id: 1, text: 'Ensure necessary clean up and replacement of damaged items.' },
    		{ done: false, id: 1, text: 'Arrange to have barricades placed around damaged areas to lessen the risk of injury to guests and associates.' },
    		{ done: false, id: 1, text: 'Be prepared for media inquiries.  However, it is preferable to direct media to fire and police department personnel for information and comment.' },
    		{ done: false, id: 1, text: 'Contact the Corporate Risk Management Department and Corporate Legal Division with specifics of the fire.' }
    		
    		]
    	},

    	{
    		titulo: 'ENGINEERING',
    		datos: [
    		{ done: false, id: 1, text: 'Acknowledge radio transmission by Security and proceed to the Explosion Command Post.  If instructed by Security or the General Manager, proceed to the explosion area.' },
    		{ done: false, id: 1, text: 'Take appropriate tools (for example, fire extinguisher, bolt cutters, flashlight, etc.)' },
    		{ done: false, id: 1, text: 'Elevators should be returned to the main floor to be available to the fire department.' },
    		{ done: false, id: 1, text: 'Shut down electrical equipment, electricity and gas, if needed.' },
    		{ done: false, id: 1, text: 'Monitor smoke evacuation and air-handling units.' },
    		{ done: false, id: 1, text: 'Stand by to assist evacuating guests.  Direct guests to the evacuation assembly area.  If on guest floors assisting with evacuation, direct guests to fire stairwells.  Ensure that fire doors are closed, but not locked.' },
    		{ done: false, id: 1, text: 'Follow instructions of the General Manager and assist as needed.' },
    		{ done: false, id: 1, text: 'Assist emergency personnel as needed.' }
    		]
    	},
    	{
    		titulo: 'GUEST RECEPTION AND SERVICES',
    		datos: [
    		{ done: false, id: 1, text: 'Prepare a list of all occupied rooms, making note of those occupied by the disabled, elderly and/or children.  Give to the Emergency Response Team.' },
    		{ done: false, id: 1, text: 'Assist with evacuation if the General Manager or Security orders one.' },
    		{ done: false, id: 1, text: 'Ensure that the front ramp, driveway and entrances to the hotel are cleared of all vehicles.  In addition, clear areas around fire hydrants and sprinkler connections.' },
    		{ done: false, id: 1, text: 'Fix lobby and other doors to enable emergency personnel to enter with their equipment.' },
    		{ done: false, id: 1, text: 'When emergency personnel arrive, give explicit instructions where the explosion occurred and the best way to reach it.' },
    		{ done: false, id: 1, text: 'Have Housekeeping ready with key cards to all rooms in affected areas, to minimize the need for breaking down locked doors.' },
    		{ done: false, id: 1, text: 'DO NOT allow anyone, except emergency personnel, to use the elevators.' },
    		{ done: false, id: 1, text: 'Assist guests, visitors and other associates as needed.' },
    		{ done: false, id: 1, text: 'Prepare for securing of cash registers, folios, credit card vouchers and safe deposit boxes.  Actual securing should not begin until ordered by the General Manager or their designee.' },
    		{ done: false, id: 1, text: 'Secure luggage storage areas.' }

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