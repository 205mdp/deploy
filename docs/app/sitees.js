var demoApp = angular.module('demoApp', ['ngRoute', 'ngSanitize', 'ngAnimate', 'LocalStorageModule', 'ajoslin.mobile-navigate', 'ui.bootstrap', "ngTouch", "mobile-angular-ui"]);


demoApp.controller('SimpleController', function ($scope, simpleFactory, localStorageService) {
    $scope.movies = [];
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
    	

        $scope.todosx = localStorageService.get('localStorageDemo');
        $scope.movies = simpleFactory.getMovies();
        $scope.contactos = simpleFactory.getContactosLad();
        $scope.autoridades = simpleFactory.getAutoridades();
        $scope.metro = simpleFactory.getMetro();
        $scope.contactoshotel = simpleFactory.getContactosHotel();
        $scope.planos = simpleFactory.getPlanos();
        $scope.contactosReg = simpleFactory.getContactosRegion();

        $scope.name;
        $scope.about = {
       		app: "Be Safe Beta",
        		version: "Beta 1.3.5",
        		fecha: "08-05-2014"
       	};	
      

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
            alert("Todo fue borrado.");
        } else {
            alert("No se Borro Nada.")
        }
   	    
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

demoApp.factory('simpleFactory', function ($http) {

    var metro = [
        { id: 1, title: "Evacuación", img: "Images/exit.png", txtcss: "metro gpcolorgreen", link: "#/evacuacion" },
        { id: 2, title: "Amenaza de Bomba", img: "Images/explosivo.png", txtcss: "metro gpcolororange", link: "#/bomba" },
        { id: 3, title: "Incendio", img: "Images/fire.png", txtcss: "metro gpcolorred", link: "#/2-8-IncendioExplosion" },
        { id: 4, title: "Terremoto", img: "Images/earthquake.png", txtcss: "metro gpcoloryellow", link: "#/2-18-terremotos" },
        { id: 5, title: "Llamadas", img: "Images/call.png", txtcss: "metro gpcolorpink", link: "#/contactoshotel" },
        { id: 6, title: "Crimen", img: "Images/bodylow.jpg", txtcss: "metro gpcolormidblue", link: "#/muerte" },
        { id: 7, title: "Intoxicación", img: "Images/foodlow.jpg", txtcss: "metro gpcolorlime", link: "#/alimentos" },
        { id: 8, title: "Huracan", img: "Images/huracan.png", txtcss: "metro gpcolorpurple", link: "#/2-17-2-Huracanes" },
        { id: 9, title: "Corte de Energia", img: "Images/off.jpg", txtcss: "metro gpcolorblue", link: "#/2-15-CorteServicios" },
        { id: 10, title: "Autoridades", img: "Images/police.png", txtcss: "metro gpcolormidpumpkin", link: "#/autoridades" },
        { id: 11, title: "Listado", img: "Images/listw.png", txtcss: "metro gpcolormidsilver", link: "#/listado" }
       // { id: 12, title: "Planos", img: "Images/planos.jpg", txtcss: "metro gpcolorblue", link: "#/planos" }
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
    name: "2.	EMERGENCIAS",
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
    	position: "TEAM LEADER",
    	personal: [  
            { idperson:1, team:'Primary Member' , name: 'Jorge Giannattasio' , title:'SVP Chief of Latin America Operations & Global Iniatives' , bussinesphone:'+1 (786) 999-6301' , homephone: '+1 (203) 964-6000' , mobilephone: '+1 (305) 766-3790' , email:'jorge.giannattasio@starwoodhotels.com' , location: '' , emailhome:''  },
            { idperson:1, team:'Backup Member' , name: 'Batya Brykman' , title:'VP Operations, Mexico& Central America' , bussinesphone:'' , homephone: '+1 (786) 999-630 ext. 669' , mobilephone: '+1 (305) 354-2163' , email:'batya.brykman@starwoodhotels.com' , location: '' , emailhome:''  }
    ]
    },
    {
    	id: 2,
    	position: "HUMAN RESOURCES",
    	personal: [
    	 { idperson:1, team:'Primary Member' , name: 'Agustina Veiga' , title:'Regional Director, HR Business Partner Latin America' , bussinesphone:'+54 (11) 4318-9336' , homephone: '+54 (911) 4031-8885' , mobilephone: '+54 (11) 4318-9000 ext. 2878' , email:'agustina.veiga@starwoodhotels.com' , location: '' , emailhome:''  },
    	{ idperson:1, team:'Backup Member' , name: 'Patricia Lavoignet' , title:'Director HR, Sheraton Hacienda del Mar ' , bussinesphone:'+52 (624) 1430-711' , homephone: '+52 (624) 3559-398' , mobilephone: '+52 (624) 1456-100 ext. 4226' , email:'patricia.lavoignet@sheraton.com' , location: '' , emailhome:''  }

    	]
    },
    {
    	id: 3,
    	position: "PUBLIC RELATIONS",
    	personal: [
    	    { idperson:1, team:'Primary Member' , name: 'Gina Carriazo' , title:'Director, Public Relations & Communications, Latin America' , bussinesphone:'+1 (786) 999-6307' , homephone: '+1 (786) 219-5846' , mobilephone: '+1 (305) 972-6471' , email:'gina.carriazo@starwoodhotels.com' , location: '' , emailhome:''  },
    	{ idperson:1, team:'Backup Member' , name: 'Trip Barrett' , title:'VP Marketing Latin America' , bussinesphone:'' , homephone: '+1 (305) 893-5128' , mobilephone: '+1 (305) 776-2776' , email:'trip.barrett@starwoodhotels.com' , location: '' , emailhome:''  }

    	]
    },
    {
    	id: 4,
    	position: "LEGAL REPRESENTATIVE",
    	personal: [
    	{ idperson:1, team:'Primary Member' , name: 'Martin Arauz' , title:'VP, General Counsel, Latin America' , bussinesphone:'+1 (786) 999-6302' , homephone: '+1 (914) 310-4605' , mobilephone: '+1 (786) 999-6300 ext. 675' , email:'martin.arauz@starwoodhotels.com' , location: '' , emailhome:''  },
    	{ idperson:1, team:'Backup Member' , name: 'Maria Laura Rodriguez' , title:'Legal Manager, Latin America' , bussinesphone:'+1 (305) 865-6668' , homephone: '+1 (305) 924-1099' , mobilephone: '+1 (786) 999-6300' , email:'marialaura.rodriguez@starwoodhotels.com' , location: '' , emailhome:''  }

    	]
    },
    {
    	id: 5,
    	position: "DIVISIONAL CRISIS TEAM REPRESENTATIVE",
    	personal: [{ idperson:1, team:'Primary Member' , name: 'Rick Segal' , title:'VP, Owners Relations & Franchise Support, Latin America' , bussinesphone:'+1 (786) 999-6308' , homephone: '+1 (203) 893-6208' , mobilephone: '+1 (786) 999-6300 ext. 683' , email:'rick.segal@starwoodhotels.com' , location: '' , emailhome:''  },
    	{ idperson:1, team:'Backup Member' , name: 'Ricardo Calo' , title:'AMD Arg,Uru, Par, Bol, Ecu & Col' , bussinesphone:'+54 (11) 4318-9330' , homephone: '+54 (911) 6852-4848' , mobilephone: '+54 (11) 4318-9000' , email:'ricardo.calo@starwoodhotels.com' , location: '' , emailhome:''  }
    	]
    },
    {
    	id: 6,
    	position: "TECHNICAL SERVICES",
    	personal: [
    	    { idperson:1, team:'Primary Member' , name: 'Magdalena Valenzuela' , title:'Design & Construction Manager, Latin America' , bussinesphone:'' , homephone: '' , mobilephone: '+56 (22) 8139-7273' , email:'magdalena.valenzuela@starwoodhotels.com' , location: '' , emailhome:''  },
    	{ idperson:1, team:'Backup Member' , name: 'Jorge Salazan' , title:'Associate Dr. Architecture & Design, Latin America' , bussinesphone:'+54 (11) 4318-9122' , homephone: '+54 (911) 6260-9164 ' , mobilephone: '+54 (11) 4318-9000' , email:'jorge.salazan@starwoodhotels.com' , location: '' , emailhome:''  }

    	]
    },
    {
    	id: 7,
    	position: "IT",
    	personal: [
    	{ idperson:1, team:'Primary Member' , name: 'Luis Acosta' , title:'Director, IT Services, Latin America' , bussinesphone:'+54 (11) 4318- 9364' , homephone: '+54 (911) 4422- 2738' , mobilephone: '+54 (11) 4318-9000  Ext 2790' , email:'luis.acosta@starwoodhotels.com' , location: '' , emailhome:'lacosta0611@gmail.com'  },
    	{ idperson:1, team:'Backup Member' , name: 'Federico Hauer' , title:'IT Director Mexico & Central America' , bussinesphone:'+56 (22) 707-0682' , homephone: '+56 (97) 667- 9638' , mobilephone: '' , email:'federico.hauer@sheraton.com' , location: '' , emailhome:''  }

    	]
    },
    {
    	id: 8,
    	position: "FRANCHISE/OWNER RELATIONS",
    	personal: [
            { idperson:1, team:'Primary Member' , name: 'Jose Muñoz' , title:'Sr. Dir, Franchising & Development, Latin America' , bussinesphone:'+1 (305) 861-9864' , homephone: '+1 (305) 788-8701' , mobilephone: '+1 (786) 999-6300 ext. 680' , email:'pepe.munoz@starwoodhotels.com' , location: '' , emailhome:''  }
    	
    	]
    },
    {
        id: 5,
        position: "CONSULTANT",
        personal: [
        { idperson:1, team:'Backup Member' , name: 'Ron Ziv' , title:'Coordinator – Consultant' , bussinesphone:'+972 (9) 749- 6676' , homephone: '' , mobilephone: '' , email:'ron@gsahsolutions.com' , location: '' , emailhome:''  }
        ]
    }];
//////////////////-----------------Contactos Region ------------------/////////////////

var contactosRegion =[{
      id: 1,
      position: "Team Leader",
      personal: [
          { idperson:1, team:'Primary Member' , name: 'Jean-Marc Janod' , title:'General Manager' , bussinesphone:'+52 (55) 5242- 5555' , homephone: '+52 (55)  5242 -5555' , mobilephone: '+52 (155) 3901 -5696' , email:'jean-marc.janod@sheraton.com' , location: 'Sheraton Maria Isabel' , emailhome:'jmjanod@yahoo.com'  },
          { idperson:1, team:'Backup Member' , name: 'Silvio Berron' , title:'General Manager' , bussinesphone:'+52 (55)  5258-8523' , homephone: '+52 (55)  5247-2097' , mobilephone: '+52 (155)  5436-5209' , email:'silvio.berron@sheraton.com' , location: 'Sheraton Suites Santa Fe' , emailhome:'silvioberron@yahoo.com.mx'  }
      ]
},{

      id: 2,
      position: "Operations Committee",
      personal: [
                { idperson:1, team:'Primary Member' , name: 'Batya Brykman' , title:'VP Operations, Mexico& Central America' , bussinesphone:'+1 (305) 865-1816' , homephone: '+1 (305) 354-2163' , mobilephone: '+1 (305) 962-6450' , email:'batya.brykman@starwoodhotels.com' , location: 'Starwood Latin America offices - Miami' , emailhome:'batyab@hotmail.com'  },
                { idperson:1, team:'Backup Member' , name: 'Pedro Groschopp' , title:'General Manager Starwood Cancun' , bussinesphone:'+52 (998) 848- 7472' , homephone: '+52 (998) 848- 7400' , mobilephone: '+52 (1998) 133-8963' , email:'pedro.groschopp@westin.com' , location: 'The Westin Resort and Spa Cancun' , emailhome:'pgroschopp@yahoo.com'  }

         ]
    },
    {
      id: 3,
      position: "Legal",
      personal: [
         { idperson:1, team:'Primary Member' , name: 'Martin Arauz' , title:'VP, General Counsel, Latin America' , bussinesphone:'+1 (786) 999-6302' , homephone: '+1 (305) 933-0319' , mobilephone: '+1 (914) 310-4605' , email:'martin.arauz@starwoodhotels.com ' , location: 'Starwood Latin America offices - Miami' , emailhome:''  },
        { idperson:1, team:'Backup Member' , name: 'Gaspar Gutierrez-Centeno' , title:'Socio Baker & McKenzie, S. C ' , bussinesphone:'+52 (55)  5279-2909' , homephone: 'N/A' , mobilephone: '+52 (155)  2653-4053' , email:'Gaspar.Gutierrez-Centeno@BakerMcKenzie.com' , location: 'Mexico City' , emailhome:''  }


        ]
    },
    {
      id: 4,
      position: "PR/Social Media",
      personal: [
          { idperson:1, team:'Primary Member' , name: 'Claudia Sanchez' , title:'Public Relations Director Starwood Mexico & CA' , bussinesphone:'+52 (55)  5242-5564' , homephone: '+52 (55)  6728-1320' , mobilephone: '+52 (155) 38518774' , email:'@starwoodhotels.com' , location: 'Mexico/Sheraton Maria Isabel' , emailhome:'kikikawasaki@hotmail.com'  },
        { idperson:1, team:'Backup Member' , name: 'Alejandra Paquentin' , title:'Public Relations Manager Starwood Mexico & CA' , bussinesphone:'+52 (55)  5242-4007' , homephone: '+52 (55)  5019-4555' , mobilephone: '+52 (155) 4349-1086' , email:'alejandra.paquentin@starwoodhotels.com    yosoyalejandra@gmail.com ' , location: 'Mexico/Sheraton Maria Isabel' , emailhome:''  }


      ]
    },
    {
        id: 4,
        position: "Sales & Marketing",
        personal: [
            { idperson:1, team:'Primary Member' , name: 'Luis Alberto Aldrete' , title:'Sales & Marketing Director' , bussinesphone:'+52 (55)   5089-8008' , homephone: '+52 (55)   2208 -2273' , mobilephone: '+52 (155)  1965-4803' , email:'alberto.aldrete@westin.com' , location: 'The Westin Santa Fe (Mexico City)' , emailhome:'beto.aldrete@hotmail.com'  },
            { idperson:1, team:'Backup Member' , name: 'Florencia González Deibe' , title:'Sales & Marketing Director' , bussinesphone:'+52 (55)   5242- 5588' , homephone: 'N/A' , mobilephone: '+52 (155)  8580- 3890' , email:'florencia.gonzálezdeibe@sheraton.com' , location: 'Sheraton Maria Isabel Hotel & Towers' , emailhome:'flor_gdeibe@hotmail.com'  }

             ]
    },
    {
        id: 4,
        position: "Human Resources",
        personal: [
            { idperson:1, team:'Primary Member' , name: 'Nayelli Cabada' , title:'Human Resources Director' , bussinesphone:'+52 (55) 5242-5573' , homephone: 'No' , mobilephone: '+52 (155) 9185-4655' , email:'nayelli.cabada@sheraton.com' , location: 'Sheraton Maria Isabel Hotel & Towers Mexico City' , emailhome:''  },
            { idperson:1, team:'Backup Member' , name: 'Ximena Esteinou' , title:'Human Resources Director' , bussinesphone:'+52 (55)  5228-1803' , homephone: '+52 (55)  5652-4326' , mobilephone: '+52 (155) 4833-8257' , email:'ximena.esteinou@stregis.com' , location: 'St Regis Mexico City' , emailhome:'ximenaesteinou@hotmail.com'  }

           ]
    },
    {
        id: 4,
        position: "Technical Services / Engineering",
        personal: [
            { idperson:1, team:'Primary Member' , name: 'Rodrigo Montero Barrera' , title:'Engineering Manager' , bussinesphone:'+52 (55) 5228-1805' , homephone: '+52 (55)  5016-0847' , mobilephone: '+52 (155)  4373-1178' , email:'Rodrigo.montero@stregis.com' , location: 'St Regis Mexico City' , emailhome:'Rodrigo_monterob@hotmail.com'  },
            { idperson:1, team:'Backup Member' , name: 'German Angeles' , title:'Engineering Manager' , bussinesphone:'+52 (55)  5258-8515' , homephone: '+52 (55)   6365-9260' , mobilephone: '+52 (155)  5412-7116' , email:'german.angeles@sheraton.com' , location: 'Sheraton Santa Fe (Mexico City)' , emailhome:'germ.angeles@gmail.com'  }

           ]
    },
    {
        id: 4,
        position: "IT",
        personal: [
            { idperson:1, team:'Primary Member' , name: 'Damian Rodriguez' , title:'IT Manager' , bussinesphone:'+52 (55)  5228-1818' , homephone: '+52 (55)  6583 -8107' , mobilephone: '+52 (155) 4373- 1176' , email:'damian.rodriguezpineda@stregis.com' , location: 'St. Regis Mexico City' , emailhome:'wishmasterdemian@hotmail.com'  },
            { idperson:1, team:'Backup Member' , name: 'Mayra Aguirre' , title:'IT Director ' , bussinesphone:'+52 (62) 142-9024 ' , homephone: '+52 (62) 120-5863' , mobilephone: '+52 (162) 157-7147' , email:'mayra.aguirre@westin.com' , location: 'Westin Los Cabos (Mexico)' , emailhome:'mayra_aguirre1208@hotmail.com'  }

         ]
    },
    {
        id: 4,
        position: "Owner Relations",
        personal: [
            { idperson:1, team:'Primary Member' , name: 'Rick Segal' , title:'VP, Owners Relations & Franchise Support, Latin America' , bussinesphone:'+1 (786) 999-6308' , homephone: '+1 (786) 431-1318' , mobilephone: '+1 (203) 893-6208' , email:'rick.segal@starwoodhotels.com' , location: 'Starwood Latin America offices - Miami' , emailhome:'segalrick@mac.com'  },
            { idperson:1, team:'Backup Member' , name: 'Batya Brykman' , title:'VP Operations, Mexico & Central America' , bussinesphone:'+1 (305) 865-1816' , homephone: '+1 (305) 354-2163' , mobilephone: '+1 (305) 962-6450' , email:'batya.brykman@starwoodhotels.com' , location: 'Starwood Latin America offices - Miami' , emailhome:'batyab@hotmail.com'  }

         ]
    },
    {
        id: 4,
        position: "Admin",
        personal: [
            { idperson: 1, team: 'Primary Member', name: 'Susana Salgado', title: 'Administrative Assistant', bussinesphone: '+52 (55) 5242-5505', homephone: '+52 (55) 5260-2734', mobilephone: '+52 (155)  2729-3421', email: 'susana.salgado@sheraton.com', location: 'Sheraton Maria Isabel Hotel & Towers', emailhome: 'sussanasalgado777@hotmail.com' },
            { idperson: 1, team: 'Backup Member', name: 'Teresa Ramos', title: 'Executive Assistant to The General Manager', bussinesphone: '+52 (55) 5228-1855', homephone: '+52 (55)  5361-8591', mobilephone: '+52 (155)  2128-8957', email: 'teresa.ramos@stregis.com', location: 'St Regis Mexico City', emailhome: 'ramosmtere@hotmail.com' },

         ]
    }];

    //------------------------------//

    ///////////////-----------------Contactos Hotel ------------------//////////////////
    ///  Four Points by Sheraton
    /// Mexico City Col. Roma //

var contactoshotel = [{
    id: 1,
    position: "Executive Committee",
    personal: [

        { idperson: 1, team: 'Primary Member', name: 'Alberto Aguilar', title: 'Contralor', bussinesphone: '1085-9500 ext.222', homephone: '', mobilephone: '04455-1588-6109', email: 'accountsoffice@fourpointsmexicoroma.com', location: '', emailhome: 'alberto1722@gmail.com' },
        { idperson: 1, team: 'Primary Member', name: 'Sergio Gomez', title: 'Director  de Ventas y Marketing', bussinesphone: '1085-9500', homephone: '55 79 53 44', mobilephone: '55 36 66 64 65 ', email: 'Ventas@fourpointsmexicoroma.com', location: '', emailhome: '' },
        { idperson: 1, team: 'Primary Member', name: 'Manuel Hernández', title: 'Gerente División Cuartos ', bussinesphone: '1085-9591', homephone: '5276-0883', mobilephone: '04455-4500-3447', email: 'manuel@fourpointsmexicoroma.com', location: '', emailhome: 'divisioncuartos@fourpointsmexicoroma.com' },
        { idperson: 1, team: 'Primary Member', name: 'Pedro Cruz', title: 'Jefe de Seguridad', bussinesphone: '1085-9500', homephone: '5914-12-67', mobilephone: '04455-5031-2095', email: 'seguridad@fourpointsmexicoroma.com.', location: '', emailhome: 'seguridadfp@gmail.com' },
        { idperson: 1, team: 'Primary Member', name: 'Pedro Montufar', title: 'Gerente de Mantenimiento', bussinesphone: '1085-9500', homephone: '2158-2390', mobilephone: '04455-4045-7014', email: 'mantenimiento@fourpointsmexicoroma.com', location: '', emailhome: '1217pedro@gmail.com' },
        { idperson: 1, team: 'Primary Member', name: 'Sara Flores', title: 'Ama de llaves', bussinesphone: '1085-9500', homephone: '', mobilephone: '04455- 4765- 3740 ', email: 'amadellaves@fourpointsmexicoroma.com', location: '', emailhome: 'saraf.galindo@gmail.com' },
        { idperson: 1, team: 'Primary Member', name: 'Mario Juárez', title: 'Gerente de A y B', bussinesphone: '1085-9500', homephone: '56-08-45-21', mobilephone: '04455-6818-0187', email: 'ayb@fourpointsmexicoroma.com', location: '', emailhome: 'mario_dasa@hotmail.com' },
        { idperson: 1, team: 'Primary Member', name: 'Guillermo Bermúdez', title: 'Contador', bussinesphone: '1085-9500', homephone: '57-58-17-47', mobilephone: '04455-2247-5179', email: 'contabilidad@fourpointsmexicoroma.com', location: '', emailhome: 'bermudezg22@gmail.com' },
        { idperson: 1, team: 'Primary Member', name: 'Joel Garcia', title: 'Consultor de Sistemas', bussinesphone: '', homephone: '', mobilephone: '04455 5103 5895', email: 'sistemas@fourpointsmexicoroma.com', location: '', emailhome: '' }


    ]


}];


var autoridadesx = [{
    id: 1,
    servicios: "Bomberos Incendio y Rescate",
    personal: [{ idperson: 1, name: 'Estación Cuauhtémoc', phone: '57 053369', phone2: '57 054168/57 054319/57 054233', direccion: 'Avenida Insurgentes Centro Nos. 95 y 97, Colonia San Rafael, Del. Cuauhtémoc C. P.' },
        { idperson: 1, name: 'ERUM (Escuadrón de Rescate Y Urgencias Médicas) ', phone: '55887418', phone2: '', direccion: '' }
    ]
},
{
    id: 2,
    servicios: "Hospitales / Médicos Ambulancias",
    personal: [{ idperson: 1, name: 'CRUZ ROJA', phone: '065', phone2: '', direccion: '' },
            { idperson: 1, name: 'DIRECTO CRUZ ROJA', phone: '53-95-11-11', phone2: '', direccion: '' },
            { idperson: 1, name: 'ERUM', phone: '55-88-74-18', phone2: '', direccion: '' },
            { idperson: 1, name: 'MERCY (no emergencias)', phone: '01800-00-63-729', phone2: '5336-1264', direccion: '' },
            { idperson: 1, name: 'Doctor de Emergencias las 24 hrs', phone: '55133465 / 46141413', phone2: '04455-34216670', direccion: '' }
    ]
},
{
    id: 3,
    servicios: "Servicios",
    personal: [{ idperson: 1, name: 'Comisión Federal de Electricidad', phone: '52294400', phone2: '071', direccion: '' },
            { idperson: 1, name: 'GAS AMERICA', phone: '044-55-3135-3315', phone2: '', direccion: '' },
            { idperson: 1, name: 'ESTACION DE SERVICIO LENIGAS (Diesel)', phone: '6269-0400', phone2: '', direccion: '' },
            { idperson: 1, name: 'SISTEMAS DE AGUA DEL DISTRITO FEDERAL', phone: '5260-7469', phone2: '', direccion: 'Gutenberg No. 50 entre Circuito Interior y Ejercito Nacional Colonia Veronica Anzurez ' },
            { idperson: 1, name: 'COMISION NACIONAL DEL AGUA', phone: '5174-4000', phone2: '', direccion: 'Lieja No. 7 Colonia Juárez delegación Cuahtemoc' }
    ]
},
{
    id: 4,
    servicios: "Desastre Masivo",
    personal: [{ idperson: 1, name: 'DIRECCION GENERAL DE PROTECCION CIVIL DEL DISTRITO FEDERAL', phone: '5683-1142', phone2: '5683-1154 EXT. 101-105', direccion: 'AV. PERIFERICO SUR No. 2769 ' },
            { idperson: 1, name: 'PROTECCION CIVIL DEL DISTRITO FEDERAL (Magdalena Contreras)', phone: '5683-2011', phone2: '5595-9866', direccion: 'COLONIA SN JERONIMO LIDICE ' },
            { idperson: 1, name: 'PROTECCION CIVIL DELEGACION CUAHUTEMOC', phone: '5383-1154', phone2: '', direccion: '' },
            { idperson: 1, name: 'SECRETARIA DE DEFENSA NACIONAL', phone: '2122-8800 EXT. 3585', phone2: '', direccion: 'BLVD. MANUEL AVILA CAMACHO S/N' }

           
    ]
},
{
    id: 4,
    servicios: "Terrorismo",
    personal: [{ idperson: 1, name: 'SECRETARIA DE DEFENSA NACIONAL', phone: '2122-8800', phone2: 'EXT. 3585', direccion: 'BLVD. MANUEL AVILA CAMACHO S/N' }


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