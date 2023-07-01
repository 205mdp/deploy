//cambiar 
//TodoCtrl_2_13
//localStorageDemo_2_13
//simpleFactoryx_2_13

demoApp.controller('TodoCtrl_2_13', function ($scope, $http, localStorageService, simpleFactoryx_2_13) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_13');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_13', simpleFactoryx_2_13.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_13');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_13', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_13", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.13 INJURY OR ILLNESS",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
            titulo: 'E:2.13.1 GUEST MEDICAL EMERGENCY',
            texto: 'SECURITY',
            datos: [


            { done: false, id: 1, text: 'When receiving a call regarding a medical emergency, immediately determine:' ,
            datos: [
            { done: false, id: 1, text: 'The location of the emergency?' },
            { done: false, id: 1, text: 'The type of injury or other nature of the emergency?' },
            { done: false, id: 1, text: 'Is an ambulance required?' },
            { done: false, id: 1, text: 'Other medical attention required?' },
            { done: false, id: 1, text: 'Is the person breathing?' },
            { done: false, id: 1, text: 'Does the person have a pulse?' },
            { done: false, id: 1, text: 'Is the person conscious?' },
            { done: false, id: 1, text: 'What is their approximate age?' },
            { done: false, id: 1, text: 'Is there a known medical history?' },
            ]
        },
        { done: false, id: 1, text: 'Notify Security & Emergency Response Team of a medical emergency and location.' },
        { done: false, id: 1, text: 'Be prepared to contact local emergency services (9-1-1 in the U.S.).' },
        { done: false, id: 1, text: 'Obtain first-aid kit/supplies.' },
        { done: false, id: 1, text: 'Respond to the scene to ensure safety. Provide first-aid or CPR as required.  Ensure that Bloodborne Pathogen guidelines are being adhered to while administering first-aid and during the clean up of the area in which body fluids may be present.' },
        { done: false, id: 1, text: 'Refer to instructions for Security Director.' },
        { done: false, id: 1, text: 'Provide assistance as needed.' },
        { done: false, id: 1, text: 'Prepare the appropriate incident report with photos.' }



        ]
    },

    {
        titulo: 'DIRECTOR OF SECURITY OR ON-DUTY DESIGNEE',
        datos: [
        { done: false, id: 1, text: 'Respond to the scene to ensure safety.  Provide first-aid or CPR as required and if certified in First-Aid and CPR.  Ensure that Bloodborne Pathogen guidelines are being adhered to while administering first-aid and during the clean up of the area in which body fluids may be present.' },
        { done: false, id: 1, text: 'Determine what level of medical attention may be required: local emergency services or a private service.' },
        { done: false, id: 1, text: 'If person is not conscious or able to assist in determination of care, contact local emergency services (9-1-1 in the U.S.).' },
        { done: false, id: 1, text: 'If person is conscious and able to assist in determining care needed, provide choice of local hospitals or clinics, unless person specifically requests a facility.' },
        { done: false, id: 1, text: 'Advise the Hotel Security if local emergency services or a private service is needed. ' },
        { done: false, id: 1, text: 'If such response is needed, request that the main entrance be cleared of vehicles.' },
        { done: false, id: 1, text: 'Dispatch a member of the Emergency Response Team to meet the responding medical units, and direct them to the scene.' },
        { done: false, id: 1, text: 'If no emergency service vehicles are required, arrange alternate transportation such as a taxi or car service.' },
        { done: false, id: 1, text: 'Advise guest/patron that they will be contacted by the Hotel.' },
        { done: false, id: 1, text: 'Ensure there is follow-up in a timely manner.  ' },
        { done: false, id: 1, text: 'If guest/patron has been hospitalized, double-lock the room, and arrange for storage of their belongings if long term.  Establish a “message” account.' },
        { done: false, id: 1, text: 'If the injury/illness is of a serious nature (life-threatening, loss of limb, etc.) and occurs when senior management is not on property, contact the General Manager, Property Operations Director or appropriate senior management executive at home.' },
        { done: false, id: 1, text: 'Following a serious injury, ensure that Emergency Response Team members (or other associates involved) are gathered for a de-briefing session.' }
        ]
    },

    {
        titulo: 'ANY HOTEL PERSONNEL INVOLVED',
        datos: [
        { done: false, id: 1, text: 'Show concern and compassion to the injured/ill person.  BE SINCERE.' },
        { done: false, id: 1, text: 'DO NOT move the injured/ill person except in a life-threatening situation.' },
        { done: false, id: 1, text: 'DO NOT admit fault or negligence.' },
        { done: false, id: 1, text: 'DO NOT assume that the Hotel is liable.' },
        { done: false, id: 1, text: 'DO NOT refer to previous incidents.' },
        { done: false, id: 1, text: 'DO NOT give out copies of Hotel reports.' }

        ]
    },
    {
        titulo: 'GENERAL MANAGER ',
        datos: [
        { done: false, id: 1, text: 'Contact the Division Representative to the Corporate Crisis Response Team with specifics of the incident if injury/illness is serious.  Otherwise, contact Risk Management.' },
        { done: false, id: 1, text: 'Ensure appropriate follow-up with the injured/ill person.' }

        ]
    },
    {
        titulo: 'PAYING FOR GUEST’S MEDICAL EXPENSES',
        datos: [
        { done: false, id: 1, text: 'Direct requests for Hotel payment of guest medical expenses to one of the following for approval:' ,
            datos: [
            { done: false, id: 1, text: 'Security Manager, Director or Assistant Director' },
            { done: false, id: 1, text: 'General Manager' },
            { done: false, id: 1, text: 'Director of Rooms' }

            ]}
        ]
    },
    { done: false, id: 1, text: 'Contingent upon the request’s approval, contact the medical facility and advise them to direct bill to the attention of the approving manager or director at the Hotel.' },
    { done: false, id: 1, text: 'Note: The Hotel’s option to pay for medical expenses is not an admission of liability.  Further, those amounts should be reimbursable through general liability insurance.' }

        ]
  
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