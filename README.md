Ionic Framework Starter
=============================

- 1.- Crear factories.js y pegar el código
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
  <script src="js/factories.js"></script>
```        
- 3.- Inyectarlo en app.js para poder usarlo
```js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.routes', 'starter.factories'])
```
- 4.- Poner el nombre del servicio en el controlador donde queramos usarlo
```js

```
