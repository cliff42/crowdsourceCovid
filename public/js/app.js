angular.module('App', []);

angular.module('App')
	.controller('MainCtrl', MainCtrl);
	
function MainCtrl($scope) {
	$scope.commenter = "TEST NAME";

	$scope.reviews = [
		{
			reviewer: "Name 1",
			comment: "COMMENTS"
		}
	];

}