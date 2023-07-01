//cambiar 
//TodoCtrl_2_22_2_1
//localStorageDemo_2_22_2_1
//simpleFactoryx_2_22_2_1

demoApp.controller('TodoCtrl_2_22_2_1', function ($scope, $http, localStorageService, simpleFactoryx_2_22_2_1) {
	init();
	function init() {
		var tempx = localStorageService.get('localStorageDemo_2_22_2_1');
		if (tempx == null) {
			localStorageService.add('localStorageDemo_2_22_2_1', simpleFactoryx_2_22_2_1.gettodos());
		}
		$scope.todosx = localStorageService.get('localStorageDemo_2_22_2_1');
	}


	$scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_22_2_1', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_22_2_1", function ($http) {
    //////////////////////
    var todotemp = {
    	titulogeneral: "HURRICANE WATCH CHECKLISTS:",
    	version: "1.0",
    	fecharevision: "27-08-2014",
    	revisadopor: "Ron Ziv",
    	elementos: [{
    		titulo: 'SECURITY',
    		
    		datos: [

    		{ done: false, id: 1, text: 'Monitor the storm and notify the General Manager of the alert providing tracking information, the category of the hurricane and the time and status of the alert.' },
    		{ done: false, id: 1, text: 'Determine when and where the Emergency Command Center will be activated. ' },
    		{ done: false, id: 1, text: 'Establish a First-Aid Station.' },
    		{ done: false, id: 1, text: 'Disseminate information about the hurricane to the Management Team.' },
    		{ done: false, id: 1, text: 'Notify Starwood Risk Management.' },
    		{ done: false, id: 1, text: 'Purchase ten disposable cameras and ensure there is an ample supply of film for use after the storm has passed to record any damage.' },
    		{ done: false, id: 1, text: 'Inventory all equipment. Ensure there is plenty of radios, batteries, first-aid kits, emergency vests, foul weather gear, fire extinguishers and flashlights.' },
    		{ done: false, id: 1, text: 'Ensure all Hotel vehicles and backup generators are fully fueled.' },
    		{ done: false, id: 1, text: 'Confirm the Backup Key System for the Electronic Key System is operational and there are plenty of backup keys if the system provides for such a backup procedure.' },
    		{ done: false, id: 1, text: 'Confirm contact numbers for all security personnel.' },
    		{ done: false, id: 1, text: 'Compile an up-to-date list of associates who are CPR and First Aid Certified.' },
    		{ done: false, id: 1, text: 'Notify all departments to secure files, payroll records, confidential information and other company information and assets.' },
    		{ done: false, id: 1, text: 'Compile a list of disabled guests or those who may need additional assistance in the event of a hurricane.' },
    		{ done: false, id: 1, text: 'Notify Transportation to secure unused Hotel vehicles in a designated vehicle staging area.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' }
    		]
    	},
    	{
    		titulo: 'GENERAL MANAGER',
    		datos: [
    		{ done: false, id: 1, text: 'Review personnel status. Make a list of associates on vacation, sick leave or scheduled to be off during the hurricane.' },
    		{ done: false, id: 1, text: 'Call necessary off-duty personnel needed for Hurricane preparations and request that they report to the Hotel.' },
    		{ done: false, id: 1, text: 'Determine which associates will need to stay on the property for the duration of the storm. Encourage all associates who can be spared to take care of their homes and families.' },
    		{ done: false, id: 1, text: 'Notify associates that they can make reservations for their families to stay on the premises if they feel they will be safer at the Hotel rather than at home.' },
    		{ done: false, id: 1, text: 'Assist Security in obtaining emergency supplies.' },
    		{ done: false, id: 1, text: 'Provide Security with necessary guest and associate lists.' },
    		{ done: false, id: 1, text: 'Meet with associates to discuss emergency procedures.' },
    		{ done: false, id: 1, text: 'Obtain a list of nearby shelters.' },
    		{ done: false, id: 1, text: 'Use the public address system or other means to inform guests of the Hurricane Warning and encourage them to remain calm. Reassure them that the Hotel will keep them updated and instruct them on the proper procedures.' },
    		{ done: false, id: 1, text: 'Designate a safe area for guests, Hotel associates and their families if necessary.' },
    		{ done: false, id: 1, text: 'Assist Security in designating the Emergency Command Center.' },
    		{ done: false, id: 1, text: 'Direct Food and Beverage to ensure there is enough non-perishable food on hand to feed guests and associates for three days after the storm. Instruct them to ensure there is enough bottled drinking water on hand.' },
    		{ done: false, id: 1, text: 'Direct Engineering to obtain plywood, tape and sandbags.' },
    		{ done: false, id: 1, text: 'Ensure all department heads are tracking losses and expenses.' },
    		{ done: false, id: 1, text: 'Ensure that all luggage storerooms are secured.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' }

    		]
    	},
    	{
    		titulo: 'CUSTOMER RELATIONS',
    		datos: [
    		{ done: false, id: 1, text: 'Have scripts prepared for Operators to follow in response to guest inquiries.' },
    		{ done: false, id: 1, text: 'Have informational voicemails prepared to be disseminated to keep guests informed. Direct them to the proper television channels for continuous updates.' },
    		{ done: false, id: 1, text: 'Establish the Associate Hotline to keep associates advised of current information and the Hotel’s operating schedule.' },
    		{ done: false, id: 1, text: 'Request that guests secure their valuables in either their room safes or the Front Desk safety deposit boxes.' },
    		{ done: false, id: 1, text: 'Instruct guests to fill their bathtubs with fresh cold water in the event the water supply is closed off for a long period of time. Ask them to close draperies in the event windows shatter.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' }
    		]
    	},
    	{
    		titulo: 'OPERATORS',
    		datos: [
    		{ done: false, id: 1, text: 'Make update announcements as needed.' },
    		{ done: false, id: 1, text: 'Answer guest questions.' },
    		{ done: false, id: 1, text: 'Assist the General Manager in keeping everyone informed and in calling in off-duty staff as needed.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' }

    		]
    	},
    	{
    		titulo: 'ENGINEERING',
    		datos: [
    		{ done: false, id: 1, text: 'Help Security in bringing in all hurricane and emergency supplies.' },
    		{ done: false, id: 1, text: 'Inspect and prepare fire equipment.' },
    		{ done: false, id: 1, text: 'Establish a special team to prepare property for hurricane including boarding windows and placing sandbags at entrances.' },
    		{ done: false, id: 1, text: 'Top off all generator fuel tanks.' },
    		{ done: false, id: 1, text: 'Check all rooftops and ensure everything is secure.' },
    		{ done: false, id: 1, text: 'Check emergency lighting throughout the property.' },
    		{ done: false, id: 1, text: 'Assist in moving unused vehicles to secure location.' },
    		{ done: false, id: 1, text: 'Ensure all communication radios are fully charged.' },
    		{ done: false, id: 1, text: 'Verify where First Aid Station will be located.' },
    		{ done: false, id: 1, text: 'Take down flags and transportable signs throughout the property.' },
    		{ done: false, id: 1, text: 'Remove tennis and basketball court wind screens.' },
    		{ done: false, id: 1, text: 'Shut off all fountains and waterfalls.' },
    		{ done: false, id: 1, text: 'Direct all contractors to remove loose equipment and supplies.' },
    		{ done: false, id: 1, text: 'Designate and clearly mark the elevators that will remain operating on generator power.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' }

    		]
    	},
    	{
    		titulo: 'AREA HOUSEKEEPING/LAUNDRY',
    		datos: [
    		{ done: false, id: 1, text: 'Move all outdoor balcony and patio furniture indoors.' },
    		{ done: false, id: 1, text: 'Establish a First Aid Station. Put out cots, blankets and towels.' },
    		{ done: false, id: 1, text: 'Prepare water extraction vacuum to handle minor flooding.' },
    		{ done: false, id: 1, text: 'Clean as many towels and linens as possible.' },
    		{ done: false, id: 1, text: 'Close all drapes in unoccupied rooms.' },
    		{ done: false, id: 1, text: 'Identify the shut down time for laundry operations and inform the Emergency Command Center.' },
    		{ done: false, id: 1, text: 'Fill bathtubs in unoccupied rooms.' },
    		{ done: false, id: 1, text: 'Move all exterior trash cans indoors.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' }

    		]
    	},
    	{
    		titulo: 'FRONT DESK',	
    		datos: [
    		{ done: false, id: 1, text: 'Ensure all flashlights are working and First Aid boxes are full. Request replenished supplies from Security if needed.' },
    		{ done: false, id: 1, text: 'Ensure bell staff have an adequate stock of umbrellas and rain gear including emergency vests.' },
    		{ done: false, id: 1, text: 'Assist Security and the General Manager in compiling lists of all disabled guests and those who may require special assistance.' },
    		{ done: false, id: 1, text: 'Help Security and the General Manager compile a list of all associates who have CPR or First Aid Certification.' },
    		{ done: false, id: 1, text: 'Assist Security and the General Manager in compiling a list of all associates on vacation, sick-leave or off-duty during the expected storm period.' },
    		{ done: false, id: 1, text: 'Ensure the staff is familiar with manual check-in and check-out procedures.' },
    		{ done: false, id: 1, text: 'Identify available rooms, out-of-order rooms and maintenance rooms for possible occupancy by Hotel staff and families.' },
    		{ done: false, id: 1, text: 'Print an arrival/departure list for the following seven days and provide copies to the Emergency Command Center, Security, Engineering, General Manager and Customer Relations.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' }
    		
    		]
    	},
    	{
    		titulo: 'FOOD AND BEVERAGE',
    		datos: [
    		{ done: false, id: 1, text: 'Ensure there is an adequate supply of non-perishable food items to last a minimum of three days after the hurricane.' },
    		{ done: false, id: 1, text: 'Ensure there is an adequate supply of drinking water available.' },
    		{ done: false, id: 1, text: 'Order dry ice in the event of a power outage for refrigeration.' },
    		{ done: false, id: 1, text: 'Ensure staff is familiar with manual check procedures including menus, calculators, manual receipts and credit card phone numbers.' },
    		{ done: false, id: 1, text: 'Order a supply of disposable products such as paper plates, plastic forks and knives and any other items that will reduce the use of the fresh water supply.' },
    		{ done: false, id: 1, text: 'Ensure all ice is stored in the freezers. Fill all available containers with water and place in the freezer in the event water supply is lost. Turn freezers and coolers to coldest settings.' },
    		{ done: false, id: 1, text: 'Maintain a normal cleaning schedule.' },
    		{ done: false, id: 1, text: 'Close outlets that do not have a back-up generator.' },
    		{ done: false, id: 1, text: 'Arrange meals for associates remaining on the property and advise the Emergency Command Center. Serve all meals cafeteria style.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' }

    		]
    	},
    	{
    		titulo: 'ACCOUNTING',
    		datos: [
    		{ done: false, id: 1, text: 'Advise corporate of potential impact of a shut-down.' },
    		{ done: false, id: 1, text: 'Prepare a five-day forecast to all departments for provisions and staff planning.' },
    		{ done: false, id: 1, text: 'Input associate reservation requests as approved by the General Manager.' },
    		{ done: false, id: 1, text: 'Back-up computer systems to diskettes. Place properly-labeled diskettes in vault.' },
    		{ done: false, id: 1, text: 'Be prepared to assist in contacting arrivals to advise of current status and potential closure of Hotel.' },
    		{ done: false, id: 1, text: 'Obtain plastic to cover computer terminals to protect them from water damage.' },
    		{ done: false, id: 1, text: 'Record the date and time that each item on the checklist is completed and submit to the Emergency Command Center.' }

    		]
    	},
    	{
    		titulo: 'EMERGENCY COMMAND CENTER',
    		datos: [
    		{ done: false, id: 1, text: 'Prepare for activation as specified by Security and the General Manager.' },
    		{ done: false, id: 1, text: 'Ensure all necessary equipment and materials are located in the Emergency Command Center.' },
    		{ done: false, id: 1, text: 'Test all emergency communications and equipment.' },
    		{ done: false, id: 1, text: 'Upon activation, announce to all departments using the quickest method available.' },
    		{ done: false, id: 1, text: 'Advise all departments to begin Hurricane Procedure checklists.' },
    		{ done: false, id: 1, text: 'Broadcast the latest information about the storm and current alert status.' },
    		{ done: false, id: 1, text: 'Initiate contact with community Emergency officials.' },
    		{ done: false, id: 1, text: 'Check and verify emergency phone number list.' },
    		{ done: false, id: 1, text: 'Gather all information from departments.' },
    		{ done: false, id: 1, text: 'Keep a running log of activity, events and efforts.' },
    		{ done: false, id: 1, text: 'Report directly to the General Manager.' }
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