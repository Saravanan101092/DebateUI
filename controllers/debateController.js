app.controller('DebateController',['$http','$scope', '$location','$routeParams',function($http,$scope,$location,$routeParams){
	console.log("inside debate controller");
	$http.get('http://localhost:8087/saru/debates/'+$routeParams.debateId).then(function(response){
		console.log("response for debateid:"+JSON.stringify(response));
		$scope.currentDebate = response.data[0];
	});
	
}]);