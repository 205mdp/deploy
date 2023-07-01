var demoApp = angular.module('demoApp', ['ngRoute', 'ngSanitize', 'ngAnimate', 'LocalStorageModule', 'ajoslin.mobile-navigate', 'ui.bootstrap', "ngTouch", "mobile-angular-ui"]);


demoApp.controller('SimpleController', function ($scope, simpleFactory, localStorageService, $http) {


    init();

    function init() {
        //var key = localStorageService.get('localStorageKey');
        //if (key == null) {
        //    alert("Desbloqueado");
        //    localStorageService.add('localStorageKey', "x");
        //} else {
        //    window.location = "error.html";

        //    alert("bloqueado");
        //}
       	if(localStorage.arranque){
    		window.location = "error.html";
    	}



        $scope.loadlang = function () {
            // body...
                    var urlapplang;
                    var urlmetro;

                    if (localStorage.idioma) {
                        switch(localStorage.idioma) {
                            case 'es':
                                  urlapplang = 'app/datoslag/language.es.json';
                                  urlmetro = 'app/datoslag/metro/metro.es.json';
                                break;
                            case 'hl':
                                    urlapplang = 'app/datoslag/language.hl.json';
                                    urlmetro = 'app/datoslag/metro/metro.hl.json';
                                break;
                            default:
                                     urlapplang = 'app/datoslag/language.es.json';  //en
                                     urlmetro = 'app/datoslag/metro/metro.es.json';  //en
                        }
                    }else{
                      urlapplang = 'app/datoslag/language.es.json';  //en
                      urlmetro = 'app/datoslag/metro/metro.es.json';  //en
                    }

                    $http.get(urlapplang)
                             .then(function(res){
                               $scope.languagec = res.data;
                             });
                    //// { "id": 12, "title": "Blueprint", "img": "Images/planos.jpg", "txtcss": "metro gpcolorblue", "link": "#/planos" }
                    $http.get(urlmetro)
                             .then(function(res){
                               $scope.metro = res.data;
                             });
                    //$scope.metro = simpleFactory.getMetro();
                    };
        $scope.loadlang();



        $scope.todosx = localStorageService.get('localStorageDemo');
        $scope.movies = simpleFactory.getMovies();
        $scope.contactos = simpleFactory.getContactosLad();
        $scope.autoridades = simpleFactory.getAutoridades();

        $scope.contactoshotel = simpleFactory.getContactosHotel();
        $scope.planos = simpleFactory.getPlanos();
        $scope.contactosReg = simpleFactory.getContactosRegion();


       // $http.get('../js/datoslag/language.json')
       //  .then(function(res){
       //    $scope.languagec = res.data;
        // });

        // $scope.languagec = simpleFactory.getlanguage();
        $scope.name;
        $scope.about = {
       		app: "Be Safe",
        		version: "1.7",
        		fecha: "31-05-2018"
       	};

       // $http.get('js/data/language.json')
       //   .then(function(res){
       //     $scope.testx = res.data;
       //  });


    }


    function cha() {
        $scope.name = "";
       $scope.isCollapsed = true;

    }
    $scope.$on('$routeChangeStart', function () {
        cha();

    });

    $scope.borrartodo = function () {
        if (localStorageService.clearAll()) {
            alert("Everything was deleted.");
        } else {
            alert("Could not delete.")
        }


    };
    $scope.updatelang = function () {

       localStorage.idioma = $scope.selectedLang;
       if ($scope.selectedLang == 'hl') {
        document.getElementById("SearchControl").style.direction = "rtl";
       }else{
        document.getElementById("SearchControl").style.direction = "ltr";
       }
        $scope.loadlang();
        window.location.reload(true);
    };

    $scope.addPanic = function() {
       $scope.statusajax = "Enviando alerta aguarde...."
          $http({

               method: 'POST',
               url:  'http://192.168.1.102/api/post.php',
               data: {newName: 'juanx1', newPhone: '911' }
             //  data: {newName: $scope.newName, newPhone: $scope.newPhone }

          }).then(function (response) {// on success
              if (response.status == 200) {
               $scope.statusajax = 'Alerta Enviada';
              // alert('Alerta Enviada');
              } else {
                $scope.statusajax = "Error Alerta NO ENVIADA CODE: " + response.status;
              //  alert("Error Alerta NO ENVIADA CODE: " + response.status);
              }

                $scope.textostatus = response.statusText;
                console.log(response.data,response.status);

          }, function (response) {
              if (response.status == 200) {
                $scope.statusajax = 'Alerta Enviada';
                alert('Alerta Enviada');
              } else {
                  $scope.statusajax = "Error Alerta NO ENVIADA CODE: " + response.status;
              }

                $scope.textostatus = response.statusText;
                console.log(response.data,response.status);

          });
    };


});

