 //cambiar 
//TodoCtrl_2_5_1
//localStorageDemo_2_5_1
//simpleFactoryx_2_5_1

demoApp.controller('TodoCtrl_2_5_1', function ($scope, $http, localStorageService, simpleFactoryx_2_5_1) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_5_1');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_5_1', simpleFactoryx_2_5_1.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_5_1');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_5_1', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_5_1", function ($http) {
   //////////////////////
   var todotemp = {
    titulogeneral: "E:2.5.1	ASSAULT, PHYSICAL OR SEXUAL",
    version: "1.0",
    fecharevision: "27-08-2014",
    revisadopor: "Ron Ziv",
    elementos: [{
        titulo: 'SECURITY',
        
        datos: [

        { done: false, id: 1, text: 'When receiving a call regarding an assault, immediately determine:' ,
        datos: [
        { done: false, id: 1, text: 'The location of the incident' },
        { done: false, id: 1, text: 'If the assault is still in progress.  ' },
        { done: false, id: 1, text: 'Immediately contact local emergency services (9-1-1 in the U.S.)' },
        { done: false, id: 1, text: 'The condition of the victim.  Be prepared to contact local emergency services (9-1-1 in the U.S.)' },
        ]
    },
    { done: false, id: 1, text: 'Notify the Emergency Response Team and proceed to the scene.  Do not announce over the radio the nature of the situation. ' },
    { done: false, id: 1, text: 'Obtain a first-aid kit/supplies and bring to the scene.' },
    { done: false, id: 1, text: 'Keep on-lookers away in a calm manner.' },
    { done: false, id: 1, text: 'Take the victim to a secure location and attend to their physical and emotional needs.  Ask if they would like to have anyone contacted.' },
    { done: false, id: 1, text: 'Ensure that police have been notified, if emergency services are not required.' },
    { done: false, id: 1, text: 'See instructions for the Director of Security (below) and assist as needed.' },
    { done: false, id: 1, text: 'If the assault occurred in a public area of the property, determine if videotape of the incident exists.  If so, preserve and secure the tape so it is not reused or taped over or otherwise destroyed.' },
    { done: false, id: 1, text: 'Prepare the appropriate incident report with photos or diagrams.' }


    ]
},


{
    titulo: 'DIRECTOR OF SECURITY ',
    datos: [
    { done: false, id: 1, text: 'Respond to the scene.  Cordon off the area and post Security personnel to ensure that only authorized persons are allowed to enter the scene.' },
    { done: false, id: 1, text: 'DO NOT TOUCH OR ALLOW ANYONE TO DISTURB ANYTHING AT THE SCENE.' },
    { done: false, id: 1, text: 'If local emergency services (9-1-1 in the U.S.) has been contacted, dispatch a member of the Emergency Response Team to meet police and fire department personnel responding to the call.' },
    { done: false, id: 1, text: 'If the victim is stable, ask if they know the identity of their attacker.  If the alleged attacker is believed to be a guest or hotel associate, immediately begin searching the property and seal off hotel entrance and exit points.' },
    { done: false, id: 1, text: 'If the victim is able to assist in determining medical care needed, provide a choice of local hospitals or clinics, unless the person specifically requests a facility.' },
    { done: false, id: 1, text: 'Determine if there are witnesses to the incident.  If so, request that they remain on the property for interview.' },
    { done: false, id: 1, text: 'Obtain as much information as possible for authorities:' ,
    datos: [
    { done: false, id: 1, text: 'Identity of the victim and alleged attacker, if known' },
    { done: false, id: 1, text: 'Location and time of assault' },
    { done: false, id: 1, text: 'Witness list' },
    { done: false, id: 1, text: 'Videotape of assault, if available' }
    
    ]
},
{ done: false, id: 1, text: 'If the victim is a registered guest, have the Front Office print out a folio and obtain a copy of the registration card for authorities.' },
{ done: false, id: 1, text: 'If the guest is hospitalized, double-lock the room and arrange for storage of their belongings if long term.  Establish a “message” account.' },
{ done: false, id: 1, text: 'If the assault occurred in a guest room, double-lock the room until police release it.' },
{ done: false, id: 1, text: 'Do not allow the area to be cleaned until police release it.' },
{ done: false, id: 1, text: 'Pull room lock information from the time the guest was registered.' },
{ done: false, id: 1, text: 'If clean up of bodily fluids is necessary, ensure that Bloodborne Pathogen guidelines are followed.' },
{ done: false, id: 1, text: 'Assist local authorities as needed.' },
{ done: false, id: 1, text: 'Notify senior management.' },
{ done: false, id: 1, text: 'Confirm with authorities who will notify family and associates of the victim.' }

]
},

{
    titulo: 'GENERAL MANAGER',
    datos: [
    { done: false, id: 1, text: 'Refer media to law enforcement for information and comment.' },
    { done: false, id: 1, text: 'Contact the Division Representative to the Corporate Crisis Team with specifics of the incident.' },
    { done: false, id: 1, text: 'Ensure appropriate follow-up with the assault victim.' }

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