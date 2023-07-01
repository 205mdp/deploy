    //cambiar 
    //TodoCtrl_2_6_1
    //localStorageDemo_2_6_1
    //simpleFactoryx_2_6_1

    demoApp.controller('TodoCtrl_2_6_1', function ($scope, $http, localStorageService, simpleFactoryx_2_6_1) {
        init();
        function init() {
            var tempx = localStorageService.get('localStorageDemo_2_6_1');
            if (tempx == null) {
                localStorageService.add('localStorageDemo_2_6_1', simpleFactoryx_2_6_1.gettodos());
            }
            $scope.todosx = localStorageService.get('localStorageDemo_2_6_1');
        }


        $scope.test = function (todo) {
            //   alert(todo.text);
            var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
            localStorageService.add('localStorageDemo_2_6_1', $scope.todosx);
            //localStorage["storagetest"] = $scope.todos;
        };

    });


    //let everthing know that we need to save state now.
    demoApp.factory("simpleFactoryx_2_6_1", function ($http) {
        //////////////////////
        var todotemp = {
            titulogeneral: "E:2.6.1	ASSOCIATE WORK-RELATED DEATH",
            version: "1.0",
            fecharevision: "27-08-2014",
            revisadopor: "Ron Ziv",
            elementos: [{
               titulo: 'SECURITY',
               texto:'Upon discovering an unconscious or deceased associate, Hotel staff should immediately contact security. DO NOT ATTEMPT TO MOVE THE BODY unless you are attempting to resuscitate the person. ',
               datos: [
               { done: false, id: 1, text: 'When receiving a call regarding the death of an associate on the premises, immediately determine:' ,
               datos: [
               { done: false, id: 1, text: 'The location of the person or body' },
               { done: false, id: 1, text: 'If the person has been checked for pulse or breathing' },
               { done: false, id: 1, text: 'Determine if local emergency services (9-1-1 in the U.S.) has been contacted and immediately do so if not already done' }
               ]
           },
           { done: false, id: 1, text: 'If death is confirmed, notify the Emergency Response Team. Do not announce the situation over the radio.' },
           { done: false, id: 1, text: 'Respond to the scene quickly and keep on-lookers away in a calm manner. Instruct assistance from other associates if the area or crowd is too large to handle.' },
           { done: false, id: 1, text: 'Cordon off the area and post Security personnel to ensure that only authorized persons are allowed to enter the scene.' },
           { done: false, id: 1, text: 'Take great care to NOT TOUCH OR DISTURB ANYTHING AT THE SCENE.' },
           { done: false, id: 1, text: 'Dispatch a member of the Emergency Response Team to meet police and fire department personnel responding to the emergency services call.' },
           { done: false, id: 1, text: 'Obtain the following information:' ,
           datos: [
           { done: false, id: 1, text: 'Who discovered the body' },
           { done: false, id: 1, text: 'When was the body discovered' },
           { done: false, id: 1, text: 'Name and address of the deceased' }
           
           ]
       },
       { done: false, id: 1, text: 'Have the Front Desk make a copy of the associate’s work file in the event it is requested by the police.  Confer with Human Resources prior to turning over the file.' },
       { done: false, id: 1, text: 'Prepare the appropriate incident report with photos or diagrams.' },
       { done: false, id: 1, text: 'Once the deceased has been removed, double-lock the room or close the area until police release it for clean-up.' },
       { done: false, id: 1, text: 'If clean up of bodily fluids is necessary, ensure that Bloodborne Pathogen guidelines are adhered to. ' },
       { done: false, id: 1, text: 'Assist local authorities as needed.' },
       { done: false, id: 1, text: 'Notify Senior Management.' },
       { done: false, id: 1, text: 'Confirm with authorities that they will notify the appropriate family members.' }

       ]
    },
    {
        titulo: 'GENERAL MANAGER',
        datos: [
        { done: false, id: 1, text: 'Be prepared for media inquiries. Whenever possible, refer media to the police for information and comment.' },
        { done: false, id: 1, text: 'Contact the Corporate Legal Division as soon as possible with information about the incident.' },
        { done: false, id: 1, text: 'Assess the affect the situation has had on the rest of the staff. If an associate is having serious emotional problems with the incident, release them from work if possible and ensure that they arrive home safely.' },
        { done: false, id: 1, text: 'Take extra caution when speaking with associates and maintain a calm demeanor. ' }

        ]
    },
    {
        titulo: 'HUMAN RESOURCES',
        datos: [
        { done: false, id: 1, text: 'Contact EAP and arrange for deployment of onsite grief counselors. ' },
        { done: false, id: 1, text: 'Advise associates of EAP and counseling resources available.' }
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