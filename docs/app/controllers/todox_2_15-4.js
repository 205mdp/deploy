//cambiar 
//TodoCtrl_2_15_4
//localStorageDemo_2_15_4
//simpleFactoryx_2_15_4

demoApp.controller('TodoCtrl_2_15_4', function ($scope, $http, localStorageService, simpleFactoryx_2_15_4) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_15_4');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_15_4', simpleFactoryx_2_15_4.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_15_4');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_15_4', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_15_4", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "2.15 CORTE o INTERRUPCIÓN de los SERVICIOS",
    version: "1.0",
    fecharevision: "27-03-2014",
    revisadopor: "Ron Ziv",
    elementos: [{
        titulo: '2.15.4 Sanitario/Saneamiento:',
        texto:'Seguridad',
        datos: [
            { done: false, id: 1, text: 'Ayudar al Gerente General /Guardia en el traslado de huéspedes del área afectada a habitaciones no contaminadas.' },
            { done: false, id: 1, text: 'Se debe acordonar el área afectada.' },
            { done: false, id: 1, text: 'Se debe recorrer el Hotel para tranquilizar a los huéspedes y comprobar que no hay más daños.' },
        ]
    },
{
    titulo: 'GERENTE GENERAL o GERENTE DE GUARDIA',
    datos: [
        { done: false, id: 1, text: 'Informar inmediatamente a Mantenimiento y dar instrucciones de corte de suministro al área afectada.' },
        { done: false, id: 1, text: 'Si se trata de un derrame sanitario, dar instrucciones a Ama de Llaves para que limpien rápidamente.' },
        { done: false, id: 1, text: 'Reubicar a los huéspedes de las habitaciones afectadas,  sin cargo.' },
        { done: false, id: 1, text: 'Si el inconveniente abarca todo el Hotel, se debe hacer un anuncio por altoparlantes informando de la situación.' },
        { done: false, id: 1, text: 'Solicitar a los huéspedes que se mantengan alejados del área afectada.' },
        { done: false, id: 1, text: 'Si el problema es demasiado grande para que lo maneje Ama de Llaves, consultar con empresas de limpieza.' },
        { done: false, id: 1, text: 'Si Ama de Llaves no cuenta con el equipo apropiado, también usar los servicios de una empresa de limpieza.' },
        { done: false, id: 1, text: 'Si se estima que la reparación demandará más de 24 hs. contactar otros hoteles para traslado de huéspedes.' },
        { done: false, id: 1, text: 'Se debe documentar los daños a la propiedad y gastos para presentar a la compañía de seguros.' },  
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