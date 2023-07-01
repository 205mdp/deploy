//cambiar 
//TodoCtrl_1_2
//localStorageDemo_1_2
//simpleFactoryx_1_2

demoApp.controller('TodoCtrl_1_2', function ($scope, $http, localStorageService, simpleFactoryx_1_2) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_1_2');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_1_2', simpleFactoryx_1_2.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_1_2');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_1_2', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_1_2", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "1-2 TREATING CONTAMINATED VICTIM'",
    version: "1.0",
    fecharevision: "27-08-2014",
    revisadopor: "Ron Ziv",
    elementos: [{
        titulo: '1-2 TREATING CONTAMINATED VICTIM',
        texto: 'Exposure to chemical agents (such as harsh cleaning chemicals) can cause a variety of reactions, including blurred vision, eye irritation, difficulty breathing, nausea – and worse.  As a result, a person affected by a chemical or biological agent requires immediate medical attention by professional medical personnel.  DO NOT ignore or minimize symptoms, or wait for them to improve.',
        datos: [
                { done: false, id: 1, text: 'Manufacturers Safety Data Sheets (MSDS) should be consulted for decontamination requirements.' },
                { done: false, id: 1, text: 'Use extreme caution when helping others who have been exposed to chemical agents.' },
                { done: false, id: 1, text: 'Put on, as appropriate, protective clothing, overshoes, gloves, etc. from the decontamination kit.' },
                { done: false, id: 1, text: 'Remove contaminated clothing from the victim and other contaminated items in contact with the body.' },
                { done: false, id: 1, text: 'Contaminated clothing normally removed over the head (for example, t-shirts), should be cut off to avoid contact with the eyes, nose and mouth.  Put the clothes into a plastic bag, seal and dispose per local and national regulations.' },
                { done: false, id: 1, text: 'Decontaminate hands using soap and water.  Use a soft nailbrush for cleaning under fingernails, using care not to break the skin.' },
                { done: false, id: 1, text: 'Remove eyeglasses.  Put glasses in a pan of household bleach to decontaminate.' },
                { done: false, id: 1, text: 'Flush eyes with lots of water.' },
                { done: false, id: 1, text: 'Gently wash face and hair with soap and water, then thoroughly rinse with water.' },
                { done: false, id: 1, text: 'Decontaminate other body areas likely to have been contaminated.  Blot, (do not swab or scrape), affected areas with a cloth soaked in soapy water and rinse with clear water.  If the contaminated areas of the body are extensive, put the victim in a shower.' },
                { done: false, id: 1, text: 'Provide the victim with uncontaminated clothes.' },   
                { done: false, id: 1, text: 'Proceed to a medical facility for screening.' }
            ]
        },

 {
        titulo: 'TREATING CONTAMINATED AREAS',
        datos: [
	{ done: false, id: 1, text: 'Manufacturers Safety Data Sheets (MSDS) should be consulted for decontamination requirements.' },
	{ done: false, id: 1, text: 'Cordon off the contaminated area with rope or barriers.' },
	{ done: false, id: 1, text: 'Contact the local hazardous materials vendor identified in the Preparation Section.' },
	{ done: false, id: 1, text: 'Shut down HVAC system and any fans in area to avoid spreading fumes.' },
	{ done: false, id: 1, text: 'Close any doors into area and seal edges with tape.' },
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
 