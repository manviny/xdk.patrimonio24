Llamadas a servicios externos
=============================

- 1.- Crear /js/factories.js y pegar el código
```js
angular.module('starter.factories', [])

.factory('lits', function($http) {
    var lits = [];

    return {
        get: function(){
            return $http.get("http://miweb.com/web-service/aytos/").then(function(response){
                lits = response;
                return lits;
            });
        }
    }
})
```

- 2.- Cargarlo en index.html
```js
  <script src="js/app.js"></script>
  <script src="js/controllers.js"></script>
  <script src="js/routes.js"></script>
  <script src="js/factories.js"></script>
```  

- 3.- Inyectarlo en app.js para poder usarlo
```js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.routes', 'starter.factories'])
```

- 4.- Poner el nombre del servicio en el controlador donde queramos usarlo
```js
.controller('MyCtrl', function($scope, lits) {
    lits.get().then(function(data){
      $scope.mylits = data;
    });

})
```

Pasar datos de una página a otra
================================
- 1.- En routes.js indicar el nombre de la variable, en este caso litID
```js
  .state('app.single', {
    url: '/playlists/:litId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
```
- 2.- En el controlador donde queremos usarlo usar $stateParams
```js
.controller('PlaylistCtrl', function($scope, $stateParams) {
    $scope.litId = $stateParams.litId;
});
```

- 3.- Pasamos el dato de la siguiente forma
```js
 href="#/app/playlists/{{playlist.id}}"
```
