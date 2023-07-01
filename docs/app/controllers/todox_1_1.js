//cambiar 
//TodoCtrl
//LS-1-1
//simpleFactoryx1-1

demoApp.controller('TodoCtrl_1_1', function ($scope, $http, localStorageService, simpleFactoryx1_1) {
    init();
    function init() {
        var tempx = localStorageService.get('LS-1-1');
        if (tempx == null) {
            localStorageService.add('LS-1-1', simpleFactoryx1_1.gettodos());
        }
        $scope.todosx = localStorageService.get('LS-1-1');
    }


    $scope.test = function (todo) {
        //   alert(todo.text);
        var temptext = $scope.todosx.titulogeneral + " - " + todo.text + " - " + todo.done;
        $scope.addTodoLogCheck(temptext);
        localStorageService.add('LS-1-1', $scope.todosx);
        //localStorage["storagetest"] = $scope.todos;
    };

});


//let everthing know that we need to save state now.
demoApp.factory("simpleFactoryx1_1", function ($http) {

    //////////////////////
    var todotemp = {
        titulogeneral: "1.1 DESCONTAMINACION",
    version: "1.0",
    fecharevision: "27-03-2014",
    revisadopor: "Ron Ziv",
    elementos: [{
        titulo: '1.1 DESCONTAMINACION',
        texto: 'Exposición a agentes químicos  No ignorar o minimizar los síntomas, o esperar a que mejoren. Tratamiento a la victima contaminada:',
        datos: [
            { done: false, id: 1, text: 'Consultar Hojas de Datos de Seguridad del Fabricante.' },
            { done: false, id: 1, text: 'Extremar los cuidados al ayudar a otras personas expuestas a agentes químicos.' },
            { done: false, id: 1, text: 'De ser necesario, usar vestimentas protectoras, Del kit de descontaminación.' },
            { done: false, id: 1, text: 'Quitar las ropas contaminadas.' },  
            { done: false, id: 1, text: 'No sacar la ropa por la cabeza, cortarla evitar el contacto con los ojos, nariz y boca.' }, 
            { done: false, id: 1, text: 'Descontaminar las manos usando agua y jabón.' }, 
            { done: false, id: 1, text: 'Quitar los anteojos.' }, 
            { done: false, id: 1, text: 'Enjuagar los ojos con abundante agua.' },
            { done: false, id: 1, text: 'Lavar la cara y el cabello con agua y jabón, luego enjuagar cuidadosamente con agua.' },
            { done: false, id: 1, text: 'Descontaminar otras áreas del cuerpo.' },
            { done: false, id: 1, text: 'Proveer a la victima de ropas no contaminadas.' }
        ]
    },
{
    titulo: 'Tratamiento de Áreas Contaminadas',
    datos: [
        { done: false, id: 1, text: 'Consultar Hojas de Datos de Seguridad del Fabricante.' },
        { done: false, id: 1, text: 'Cercar el área contaminada.' },
        { done: false, id: 1, text: 'Contactar al vendedor de materiales peligrosos.' },
        { done: false, id: 1, text: 'Hacer cerrar el sistema de aire acondicionado y ventiladores.' },
        { done: false, id: 1, text: 'Cerrar las puertas que comuniquen con el área y sellar las rendijas con cinta engomada.' }
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