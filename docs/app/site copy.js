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
                                     urlapplang = 'app/datoslag/language.json';  //en
                                     urlmetro = 'app/datoslag/metro/metro.json';  //en
                        }
                    }else{
                      urlapplang = 'app/datoslag/language.json';
                      urlmetro = 'app/datoslag/metro/metro.json'; 
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
        		version: "Beta 1.6",
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

demoApp.factory('simpleFactory', function ($http) {

    var metro = [
        { id: 1, title: "Evacuation", img: "Images/lb/Incendio.jpg", txtcss: "metro gpcolorgreen", link: "#/e-1-3" },
        { id: 2, title: "Bomb Threat", img: "Images/lb/Amenaza.jpg", txtcss: "metro gpcolororange", link: "#/e-2-1" },
        { id: 3, title: "Fire" , img: "Images/lb/Incendio.jpg", txtcss: "metro gpcolorred", link: "#/e-2-9" },
        { id: 4, title: "Earthquake", img: "Images/lb/Sismo.jpg", txtcss: "metro gpcoloryellow", link: "#/e-2-7" },
        { id: 5, title: "Call", img: "Images/lb/Extorsion.jpg", txtcss: "metro gpcolorpink", link: "#/contactoshotel" },
        { id: 6, title: "Homicide", img: "Images/lb/Extorsion.jpg", txtcss: "metro gpcolormidblue", link: "#/e-2-5-2" },
        { id: 7, title: "Foodborne", img: "Images/lb/Defuncion.jpg", txtcss: "metro gpcolorlime", link: "#/e-2-10" },
        { id: 8, title: "Hurricane", img: "Images/lb/Huracan.jpg", txtcss: "metro gpcolorpurple", link: "#/e-2-22-2" },
        { id: 9, title: "Power Failure", img: "Images/lb/Inundacion.jpg", txtcss: "metro gpcolorblue", link: "#/e-2-21-3" },
        { id: 10, title: "Authorities", img: "Images/lb/Secuestro.jpg", txtcss: "metro gpcolormidpumpkin", link: "#/autoridades" },
        { id: 11, title: "Index", img: "Images/listw.png", txtcss: "metro gpcolormidsilver", link: "#/listado" }
       // { id: 12, title: "Blueprint", img: "Images/planos.jpg", txtcss: "metro gpcolorblue", link: "#/planos" }
    ];


    var movies = [
{
    name: "E:1  EMERGENCY PROCEDURES",
    items: [
      { item: "E:1.1 ASSISTING DISABLED GUESTS", link: "#/e-1-1" },
      { item: "E:1.2 DECONTAMINATION", link: "#/e-1-2" },
      { item: "E:1.3 EVACUATION", link: "#/e-1-3" },
      { item: "E:1.4 QUARANTINE", link: "#/e-1-4" },
      { item: "E:1.5 SEARCH & RESCUE", link: "#/e-1-5" },
      { item: "E:1.6 SHELTER-IN-PLACE", link: "#/e-1-6" }
    ]
},
{
    name: "E:2 EMERGENCIES",
    items: [
      { item: "E:2.1 BOMB THREAT", link: "#/e-2-1" },
      { item: "E:2.2 CIVIL DISTURBANCE", link: "#/e-2-2" },
      { item: "E:2.2.1 PEACEFUL DEMONSTRATION", link: "#/e-2-2-1" },
      { item: "E:2.2.2 VIOLENT DISTURBANCE", link: "#/e-2-2-2" },
      { item: "E:2.3 COMMUNICABLE DISEASE", link: "#/e-2-3" },
      { item: "E:2.4 COMMUNITY/LOCAL AREA CRISES", link: "#/e-2-4" },
      { item: "E:2.5 CRIMINAL ACTIVITY", link: "#/e-2-5-1" },
      { item: "E:2.5.1 ASSAULT, PHYSICAL OR SEXUAL", link: "#/e-2-5-1" },
      { item: "E:2.5.2 HOMICIDE", link: "#/e-2-5-2" },
      { item: "E:2.5.3 ROBBERY", link: "#/e-2-5-3" },
      { item: "E:2.5.4 THEFT", link: "#/e-2-5-4" },
      { item: "E:2.5.5 CRIMINAL ACTIVITY DESCRIPTION FORM", link: "#/e-2-5-5" },
      { item: "E:2.6 DEATH ON PREMISES", link: "#/e-2-6-1" },
      { item: "E:2.6.1 ASSOCIATE WORK-RELATED DEATH", link: "#/e-2-6-1" },
      { item: "E:2.6.2 DROWING", link: "#/e-2-6-2" },
      { item: "E:2.6.3 NATURAL DEATH", link: "#/e-2-6-3" },
      { item: "E:2.6.4 DEATH/SUICIDE OR ATTEMPTED/ THREATENED SUICIDE", link: "#/e-2-6-4" },
      { item: "E:2.6.4.1 DEATH OR SUICIDE", link: "#/e-2-6-4-1" },
      { item: "E:2.6.4.2 ATTEMPTED OR THREATENED SUICIDE", link: "#/e-2-6-4-2" },
      { item: "E:2.6.5 ELECTROCUTION", link: "#/e-2-6-5" },
      { item: "E:2.7 EARTHQUAKES/TSUNAMI", link: "#/e-2-7" },
      { item: "E:2.8 ELEVATOR EMERGENCIES", link: "#/e-2-8" },
      { item: "E:2.9 FIRE OR EXPLOSION", link: "#/e-2-9" },
      { item: "E:2.10 FOODBORNE ILLNESS/DEATH", link: "#/e-2-10" },
      { item: "E:2.11 HAZARDOUS MATERIAL/CHEMICAL SPILL", link: "#/e-2-11" },
      { item: "E:2.12 HOSTAGE SITUATION", link: "#/e-2-12" },
      { item: "E:2.13 INJURY OR ILLNESS", link: "#/e-2-13" },
      { item: "E:2.13.1 GUEST MEDICAL EMERGENCY", link: "#/e-2-13-1" },
      { item: "E:2.13.2 ASSOCIATE ACCIDENT OR INJURY", link: "#/e-2-13-2" },
      { item: "E:2.14 KIDNAP/EXTORTION", link: "#/e-2-14" },
      { item: "E:2.15 LABOR ACTION/STRIKE", link: "#/e-2-15" },
      { item: "E:2.16 OTHER EMERGENCIES", link: "#/e-2-16" },
      { item: "E:2.17 STRUCTURAL COLLAPSE", link: "#/e-2-17" },
      { item: "E:2.18 SUSPICIOUS ITEM OR PACKAGE", link: "#/e-2-18" },
      { item: "E:2.19 TERRORISM OR THREATS OF TERRORISM", link: "#/e-2-19" },
      { item: "E:2.20 TRANSPORTATION INCIDENT", link: "#/e-2-20" },
      { item: "E:2.21 UTILITY OUTAGES", link: "#/e-2-21-1" },
      { item: "E:2.21.1 GAS LEAK", link: "#/e-2-21-1" },
      { item: "E:2.21.2 HEATING OR AC FAILURE", link: "#/e-2-21-2" },
      { item: "E:2.21.3 POWER FAILURE", link: "#/e-2-21-3" },
      { item: "E:2.21.4 SANITARY/SEWAGE", link: "#/e-2-21-4" },
      { item: "E:2.21.5 TELECOMMUNICATIONS FAILURE", link: "#/e-2-21-5" },
      { item: "E:2.21.6 WATER LEAK", link: "#/e-2-21-6" },
      { item: "E:2.21.7 WATER LOSS", link: "#/e-2-21-7" },
      { item: "E:2.22.1 FLOOD", link: "#/e-2-22-1" },
      { item: "E:2.22.2 HURRICANE/TROPICAL STORM/CYCLONE", link: "#/e-2-22-2" },
      { item: "E:2.22.3 TORNADOES", link: "#/e-2-22-3" },
      { item: "E:2.22.4 WINTER STORMS/SEVERE FREEZES", link: "#/e-2-22-4" }
    ]
},
{
    name: "E:3 RECOVERY",
    items: [
      { item: "E:3.1 DAMAGE ASSESSMENT", link: "#/e-3-1" },
      { item: "E:3.1.1 DOCUMENTATION", link: "#/e-3-1-1" },
      { item: "E:3.2 CLEANUP", link: "#/e-3-1-1" },
      { item: "E:3.3 REPAIRS", link: "#/e-3-1-1" }

    ]
},
{
        name: "4-Check Lists",
      /*  items: [
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
        ]*/}
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
    	position: "TEAM LEADER",
    	personal: [{
    		idperson: 1,
    		team: "Response Team",
    		name: "Osvaldo Librizzi",
    		title: "Co-President The Americas",
    		bussinesphone: "+ 1(305) 865 1401",
    		mainswichboard: "'+ 1(786) 999-6300 Ext. 664",
    		homephone: "'+ 1(305) 692-5358",
    		mobilephone: "+ 1(786)325-2262",
    		email: "osvaldo.librizzi@starwoodhotels.com"
    	},
    	{
    		idperson: 2,
    		team: "Back-up Response Team",
    		name: "Batya Brykman",
    		title: "VP Operations Mexico & Central America",
    		bussinesphone: "+ 1(305) 865 1816",
    		mainswichboard: "+ 1(786) 999-6300  Ext. 669",
    		homephone: "+ 1(305) 354-2163",
    		mobilephone: "+ 1(305) 962-6450",
    		email: "batya.brykman@starwoodhotels.com"
    	}]
    },
    {
    	id: 2,
    	position: "HUMAN RESOURCES",
    	personal: [{
    		idperson: 1,
    		team: "Response Team",
    		name: "Agustina Veiga",
    		title: "Director HR Latin America",
    		bussinesphone: "+54 (11) 4318-9336",
    		mainswichboard: "+54 (11) 4318 9000 Ext. 2878",
    		homephone: "+54 (11) 4763-4911",
    		mobilephone: "+54 (11) 4031 8885",
    		alterphone: "+54 (11) 4763-1357",
    		email: "agustina.veiga@starwoodhotels.com"
    	},
    	{
    		idperson: 2,
    		team: "Back-up Response Team",
    		name: "Patricia Lavoignet",
    		title: "Director HR Sheraton Hacienda del Mar y Westin Los Cabos",
    		bussinesphone: "+52 (624) 14 56129",
    		mainswichboard: "+52 (624) 14 561 00 ext. 4226",
    		homephone: "+52 (624) 14 30711",
    		mobilephone: "+52 (624) 35 59398",
    		alterphone: "+52 (624) 12 21267",
    		email: "patricia.lavoignet@sheraton.com"
    	}]
    },
    {
    	id: 3,
    	position: "PUBLIC RELATIONS",
    	personal: [{
    	idperson:1,
    	team:'Response Team' ,
    	name: 'Gina Carriazo' ,
    	title:'Director, Public Relations & Communications, Latin America' ,
    	bussinesphone:'+1 (786) 999-6307' ,
    	mainswichboard: '+ 1(786) 999-6300  Ext. 679' ,
    	homephone: '+1 (305) 9726471 -personal Cell.' ,
    	mobilephone: '+1 (786) 219-5846' ,
    	email: 'Gina.Carriazo@starwoodhotels.com' 

    },
    {
    	idperson:1,
    	team:'Back-up Response Team' ,
    	name: 'Trip Barrett' ,
    	title:'VP Marketing Latin America' ,
    	bussinesphone:'1-305-865-1932' ,
    	mainswichboard: '+ 1(786) 999-6300 Ext. 667' ,
    	homephone: '1 305 893 5128' ,
    	mobilephone: '1-305- 776-2776' ,
    	email: 'trip.barrett@starwoodhotels.com' 
    }]
    },
    {
    	id: 4,
    	position: "LEGAL REPRESENTATIVE",
    	personal: [{
    	idperson:1,
    	team:'Response Team' ,
    	name: 'Martin Arauz' ,
    	title:'VP General Counsel, Latin America' ,
    	bussinesphone:'+1 (786) - 999-6302' ,
    	mainswichboard: '+1 (786) - 999-6300 Ext. 675' ,
    	homephone: '+ 1(305) 933-0319' ,
    	mobilephone: '+ 1(914) 310 4605 ' ,
    	email: 'martin.arauz@starwoodhotels.com'
    },
    {
    	idperson:1,
    	team:'Back-up Response Team' ,
    	name: 'Maria Laura Rodriguez' ,
    	title:'Legal Manager Latin America' ,
    	bussinesphone:'+ 1(305) 865-6668' ,
    	mainswichboard: '+ 1(786) 999-6300' ,
    	mobilephone: '+ 1(305) 924-1099' ,
    	email: 'marialaura.rodriguez@starwoodhotels.com' 
    }]
    },
    {
    	id: 5,
    	position: "DIVISIONAL CRISIS TEAM REPRESENTATIVE",
    	personal: [{
    	idperson:1,
    	team:'Response Team' ,
    	name: 'Pablo Flores' ,
    	title:'Sr Director New Builds & Transitions, Latin America' ,
    	bussinesphone:'+55 (21) 2529-1242' ,
    	mainswichboard: '+55 (21) 2274-1122' ,
    	homephone: '+55 (21) 2143-4368' ,
    	mobilephone: '+55 (21) 9172-4622' ,
    	email: 'pablo.flores@starwoodhotels.com' 
    },
    {
    	idperson:1,
    	team:'Back-up Response Team' ,
    	name: 'Ricardo Calo' ,
    	title:'AMD Argentina & Uruguay' ,
    	bussinesphone:'+54 (11) 4318-9330' ,
    	mainswichboard: '+54 (11) 4318-9000' ,
    	homephone: '+54 (11) 4793-4613' ,
    	mobilephone: '+54 (911) 6852-4848' ,
    	email: 'Ricardo.Calo@starwoodhotels.com' 
    }]
    },
    {
    	id: 6,
    	position: "TECHNICAL SERVICES",
    	personal: [{
    	idperson:1,
    	team:'Response Team' ,
    	name: 'Magdalena Valenzuela' ,
    	title:'Design & Construction Manager, LA' ,
    	bussinesphone:'+56 (22) 818 0102' ,
    	mainswichboard: '+56 (22)  770 0000' ,
    	mobilephone: '+56  8139 7273' ,
    	email: 'magdalena.valenzuela@starwoodhotels.com' 

    },
    {
    	idperson:1,
    	team:'Back-up Response Team' ,
    	name: 'Jorge Salazan' ,
    	title:'Associate Director Architecture & Design, LA' ,
    	bussinesphone:'+54 (11) 4318 9122' ,
    	mainswichboard: '+54 (11) 4318 9000' ,
    	mobilephone: '+54 (911) 6260 9164' ,
    	email: 'jorge.salazan@starwoodhotels.com' 
    }]
    },
    {
    	id: 7,
    	position: "IT",
    	personal: [{
    	idperson:1,
    	team:'Response Team' ,
    	name: 'Luis Acosta' ,
    	title:'Director IT Services, Latin America' ,
    	bussinesphone:'+54 (11) 4318 9364' ,
    	mainswichboard: '+54 (11)  4318 9000 Ext. 2790' ,
    	homephone: '+54 (11) 4431-4204' ,
    	mobilephone: '+54 (911) 44 22 27 38' ,
    	email: 'luis.acosta@starwoodhotels.com' ,
    	homeemail: ' lacosta0611@gmail.com' 
    },
    {
    	idperson:1,
    	team:'Back-up Response Team' ,
    	name: 'Federico Hauer' ,
    	title:'IT Director Mexico & Central America-' ,
    	bussinesphone:'+56 (22) 707 0682' ,
    	mainswichboard: '' ,
    	homephone: '+56 (22) 855 6748' ,
    	mobilephone: '+56 (97) 667 9638' ,
    	email: 'federico.hauer@sheraton.com' 
    }]
    },
    {
    	id: 8,
    	position: "FRANCHISE/OWNER RELATIONS",
    	personal: [{
    	idperson:1,
    	team:'Response Team' ,
    	name: 'Rick Segal' ,
    	title:'VP, Owners Relations & Franchise Support, Latin America' ,
    	bussinesphone:'+1 (786) 999-6308' ,
    	mainswichboard: '+1 (786) 999-6300 - Ext. 683' ,
    	homephone: '+1 (786) 431-1318' ,
    	mobilephone: '+1 (203) 893-6208' ,
    	email: 'Rick.Segal@starwoodhotels.com' 

    },
    {
    	idperson:1,
    	team:'Back-up Response Team' ,
    	name: 'Jose Muñoz' ,
    	title:'Sr dir, Franchising & Development, Latin America' ,
    	bussinesphone:'+1 (305) 861-9864' ,
    	mainswichboard: '+1 (786) 999-6300  - Ext. 680' ,
    	homephone: '+1 (305) 595-8002' ,
    	mobilephone: '+1 (305) 788  8701' ,
    	email: 'Pepe.Munoz@starwoodhotels.com' 

    }]
    },
    {
    	id: 5,
    	position: "CONSULTANT",
    	personal: [{
    		idperson:1,
    		team:'Response Team' ,
    		name: 'Ron Ziv' ,
    		title:'Coordinator - Consultant' ,
    		bussinesphone:'+54 (11) 3967- 7613' ,
    		homephone: ' +972 9 7496676' ,
    		mobilephone: '+972 (54) 6664965' ,
    		email: 'ron@gsahsolutions.com' 
    	}]
    }];
//////////////////-----------------Contactos Region ------------------/////////////////

var contactosRegion =[{
      id: 1,
      position: "Team Leader",
      personal: [
        { idperson:1, team:'Primary Member' , name: 'Calo, Ricardo' , title:'Area Managing Director' , bussinesphone:'54 11 4318-9330' , homephone: '' , mobilephone: '54 9 11 6852-4848' , email: 'ricardo.calo@starwoodhotels.com', location: 'Sheraton Buenos Aires' },
        { idperson:1, team:'Backup Member' , name: 'Formariz, Mariano' , title:'General Manager' , bussinesphone:'54 387 432-3006' , homephone: '' , mobilephone: '54 9 387 611-0512' , email: 'mariano.formariz@starwoodhotels.com', location: 'Sheraton Salta' }
      ]
    },
    {
      id: 2,
      position: "Operations Committee",
      personal: [
          { idperson:1, team:'Primary Member' , name: 'Arenaza, Maria Florencia' , title:'General Manager' , bussinesphone:'598 4523-2010' , homephone: '' , mobilephone: '598 9829-0005' , email: 'florencia.arenaza@starwoodhotels.com', location: 'Sheraton Colonia' },
          { idperson:1, team:'Backup Member' , name: 'Gavagnin, Raquel' , title:'General Manager' , bussinesphone:'595 2 16177106' , homephone: '' , mobilephone: '595 9 8111-0715' , email: 'raquel.gavagnin@sheraton.com', location: 'Sheraton Asunción' }

         ]
    },
    {
      id: 3,
      position: "Legal",
      personal: [
          { idperson:1, team:'Primary Member' , name: 'Lifsic, Ricardo' , title:'President Board of Directors' , bussinesphone:'54 11 5246-1180' , homephone: '' , mobilephone: '54 9 11 4186-0884' , email: 'rlifsic@emfrl.com.ar', location: 'Buenos Aires, Argentina' },
          { idperson:1, team:'Backup Member' , name: 'Arauz, Martin' , title:'Legal Director, LAD' , bussinesphone:'' , homephone: '001 914 310 4605' , mobilephone: '' , email: 'martin.arauz@starwoodhotels.com', location: 'Starwood Divisional Office, Miami, FL, 001 786 999 6302' }


        ]
    },
    {
      id: 4,
      position: "PR/Social Media",
      personal: [
          { idperson:1, team:'Primary Member' , name: 'Gutierrez, Maria Jose' , title:'Public Relations Manager' , bussinesphone:'54 11 4318-9371' , homephone: '' , mobilephone: '54 9 11 6612-7807' , email: 'mariaj.gutierrez@starwoodhotels.com', location: 'Sheraton Buenos Aires' },
          { idperson:1, team:'Backup Member' , name: 'Ihnen Klammer, Patricio ' , title:'Director of PR, Chile' , bussinesphone:'56 2 2707 0186   ' , homephone: '' , mobilephone: '56 9 8818 9541' , email: 'patricio.ihnen@starwoodhotels.com', location: 'Sheraton Santiago' }


      ]
    },
    {
        id: 4,
        position: "Sales & Marketing",
        personal: [
            { idperson:1, team:'Primary Member' , name: 'Castano, Martin' , title:'Regional Director of Sales, South Am' , bussinesphone:'54 11 4318-9381' , homephone: '' , mobilephone: '54 9 11 5853-6031' , email: 'martin.castano@starwoodhotels.com', location: 'Sheraton Buenos Aires' },
            { idperson:1, team:'Backup Member' , name: 'King, Brian' , title:'Director of Sales Sheraton Iguazú' , bussinesphone:'54 11 4318-9256' , homephone: '' , mobilephone: '54 9 11 6259-4347' , email: 'brian.king@starwoodhotels.com', location: 'Sheraton Buenos Aires' }
             ]
    },
    {
        id: 4,
        position: "Human Resources",
        personal: [
          { idperson:1, team:'Primary Member' , name: 'Perez, Veronica' , title:'Director of Human Resources' , bussinesphone:'54 11 4318-9384' , homephone: '' , mobilephone: '54 911 4538-6295' , email: 'veronica.perez@starwoodhotels.com', location: 'Sheraton Buenos Aires' },
          { idperson:1, team:'Backup Member' , name: 'Veiga, Maria Agustina' , title:'Director of Human Resources, LAD' , bussinesphone:'54 11 4318-9336' , homephone: '' , mobilephone: '54 9 11 4031-8885' , email: 'agustina.veiga@starwoodhotels.com', location: 'Starwood Divisional Office, Buenos Aires' }

           ]
    },
    {
        id: 4,
        position: "Technical Services / Engineering",
        personal: [
          { idperson:1, team:'Primary Member' , name: 'Avellaneda, Ricardo' , title:'Director of Engineering' , bussinesphone:'54 11 4318-9387' , homephone: '' , mobilephone: '54 911 6048-2442' , email: 'ricardo.avellaneda@starwoodhotels.com', location: 'Sheraton Buenos Aires' },
          { idperson:1, team:'Backup Member' , name: 'Urrets Zabalía, Esteban' , title:'Chief Engineer, Safety & Security Mgr' , bussinesphone:'54 351 526-9010' , homephone: '' , mobilephone: '54 9 351 6080299' , email: 'esteban.urrets@sheraton.com', location: 'Sheraton Córdoba' }

           ]
    },
    {
        id: 4,
        position: "IT",
        personal: [
            { idperson:1, team:'Primary Member' , name: 'Pablo Allietti ' , title:'IT Manager ' , bussinesphone:'59 8 4523-2020' , homephone: '' , mobilephone: '59 8 9829-0030' , email: 'pablo.allietti@sheraton.com', location: 'Sheraton Colonia, Uruguay' },
            { idperson:1, team:'Backup Member' , name: 'Acosta, Luis' , title:'Director of Information Technology, LAD' , bussinesphone:'54 11 4318-9364' , homephone: '' , mobilephone: '54 9 11 4422-2738' , email: 'luis.acosta@starwoodhotels.com', location: 'Starwood Divisional Office, Buenos Aires' }

         ]
    },
    {
        id: 4,
        position: "Owner Relations",
        personal: [
            { idperson:1, team:'Primary Member' , name: 'Calo, Ricardo' , title:'Area Managing Director' , bussinesphone:'54 11 4318-9330' , homephone: '' , mobilephone: '54 911 6852-4848' , email: 'ricardo.calo@starwoodhotels.com', location: 'Sheraton Buenos Aires' },
            { idperson:1, team:'Backup Member' , name: 'Juan, Daniel' , title:'General Manager' , bussinesphone:'54 351 526-9009' , homephone: '' , mobilephone: '54 9 351 609-7600' , email: 'daniel.juan@starwoodhotels.com', location: 'Sheraton Córdoba' }

         ]
    },
    {
        id: 4,
        position: "Admin",
        personal: [
            { idperson:1, team:'Primary Member' , name: 'Pereira, Nerina' , title:'Administrative Assistant' , bussinesphone:'54 11 4318-9190' , homephone: '' , mobilephone: '54 911 6118-2743' , email: 'nerina.pereira@starwoodhotels.com', location: 'Sheraton Buenos Aires' },
            { idperson:1, team:'Backup Member' , name: 'Segui, Solange' , title:'Administ. Assistant of Sales' , bussinesphone:'54 11 4318-9381' , homephone: '' , mobilephone: '' , email: 'solange.segui@starwoodhotels.com', location: 'Sheraton Buenos Aires' }

         ]
    }];

    
    ///////////////-----------------Contactos Hotel ------------------//////////////////
    var contactoshotel =[{
    	id: 1,
    	position: "Executive Committee",
    	personal: [
            { idperson: 1, team: 'Response Team', name: 'Bernard De Villele', title: 'General Manager', bussinesphone: '55-2888-8146', mainswichboard: '1808', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Andrea Carneiro', title: 'Sales Director', bussinesphone: '55-4355-5285', mainswichboard: '1802', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Ximena Esteinou', title: 'Director Of Human Resources', bussinesphone: '55-4833-8257', mainswichboard: '1803', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Damián Rodríguez Pineda', title: 'It Director', bussinesphone: '55-4373-1176', mainswichboard: '1804', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Rodrigo Montero', title: 'Director Of Engineering', bussinesphone: '55-4373-1178', mainswichboard: '1805', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Ana Lozano', title: 'Director Of Finance', bussinesphone: '55-1295-6896', mainswichboard: '1806', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Javier Perezrubio', title: 'F&B Director', bussinesphone: '55-4373-1177', mainswichboard: '1807', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Roberto Otálora', title: 'Rooms Division Director', bussinesphone: '55-1295-6394', mainswichboard: '1801', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Paulina Feltrin', title: 'Pblic Relations', bussinesphone: '55-4351-5218', mainswichboard: '1820', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Alejandro López', title: 'Director Of Revenue Management', bussinesphone: '55-3881-5629', mainswichboard: '1829', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Alejandra Ochoa', title: 'Remède Spa Director', bussinesphone: '55-9189-2439', mainswichboard: '1830', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Javier Mayo Ponce', title: 'Director Of Security', bussinesphone: '55-4523-6643', mainswichboard: '1850', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Teresa Ramos', title: 'Executive Assistant', bussinesphone: '55-2128-8957', mainswichboard: '1855', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Guy Santoro', title: 'F&B Executive Chef', bussinesphone: '55-1487-4230', mainswichboard: '1863', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Angelica Sanchez', title: 'Residences Manager', bussinesphone: '55-5966-2104', mainswichboard: '1930', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Maycolcalderón', title: 'Executive Chef', bussinesphone: '55-9189-3624', mainswichboard: '1938', email: '' }
    	]
    },
    {
    	id: 2,
    	position: "Operations Committee",
    	personal: [{ idperson: 1, team: 'Response Team', name: 'Arturo Ortiz', title: 'Chief Concierge', bussinesphone: '55-2903-1012', mainswichboard: '1825', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Ingrid Orezza', title: 'Human Resources Training Coordinator', bussinesphone: '55-1333-3055', mainswichboard: '1832', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Raquel Rodríguez', title: 'Butler Manager', bussinesphone: '55-9189-2566', mainswichboard: '1837', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Armando López', title: 'Night Audit Manager', bussinesphone: '55-3993-9465', mainswichboard: '1843', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Rogelio Jiménez', title: 'Parking Manager', bussinesphone: '55-1241-3484', mainswichboard: '1846', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Alejandro Berumen', title: 'Purchasing Manager', bussinesphone: '55-4807-2728', mainswichboard: '1854', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Pilar Carreón', title: 'Guest Recognition Manager', bussinesphone: '55-1011-6500', mainswichboard: '1857', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Jorge Reza', title: 'Banquets Capitan', bussinesphone: '55-3988-6922', mainswichboard: '1873', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Horacio Olivares', title: 'Front Office Manager', bussinesphone: '55-4138-5000', mainswichboard: '1878', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Ana Juárez', title: 'Sub Controller', bussinesphone: '55-4373-1181', mainswichboard: '1880', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Ricardo Gómez', title: 'Butler Service Desk Manager', bussinesphone: '55-2727-4783', mainswichboard: '1883', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Alicia Corona', title: 'Housekeeping Manager', bussinesphone: '55-1647-6702', mainswichboard: '1899', email: '' }
    	]
    },
    {
    	id: 3,
    	position: "Sales",
    	personal: [{ idperson: 1, team: 'Response Team', name: 'Laura Villalobos', title: 'Sales Manager', bussinesphone: '55-4373-1184', mainswichboard: '1811', email: '' },
                { idperson: 1, team: 'Response Team', name: 'Mauricio Fernández', title: 'Sales Manager', bussinesphone: '55-1645-1480', mainswichboard: '1816', email: '' },
                { idperson: 1, team: 'Response Team', name: 'Stephanie Moller', title: 'Sales Manager', bussinesphone: '55-4373-1185', mainswichboard: '1816', email: '' },
                { idperson: 1, team: 'Response Team', name: 'Chantal Groschopp', title: 'Sales & Mktg Coordinator', bussinesphone: '55-2886-4242', mainswichboard: '1810', email: '' }
    	]
    },
    {
    	id: 4,
    	position: "Groups & Events",
    	personal: [{ idperson: 1, team: 'Response Team', name: 'Miriam Ruiz', title: 'Banquets Manager', bussinesphone: '55-5217-1018', mainswichboard: '1812', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Brenda Gándara', title: 'Groups Manager', bussinesphone: '55-4373-1187', mainswichboard: '1815', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Pamela Gómez ', title: 'Social Events & Wedding Planer', bussinesphone: '55-1657-2184', mainswichboard: '1864', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Pía Alzati', title: 'Group & Events Coordinator', bussinesphone: '55-4340-1168', mainswichboard: '1819', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Tania Flores', title: 'Group & Events Coordinator', bussinesphone: '55-5252-3363', mainswichboard: '1893', email: '' }
    	]
    },
    {
        id: 4,
        position: "Human Resources",
        personal: [{ idperson: 1, team: 'Response Team', name: 'Karen López', title: 'Human Resources Coordinator', bussinesphone: '55-8541-1951', mainswichboard: '1823', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Alejandra Ramírez', title: 'Human Resources Assistant', bussinesphone: '55-4087-7649', mainswichboard: '1853', email: '' }
        ]
    },
    {
        id: 4,
        position: "Security",
        personal: [{ idperson: 1, team: 'Response Team', name: 'Jorge Linares', title: 'Security Assistant', bussinesphone: '55-4811-6730', mainswichboard: '1839', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Víctor Juárez', title: 'Security Assistant', bussinesphone: '55-3731-8048', mainswichboard: '1839', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Emmanuel Martínez', title: 'Security Assistant', bussinesphone: '55-3891-9307', mainswichboard: '1839', email: '' }
        ]
    },
    {
        id: 4,
        position: "Engineering",
        personal: [{ idperson: 1, team: 'Response Team', name: 'Román Ortiz', title: 'Engineering Assistant', bussinesphone: '55-3893-3564', mainswichboard: '2125', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Jesús Olvera', title: 'Engineering Assistant', bussinesphone: '55-1244-9381', mainswichboard: '1827', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Jesús Vigil', title: 'Engineering Assistant', bussinesphone: '', mainswichboard: '1827', email: '' }
           ]
    },
    {
        id: 4,
        position: "IT",
        personal: [{ idperson: 1, team: 'Response Team', name: 'César Maldonado', title: 'It Assistant', bussinesphone: '55-4373-1188', mainswichboard: '1833', email: '' }
        ]
    },
    {
        id: 4,
        position: "Residences",
        personal: [{ idperson: 1, team: 'Response Team', name: '', title: 'Residences Coordinator', bussinesphone: '', mainswichboard: '1868', email: '' }
        ]
    },
    {
        id: 4,
        position: "J&G Grill",
        personal: [{ idperson: 1, team: 'Response Team', name: 'Héctor Gil', title: 'General Manager', bussinesphone: '55-4340-0229', mainswichboard: '1937', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Eloina Martínez', title: 'Flour Manager', bussinesphone: '55-1380-3637', mainswichboard: '1935', email: '' },
            { idperson: 1, team: 'Response Team', name: 'Irais Osnaya', title: 'Flour Manager', bussinesphone: '55-3501-6769', mainswichboard: '1935', email: '' }
                    ]
    },
    {
        id: 4,
        position: "Millessime",
        personal: [{ idperson: 1, team: 'Response Team', name: 'Manuel Quintanero', title: 'General Manager', bussinesphone: '55-2563-9531', mainswichboard: '1750', email: '' },
                { idperson: 1, team: 'Response Team', name: 'Oscar Portal', title: 'Executive Amanger', bussinesphone: '55-3764-7376', mainswichboard: '1750', email: '' }
        ]
    }];


    /////////////////////////---------------------- END CONTACTOS ---------//////////////////

    var autoridadesx = [{
    	id: 1,
    	servicios: "Bomberos Incendio y Rescate",
    	personal: [{ idperson: 1, name: 'Bomberos', phone: '911', phone2: '', direccion: '' }
         
    	]
    },{
      id: 1,
      servicios: "Policia",
      personal: [{ idperson: 1, name: 'Policia', phone: '911', phone2: '', direccion: '' },
      { idperson: 1, name: 'Policia Metropolitana', phone: '103', phone2: '', direccion: '' },
       { idperson: 1, name: 'Defensa Civil', phone: '103', phone2: '', direccion: '' }
        
      ]
    },
    {
    	id: 2,
    	servicios: "Hospitales / Médicos Ambulancias",
    	personal: [{ idperson: 1, name: 'Same', phone: '911', phone2: '', direccion: '' }
              
    	]
    },
    {
    	id: 3,
    	servicios: "Servicios",
    	personal: [{ idperson: 1, name: 'Agua (AYSA)', phone: '0800-321-2482', phone2: '', direccion: '' },
                { idperson: 1, name: 'Gas (Metro Gas)', phone: '0800-333-6427', phone2: '', direccion: '' },
                { idperson: 1, name: 'Energia (EDESUR)', phone: '0800-333-3787', phone2: '', direccion: '' }
                ]
    }];

    var planos = [ {code: 'Azotea', src: 'files/planos/AZOTEA.jpg'},
                   {code: 'Corte Longitudinal 2', src: 'files/planos/CORTE-LONGITUDINAL-2.jpg'},
                   {code: 'Corte Longitudinal 3', src: 'files/planos/CORTE-LONGITUDINAL-3.jpg'},
                   {code: 'Corte Longitudinal', src: 'files/planos/CORTE-LONGITUDINAL.jpg'},
                   {code: 'Corte Transversal 2', src: 'files/planos/CORTE-TRANSVERSAL-2.jpg'},
                   {code: 'Corte Transversal', src: 'files/planos/CORTE-TRANSVERSAL.jpg'},
                   {code: 'Fachada Frontal', src: 'files/planos/FACHADA-FRONTAL.jpg'},
                   {code: 'Fachada Posterior', src: 'files/planos/FACHADA-POSTERIOR.jpg'},
                   {code: 'Facahdas Laterales', src: 'files/planos/FACHADAS-LATERALES.jpg'},
                   {code: 'Lobby', src: 'files/planos/LOBBY.jpg'},  
                   {code: 'Piso 1', src: 'files/planos/PISO-1.jpg'},
                   {code: 'Piso 10', src: 'files/planos/PISO-10.jpg'},
                   {code: 'Piso 11', src: 'files/planos/PISO-11.jpg'},
                   {code: 'Piso 2 al 9', src: 'files/planos/PISOS-2-AL-9.jpg'},
                   {code: 'Sotano 1', src: 'files/planos/SOTANO-1.jpg'},
                   {code: 'Sotano 2', src: 'files/planos/SOTANO-2.jpg'},
                   {code: 'Sotano 3', src: 'files/planos/sotano-3.jpg'},
                   {code: 'Sotano 4', src: 'files/planos/SOTANO-4.jpg'},
                   {code: 'Sotano 5', src: 'files/planos/SOTANO-5.jpg'},
                   {code: 'Sotano 6', src: 'files/planos/SOTANO-6.jpg'},
                   {code: 'Sotano 7', src: 'files/planos/SOTANO-7.jpg'},
                   {code: 'Sotano 8', src: 'files/planos/SOTANO-8.jpg'},
                   {code: 'Sotano 9', src: 'files/planos/SOTANO-9.jpg'}];



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