var ajaxExample = angular.module('ajaxExample', []);

ajaxExample.controller('mainController',function($scope,$http){
    $scope.people;

    $scope.getPeople = function() {
          $http({
              
              method: 'GET',
              url: 'http://gp.local/api/get.php'
              
          }).then(function (response) {
              
              // on success
              $scope.people = response.data;
              
          }, function (response) {
              
              // on error
              console.log(response.data,response.status);
              
          });
    };

    $scope.addPerson = function() {
          $http({
              
               method: 'POST',
               url:  'http://gp.local/api/post.php',
               data: {newName: 'juanx1', newPhone: '911' }
             //  data: {newName: $scope.newName, newPhone: $scope.newPhone }
               
          }).then(function (response) {// on success
              if (response.status == 200) {
                $scope.status = 'Alerta Enviada';
              } else {
                 $scope.status = "Error Alerta NO ENVIADA CODE: " + response.status;
              }
             
                $scope.textostatus = response.statusText;
             // console.log(response.data,response.status);
            
          }, function (response) {
              if (response.status == 200) {
                $scope.status = 'Alerta Enviada';
              } else {
                 $scope.status = "Error Alerta NO ENVIADA CODE: " + response.status;
              }
             
                $scope.textostatus = response.statusText;
                console.log(response.data,response.status);
               
          });
    };

    $scope.deletePerson = function( id ) {

          $http({
              
              method: 'POST',
              url:  'http://gp.local/api/delete.php',
              data: { recordId : id }
              
          }).then(function (response) {
        
              $scope.getPeople();
        
          }, function (response) {
              
              console.log(response.data,response.status);
              
          });
        };

       // $scope.getPeople();
        $scope.addPerson();
});