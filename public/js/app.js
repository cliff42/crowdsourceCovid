angular.module('App', []);

angular.module('App')
	.controller('MainCtrl', MainCtrl);
	
function MainCtrl($scope, $http) {
	$scope.reviewProperties = ['spaciousness', 'crowdedness', 'sanitationAvailability', 'cleanliness', 'visitorMaskCompliance', 'staffMaskCompliance'];
	$scope.submitForm = {
		name: "",
		spaciousness: "",
		crowdedness: "",
		sanitationAvailability: "",
		cleanliness: "",
		visitorMaskCompliance: "",
		staffMaskCompliance: "",
		comment: ""
	}

	// $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

	$scope.dataChanged = function() {
		var placeID = document.getElementById('place-id').textContent;
		$http.post('/currentReviews', { restName: placeID })
		.then((res) => {
			$scope.reviews = res.data;
		});
		// $http({
		// 	url: '/reviews',
		// 	method: "GET",
		// 	data: { 'restName' : restName }
		// }).then((res) => {
		// 	$scope.reviews = res.data;
		// });
		// $http({
		// 	method: 'GET',
		// 	url: '/reviews',
		// 	data: "restName=" + restName,
		// 	headers: {
		// 	  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
		// 	}
		// });
	}

	$scope.submitReview = function(name, comment, spaciousness, crowdedness, sanitationAvailability, cleanliness, visitorMaskCompliance, staffMaskCompliance) {
		var placeID = document.getElementById('place-id').textContent;

		$http.post('/reviews', { 
			restName: "'" + placeID + "'",
			name: "'" + $scope.submitForm.name + "'",
			comment: "'" + $scope.submitForm.comment + "'",
			spaciousness: "'" + $scope.submitForm.spaciousness + "'",
			crowdedness: "'" + $scope.submitForm.crowdedness + "'",
			sanitationAvailability: "'" + $scope.submitForm.sanitationAvailability + "'",
			cleanliness: "'" + $scope.submitForm.cleanliness + "'",
			visitorMaskCompliance: "'" + $scope.submitForm.visitorMaskCompliance + "'",
			staffMaskCompliance: "'" + $scope.submitForm.staffMaskCompliance + "'"
	   })
			.then(() => {
				$scope.submitForm = {
					name: "",
					spaciousness: "",
					crowdedness: "",
					sanitationAvailability: "",
					cleanliness: "",
					visitorMaskCompliance: "",
					staffMaskCompliance: "",
					comment: ""
				}

				$http.post('/currentReviews', { restName: placeID })
					.then((res) => {
						$scope.reviews = res.data;
					});
			});
	}

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

