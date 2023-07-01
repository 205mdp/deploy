function logxCtrl($scope, localStorageService) {
  var loginit = [];
   $scope.logs = [ ];
   init();
      function init() {
          var tempx = localStorageService.get('logStorage');
          if (tempx == null) {
              localStorageService.add('logStorage',  $scope.logs);
          }
          $scope.logs = localStorageService.get('logStorage');
      }
 
 
  $scope.addTodoLog = function() {
    var date = Date.now();

   // alert("hola");
    $scope.logs.push({text:$scope.todoTextlog, fecha: date });
    localStorageService.add('logStorage',  $scope.logs);
    $scope.todoTextlog = '';
  };
  $scope.addTodoLogCheck = function (texto) {
      var date = Date.now();

      // alert("hola");
      $scope.logs.push({ text: texto, fecha: date });
      localStorageService.add('logStorage', $scope.logs);
      $scope.todoTextlog = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.logs, function(logs) {
      count += logs.done ? 0 : 1;
    });
    return count;
  };
 $scope.borrar = function(){
   localStorageService.add('logStorage',  loginit);
   $scope.logs = localStorageService.get('logStorage');
 };
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}