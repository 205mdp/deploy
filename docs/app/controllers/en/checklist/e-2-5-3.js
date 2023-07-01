//cambiar 
//TodoCtrl_2_5_3
//localStorageDemo_2_5_3
//simpleFactoryx_2_5_3

demoApp.controller('TodoCtrl_2_5_3', function ($scope, $http, localStorageService, simpleFactoryx_2_5_3) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_5_3');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_5_3', simpleFactoryx_2_5_3.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_5_3');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_5_3', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_5_3", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.5.3	ROBBERY",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
         titulo: 'ASSOCIATE BEING ROBBED',
         texto:'AT NO TIME SHOULD ANY ASSOCIATE ATTEMPT TO APPROACH OR APPREHEND A ROBBERY SUSPECT.  That job is the responsibility of law enforcement.  Instead, cooperate with the robber, observe and take note of as much detail as possible (e.g. appearance and clothes), and then provide all information to the police.',
         datos: [

         { done: false, id: 1, text: 'Remain calm.' },
         { done: false, id: 1, text: 'DO NOT make any sudden movements.' },
         { done: false, id: 1, text: 'Cooperate with all demands.' },
         { done: false, id: 1, text: 'Make a mental note of cash handed over to the suspect(s).  Include the total amount and denominations if possible.' },
         { done: false, id: 1, text: 'Make a mental description of the suspect(s) including: height, weight, build, race, approximate age, facial hair, any unique or identifiable features, speech (i.e. accent, deep or high-pitched voice, etc.), scars, glasses, type of clothing, whether gloves were worn.' },
         { done: false, id: 1, text: 'Make a mental description of any weapon used.' },
         { done: false, id: 1, text: 'Note if the suspect touches anything.  After the suspect(s) leave, place a piece of paper over any area they touched to preserve fingerprint evidence.  PRESERVE THE CRIME SCENE.' },
         { done: false, id: 1, text: 'If a note is used in the robbery, attempt to keep it.  However, if the suspect demands its return, give it back.  Handle the note as little as possible.  DO NOT let anyone else touch it.   ' },
         { done: false, id: 1, text: 'If given the opportunity, attempt to activate the “alarm button,” but DO NOT ENDANGER YOURSELF.' },
         { done: false, id: 1, text: 'If unable to active the alarm while the suspect(s) are in front of you, do so after they leave.' },
         { done: false, id: 1, text: 'As soon as possible, notify Security and give all details about the robbery.' },
         { done: false, id: 1, text: 'Write down the description of the suspect(s) as soon as possible, while the details are still fresh in mind.' },
         { done: false, id: 1, text: 'Provide all information to police and cooperate with their investigation.' }
         

         ]
     },
     
     {
        titulo: 'SECURITY',
        datos: [
        { done: false, id: 1, text: 'If notified of an armed robbery in progress, contact local emergency services (9-1-1 in the U.S.) to alert police.  Provide any details known at the time.' },
        { done: false, id: 1, text: 'Alert the Emergency Response Team by phone or radio.  Use a code that, if heard by the robber(s), will not alert them that the robbery is being reported.' },
        { done: false, id: 1, text: 'Turn off the radio, take off any nametags or badges, and ensure that keys or other items that can identify you as Security personnel are not visible.  Then, casually walk through the area to observe what is happening.' },
        { done: false, id: 1, text: 'DO NOT ATTEMPT TO INTERFERE OR ENDANGER YOURSELF IN ANY WAY.' },
        { done: false, id: 1, text: 'Make a mental description of the suspect(s).' },
        { done: false, id: 1, text: 'If the suspect(s) leave, attempt to discreetly follow to determine the direction they are traveling and obtain the license plate/make/model/color of any car they are using.  DO NOT ATTEMPT TO APPREHEND THE SUSPECT(S).' },
        { done: false, id: 1, text: 'Protect and preserve the crime scene.  Do not allow anyone to access the area.  Do not allow anything to be touched or examined until police have released the area back to the hotel.' },
        { done: false, id: 1, text: 'Ask that all witness remain at the hotel to provide as much information to police as possible.  IT IS IMPORTANT THAT WITNESSES NOT DISCUSS OR SHARE THEIR VIEWS WITH ONE ANOTHER.  Witnesses should be provided with paper and pen to immediately begin writing down details and descriptions of events.' },
        { done: false, id: 1, text: 'Be prepared to assist police.' },
        { done: false, id: 1, text: 'Advise police of any videotape recordings of the crime that may be available.' },
        { done: false, id: 1, text: 'Prepare the appropriate incident report.' }
        ]
    },
    {
        titulo: 'GENERAL MANAGER',
        datos: [
        { done: false, id: 1, text: 'Refer to instructions/guidelines for Security and assist as needed.' },
        { done: false, id: 1, text: 'Check with Security to determine if the crime has been recorded on closed circuit television.  If tapes show incident, copy to disk and maintain per document retention policy.' },
        { done: false, id: 1, text: 'Arrange for a debriefing session with all affected associates.' },
        { done: false, id: 1, text: 'Refer media inquires to law enforcement.' },
        { done: false, id: 1, text: 'Contact the Division Representative to the Corporate Crisis Response Team.' }
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