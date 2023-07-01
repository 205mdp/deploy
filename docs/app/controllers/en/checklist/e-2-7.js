//cambiar 
//TodoCtrl_2_7
//localStorageDemo_2_7
//simpleFactoryx_2_7

demoApp.controller('TodoCtrl_2_7', function ($scope, $http, localStorageService, simpleFactoryx_2_7) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_7');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_7', simpleFactoryx_2_7.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_7');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_7', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_7", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.7 EARTHQUAKES/TSUNAMI",
    version: "1.0",
    fecharevision: "27-08-2014",
    revisadopor: "Ron Ziv",
    elementos: [{
       titulo: 'OPERATOR',
       
      
        datos: [
	{ done: false, id: 1, text: 'Check the communication systems and begin contacting each department to obtain injury/damage status. Report this to the Emergency Response Team.' },
	{ done: false, id: 1, text: 'Limit length of calls and keep telephone lines for emergencies.' },
	{ done: false, id: 1, text: 'Answer guest questions.' },
	{ done: false, id: 1, text: 'Relay all information on injuries, property damage and elevator status to the Command Post.' }
 ]
        },
 {
        titulo: 'GENERAL MANAGER ',
        datos: [
	{ done: false, id: 1, text: 'Encourage associates and guests to remain calm.' },
	{ done: false, id: 1, text: 'If public address is operational, make appropriate status updates.' ,
	        datos: [
		{ done: false, id: 1, text: 'Example: “Ladies and gentlemen, your attention please. We have just experienced an earthquake. Please remain calm. Be prepared for after shocks. In the event there is more shaking, get under a table or desk, stay away from windows and glass. Please extinguish all cigarettes and do not light any matches or use any type of open flame. Do not enter an elevator. Listen for further announcements.”' },

	 ]
        },
	{ done: false, id: 1, text: 'Contact senior management and call off-duty managers to report to work as needed.' },
	{ done: false, id: 1, text: 'Develop a list of associates on duty and key personnel to be assigned duties. Issue checklists for assignments to departments.' },
	{ done: false, id: 1, text: 'Dispatch luggage attendants to check all public areas, reporting back to the Command Post any injuries or damage.' },
	{ done: false, id: 1, text: 'Have all cashiers secure their banks.' },
	{ done: false, id: 1, text: 'Ensure that all departments are tracking expenses including labor.' },
	{ done: false, id: 1, text: 'Instruct Food & Beverage personnel to prepare a three-day menu using perishable foods first.' },

	{ done: false, id: 1, text: 'Restrict water and ice usage and consider issuing bottled water. Due to possible contamination, tap water should not be used unless inspected by an Engineer.' },
	{ done: false, id: 1, text: 'Contact Operations Officers and Corporate Risk Management.' },
	{ done: false, id: 1, text: 'Contact governmental authorities, including public utilities, if there is damage to building or water, electric or gas lines.' }



 ]
        },
 {
        titulo: 'DIRECTOR OF SECURITY ',
        datos: [
	{ done: false, id: 1, text: 'Organize the Emergency Response Team to inspect the building and determine if there are injuries to guests or associates and assess damage to the Hotel.' },
	{ done: false, id: 1, text: 'Identify disabled guests to ensure that those guests are notified and given assistance as needed.' },
	{ done: false, id: 1, text: 'Establish a Command Post and assign a Senior Manager to remain and assign duties. Request that emergency equipment be brought to the Command Post.' },
	{ done: false, id: 1, text: 'Be prepared to establish a Command Post off-site if Hotel is severely damaged or unstable.' },
	{ done: false, id: 1, text: 'Use a portable radio to monitor the news reports.' },
	{ done: false, id: 1, text: 'Establish a “Safe Room” in a ballroom or meeting space that has already been cleared for safety by engineering.' },
	{ done: false, id: 1, text: 'Prepare for an evacuation if required to do so.' },
	{ done: false, id: 1, text: 'Establish a first-aid room with supplies from storage in the Security Office or similar appropriate and safe area. Instruct Housekeeping to bring cots, pillows, blankets, towels and sheets to the first-aid room. Assign a certified first-aid consultant to manage this room.' },
	{ done: false, id: 1, text: 'Assist all emergency personnel who arrive on the scene.' }
	
 ]
        },
 {
        titulo: 'SECURITY',
        datos: [
	{ done: false, id: 1, text: 'Report to the Security Office or Command Post and verify the status of the fire control panel and elevators.' },
	{ done: false, id: 1, text: 'With the Engineers, gather all emergency equipment (flashlights, bolt cutters, etc.) and take them to the Command Post.' },
	{ done: false, id: 1, text: 'Attend to injured guests and associates, but DO NOT move them if they are seriously injured and not in immediate danger.' },
	{ done: false, id: 1, text: 'Respond to fire alarms.' },

	{ done: false, id: 1, text: 'Assign associates to posts in the Lobby and all entrances. Instruct them to encourage guests to remain in the Hotel unless building is deemed unsafe.' },
	{ done: false, id: 1, text: 'Keep fire lanes open for incoming emergency vehicles.' },
	{ done: false, id: 1, text: 'Cordon off areas identified by Engineering as being unsafe.' },
	{ done: false, id: 1, text: 'Keep the General Manager updated on injuries and damages. ' },
	{ done: false, id: 1, text: 'When situation has been controlled, complete the required incident reports with photos.' }


 ]
        },

 {
        titulo: 'ENGINEERING',
        datos: [
	{ done: false, id: 1, text: 'Shut off all main gas and water lines, including boilers. Investigate possible electrical shorts.' },
	{ done: false, id: 1, text: 'Verify safe operation of emergency generator, electrical system, elevator sprinkler system, domestic water, chill water, hot water, steam generating equipment, etc.' },
	{ done: false, id: 1, text: 'Gather all emergency equipment with security and take it to the Command Post.' },
	{ done: false, id: 1, text: 'Assist in determining a location for the “Safe Room” for guests and associates.' },
	{ done: false, id: 1, text: 'Begin boarding up broken windows.' },
	{ done: false, id: 1, text: 'Be prepared to assist individuals stuck in elevators until the elevator maintenance company can respond.' },
	{ done: false, id: 1, text: 'Begin checking for gas and water leaks, broken electrical wiring or sewage lines when possible. Turn these utilities off at the source if there is damage.' },
	{ done: false, id: 1, text: 'Test and determine if tap water is safe to drink.' },
	{ done: false, id: 1, text: 'Obtain building plans for structural Engineer consultant.' }

 ]
        },
         {
        titulo: "POST-EARTHQUAKE RECOVERY FUNCTIONS",
        texto: 'DAMAGE ASSESSMENT AND IMPACT EVALUATION',

        datos: [
	{ done: false, id: 1, text: 'Initiate a comprehensive survey of the Hotel in coordination with civil authorities and insurance representatives.' },
	{ done: false, id: 1, text: 'Itemize and photograph any structural or nonstructural damages to the building, utility systems and communication systems.' },
	{ done: false, id: 1, text: 'Determine the need for a temporary location and contract services for damage repair and restoration operations.' },
	{ done: false, id: 1, text: 'Summarize the damage survey with estimated repair cost and recovery schedules.' }
 ]
        },
 {
        titulo: 'CLEAN-UP, SECURITY AND SALVAGE OPERATIONS',
        datos: [
	{ done: false, id: 1, text: 'Secure premises from unauthorized access.' },
	{ done: false, id: 1, text: 'Collect and recover vital records and documents if it is safe to do so.' },
	{ done: false, id: 1, text: 'Clean up property and activate decontamination procedures if needed. Protect machinery from further natural element damage.' },
	{ done: false, id: 1, text: 'Establish temporary dumpsites on the premises for debris from building damage structures and equipment.' },
	{ done: false, id: 1, text: 'Secure contractor support to supplement repair crews as they repair utilities, building structure, fire protection systems and machinery as required.' }

 ]
        },
 {
        titulo: 'BUSINESS RESTORATION',
        datos: [
	{ done: false, id: 1, text: 'Obtain engineering and architectural drawings and provide technical direction and project control to personnel responsible for repairs.' },
	{ done: false, id: 1, text: 'Notify utility companies of the extent of the damage and service disruption and request assistance in restoring these services.' },
	{ done: false, id: 1, text: 'Post relocation addresses and phone numbers of alternate sites, if applicable.' }
	

 ]
        },
 {
        titulo: 'GOVERNMENTAL RELATIONS',
        datos: [
	{ done: false, id: 1, text: 'Obtain information about community-wide damage.' },
	{ done: false, id: 1, text: 'Obtain information on governmental action regarding essential recovery functions such as transport route service, re-establishment of governmental services and governmental recovery plans and programs.' },
	{ done: false, id: 1, text: 'Obtain governmental assistance for structural inspections, demolition, debris removal and hazardous material management.' },
	{ done: false, id: 1, text: 'Obtain special permits for the establishment of temporary facilities as required.' },
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