demoApp.config(function ($routeProvider) {

    $routeProvider.when('/', {
        controller: 'SimpleController',
        templateUrl: 'app/views/View.html'
        }).when('', {
            controller: 'SimpleController',
            templateUrl: 'app/views/View.html'
        }).when('/evacuacion',
        {
            controller: 'SimpleController',
            templateUrl: './app/views/proce/1-2-evacuacion.html'
        }).when('/contactoslad',
        {
            controller: 'SimpleController',
            templateUrl: './app/views/contactoslad.html'
        }).when('/contactosReg',
        {
            controller: 'SimpleController',
            templateUrl: './app/views/contactosReg.html'
        }).when('/autoridades', {
            controller: 'SimpleController', templateUrl: './app/views/autoridades.html'
        }).when('/bomba', {  controller: 'SimpleController', templateUrl: './app/views/proce/2-1Amenazadebomba.html'
        }).when('/descontaminacion', {
            controller: 'SimpleController', templateUrl: './app/views/proce/1-1descontaminacion.html'
        }).when('/rescate', {
            controller: 'SimpleController', templateUrl: './app/views/proce/1-4Busquedayrescate.html'
        }).when('/refugio', {
            controller: 'SimpleController', templateUrl: './app/views/proce/1-5refugio.html'
        }).when('/muerte', {
            controller: 'SimpleController', templateUrl: './app/views/proce/2-6muerte.html'
        }).when('/cuarentena', {
            controller: 'SimpleController', templateUrl: './app/views/proce/1-3Cuarentena.html'
        }).when('/alimentos', {
            controller: 'SimpleController', templateUrl: './app/views/proce/2-9enferemdadalimentos.html'
        }).when('/1-4-BUSQUEDAyRESCATE', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/1-4-BUSQUEDAyRESCATE.html'
        }).when('/1-5-RefugioEnElLugar', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/1-5-RefugioEnElLugar.html'
        }).when('/2-10-Hazmat', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-10-Hazmat.html'
        }).when('/2-11-TomaDeRehenes', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-11-TomaDeRehenes.html'
        }).when('/2-12-HeridasyEnfermedad', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-12-HeridasyEnfermedad.html'
        }).when('/2-13-ColapsoEstructural', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-13-ColapsoEstructural.html'
        }).when('/2-14-ObjetoPaqueteSospechoso', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-14-ObjetoPaqueteSospechoso.html'
        }).when('/2-15-CorteServicios', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-15-CorteServicios.html'
        }).when('/2-16-OtrasEmergencias', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-16-OtrasEmergencias.html'
        }).when('/2-2-DisturbiosSociales', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-2-DisturbiosSociales.html'
        }).when('/2-3-ENFERMEDADESCONTAGIOSAS', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-3-ENFERMEDADESCONTAGIOSAS.html'
        }).when('/2-4-CrisisVecindarioAreasLocales', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-4-CrisisVecindarioAreasLocales.html'
        }).when('/2-5-ActividadesDelictivas', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-5-ActividadesDelictivas.html'
        }).when('/2-7-EmergenciasAscensores', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-7-EmergenciasAscensores.html'
        }).when('/2-8-IncendioExplosion', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-8-IncendioExplosion.html'
        }).when('/2-17-1-Tornados', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-17-1-Tornado.html'
        }).when('/2-17-2-Huracanes', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-17-2-Huracanes.html'
        }).when('/2-17-3-Inundaciones', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-17-3-Inundaciones.html'
        }).when('/2-17-4-TormentaViento', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-17-4-tormentaViento.html'
        }).when('/2-18-terremotos', {
            controller: 'SimpleController', templateUrl: './app/views/proce/pre/2-18-Terremotos.html'
        }).when('/contactoshotel', {
            controller: 'SimpleController', templateUrl: './app/views/contactos.html'
        }).when('/ch', {
            controller: 'TodoCtrl_1_1', templateUrl: './app/views/checklist/index_1_1.html'
        }).when('/ch_1_2', {
            controller: 'TodoCtrl_1_2', templateUrl: './app/views/checklist/index_1_2.html'
        }).when('/ch_1_3', {
            controller: 'TodoCtrl_1_3', templateUrl: './app/views/checklist/index_1_3.html'
        }).when('/ch_1_4', {
            controller: 'TodoCtrl_1_4', templateUrl: './app/views/checklist/index_1_4.html'
        }).when('/ch_1_5', {
            controller: 'TodoCtrl_1_5', templateUrl: './app/views/checklist/index_1_5.html'
        }).when('/ch_2_1', {
            controller: 'TodoCtrl_2_1', templateUrl: './app/views/checklist/index_2_1.html'
        }).when('/ch_2_2', {
            controller: 'TodoCtrl_2_2', templateUrl: './app/views/checklist/index_2_2.html'
        }).when('/ch_2_3', {
            controller: 'TodoCtrl_2_3', templateUrl: './app/views/checklist/index_2_3.html'
        }).when('/ch_2_4', {
            controller: 'TodoCtrl_2_4', templateUrl: './app/views/checklist/index_2_4.html'
        }).when('/ch_2_5', {
            controller: 'TodoCtrl_2_5', templateUrl: './app/views/checklist/index_2_5.html'
        }).when('/ch_2_6', {
            controller: 'TodoCtrl_2_6', templateUrl: './app/views/checklist/index_2_6.html'
        }).when('/ch_2_7', {
            controller: 'TodoCtrl_2_7', templateUrl: './app/views/checklist/index_2_7.html'
        }).when('/ch_2_8', {
            controller: 'TodoCtrl_2_8', templateUrl: './app/views/checklist/index_2_8.html'
        }).when('/ch_2_9', {
            controller: 'TodoCtrl_2_9', templateUrl: './app/views/checklist/index_2_9.html'
        }).when('/ch_2_10', {
            controller: 'TodoCtrl_2_10', templateUrl: './app/views/checklist/index_2_10.html'
        }).when('/ch_2_11', {
            controller: 'TodoCtrl_2_11', templateUrl: './app/views/checklist/index_2_11.html'
        }).when('/ch_2_12', {
            controller: 'TodoCtrl_2_12', templateUrl: './app/views/checklist/index_2_12.html'
        }).when('/ch_2_13', {
            controller: 'TodoCtrl_2_13', templateUrl: './app/views/checklist/index_2_13.html'
        }).when('/ch_2_14', {
            controller: 'TodoCtrl_2_14', templateUrl: './app/views/checklist/index_2_14.html'
        }).when('/ch_2_15_1', {
            controller: 'TodoCtrl_2_15_1', templateUrl: './app/views/checklist/index_2_15_1.html'
        }).when('/ch_2_15_2', {
            controller: 'TodoCtrl_2_15_2', templateUrl: './app/views/checklist/index_2_15_2.html'
        }).when('/ch_2_15_3', {
            controller: 'TodoCtrl_2_15_3', templateUrl: './app/views/checklist/index_2_15_3.html'
        }).when('/ch_2_15_4', {
            controller: 'TodoCtrl_2_15_4', templateUrl: './app/views/checklist/index_2_15_4.html'
        }).when('/ch_2_15_5', {
            controller: 'TodoCtrl_2_15_5', templateUrl: './app/views/checklist/index_2_15_5.html'
        }).when('/ch_2_15_6', {
            controller: 'TodoCtrl_2_15_6', templateUrl: './app/views/checklist/index_2_15_6.html'
        }).when('/ch_2_15_7', {
            controller: 'TodoCtrl_2_15_7', templateUrl: './app/views/checklist/index_2_15_7.html'
        }).when('/ch_2_16', {
            controller: 'TodoCtrl_2_16', templateUrl: './app/views/checklist/index_2_16.html'
        }).when('/ch_2_17_1', {
            controller: 'TodoCtrl_2_17_1', templateUrl: './app/views/checklist/index_2_17_1.html'
        }).when('/ch_2_17_2', {
            controller: 'TodoCtrl_2_17_2', templateUrl: './app/views/checklist/index_2_17_2.html'
        }).when('/ch_2_17_3', {
            controller: 'TodoCtrl_2_17_3', templateUrl: './app/views/checklist/index_2_17_3.html'
        }).when('/ch_2_17_4', {
            controller: 'TodoCtrl_2_17_4', templateUrl: './app/views/checklist/index_2_17_4.html'
        }).when('/ch_2_18', {
            controller: 'TodoCtrl_2_18', templateUrl: './app/views/checklist/index_2_18.html'
        }).when('/listado',
        {
            controller: 'SimpleController',
            templateUrl: './app/views/indice.html'
        }).when('/log',
        {
            controller: 'SimpleController',
            templateUrl: './app/views/log.html'
        }).when('/about',
        {
            controller: 'SimpleController',
            templateUrl: './app/views/about.html'
        }).when('/planos',
        {
            controller: 'SimpleController',
            templateUrl: './app/views/planos.html'
        }).otherwise({
            redirectTo: '/'
        });


});
////////////////
/*
demoApp.config(function ($routeProvider) {

    $routeProvider.when('/', {
            controller: 'SimpleController', templateUrl: 'app/views/View.html'
        }).when('', {
            controller: 'SimpleController', templateUrl: 'app/views/View.html'
        }).when('/panico', {
            controller: 'SimpleController', templateUrl: './app/views/panico.html'
        }).when('/e-1-1', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-1-1.html'
        }).when('/contactoslad', {
            controller: 'SimpleController', templateUrl: './app/views/contactoslad.html'
        }).when('/contactosReg', {
            controller: 'SimpleController', templateUrl: './app/views/contactosReg.html'
        }).when('/autoridades', {
            controller: 'SimpleController', templateUrl: './app/views/autoridades.html'
        }).when('/e-1-2', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-1-2.html'
        }).when('/e-1-3', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-1-3.html'
        }).when('/e-1-4', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-1-4.html'
        }).when('/e-1-5', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-1-5.html'
        }).when('/e-1-6', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-1-6.html'
        }).when('/e-2', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2.html'
        }).when('/e-2-1', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-1.html'
        }).when('/e-2-2', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-2.html'
        }).when('/e-2-2-1', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-2.html'
        }).when('/e-2-2-2', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-2-2.html'
        }).when('/e-2-3', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-3.html'
        }).when('/e-2-4', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-4.html'
        }).when('/e-2-5-1', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-5-1.html'
        }).when('/e-2-5-2', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-5-2.html'
        }).when('/e-2-5-3', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-5-3.html'
        }).when('/e-2-5-4', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-5-4.html'
        }).when('/e-2-6-1', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-6-1.html'
        }).when('/e-2-6-2', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-6-2.html'
        }).when('/e-2-6-3', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-6-3.html'
        }).when('/e-2-6-4', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-6-4.html'
        }).when('/e-2-6-4-1', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-6-4-1.html'
        }).when('/e-2-6-4-2', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-6-4-2.html'
        }).when('/e-2-6-5', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-6-5.html'
        }).when('/e-2-7', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-7.html'
        }).when('/e-2-8', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-8.html'
        }).when('/e-2-9', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-9.html'
        }).when('/e-2-9-1', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-9-1.html'
        }).when('/e-2-9-2', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-9-2.html'
        }).when('/e-2-10', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-10.html'
        }).when('/e-2-11', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-11.html'
        }).when('/e-2-12', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-12.html'
        }).when('/e-2-13', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-13.html'
        }).when('/e-2-13-1', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-13.html'
        }).when('/e-2-13-2', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-13-2.html'
        }).when('/e-2-14', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-14.html'
        }).when('/e-2-15', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-15.html'
        }).when('/e-2-16', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-16.html'
        }).when('/e-2-17', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-17.html'
        }).when('/e-2-18', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-18.html'
        }).when('/e-2-19', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-19.html'
        }).when('/e-2-20', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-20.html'
        }).when('/e-2-21-1', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-21-1.html'
        }).when('/e-2-21-2', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-21-2.html'
        }).when('/e-2-21-3', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-21-3.html'
        }).when('/e-2-21-4', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-21-4.html'
        }).when('/e-2-21-5', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-21-5.html'
        }).when('/e-2-21-6', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-21-6.html'
        }).when('/e-2-21-7', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-21-7.html'
        }).when('/e-2-22-1', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-22-1.html'
        }).when('/e-2-22-2', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-22-2.html'
        }).when('/e-2-22-2-1', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-22-2-1.html'
        }).when('/e-2-22-2-2', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-22-2-2.html'
        }).when('/e-2-22-2-3', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-22-2-3.html'
        }).when('/e-2-22-3', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-22-3.html'
        }).when('/e-2-22-4', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-2-22-4.html'
        }).when('/e-3-1', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-3-1.html'
        }).when('/e-3-1-1', {
            controller: 'SimpleController', templateUrl: './app/views/en/proce/e-3-1-1.html'
        }).when('/contactoshotel', {
            controller: 'SimpleController', templateUrl: './app/views/contactos.html'
        }).when('/ch', {
            controller: 'TodoCtrl_1_1', templateUrl: './app/views/checklist/index_1_1.html'
        }).when('/ch_1_1', {
            controller: 'TodoCtrl_1_1', templateUrl: './app/views/checklist/index_1_1.html'
        }).when('/ch_1_2', {
            controller: 'TodoCtrl_1_2', templateUrl: './app/views/checklist/index_1_2.html'
        }).when('/ch_1_3', {
            controller: 'TodoCtrl_1_3', templateUrl: './app/views/checklist/index_1_3.html'
        }).when('/ch_1_4', {
            controller: 'TodoCtrl_1_4', templateUrl: './app/views/checklist/index_1_4.html'
        }).when('/ch_1_5', {
            controller: 'TodoCtrl_1_5', templateUrl: './app/views/checklist/index_1_5.html'
        }).when('/ch_1_6', {
            controller: 'TodoCtrl_1_6', templateUrl: './app/views/checklist/index_1_6.html'
        }).when('/ch_2_1', {
            controller: 'TodoCtrl_2_1', templateUrl: './app/views/checklist/index_2_1.html'
        }).when('/ch_2_2', {
            controller: 'TodoCtrl_2_2', templateUrl: './app/views/checklist/index_2_2.html'
        }).when('/ch_2_2_2', {
            controller: 'TodoCtrl_2_2_2', templateUrl: './app/views/checklist/index_2_2_2.html'
        }).when('/ch_2_3', {
            controller: 'TodoCtrl_2_3', templateUrl: './app/views/checklist/index_2_3.html'
        }).when('/ch_2_4', {
            controller: 'TodoCtrl_2_4', templateUrl: './app/views/checklist/index_2_4.html'
        }).when('/ch_2_5_1', {
            controller: 'TodoCtrl_2_5_1', templateUrl: './app/views/checklist/index_2_5_1.html'
        }).when('/ch_2_5_2', {
            controller: 'TodoCtrl_2_5_2', templateUrl: './app/views/checklist/index_2_5_2.html'
        }).when('/ch_2_5_3', {
            controller: 'TodoCtrl_2_5_3', templateUrl: './app/views/checklist/index_2_5_3.html'
        }).when('/ch_2_5_4', {
            controller: 'TodoCtrl_2_5_4', templateUrl: './app/views/checklist/index_2_5_4.html'
        }).when('/ch_2_6_1', {
            controller: 'TodoCtrl_2_6_1', templateUrl: './app/views/checklist/index_2_6_1.html'
        }).when('/ch_2_6_2', {
            controller: 'TodoCtrl_2_6_2', templateUrl: './app/views/checklist/index_2_6_2.html'
        }).when('/ch_2_6_3', {
            controller: 'TodoCtrl_2_6_3', templateUrl: './app/views/checklist/index_2_6_3.html'
        }).when('/ch_2_6_4_1', {
            controller: 'TodoCtrl_2_6_4_1', templateUrl: './app/views/checklist/index_2_6_4_1.html'
        }).when('/ch_2_6_4_2', {
            controller: 'TodoCtrl_2_6_4_2', templateUrl: './app/views/checklist/index_2_6_4_2.html'
        }).when('/ch_2_6_5', {
            controller: 'TodoCtrl_2_6_5', templateUrl: './app/views/checklist/index_2_6_5.html'
        }).when('/ch_2_7', {
            controller: 'TodoCtrl_2_7', templateUrl: './app/views/checklist/index_2_7.html'
        }).when('/ch_2_8', {
            controller: 'TodoCtrl_2_8', templateUrl: './app/views/checklist/index_2_8.html'
        }).when('/ch_2_9', {
            controller: 'TodoCtrl_2_9', templateUrl: './app/views/checklist/index_2_9.html'
        }).when('/ch_2_9_1', {
            controller: 'TodoCtrl_2_9_1', templateUrl: './app/views/checklist/index_2_9_1.html'
        }).when('/ch_2_9_2', {
            controller: 'TodoCtrl_2_9_2', templateUrl: './app/views/checklist/index_2_9_2.html'
        }).when('/ch_2_10', {
            controller: 'TodoCtrl_2_10', templateUrl: './app/views/checklist/index_2_10.html'
        }).when('/ch_2_11', {
            controller: 'TodoCtrl_2_11', templateUrl: './app/views/checklist/index_2_11.html'
        }).when('/ch_2_12', {
            controller: 'TodoCtrl_2_12', templateUrl: './app/views/checklist/index_2_12.html'
        }).when('/ch_2_13', {
            controller: 'TodoCtrl_2_13', templateUrl: './app/views/checklist/index_2_13.html'
        }).when('/ch_2_13_2', {
            controller: 'TodoCtrl_2_13_2', templateUrl: './app/views/checklist/index_2_13_2.html'
        }).when('/ch_2_14', {
            controller: 'TodoCtrl_2_14', templateUrl: './app/views/checklist/index_2_14.html'
        }).when('/ch_2_15_1', {
            controller: 'TodoCtrl_2_15_1', templateUrl: './app/views/checklist/index_2_15_1.html'
        }).when('/ch_2_15_2', {
            controller: 'TodoCtrl_2_15_2', templateUrl: './app/views/checklist/index_2_15_2.html'
        }).when('/ch_2_15_3', {
            controller: 'TodoCtrl_2_15_3', templateUrl: './app/views/checklist/index_2_15_3.html'
        }).when('/ch_2_15_4', {
            controller: 'TodoCtrl_2_15_4', templateUrl: './app/views/checklist/index_2_15_4.html'
        }).when('/ch_2_15_5', {
            controller: 'TodoCtrl_2_15_5', templateUrl: './app/views/checklist/index_2_15_5.html'
        }).when('/ch_2_15_6', {
            controller: 'TodoCtrl_2_15_6', templateUrl: './app/views/checklist/index_2_15_6.html'
        }).when('/ch_2_15_7', {
            controller: 'TodoCtrl_2_15_7', templateUrl: './app/views/checklist/index_2_15_7.html'
        }).when('/ch_2_16', {
            controller: 'TodoCtrl_2_16', templateUrl: './app/views/checklist/index_2_16.html'
        }).when('/ch_2_17', {
            controller: 'TodoCtrl_2_17', templateUrl: './app/views/checklist/index_2_17.html'
        }).when('/ch_2_17_2', {
            controller: 'TodoCtrl_2_17_2', templateUrl: './app/views/checklist/index_2_17_2.html'
        }).when('/ch_2_17_3', {
            controller: 'TodoCtrl_2_17_3', templateUrl: './app/views/checklist/index_2_17_3.html'
        }).when('/ch_2_17_4', {
            controller: 'TodoCtrl_2_17_4', templateUrl: './app/views/checklist/index_2_17_4.html'
        }).when('/ch_2_18', {
            controller: 'TodoCtrl_2_18', templateUrl: './app/views/checklist/index_2_18.html'
        }).when('/ch_2_20', {
            controller: 'TodoCtrl_2_20', templateUrl: './app/views/checklist/index_2_20.html'
        }).when('/ch_2_21_1', {
            controller: 'TodoCtrl_2_21_1', templateUrl: './app/views/checklist/index_2_21_1.html'
        }).when('/ch_2_21_2', {
            controller: 'TodoCtrl_2_21_2', templateUrl: './app/views/checklist/index_2_21_2.html'
        }).when('/ch_2_21_3', {
            controller: 'TodoCtrl_2_21_3', templateUrl: './app/views/checklist/index_2_21_3.html'
        }).when('/ch_2_21_4', {
            controller: 'TodoCtrl_2_21_4', templateUrl: './app/views/checklist/index_2_21_4.html'
        }).when('/ch_2_21_5', {
            controller: 'TodoCtrl_2_21_5', templateUrl: './app/views/checklist/index_2_21_5.html'
        }).when('/ch_2_21_6', {
            controller: 'TodoCtrl_2_21_6', templateUrl: './app/views/checklist/index_2_21_6.html'
        }).when('/ch_2_21_7', {
            controller: 'TodoCtrl_2_21_7', templateUrl: './app/views/checklist/index_2_21_7.html'
        }).when('/ch_2_22_1', {
            controller: 'TodoCtrl_2_22_1', templateUrl: './app/views/checklist/index_2_22_1.html'
        }).when('/ch_2_22_2', {
            controller: 'TodoCtrl_2_22_2', templateUrl: './app/views/checklist/index_2_22_2.html'
        }).when('/ch_2_22_2_1', {
            controller: 'TodoCtrl_2_22_2_1', templateUrl: './app/views/checklist/index_2_22_2_1.html'
        }).when('/ch_2_22_2_2', {
            controller: 'TodoCtrl_2_22_2_2', templateUrl: './app/views/checklist/index_2_22_2_2.html'
        }).when('/ch_2_22_2_3', {
            controller: 'TodoCtrl_2_22_2_3', templateUrl: './app/views/checklist/index_2_22_2_3.html'
        }).when('/ch_2_22_3', {
            controller: 'TodoCtrl_2_22_3', templateUrl: './app/views/checklist/index_2_22_3.html'
        }).when('/ch_2_22_4', {
            controller: 'TodoCtrl_2_22_4', templateUrl: './app/views/checklist/index_2_22_4.html'
        }).when('/listado',
        {
            controller: 'SimpleController',
            templateUrl: './app/views/indice.html'
        }).when('/log',
        {
            controller: 'SimpleController',
            templateUrl: './app/views/log.html'
        }).when('/about',
        {
            controller: 'SimpleController',
            templateUrl: './app/views/about.html'
        }).when('/planos',
        {
            controller: 'SimpleController',
            templateUrl: './app/views/planos.html'
        }).otherwise({
            redirectTo: '/'
        });


});
*/
demoApp.factory('simpleFactory', function ($http) {

    var metro = [
        { id: 1, title: "Evacuation", img: "Images/lb/Incendio.jpg", txtcss: "metro gpcolorgreen", link: "#/evacuacion" },
        { id: 2, title: "Bomb Threat", img: "Images/lb/Amenaza.jpg", txtcss: "metro gpcolororange", link: "#/bomba" },
        { id: 3, title: "Fire" , img: "Images/lb/Incendio.jpg", txtcss: "metro gpcolorred", link: "#/2-8-IncendioExplosion" },
        { id: 4, title: "Earthquake", img: "Images/lb/Sismo.jpg", txtcss: "metro gpcoloryellow", link: "#/2-18-terremotos" },
        { id: 5, title: "Call", img: "Images/lb/Extorsion.jpg", txtcss: "metro gpcolorpink", link: "#/contactoshotel" },
        { id: 6, title: "Homicide", img: "Images/lb/Extorsion.jpg", txtcss: "metro gpcolormidblue", link: "#/muerte" },
        { id: 7, title: "Foodborne", img: "Images/lb/Defuncion.jpg", txtcss: "metro gpcolorlime", link: "#/alimentos" },
        { id: 8, title: "Hurricane", img: "Images/lb/Huracan.jpg", txtcss: "metro gpcolorpurple", link: "#/2-17-2-Huracanes" },
        { id: 9, title: "Power Failure", img: "Images/lb/Inundacion.jpg", txtcss: "metro gpcolorblue", link: "#/2-15-CorteServicios" },
        { id: 10, title: "Authorities", img: "Images/lb/Secuestro.jpg", txtcss: "metro gpcolormidpumpkin", link: "#/autoridades" },
        { id: 11, title: "Index", img: "Images/listw.png", txtcss: "metro gpcolormidsilver", link: "#/listado" }
       // { id: 12, title: "Blueprint", img: "Images/planos.jpg", txtcss: "metro gpcolorblue", link: "#/planos" }
    ];


    var movies = [
{
    name: "1.PROCEDIMIENTOS DE EMERGENCIA",
    items: [
      { item: "1.1.DESCONTAMINACIÓN", link: "#/descontaminacion" },
      { item: "1.2.EVACUACIÓN", link: "#/evacuacion" },
      { item: "1.2 bis PLAN DE EVACUACION", link: "#/evacuacion" },
      { item: "1.3.CUARENTENA", link: "#/cuarentena" },
      { item: "1.4.BÚSQUEDA y RESCATE", link: "#/rescate" },
      { item: "1.5.REFUGIO en el LUGAR", link: "#/refugio" }
    ]
},
{
    name: "2.    EMERGENCIAS",
    items: [
      { item: "2.1. AMENAZA de BOMBA", link: "#/bomba" },
      { item: "2.2. DISTURBIOS SOCIALES", link: "#/2-2-DisturbiosSociales" },
      { item: "2.2.1. Manifestación Pacífica", link: "#/2-2-DisturbiosSociales" },
      { item: "2.2.2. Manifestación Violenta", link: "#/2-2-DisturbiosSociales" },
      { item: "2.3. ENFERMEDADES CONTAGIOSAS", link: "#/2-3-ENFERMEDADESCONTAGIOSAS" },
      { item: "2.4. CRISIS en el VECINDARIO o ÁREAS LOCALES", link: "#/2-4-CrisisVecindarioAreasLocales" },
      { item: "2.5. ACTIVIDADES DELICTIVAS", link: "#/2-5-ActividadesDelictivas" },
      { item: "2.5.1. Ataque Físico o Sexual", link: "#/2-5-ActividadesDelictivas" },
      { item: "2.5.2. Homicidio", link: "#/2-5-ActividadesDelictivas" },
      { item: "2.5.3. Robo", link: "#/2-5-ActividadesDelictivas" },
      { item: "2.5.4. Hurto", link: "#/2-5-ActividadesDelictivas" },
      { item: "2.6. MUERTE en el ESTABLECIMIENTO", link: "#/muerte" },
      { item: "2.6.1. Muerte de un Miembro del Personal Relacionado con el Trabajo", link: "#/muerte" },
      { item: "2.6.2. Ahogo", link: "#/muerte" },
      { item: "2.6.3. Muerte Natural", link: "#/muerte" },
      { item: "2.6.4. Muerte por Suicidio o Tentativa/Amenaza de Suicidio", link: "#/muerte" },
      { item: "2.6.4.1. Muerte o Suicidio", link: "#/muerte" },
      { item: "2.6.4.2. Tentativa o Amenaza de Suicidio", link: "#/muerte" },
      { item: "2.6.5. Electrocución", link: "#/muerte" },
      { item: "2.7. EMERGENCIA con ASCENSORES", link: "#/2-7-EmergenciasAscensores" },
      { item: "2.8. INCENDIO o EXPLOSIÓN", link: "#/2-8-IncendioExplosion" },
      { item: "2.8.1. Incendio", link: "#/2-8-IncendioExplosion" },
      { item: "2.8.2. Explosión", link: "#/2-8-IncendioExplosion" },
      { item: "2.9. ENFERMEDAD o MUERTE CAUSADA por ALIMENTOS", link: "#/alimentos" },
      { item: "2.10. DERRAME de MATERIALES PELIGROSOS o QUIMICOS (HAZMAT)", link: "#/2-10-Hazmat" },
      { item: "2.11. TOMA de REHENES", link: "#/2-11-TomaDeRehenes" },
      { item: "2.12. HERIDAS o ENFERMEDAD", link: "#/2-12-HeridasyEnfermedad" },
      { item: "2.12.1. Emergencias Médicas de los Huéspedes", link: "#/2-12-HeridasyEnfermedad" },
      { item: "2.12.2. Accidente o lesiones de un Miembro del Personal", link: "#/2-12-HeridasyEnfermedad" },
      { item: "2.13. COLAPSO ESTRUCTURAL", link: "#/2-13-ColapsoEstructural" },
      { item: "2.14. OBJETO o PAQUETE SOSPECHOSO", link: "#/2-14-ObjetoPaqueteSospechoso" },
      { item: "2.15. CORTE o INTERRUPCION de los SERVICIOS", link: "#/2-15-CorteServicios" },
      { item: "2.15.1. Escape de Gas", link: "#/2-15-CorteServicios" },
      { item: "2.15.2. Fallas en la Calefacción / Aire acondicionado", link: "#/2-15-CorteServicios" },
      { item: "2.15.3. Corte de Energía", link: "#/2-15-CorteServicios" },
      { item: "2.15.4. Sanitario/Saneamiento", link: "#/2-15-CorteServicios" },
      { item: "2.15.5. Fallas en las Telecomunicaciones", link: "#/2-15-CorteServicios" },
      { item: "2.15.6. Pérdida de Agua", link: "#/2-15-CorteServicios" },
      { item: "2.15.7. Falta de Agua", link: "#/2-15-CorteServicios" },
      { item: "2.16. OTRAS EMERGENCIAS", link: "#/2-16-OtrasEmergencias" },
      { item: "2.17.1 Tornados", link: "#/2-17-1-Tornados" },
      { item: "2.17.2 Huracanes", link: "#/2-17-2-Huracanes" },
      { item: "2.17.3 Inundaciones", link: "#/2-17-3-Inundaciones" },
      { item: "2.17.4 Tormenta de Viento", link: "#/2-17-4-TormentaViento" },
      { item: "2.18 Terremotos", link: "#/2-18-terremotos" }
    ]
},
{
        name: "3-Check Lists",
        items: [
            { item: "CheckList 1.1. DESCONTAMINACIÓN", link: "#/ch" },
            { item: "CheckList 1.2. EVACUACIÓN", link: "#/ch_1_2" },
            { item: "CheckList 1.3. bis PLAN DE EVACUACION", link: "#/ch_1_3" },
            { item: "CheckList 1.4. BÚSQUEDA y RESCATE", link: "#/ch_1_4" },
            { item: "CheckList 1.5. REFUGIO en el LUGAR", link: "#/ch_1_5" },
            { item: "CheckList 2.1. AMENAZA de BOMBA", link: "#/ch_2_1" },
            { item: "CheckList 2.2. DISTURBIOS SOCIALES", link: "#/ch_2_2" },
            { item: "CheckList 2.2.1. Manifestación Pacífica", link: "#/ch_2_2" },
            { item: "CheckList 2.2.2. Manifestación Violenta", link: "#/ch_2_2" },
            { item: "CheckList 2.3. ENFERMEDADES CONTAGIOSAS", link: "#/ch_2_3" },
            { item: "CheckList 2.4. CRISIS en el VECINDARIO o ÁREAS LOCALES", link: "#/ch_2_4" },
            { item: "CheckList 2.5. ACTIVIDADES DELICTIVAS", link: "#/ch_2_5" },
            { item: "CheckList 2.5.1. Ataque Físico o Sexual", link: "#/ch_2_5" },
            { item: "CheckList 2.5.2. Homicidio", link: "#/ch_2_5" },
            { item: "CheckList 2.5.3. Robo", link: "#/ch_2_5" },
            { item: "CheckList 2.5.4. Hurto", link: "#/ch_2_5" },
            { item: "CheckList 2.6. MUERTE en el ESTABLECIMIENTO", link: "#/ch_2_6" },
            { item: "CheckList 2.6.1. Muerte de un Miembro del Personal Relacionado con el Trabajo", link: "#/ch_2_6" },
            { item: "CheckList 2.6.2. Ahogo", link: "#/ch_2_6" },
            { item: "CheckList 2.6.3. Muerte Natural", link: "#/ch_2_6" },
            { item: "CheckList 2.6.4. Muerte por Suicidio o Tentativa/Amenaza de Suicidio", link: "#/ch_2_6" },
            { item: "CheckList 2.6.4.1. Muerte o Suicidio", link: "#/ch_2_6" },
            { item: "CheckList 2.6.4.2. Tentativa o Amenaza de Suicidio", link: "#/ch_2_6" },
            { item: "CheckList 2.6.5. Electrocución", link: "#/ch_2_6" },
            { item: "CheckList 2.7. EMERGENCIA con ASCENSORES", link: "#/ch_2_7" },
            { item: "CheckList 2.8. INCENDIO o EXPLOSIÓN", link: "#/ch_2_8" },
            { item: "CheckList 2.8.1. Incendio", link: "#/ch_2_8" },
            { item: "CheckList 2.8.2. Explosión", link: "#/ch_2_8" },
            { item: "CheckList 2.9. ENFERMEDAD o MUERTE CAUSADA por ALIMENTOS", link: "#/ch_2_9" },
            { item: "CheckList 2.10. DERRAME de MATERIALES PELIGROSOS o QUIMICOS (HAZMAT)", link: "#/ch_2_10" },
            { item: "CheckList 2.11. TOMA de REHENES", link: "#/ch_2_11" },
            { item: "CheckList 2.12. HERIDAS o ENFERMEDAD", link: "#/ch_2_12" },
            { item: "CheckList 2.12.1. Emergencias Médicas de los Huéspedes", link: "#/ch_2_12" },
            { item: "CheckList 2.12.2. Accidente o lesiones de un Miembro del Personal", link: "#/ch_2_12" },
            { item: "CheckList 2.13. COLAPSO ESTRUCTURAL", link: "#/ch_2_13" },
            { item: "CheckList 2.14. OBJETO o PAQUETE SOSPECHOSO", link: "#/ch_2_14" },
            { item: "CheckList 2.15.1. Escape de Gas", link: "#/ch_2_15_1" },
            { item: "CheckList 2.15.2. Fallas en la Calefacción / Aire acondicionado", link: "#/ch_2_15_2" },
            { item: "CheckList 2.15.3. Corte de Energía", link: "#/ch_2_15_3" },
            { item: "CheckList 2.15.4. Sanitario/Saneamiento", link: "#/ch_2_15_4" },
            { item: "CheckList 2.15.5. Fallas en las Telecomunicaciones", link: "#/ch_2_15_5" },
            { item: "CheckList 2.15.6. Pérdida de Agua", link: "#/ch_2_15_6" },
            { item: "CheckList 2.15.7. Falta de Agua", link: "#/ch_2_15_7" },
            { item: "CheckList 2.16. OTRAS EMERGENCIAS", link: "#/ch_2_16" },
            { item: "CheckList 2.17.1. Tornados", link: "#/ch_2_17_1" },
            { item: "CheckList 2.17.2. Huracanes", link: "#/ch_2_17_2" },
            { item: "CheckList 2.17.3. Inundaciones", link: "#/ch_2_17_3" },
            { item: "CheckList 2.17.4. Tormentas de Viento", link: "#/ch_2_17_4" },
            { item: "CheckList 2.18. Terremotos", link: "#/ch_2_18" }
        ]}
    ];

    //    [
    //        {
    //            movieName: 'Agosto', releaseDate: '21/02/2014', calificacion: '', items: [
    //    { name: 'German', completed: false },
    //    { name: 'Alexia', completed: true },
    //    { name: 'Ron', completed: false },
    //            ]
    //        },
    //        {
    //            movieName: 'Escandalo Americano', releaseDate: '21/02/2014', calificacion: '', items: [
    //        { name: 'Cinema' , completed: false },
    //        { name: 'Write blog post', completed: true },
    //        { name: 'Buy milk', completed: false },
    //            ]
    //        },
    //        {
    //            movieName: '300. Nacimiento de un imperio.', releaseDate: '06/03/2014', calificacion: '', items: [
    //        { name: 'Pool', completed: false },
    //        { name: 'Operacion', completed: true },
    //        { name: 'Maratoin', completed: false },
    //            ]
    //        },
    //        {
    //            movieName: 'One chance', releaseDate: '06/03/2014', calificacion: '', items: [
    //        { name: 'Test', completed: false },
    //        { name: 'Test3', completed: true },
    //        { name: 'Test4', completed: false },
    //            ]
    //        },
    //        {
    //            movieName: 'Ella', releaseDate: '06/03/2014', calificacion: '', items: [
    //        { name: 'Nose', completed: false },
    //        { name: 'Nose 2', completed: true },
    //        { name: 'Buy milk', completed: false },
    //            ]
    //        },
    //        {
    //            movieName: 'Heredero del diablo', releaseDate: '13/03/2014', calificacion: '', items: [
    //        { name: 'Nose 3', completed: false },
    //        { name: 'Nose', completed: true },
    //        { name: 'Noses', completed: false },
    //            ]
    //        }
    //];
    //////////////////////////////////CONTACTOS ////////////////////////
       var contactoslad=[{
        id: 1,
        position: "Corporate",
        personal: [{ idperson:1, team:'Head of Corporate' , name:'' , title:'' , bussinesphone:'+' , homephone:'', mobilephone:'+' , email:'', location:'' }]
    }];

//////////////////-----------------Contactos Region ------------------/////////////////

var contactosRegion =[];


  ///////////////-----------------Contactos Hotel ------------------//////////////////
    var contactoshotel =[{
        id: 1,
        position: "Emergency Team",
        personal: [
            { idperson:1, team:'DIRECCION DE HOTEL HRHPC' , name: 'SELAS DIAZ ALBERTO ' , title:'DIR DE OPERACIONES RCD' , bussinesphone:'809-754-0333' , homephone: '', mobilephone: '809-754-0333' , email: 'aselas@hrhcpuntacana.com', location: 'RCD' },
            { idperson:2, team:'DIRECCION DE HOTEL HRHPC' , name: 'CUEVAS HERNANDEZ MARIA ESTHER' , title:'DIR DE RENTAS Y CON. PRES.' , bussinesphone:'809-501-7335' , homephone: '', mobilephone: '809-501-7335' , email: 'mcuevas@rcdhotels.com', location: 'RCD' },
            { idperson:3, team:'DIRECCION DE HOTEL HRHPC' , name: 'EL AMGHARI MOHAMED' , title:'DIRECTOR DE OPERACIONES HRHPC' , bussinesphone:'809-501-0872' , homephone: '', mobilephone: '809-501-0872' , email: 'melamghari@hrhcpuntacana.com', location: 'RCD' },
            { idperson:4, team:'DIRECCION DE HOTEL HRHPC' , name: 'QUISPE CHARCA ERIKA DINA' , title:'DIRECTOR FRONT OF THE HOUSE' , bussinesphone:'809-754-5856' , homephone: '', mobilephone: '809-754-5856' , email: 'equispe@hrhcpuntacana.com', location: 'RCD' },
            { idperson:5, team:'DIRECCION DE HOTEL HRHPC' , name: 'CASTRO BROISSIN IVAN ALEJANDRO' , title:'GERENTE DE SERVICIOS GENERALES' , bussinesphone:'829-470-6755' , homephone: '', mobilephone: '829-470-6755' , email: 'icastro@hrhcpuntacana.com', location: 'RCD' },
            { idperson:6, team:'DIRECCION DE HOTEL HRHPC' , name: 'DOMINGUEZ HIDALGO MIGUEL ANGEL' , title:'GERENTE NOCTURNO HRHPC' , bussinesphone:'809-754-6885' , homephone: '', mobilephone: '809-754-6885' , email: 'migdominguez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:7, team:'DIRECCION DE HOTEL HRHPC' , name: 'FIOR DALIZA BASTARDO JIMENEZ' , title:'ASISTENTE DIRECCION HOTEL' , bussinesphone:'829-755-9562' , homephone: '', mobilephone: '829-755-9562' , email: 'fbastardo@hrhcpuntacana.com', location: 'RCD' },
            { idperson:8, team:'DIRECCION DE HOTEL HRHPC' , name: 'HERNANDEZ VILLAMAN GABRIELA' , title:'COMMUNITY MANAGER' , bussinesphone:'809-754-7224' , homephone: '', mobilephone: '809-754-7224' , email: 'ghernandez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:9, team:'JURIDICO HRHPC' , name: 'CEBALLO SANTANA AIDED' , title:'GERENTE LEGAL' , bussinesphone:'829-470-3525' , homephone: '', mobilephone: '829-470-3525' , email: 'aceballo@hrhcpuntacana.com', location: 'RCD' }
        ]
    },
    {
        id: 2,
        position: "Operations Committee",
        personal: [
            { idperson:10, team:'SOPORTE TECNICO HRHPC' , name: 'CRUZ RAMOS JOSE ORLANDO' , title:'GERENTE OPER Y SOPORTE HRHPC' , bussinesphone:'809-501-3785' , homephone: '', mobilephone: '809-501-3785' , email: 'jcruz@hrhcpuntaca.com', location: 'RCD' },
            { idperson:11, team:'SOPORTE TECNICO HRHPC' , name: 'CIRIACO HERNANDEZ JUAN MANUEL' , title:'JEFE COMUNICACIONES HRHPC' , bussinesphone:'809-754-2495' , homephone: '', mobilephone: '809-754-2495' , email: 'jciriaco@hrhcpuntacana.com', location: 'RCD' },
            { idperson:12, team:'SOPORTE TECNICO HRHPC' , name: 'DUGEE SANCHEZ JUNIOR' , title:'JEFE DE INFRAESTRUCTURA HRHPC' , bussinesphone:'829-755-9527' , homephone: '', mobilephone: '829-755-9527' , email: 'jdugee@hrhcpuntacana.com', location: 'RCD' },
            { idperson:13, team:'SOPORTE TECNICO HRHPC' , name: 'TORRES SALGADO GINER' , title:'SUB GERENTE SISTEMAS HRHPC' , bussinesphone:'809-754-2941' , homephone: '', mobilephone: '809-754-2941' , email: 'gtorres@hrhcpuntacana.com', location: 'RCD' },
            { idperson:14, team:'TELEFONOS HRHPC' , name: 'DE LA ROSA DE MOTA CECILIA' , title:'JEFE DE TELEFONOS HRHPC' , bussinesphone:'809 754 0927' , homephone: '', mobilephone: '809 754 0927' , email: 'cdelarosa@hrhcpuntacana.com', location: 'RCD' },
            { idperson:15, team:'SISTEMAS AUDIOVISUALES HRHPC' , name: 'MELENCIANO TEJEDA CARLOS ALEJANDRO' , title:'JEFE DE AUDIOVISUALES HRHPC' , bussinesphone:'809-754-3883' , homephone: '', mobilephone: '809-754-3883' , email: 'cmelenciano@hrhcpuntacana.com', location: 'RCD' },
            { idperson:16, team:'SISTEMAS AUDIOVISUALES HRHPC' , name: 'ROSAS NAVARRO LUIS CARLOS' , title:'VIBE MANAGER HRHPC' , bussinesphone:'809-754-6821' , homephone: '', mobilephone: '809-754-6821' , email: 'vibemanager@hrhcpuntacana.com', location: 'RCD' },
            { idperson:17, team:'RECEPCION HRHPC' , name: 'CHAVARRIA WARVASOVSZKY JEAN CARLO' , title:'GERENTE RECEPCION HRHPC' , bussinesphone:'829-204-4649' , homephone: '', mobilephone: '829-204-4649' , email: 'jchavarria@hrhcpuntacana.com', location: 'RCD' },
            { idperson:18, team:'SEGURIDAD HRHPC' , name: 'RODRIGUEZ REYES RAUL JAVANETT' , title:'GERENTE DE SEGURIDAD HRHPC' , bussinesphone:'829-760-9902' , homephone: '', mobilephone: '829-760-9902' , email: 'rrodriguez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:19, team:'SEGURIDAD HRHPC' , name: 'JABALERA EUSEBIO EUFRACINA' , title:'GERENTE DE SEGURIDAD Y SALUD' , bussinesphone:'N/A' , homephone: '', mobilephone: 'N/A' , email: 'ejabalera@hrhcpuntacana.com', location: 'RCD' },
            { idperson:20, team:'GERENCIA MANTENIMIENTO HRHPC' , name: 'JIMENEZ VASQUEZ ISAURA MARGARITA' , title:'COORD DIRECCION MANTTO HRHPC' , bussinesphone:'809-754-2603' , homephone: '', mobilephone: '809-754-2603' , email: 'ijimenez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:21, team:'GERENCIA MANTENIMIENTO HRHPC' , name: 'ANDRADE CARDENAS ALEJANDRO' , title:'DIRECTOR MANTENIMIENTO HRHPC' , bussinesphone:'849-884-6716' , homephone: '', mobilephone: '849-884-6716' , email: 'aramirez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:22, team:'GERENCIA MANTENIMIENTO HRHPC' , name: 'VARGAS  ANEURIS' , title:'GERENTE DE INGENIERIA HRHPC' , bussinesphone:'809-754-6743' , homephone: '', mobilephone: '809-754-6743' , email: 'avargas@hrhcpuntacana.com', location: 'RCD' },
            { idperson:23, team:'GERENCIA MANTENIMIENTO HRHPC' , name: 'QUIROZ CERRUD JEAN CARLOS' , title:'GERENTE MANTENIMIENTO HAB HRHP' , bussinesphone:'829-755-9983' , homephone: '', mobilephone: '829-755-9983' , email: 'jquiroz@hrhcpuntacana.com', location: 'RCD' },
            { idperson:24, team:'RELACIONES PUBLICAS HRHPC' , name: 'PEREZ PEREZ ANMARI YOLANDA' , title:'GERENTE CUSTOMER CARE HRHPC' , bussinesphone:'809-754-6991' , homephone: '', mobilephone: '809-754-6991' , email: 'anmperez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:25, team:'RELACIONES PUBLICAS HRHPC' , name: 'TORRES MARITZA' , title:'GTE RELACIONES PUBLICAS HRHPC' , bussinesphone:'829-420-6481' , homephone: '', mobilephone: '829-420-6481' , email: 'matorres@hrhcpuntacana.com', location: 'RCD' },
            { idperson:26, team:'RELACIONES PUBLICAS HRHPC' , name: 'JIMENEZ HENRIQUEZ YENRRY' , title:'JEFE DE MAYORDOMIA HRHPC' , bussinesphone:'829-755-9528' , homephone: '', mobilephone: '829-755-9528' , email: 'yjimenez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:27, team:'RESERVACIONES HRHPC' , name: 'SANTANA CUETO MELVIN ANTONIO' , title:'GERENTE RESERVACIONES HRHPC' , bussinesphone:'N/A' , homephone: '', mobilephone: 'N/A' , email: 'msantana@hrhcpuntacana.com', location: 'RCD' },
            { idperson:28, team:'GESTION DE LA CALIDAD HRHPC' , name: 'HERNANDEZ AMPARO DEVORAH' , title:'COORDINADOR AMBIENTAL HRHPC' , bussinesphone:'809-501-6214' , homephone: '', mobilephone: '809-501-6214' , email: 'dhernandez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:29, team:'DISCOTECA HRHPC' , name: 'DE SOTO INCHAUSTEGUI MARIA ISABEL' , title:'GERENTE MARKETING DISCO' , bussinesphone:'809-754-7226' , homephone: '', mobilephone: '809-754-7226' , email: 'mdesoto@oronightclub.com', location: 'RCD' },
            { idperson:30, team:'ENTRETENIMIENTO HRHPC' , name: 'GOMEZ SANTANA GISSEL MARGARITA' , title:'COORD ENTRETENIMIENTO HRHPC' , bussinesphone:'809-754-5867' , homephone: '', mobilephone: '809-754-5867' , email: 'ggomez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:31, team:'ENTRETENIMIENTO HRHPC' , name: 'SANTIAGO AVILA ANGEL IGNACIO' , title:'GERENTE ENTRETENIMIENTO HRHPC' , bussinesphone:'829-421-5252' , homephone: '', mobilephone: '829-421-5252' , email: 'asantiago@hrhcpuntacana.com', location: 'RCD' },
            { idperson:32, team:'BELL BOYS / CONCIERGE HRHPC' , name: 'CEDEÑO RAPOSO NEULY ALBERTO' , title:'JEFE BELL BOYS HRHPC' , bussinesphone:'829-470-6347' , homephone: '', mobilephone: '829-470-6347' , email: 'ncedeno@hrhcpuntacana.com', location: 'RCD' },
            { idperson:33, team:'AMA DE LLAVES HRHPC' , name: 'ALONZO BAEZ MICHELLE ELIZABETH' , title:'DIRECTOR DIV. CUARTOS HRHPC' , bussinesphone:'809-754-7273' , homephone: '', mobilephone: '809-754-7273' , email: 'malonzo@hrhcpuntacana.com', location: 'RCD' },
            { idperson:34, team:'AMA DE LLAVES HRHPC' , name: 'BALTAZAR BADIAN TERESA' , title:'JEFE AMA DE LLAVES HRHPC' , bussinesphone:'809-754-7275' , homephone: '', mobilephone: '809-754-7275' , email: 'amadellavesoperativa1@hrhcpuntacana.com', location: 'RCD' },
            { idperson:35, team:'AMA DE LLAVES HRHPC' , name: 'MERCEDES FORNET ALEXANDRA' , title:'JEFE AMA DE LLAVES HRHPC' , bussinesphone:'809-754-1857' , homephone: '', mobilephone: '809-754-1857' , email: 'amadellavesoperativa1@hrhcpuntacana.com', location: 'RCD' },
            { idperson:36, team:'AMA DE LLAVES HRHPC' , name: 'OVALLE  KARIM DEL ROCIO' , title:'JEFE AMA DE LLAVES HRHPC' , bussinesphone:'809-754-7451' , homephone: '', mobilephone: '809-754-7451' , email: 'amadellavesoperativa1@hrhcpuntacana.com', location: 'RCD' },
            { idperson:37, team:'AMA DE LLAVES HRHPC' , name: 'BAEZ RODRIGUEZ ENEROLIZA' , title:'AMA DE LLAVES EJECUTIVA HRHPC' , bussinesphone:'809-754-7276' , homephone: '', mobilephone: '809-754-7276' , email: 'ebaez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:38, team:'LAVANDERIA HRHPC' , name: 'SIERRA SORIANO JUAN' , title:'JEFE LAVANDERIA Y ROPERIA HRPC' , bussinesphone:'829-639-8560' , homephone: '', mobilephone: '829-639-8560' , email: 'jusierra@hrhcpuntacana.com', location: 'RCD' },
            { idperson:39, team:'AREAS PUBLICAS HRHPC' , name: 'SENCION RAMIREZ GELSON ANTONIO' , title:'JEFE AREAS PUBLICAS HRHPC' , bussinesphone:'809-501-0521' , homephone: '', mobilephone: '809-501-0521' , email: 'gsencion@hrhcpuntacana.com', location: 'RCD' },
            { idperson:40, team:'AREAS PUBLICAS HRHPC' , name: 'MOTA CEDANO FRANK' , title:'SUBJEFE DE AREAS PUBLICAS HRHP' , bussinesphone:'809-754-3882' , homephone: '', mobilephone: '809-754-3882' , email: 'N/A', location: 'RCD' },
            { idperson:41, team:'GERENCIA DE AYB HRHPC' , name: 'ZELADA CHACON SALVADOR ALBERTO' , title:'DIRECTOR OPERACIONES AYB HRHPC' , bussinesphone:'829-745-0840' , homephone: '', mobilephone: '829-745-0840' , email: 'szelada@hrhcpuntacana.com', location: 'RCD' },
            { idperson:42, team:'GERENCIA DE AYB HRHPC' , name: 'LUGO MESA YVANNORIS BIENVENIDA' , title:'GERENTE AYB HRHPC' , bussinesphone:'829-387-1035' , homephone: '', mobilephone: '829-387-1035' , email: 'ylugo@hrhcpuntacana.com', location: 'RCD' },
            { idperson:43, team:'GERENCIA DE AYB HRHPC' , name: 'CISCATO MATTEO' , title:'SUB DIR OPERACIONES AYB HRHPC' , bussinesphone:'829-761-0553' , homephone: '', mobilephone: '829-761-0553' , email: 'MCiscato@hrhcpuntacana.com', location: 'RCD' },
            { idperson:44, team:'BANQUETES HRHPC' , name: 'DENIS  YOAN' , title:'SUBGERENTE BANQUETES HRHPC' , bussinesphone:'809-754-5954' , homephone: '', mobilephone: '809-754-5954' , email: 'ydenis@hrhcpuntacana.com', location: 'RCD' },
            { idperson:45, team:'BARES HRHPC' , name: 'PEREZ VILLALBA JOSE JAVIER' , title:'GERENTE DE BARES HRHPC' , bussinesphone:'849-455-7736' , homephone: '', mobilephone: '849-455-7736' , email: 'joperez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:46, team:'BARES HRHPC' , name: 'DEL ROSARIO HENRIQUEZ ANDRY ALEXIS' , title:'GERENTE DE MINIBARES HRHPC' , bussinesphone:'' , homephone: '', mobilephone: '' , email: 'minibareshrpc@hrhcpuntacana.com', location: 'RCD' },
            { idperson:47, team:'BARES HRHPC' , name: 'NAVARRO ROSSIS LEOVIGILDO' , title:'JEFE BARES HRHPC' , bussinesphone:'849-455-7719' , homephone: '', mobilephone: '849-455-7719' , email: 'lnavarro@hrhcpuntacana.com', location: 'RCD' },
            { idperson:48, team:'CORTESIAS / ROOM SERVICE HRHPC' , name: 'GARCIA RIVERA TOMAS ARIEL' , title:'GERENTE CORTESIAS / RS HRHPC' , bussinesphone:'809-754-7076' , homephone: '', mobilephone: '809-754-7076' , email: 'N/A', location: 'RCD' },
            { idperson:49, team:'STEWARDS HRHPC' , name: 'CASTILLO ROMERO DOMINGO CARNOBALITO' , title:'JEFE STEWARDS HRHPC' , bussinesphone:'829-643-7885' , homephone: '', mobilephone: '829-643-7885' , email: 'dcastillo@hrhcpuntacana.com', location: 'RCD' },
            { idperson:50, team:'COCINA HRHPC' , name: 'PADRO KALYCH ELIM' , title:'DIRECTOR GASTRONOMICO HRHPC' , bussinesphone:'829-340-5494' , homephone: '', mobilephone: '829-340-5494' , email: 'kpadro@hrhcpuntacana.com', location: 'RCD' },
            { idperson:51, team:'ALMACEN HRHPC' , name: 'PEREZ MARTINEZ EVA' , title:'GERENTE ALMACEN HRHPC' , bussinesphone:'849-455-7745' , homephone: '', mobilephone: '849-455-7745' , email: 'evperez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:52, team:'ALMACEN HRHPC' , name: 'TAVERAS ESTRELLA LUIS ALBERTO' , title:'SUBGERENTE ALMACEN HRHPC' , bussinesphone:'809-949-9814' , homephone: '', mobilephone: '809-949-9814' , email: 'ltaveras@hrhcpuntacana.com', location: 'RCD' },
            { idperson:53, team:'COMPRAS HRHPC' , name: 'CARRASCOSA SANCHEZ CARLOS' , title:'GERENTE DE COMPRAS HRHPC' , bussinesphone:'809-754-8648' , homephone: '', mobilephone: '809-754-8648' , email: 'ccarrascosa@hrhcpuntacana.com', location: 'RCD' },
            { idperson:54, team:'COMPRAS HRHPC' , name: 'ESPINAL DURAN NATALI' , title:'GERENTE DE NEGOCIACIONES HRHPC' , bussinesphone:'809-305-6015' , homephone: '', mobilephone: '809-305-6015' , email: 'nespinal@hrhcpuntacana.com', location: 'RCD' },
            { idperson:55, team:'COSTOS HRHPC' , name: 'DIMAREN BONILLA MARLON MIGUEL' , title:'JEFE DE COSTOS HRHPC' , bussinesphone:'829-659-9655' , homephone: '', mobilephone: '829-659-9655' , email: 'mdimaren@hrhcpuntacana.com', location: 'RCD' },
            { idperson:56, team:'CTAS X PAGAR HRHPC' , name: 'RIJO SANTANA OGLA BETSARY' , title:'JEFE CTAS X PAGAR HRHPC' , bussinesphone:'N/A' , homephone: '', mobilephone: 'N/A' , email: 'orijo@hrhcpuntacana.com', location: 'RCD' },
            { idperson:57, team:'DIRECCION CONTROL DE GESTION' , name: 'LOPEZ LINARES JOSE' , title:'DIRECTOR CONTROL DE GESTIÓN' , bussinesphone:'809-754-8162' , homephone: '', mobilephone: '809-754-8162' , email: 'jlopez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:58, team:'DIRECCION CONTROL DE GESTION' , name: 'DE LA CRUZ GOMEZ MANUEL AMAURY' , title:'JEFE CONTROL DE GESTION' , bussinesphone:'809-754-9497' , homephone: '', mobilephone: '809-754-9497' , email: 'mdelacruz@hrhcpuntacana.com', location: 'RCD' },
            { idperson:59, team:'GERENCIA Y REL LABORALES HRHPC' , name: 'DE CASTRO FERNANDES MENDES JOEL AUGUSTO' , title:'DIRECTOR CORP REC HUMANOS' , bussinesphone:'809-501-1732' , homephone: '', mobilephone: '809-501-1732' , email: 'jcastro@rcdhotels.com', location: 'RCD' },
            { idperson:60, team:'GERENCIA Y REL LABORALES HRHPC' , name: 'PEREZ TOLENTINO LISSETTE CRISTINA' , title:'DIRECTOR REC HUMANOS HRHPC' , bussinesphone:'809-754-0985' , homephone: '', mobilephone: '809-754-0985' , email: 'lperez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:61, team:'GERENCIA Y REL LABORALES HRHPC' , name: 'ESCOLASTICO NATALIA' , title:'GERENTE RECURSOS HUMANOS HRHPC' , bussinesphone:'809-754-0988' , homephone: '', mobilephone: '809-754-0988' , email: 'nescolastico@hrhcpuntacana.com', location: 'RCD' },
            { idperson:62, team:'GERENCIA Y REL LABORALES HRHPC' , name: 'RODRIGUEZ GATON LISA MARIEL' , title:'GERENTE ENTRENAMIENTO HRHPC' , bussinesphone:'809-988-1851' , homephone: '', mobilephone: '809-988-1851' , email: 'lrodriguez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:63, team:'POBLADO DE APOYO HRHPC' , name: 'VALENZUELA PERALTA EDWARD' , title:'COORDINADOR DE SERVICIOS HRHPC' , bussinesphone:'829-426-9554' , homephone: '', mobilephone: '829-426-9554' , email: 'evalenzuela@hrhcpuntacana.com', location: 'RCD' },
            { idperson:64, team:'RECLUTAMIENTO Y SELECCION HRPC' , name: 'UBIERA GRINN ANELIS ALFONSINA' , title:'GTE ADQUISICION TALENTO HRPC' , bussinesphone:'849-269-2074' , homephone: '', mobilephone: '849-269-2074' , email: 'agreen@hrhcpuntacana.com', location: 'RCD' },
            { idperson:65, team:'ROCK SHOP HRHPC' , name: 'MEJIA CIPRIAN SANTA' , title:'GTE. COM. TIENDAS Y MARCAS' , bussinesphone:'829-639-8478' , homephone: '', mobilephone: '829-639-8478' , email: 'samejia@hrhcpuntacana.com', location: 'RCD' },
            { idperson:66, team:'OPERACION SPA HRHPC' , name: 'GHARTEY  CLAUDIA SUSANNA' , title:'GERENTE OPERATIVO SPA HRHPC' , bussinesphone:'809-877-8659' , homephone: '', mobilephone: '809-877-8659' , email: 'cghartey@hrhcpuntacana.com', location: 'RCD' },
            { idperson:67, team:'GERENCIA DE CAMPO DE GOLF HRPC' , name: 'PIQUE MEDINA JUAN ALBERTO' , title:'GERENTE CAMPO GOLF HRHPC' , bussinesphone:'809-501-3687' , homephone: '', mobilephone: '809-501-3687' , email: 'jpique@hrhcpuntacana.com+', location: 'RCD' },
            { idperson:68, team:'SALA DE BELLEZA HRHPC' , name: 'KRAUSZ FERNANDEZ JENNIFER ESTHER' , title:'GERENTE SALA DE BELLEZA HRHPC' , bussinesphone:'829-684-4552' , homephone: '', mobilephone: '829-684-4552' , email: 'jkrausz@hrhcpuntacana.com', location: 'RCD' },
            { idperson:69, team:'' , name: 'MEJIA SANABIA ODILE ELIZABETH' , title:'GERENTE VAC PLANNER HRHPC' , bussinesphone:'809-754-0034' , homephone: '', mobilephone: '809-754-0034' , email: 'osanabia@hrhcpuntacana.com', location: 'RCD' },
            { idperson:70, team:'' , name: 'CRUZ FONZ ANA KAREN' , title:'GTE SERVICIOS TURISTICOS HRHPC' , bussinesphone:'829-761-0548' , homephone: '', mobilephone: '829-761-0548' , email: 'ancruz@hrhcpuntacana.com', location: 'RCD' },
            { idperson:71, team:'ON TOUR OPERACIONES HRHPC' , name: 'VERGARA ZEGLINSKI LOURDES VICTORIA INMACULADA' , title:'COORD ONTOUR RECEPTIVO HRHPC' , bussinesphone:'829-701-3681' , homephone: '', mobilephone: '829-701-3681' , email: 'lvergara@hrhcpuntacana.com', location: 'RCD' },
            { idperson:72, team:'VENTAS INTERNACIONALES HRHPC' , name: 'ROMERO TERAN JOSE RAMON' , title:'DIR VTAS GPOS&INTER PUNTA CANA' , bussinesphone:'829-761-0547' , homephone: '', mobilephone: '829-761-0547' , email: 'rromero@hrhcpuntacana.com', location: 'RCD' },
            { idperson:73, team:'VENTAS INTERNACIONALES HRHPC' , name: 'SVABOVA  MARKETA' , title:'SUBDIRECTOR VENTAS' , bussinesphone:'809-754-4793' , homephone: '', mobilephone: '809-754-4793' , email: 'msvabova@hrhcpuntacana.com', location: 'RCD' },
            { idperson:74, team:'SERVICIOS A GRUPOS Y CONV HRPC' , name: 'FERNANDEZ PICHARDO MARIELA GISSELL' , title:'DIRECTOR SERVICIO A G Y C HRHP' , bussinesphone:'829-643-7832' , homephone: '', mobilephone: '829-643-7832' , email: 'marfernandez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:75, team:'SERVICIOS A GRUPOS Y CONV HRPC' , name: 'RAMIREZ MARTINEZ LAURA MARIE' , title:'SUB DIRECTOR DE GRUPOS HRHPC' , bussinesphone:'809-754-8519' , homephone: '', mobilephone: '809-754-8519' , email: 'laramirez@hrhcpuntacana.com', location: 'RCD' },
            { idperson:76, team:'BODAS HRHPC' , name: 'ARIZA RUIZ NANCY' , title:'GERENTE BODAS HRHPC' , bussinesphone:'809-754-0672' , homephone: '', mobilephone: '809-754-0672' , email: 'nariza@hrhcpuntacana.com', location: 'RCD' }
        ]
    }];


    /////////////////////////---------------------- END CONTACTOS ---------//////////////////

    var autoridadesx = [{
        id: 1,
        servicios: "EMERGENCY",
        personal: [{ idperson: 1, name: 'EMERGENCY', phone: '911', phone2: '', direccion: '' }
        ]
    }];

    var planos = [];





    var factory = {};
    //factory.getlanguage = function() {


     //   return mainlanguage;

   // }

    factory.getMovies = function () {
        return movies;

    }
    factory.getPlanos = function () {
        return planos;

    }
    factory.getContactosLad = function () {
        return contactoslad;

    }
  factory.getContactosRegion = function () {
        return contactosRegion;

    }

    factory.getAutoridades = function () {
        return autoridadesx;

    }
    factory.getContactosHotel = function(){
    	return contactoshotel;
    }

    factory.getMetro = function () {
        return metro;

    }
    return factory;

});
