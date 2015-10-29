myApp.controller('MapsController', function ($scope, MapFactory, $location, $routeParams) {
	$scope.map = { 
		center: { latitude: 47.605628, longitude: -122.253799 }, 
		zoom: 12,
	};
	
	$scope.markers = [
	 //   	{ 
	 //   		id: 583, 
		// 	coords: {latitude: 47.609811, longitude: -122.198494 }, 
		// 	// icon: './../assets/icons/marker.png',
		// 	click: function(marker) {
		// 		var vendorID = marker.$$childHead.models[0].id;
		// 		$scope.$apply(function() {
		// 			$location.path('/vendor/' + vendorID);
		// 		});	
		// 	}
		// },

		// { 
	 //   		id: 1528, 
		// 	coords: {latitude: 47.6131, longitude: -122.302 }, 
		// 	// icon: './../assets/icons/marker.png',
		// 	click: function(marker) {
		// 		var vendorID = marker.$$childHead.models[1].id;
		// 		console.log(marker);
		// 		console.log(vendorID);
		// 		$scope.$apply(function() {
		// 			$location.path('/vendor/' + vendorID);
		// 		});	
		// 	}
		// },

		// { 
	 //   		id: 3000, 
		// 	coords: {latitude: 47.1922, longitude: -122.434 }, 
		// 	// icon: './../assets/icons/marker.png',
		// 	click: function(marker) {
		// 		var vendorID = marker.$$childHead.models[2].id;
		// 		console.log(marker);
		// 		console.log(vendorID);
		// 		$scope.$apply(function() {
		// 			$location.path('/vendor/' + vendorID);
		// 		});	
		// 	}
		// }

	];

	MapFactory.getCoords(function (dispensaries){
		// console.log('in the front end, here is the data', dispensaries.data);
		for (var i = 0; i < dispensaries.data.length; i++) {
			var vendorID = dispensaries.data[i].id;
			var tradeName = dispensaries.data[i].Tradename;
			var position = i;
			var markerObject = {
				id: dispensaries.data[i].id,
				coords: {latitude: dispensaries.data[i].lat, longitude: dispensaries.data[i].lng },
				click: function(marker, id) {
					// console.log('Returned array of markers: ', marker)
					// console.log('maybe the id: ', id)
					
					$scope.$apply(function() {
						$location.path('/vendor/' + id);
					});	
				}
			};
			//Marker object created

			//end of for loop iteration, pushing the marker object
			$scope.markers.push(markerObject);
			
		};
		//end for loop
	})


	// $scope.windows = [
	// 	{
	// 		id: 1, 
	// 		coords: {latitude: 47.619921, longitude: -122.198494 }, 
	// 		show: 'TRUE',
	// 		templateUrl: './../partials/window.html',
	// 		templateParameter: {},
	// 		isIconVisibleOnClick: 'TRUE',
	// 		closeClick: function() {
	// 			alert('close click');f
	// 		}
	// 	}
	// ];
});