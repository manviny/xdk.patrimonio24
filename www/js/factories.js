angular.module('starter.factories', [])

.factory('lits', function($http) {
	var lits = [];

	return {
		get: function(){
			return $http.get("http://rutapa.com/web-service/aytos/").then(function(response){
				lits = response;
				return lits;
			});
		}
	}
})