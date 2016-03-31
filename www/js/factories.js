angular.module('starter.factories', [])

.factory('pw', function($http) {
	var lits = [];

	return {
		getLits: function(){
			return $http.get("http://rutapa.com/web-service/aytos/").then(function(response){
				return response.data;
			});
		},
		getLit: function(litId){
			return $http.get("http://rutapa.com/web-service/ayto/"+litId).then(function(response){
				return response.data[0];
			});
		}
	}
})