angular.module('App', []);

angular.module('App')
	.controller('MainCtrl', MainCtrl);
	
function MainCtrl($scope, $http) {

	$scope.dataChanged = function(restName) {
		$http.get('/reviews', { restName: restName })
		.then((res) => {
			$scope.reviews = res.data;
		});
	}

	$scope.submitReview = function(restName, name, comment, spaciousness, crowdedness, sanitationAvailability, cleanliness, visitorMaskCompliance, staffMaskCompliance) {
		$http.post('/reviews', { restName: restName,
								 name: name,
								comment: comment,
								spaciousness: spaciousness,
								crowdedness: crowdedness,
								sanitationAvailability: sanitationAvailability,
								cleanliness: cleanliness,
								visitorMaskCompliance: visitorMaskCompliance,
								staffMaskCompliance: staffMaskCompliance
								})
		.then((res) => {
			$scope.reviews = res.data;
		});
	}

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
