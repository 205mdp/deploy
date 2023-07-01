//cambiar 
//TodoCtrl_2_17_2
//localStorageDemo_2_17_2
//simpleFactoryx_2_17_2

demoApp.controller('TodoCtrl_2_17_2', function ($scope, $http, localStorageService, simpleFactoryx_2_17_2) {
    init();
    function init() {
        var tempx = localStorageService.get('localStorageDemo_2_17_2');
        if (tempx == null) {
            localStorageService.add('localStorageDemo_2_17_2', simpleFactoryx_2_17_2.gettodos());
        }
        $scope.todosx = localStorageService.get('localStorageDemo_2_17_2');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('localStorageDemo_2_17_2', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx_2_17_2", function ($http) {

    //////////////////////
    var todotemp =  {
        titulogeneral: "EMERGENCIAS CLIMATICAS",
    version: "1.0",
    fecharevision: "27-03-2014",
    revisadopor: "Ron Ziv",
    elementos: [{
        titulo: '2.17.2 Huracanes.',
        texto: 'Designar a los asociados apropiados para realizar lo siguiente:',
        datos: [
            { done: false, id: 1, text: 'Monitorear las advertencias de tormentas emitidas por el Servicio Meteorológico Nacional y seguir los consejos de la autoridad local.' },
            { done: false, id: 1, text: 'Conocer la ubicación de el puesto de comando de emergencias.' },
            { done: false, id: 1, text: 'Comunicar la información de la emergencia a los huéspedes y otros asociados.' },
            { done: false, id: 1, text: 'Conocer la ubicación de las áreas de refugio designadas.' },
            { done: false, id: 1, text: 'Identificar sistemas de alarma.' },
            { done: false, id: 1, text: 'Proveer primeros auxilios  y resucitación cardiopulmonar -CPR- (al menos un asociado entrenado por turno).' },
            { done: false, id: 1, text: 'Identificar quién traerá el equipo de emergencia y las provisiones a las áreas designadas de seguridad.' },
            { done: false, id: 1, text: 'Identificar donde se almacenan las linternas, radio a baterías y baterías de repuesto, etc.' },
            { done: false, id: 1, text: 'Monitorear los niveles de combustible del generador de emergencia.' },
            { done: false, id: 1, text: 'Ubicar las llaves de corte eléctrico.' },
            { done: false, id: 1, text: 'Cerrar las válvulas de líquidos y gases inflamables y no inflamables.' },
            { done: false, id: 1, text: 'Actualizar y mudar los registros hacia áreas no vulnerables a las inundaciones.' },
            { done: false, id: 1, text: 'Localizar las válvulas de cerrado.' }
        ]
    },
{
    titulo: 'En el caso de cerrar',
    datos: [
        { done: false, id: 1, text: 'Identificar la orden de cerrar el departamento' },
        { done: false, id: 1, text: 'Identificar bajo que circunstancias personal de emergencias se quedará en las instalaciones y quien será parte del mismo.' }
      
    ]
}, {
    titulo: 'Luego de la tormenta',
    datos: [
        { done: false, id: 1, text: 'Determine como los asociados se notificarán del regreso al trabajo.' }
       

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