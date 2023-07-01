//cambiar 
//TodoCtrl_2_22_2_2
//localStorageDemo_2_22_2_2
//simpleFactoryx_2_22_2_2

demoApp.controller('TodoCtrl_2_22_2_2', function ($scope, $http, localStorageService, simpleFactoryx_2_22_2_2) {
	init();
	function init() {
		var tempx = localStorageService.get('localStorageDemo_2_22_2_2');
		if (tempx == null) {
			localStorageService.add('localStorageDemo_2_22_2_2', simpleFactoryx_2_22_2_2.gettodos());
		}
		$scope.todosx = localStorageService.get('localStorageDemo_2_22_2_2');
	}


	$scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_22_2_2', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_22_2_2", function ($http) {
    //////////////////////
    var todotemp = {
    	titulogeneral: "HURRICANE WARNING CHECKLISTS:",
    	version: "1.0",
    	fecharevision: "27-08-2014",
    	revisadopor: "Ron Ziv",
    	elementos: [{
    		titulo: 'SECURITY',
    		
    		datos: [
    		{ done: false, id: 1, text: 'Establish and activate the Emergency Command Center. Inform all associates and guests of its location and request frequent update reports from all departments.' },
    		{ done: false, id: 1, text: 'Patrol property. Ensure all loose gear, supplies and equipment are secured and report to the Emergency Command Center.' },
    		{ done: false, id: 1, text: 'Patrolling Officers make personal contact with disabled guests or those who may need additional assistance. Advise the Emergency Command Center of any special needs.' },
    		{ done: false, id: 1, text: 'Ensure First Aid Station is properly staffed.' },
    		{ done: false, id: 1, text: 'Shut down all equipment in the office and remove all keys from the gates. Remove gate arms to protect them from strong winds.' },
    		{ done: false, id: 1, text: 'Dispatch gate personnel to locations where they are needed.' },
    		{ done: false, id: 1, text: 'Provide Emergency Command Center with a final list of all personnel remaining on the property and note if they have family on the property.' },
    		{ done: false, id: 1, text: 'If an evacuation is necessary, assist in evacuation efforts. Assist in relocating guests to nearest shelters if needed.' },
    		{ done: false, id: 1, text: 'Record the date and time each item on the checklist as completed and submit to the Emergency Command Center.' }

    		]
    	},
    	{
    		titulo: 'GENERAL MANAGER',
    		datos: [
    		{ done: false, id: 1, text: 'Obtain final list of all personnel and guest remaining on the property.  Ensure that everyone is in a safe location.' },
    		{ done: false, id: 1, text: 'Advise remaining guests and associates to move to central hallways during the peak of the storm.' },
    		{ done: false, id: 1, text: 'Remove guests from windward-facing rooms and relocate them to other areas of the Hotel.' },
    		{ done: false, id: 1, text: 'Update guests and associates on the storm’s status.' },
    		{ done: false, id: 1, text: 'Remind all departments to track expenses and losses.' },
    		{ done: false, id: 1, text: 'Ensure Emergency Command Center and First Aid Stations are operational and fully staffed.' },
    		{ done: false, id: 1, text: 'Ensure computer systems have been backed up and shut down.' },
    		{ done: false, id: 1, text: 'Have all departments shut down equipment.' },
    		{ done: false, id: 1, text: 'Ensure Engineering has boarded up windows and placed sandbags.' },
    		{ done: false, id: 1, text: 'Ensure all emergency equipment is operational and has been properly distributed.' },
    		{ done: false, id: 1, text: 'Double check staffing list and send non-essential personnel home.' },
    		{ done: false, id: 1, text: 'If an evacuation is required, assist in evacuation efforts. Assist in relocating guests to nearest shelters if needed.  In some areas, evacuation is not possible as there is no safe place to evacuate guests.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' }
    		]
    	},
    	{
    		titulo: 'CUSTOMER RELATIONS',
    		datos: [
    		{ done: false, id: 1, text: 'Remind all guests to fill their bathtubs with fresh cold water. Encourage guests to close draperies in the event windows shatter.' },
    		{ done: false, id: 1, text: 'Update messages on Associate Hotline to keep associates informed.' },
    		{ done: false, id: 1, text: 'Post status of storm on easel in lobby.' },
    		{ done: false, id: 1, text: 'Distribute disclaimer to guests.' },
    		{ done: false, id: 1, text: 'Provide the Emergency Command Center with a final list of all personnel remaining on the property.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' }
    		]
    	},
    	{
    		titulo: 'ENGINEERING',
    		datos: [
    		{ done: false, id: 1, text: 'Drain one foot of water from all pools and shut off circulating pumps.' },
    		{ done: false, id: 1, text: 'Ensure all pool furniture is stacked and placed inside.' },
    		{ done: false, id: 1, text: 'Move equipment and valuables from ground floor to higher levels if flooding is indicated.' },
    		{ done: false, id: 1, text: 'Move elevators to top floor.' },
    		{ done: false, id: 1, text: 'Shut off gas at all pool heaters and Food and Beverage outlets.' },
    		{ done: false, id: 1, text: 'Verify that all engineering vehicles and gas cans are full of fuel.' },
    		{ done: false, id: 1, text: 'Top off all generator fuel tanks.' },
    		{ done: false, id: 1, text: 'Secure all electrical rooms.' },
    		{ done: false, id: 1, text: 'Ensure all unused equipment is shut down and equipment rooms are locked.' },
    		{ done: false, id: 1, text: 'Provide the Emergency Command Center with a final list of all personnel remaining on the property.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' }

    		]
    	},

    	{
    		titulo: 'FOOD AND BEVERAGE',
    		datos: [
    		{ done: false, id: 1, text: 'Move all food to outlets with generators.' },
    		{ done: false, id: 1, text: 'All items such as flatware should stored and disposable products used.' },
    		{ done: false, id: 1, text: 'Confirm gas is shut off.' },
    		{ done: false, id: 1, text: 'Provide Emergency Command Center with a final list of all personnel remaining on the property.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' }
    		]
    	},
    	{
    		titulo: 'HOUSEKEEPING/LAUNDRY',
    		datos: [
    		{ done: false, id: 1, text: 'Secure all carts in closets. Remove unnecessary items from the hallways.' },
    		{ done: false, id: 1, text: 'Provide Emergency Command Center with a final list of all personnel remaining on the property.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' },
    		{ done: false, id: 1, text: 'Report to the Emergency Command Center to await instructions on where to help if needed.' }
    		]
    	},
    	{
    		titulo: 'FRONT DESK',
    		datos: [
    		{ done: false, id: 1, text: 'Print final downtime, arrival/departure list, availability and room vacancy reports. Compile final report of disabled guests or those requiring special assistance.' },
    		{ done: false, id: 1, text: 'Verify available rooms for staff and their families.' },
    		{ done: false, id: 1, text: 'Be prepared to initiate manual procedures.' },
    		{ done: false, id: 1, text: 'Provide Emergency Command Center with a final list of all personnel remaining on the property.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' }

    		]
    	},
    	{
    		titulo: 'ACCOUNTING',
    		datos: [
    		{ done: false, id: 1, text: 'Verify with all departments that they will have to proceed with manual operations.' },
    		{ done: false, id: 1, text: 'Disable all interfaces.' },
    		{ done: false, id: 1, text: 'Power down systems.' },
    		{ done: false, id: 1, text: 'Cover all computer terminals with plastic.' },
    		{ done: false, id: 1, text: 'Remove any files or boxes from the floor in case of flooding.' },
    		{ done: false, id: 1, text: 'Provide Emergency Command Center with a final list of all personnel remaining on the property.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' }


    		]
    	},
    	{
    		titulo: 'EMERGENCY COMMAND CENTER',
    		datos: [
    		{ done: false, id: 1, text: 'When a Hurricane Warning is announced, immediately notify the General Manager, Management Team and Corporate Offices in accordance with the Corporate Emergency Notification Procedures.' },
    		{ done: false, id: 1, text: 'Ensure all required actions by all departments have been accomplishments. Request completed checklists from each department.' },
    		{ done: false, id: 1, text: 'Obtain final list of all associates and their families remaining on the property.' },
    		{ done: false, id: 1, text: 'Notify the General Manager, Area Managing Director or Regional Vice President and Corporate when all departments have completed preparation.' },
    		{ done: false, id: 1, text: 'Assist guests and associates as needed. Continue to keep everyone updated. ' }
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