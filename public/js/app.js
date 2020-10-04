angular.module('App', []);

angular.module('App')
	.controller('MainCtrl', MainCtrl);
	
function MainCtrl($scope, $http) {

	$http.get('/reviews')
		.then((res) => {
			$scope.reviews = res.data;
		});

	$scope.reviewProperties = ['spaciousness', 'crowdedness', 'sanitationAvailability', 'cleanliness', 'visitorMaskCompliance', 'staffMaskCompliance'];
	// $scope.reviews = [
	// 	{
	// 		name: "NAME 1",
	// 		comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.",
	// 		spaciousness: 0,
	// 		crowdedness: 1,
	// 		sanitationAvailability: 0,
	// 		cleanliness: 0,
	// 		visitorMaskCompliance: 0,
	// 		staffMaskCompliance: 0
	// 	},
	// 	{
	// 		name: "NAME 2",
	// 		comment: "COMMENT 2",
	// 		spaciousness: 0,
	// 		crowdedness: 1,
	// 		sanitationAvailability: 0,
	// 		cleanliness: 0,
	// 		visitorMaskCompliance: 0,
	// 		staffMaskCompliance: 0
	// 	},
	// 	{
	// 		name: "NAME 3",
	// 		comment: "COMMENT 3",
	// 		spaciousness: 0,
	// 		crowdedness: 1,
	// 		sanitationAvailability: 0,
	// 		cleanliness: 0,
	// 		visitorMaskCompliance: 0,
	// 		staffMaskCompliance: 0
	// 	}
	// ];

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