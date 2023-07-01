//cambiar 
//TodoCtrl_2_5_2
//localStorageDemo_2_5_2
//simpleFactoryx_2_5_2

demoApp.controller('TodoCtrl_2_5_2', function ($scope, $http, localStorageService, simpleFactoryx_2_5_2) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_5_2');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_5_2', simpleFactoryx_2_5_2.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_5_2');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_5_2', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_5_2", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.5.2	HOMICIDE",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'HOMICIDE',
            texto:'In the event of a homicide on Hotel property, all associates should keep several fundamental ideas in mind:',
            
            


            datos: [
            { done: false, id: 1, text: 'Do not touch or allow anyone to disturb anything at the crime scene.' },
            { done: false, id: 1, text: 'Do not alarm guests.  Respond and react to reports of a homicide in a calm and controlled manner.' },
            { done: false, id: 1, text: 'Isolate area and clear of any guests or unneeded associates.' },
            { done: false, id: 1, text: 'Shield the victim and scene from view of guests.' }


            ]
        },



        {
            titulo: 'SECURITY',
            datos: [
            { done: false, id: 1, text: 'When notified of an apparent homicide on the property, immediately determine:' ,
            datos: [
            { done: false, id: 1, text: 'The location of the deceased' },
            { done: false, id: 1, text: 'Whether local emergency services (9-1-1 in the U.S.) has been contacted.  If not, immediately do so' },
            { done: false, id: 1, text: 'If there are any witnesses' },
            { done: false, id: 1, text: 'If anyone in the area is acting suspicious' },
            ]
        },
        { done: false, id: 1, text: 'Notify the Emergency Response Team.  Do not announce over the radio the nature of the situation.' },
        { done: false, id: 1, text: 'Respond to the scene.  ENSURE THAT NOTHING IS DISTURBED.' },
        { done: false, id: 1, text: 'Keep on-lookers away in a calm manner.' },
        { done: false, id: 1, text: 'Use back-of-the-house elevators if at all possible.' },
        { done: false, id: 1, text: 'If the homicide occurred in a public area of the property, determine if videotape of the crime exists.  If so, secure the videotape.' },
        { done: false, id: 1, text: 'See instructions for the Director of Security (below) and assist as needed.' },
        { done: false, id: 1, text: 'Assist authorities if needed.' },
        { done: false, id: 1, text: 'Prepare the appropriate incident report with photos and diagrams.' },

        ]
    },


    {
        titulo: 'DIRECTOR OF SECURITY ',
        datos: [
        { done: false, id: 1, text: 'Respond to the scene.  Cordon off the area and post Security personnel to ensure that only authorized persons are allowed to enter the scene.' },
        { done: false, id: 1, text: 'DO NOT TOUCH OR ALLOW ANYONE TO DISTURB ANYTHING AT THE SCENE.' },
        { done: false, id: 1, text: 'Keep a log of all persons entering the scene, including times.' },
        { done: false, id: 1, text: 'Dispatch a member of the Emergency Response Team to meet police responding to the call.' },
        { done: false, id: 1, text: 'Obtain as much information as possible for authorities:' ,
        datos: [
        { done: false, id: 1, text: 'Who discovered the body' },
        { done: false, id: 1, text: 'Time of discovery' },
        { done: false, id: 1, text: 'Name and address of deceased, as well as persons knowing the deceased' },
        { done: false, id: 1, text: 'Witness list' },
        { done: false, id: 1, text: 'Any reports of suspicious activity' },
        { done: false, id: 1, text: 'Videotape of the crime, if available' }
        ]
    },
    { done: false, id: 1, text: 'If the deceased was a registered guest, have the Front Office print out a folio and obtain a copy of the registration card for authorities.' },
    { done: false, id: 1, text: 'Pull room lock information for the entire period the guest was registered and give to authorities.' },
    { done: false, id: 1, text: 'If the homicide occurred in guest room, double lock the room until police release the room.  (Note:  Inventory of the deceased’s property shall be done by police and documented by Security).' },
    { done: false, id: 1, text: 'Do not allow the room to be cleaned until it is released by law enforcement.' },
    { done: false, id: 1, text: 'If clean up of bodily fluids is necessary, ensure that Bloodborne Pathogen guidelines are followed.' },
    { done: false, id: 1, text: 'Assist local authorities as needed.' },
    { done: false, id: 1, text: 'Notify senior management.' },
    { done: false, id: 1, text: 'Confirm with authorities that they will notify next of kin.' }
    ]
},
{
    titulo: 'GENERAL MANAGER',
    datos: [
    { done: false, id: 1, text: 'Refer media inquires to law enforcement.' },
    { done: false, id: 1, text: 'Contact the Division Representative to the Corporate Crisis Response Team.' }
    

    ]
},
{
    titulo: 'HUMAN RESOURCES DIRECTOR',
    datos: [
    { done: false, id: 1, text: 'Contact EAP to deploy counseling resources as needed.' },
    { done: false, id: 1, text: 'Advise associates of EAP and counseling services available.' }
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