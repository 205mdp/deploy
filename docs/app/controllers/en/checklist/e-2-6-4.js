//cambiar 
//TodoCtrl_2_6_4
//localStorageDemo_2_6_4
//simpleFactoryx_2_6_4

demoApp.controller('TodoCtrl_2_6_4', function ($scope, $http, localStorageService, simpleFactoryx_2_6_4) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_6_4');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_6_4', simpleFactoryx_2_6_4.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_6_4');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_6_4', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_6_4", function ($http) {
    //////////////////////
    var todotemp = {
        titulogeneral: "E:2.6.4	DEATH/SUICIDE OR ATTEMPTED/ THREATENED SUICIDE",
    version: "1.0",
    fecharevision: "27-08-2014",
    revisadopor: "Ron Ziv",
    elementos: [{
        titulo: 'XXXX',
        texto: 'ZZZZ',
        datos: [

texto:'Hotel staff should react quickly and discreetly in the event of a non-natural death or suicide of an associate, guest or visitor.  Any associate finding what they believe is a deceased person should immediately contact Security.  If there is any question as to whether the person is alive, contact associates on-shift with CPR or First Aid training.',

texto:'Care should be taken not to alarm any guests.  If questioned by on-lookers who have witnessed activity surrounding the deceased, associates should simply say there is a medical emergency.  Offer no details and do not confirm there is a death.  If the person inquiring is aware of the death do not speculate as to the cause of death.',

texto:'Regarding attempted or threatened suicide, immediately contact Security.  Stay with the person in duress until expert help arrives, always showing compassion and concern in a calm manner.  Do not put yourself at risk when staying with the person.  Do not comment on the situation to other guests.',

texto:'If associates are directly exposed to the action or scene, ensure associates are provided EAP services.',



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