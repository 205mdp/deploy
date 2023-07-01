//cambiar 
//TodoCtrl_2_4
//localStorageDemo_2_4
//simpleFactoryx_2_4

demoApp.controller('TodoCtrl_2_4', function ($scope, $http, localStorageService, simpleFactoryx_2_4) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_4');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_4', simpleFactoryx_2_4.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_4');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_4', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_4", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.4 COMMUNITY/LOCAL AREA CRISES",
        version: "1.0",
        fecharevision: "27-08-2014",
        revisadopor: "Ron Ziv",
        elementos: [{
          titulo: 'SECURITY',

          
          datos: [
          { done: false, id: 1, text: 'In the event of a local crisis, establish a Crisis Command Post as a place to monitor events, and plan and direct hotel responses.' },
          { done: false, id: 1, text: 'Notify the Emergency Response Team and have them report to the Crisis Command Post.' },
          { done: false, id: 1, text: 'Closely follow developments in the crisis.  Stay in contact with local authorities directing the community response.' },
          { done: false, id: 1, text: 'Have all hotel associates on stand by to assist guests and protect hotel property should the community crisis result in a hotel emergency. ' },
          { done: false, id: 1, text: 'Begin planning and preparing for an evacuation of the hotel should one be necessary.  Plans should include an escape route from the property.' },
          { done: false, id: 1, text: 'Assist the General Manager as needed.' },
          { done: false, id: 1, text: 'Prepare the appropriate reports after the crisis is over, with photographs or diagrams.' }
          ]
      },

      {
        titulo: 'GENERAL MANAGER ',
        datos: [
        { done: false, id: 1, text: 'Closely monitor the situation.  Work with Security to keep apprised of all developments.' },
        { done: false, id: 1, text: 'Keep a written record of the crisis and all hotel activities as events unfold.' },
        { done: false, id: 1, text: 'Periodically inform guests and associates of the situation through the public address system or available communication process.' },
        { done: false, id: 1, text: 'If time permits, mingle with guests throughout the property and reassure them that the hotel stands ready to act if the crisis escalates.' },
        { done: false, id: 1, text: 'Ensure that an evacuation plan is in place, including transportation from the property.' },
        { done: false, id: 1, text: 'Ensure that all associates know their responsibilities and duties in the event of an emergency or evacuation and that they are ready to perform them.' },
        { done: false, id: 1, text: 'Be prepared to instruct Guest Reception to secure cash registers, folios, credit card vouchers and safe deposit boxes.' },
        { done: false, id: 1, text: 'Arrange for alternate accommodations for guests should the hotel need to be evacuated.' },
        { done: false, id: 1, text: 'Ensure that hotel staff has facilities available if they are confined to the hotel for a lengthy period.' },
        { done: false, id: 1, text: 'If the media seeks to use hotel property as a headquarters or staging ground for filing stories, try to politely discourage them from doing so. ' },
        { done: false, id: 1, text: 'Refer media to local authorities for comment or information.  Do not let the hotel become the focus of stories about a community crisis.' },
        { done: false, id: 1, text: 'Do not at any time publicly criticize local authorities or emergency personnel for their response to the crisis.' },
        { done: false, id: 1, text: 'Once the crisis has passed, be sure and thank local authorities for their efforts, if appropriate. ' },
        { done: false, id: 1, text: 'Contact the Division Representative for the Corporate Crisis Team. ' }

        ]
    },
    {
        titulo: 'ENGINEERING',
        datos: [
        { done: false, id: 1, text: 'Continually monitor all hotel utilities and systems throughout the duration of the crisis.  Immediately inform the General Manager and Security should any critical function begin to falter or fail.' },
        { done: false, id: 1, text: 'Ensure that all repair equipment is ready and available for immediate use should it be required.' },
        { done: false, id: 1, text: 'Ensure that all hotel transportation systems are operative and ready for use.' },
        { done: false, id: 1, text: 'Assist the General Manager and Security as needed.' },
        { done: false, id: 1, text: 'Stand by to assist with evacuation efforts, if required.' }

        ]
    },
    {
        titulo: 'GUEST RECEPTION AND SERVICES',
        datos: [
        { done: false, id: 1, text: 'Stay calm.  Be prepared to notify and assist guests if evacuation is required.' },
        { done: false, id: 1, text: 'Prepare for securing of cash registers, folios, credit card vouchers and safe deposit boxes.  Actual securing should not begin until ordered by the General Manager or their designee.' },
        { done: false, id: 1, text: 'Secure luggage storage areas.' },
        { done: false, id: 1, text: 'Be prepared to contact airlines, bus lines, rental cars, trains, etc. for guests should they wish to leave the hotel quickly as a result of a local crisis.' }

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