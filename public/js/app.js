angular.module('App', []);

angular.module('App')
	.controller('MainCtrl', MainCtrl);
	
function MainCtrl($scope, $http) {
	$http.get('/reviews')
		.then((res) => {
			$scope.reviews = res.data;
		});

	$scope.reviewProperties = ['spaciousness', 'crowdedness', 'sanitationAvailability', 'cleanliness', 'visitorMaskCompliance', 'staffMaskCompliance'];
	$scope.reviews = [
		{
			reviewer: "Name 1",
			comment: "COMMENTS"
		}
	];

	$scope.getPropertyScore = function(property, review) {
		return review[property];
	};

	$scope.getPropertyName = function(property) {
		var propertyName;

		if (property === 'spaciousness') {
			propertyName = 'Space';
		} else if (property === 'crowdedness') {
			propertyName = 'Density';
		} else if (property === 'sanitationAvailability') {
			propertyName = 'Sanitizers';
		} else if (property === 'cleanliness') {
			propertyName = 'Cleanliness';
		} else if (property === 'visitorMaskCompliance') {
			propertyName = 'Masks on visitors';
		} else if (property === 'staffMaskCompliance') {
			propertyName = 'Masks on staff';
		}

		return propertyName;
	};
}