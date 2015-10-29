myApp.controller('UsersController', function ($scope, UserFactory, $location) {
	
	UserFactory.checkSession(function (sessionID) {
		$scope.sessionID = sessionStorage.getItem('sessionID');
		$scope.sessionName = sessionStorage.getItem('sessionName')
		$scope.sessionVendor_status = sessionStorage.getItem('sessionVendor_status')
		$scope.sessionVendor_id = sessionStorage.getItem('sessionVendor_id')
	});

	$scope.loginUser = function(user) {
		UserFactory.loginUser(user, function(userFound) {
			console
			$scope.sessionID = userFound[0].id;
			$scope.sessionName = userFound[0].first_name;
			$scope.sessionVendor_status = userFound[0].vendor_status;
			$scope.sessionVendor_id = userFound[0].user_vendor_id;
		});
	}

	$scope.logout = function() {
		UserFactory.logout(function() {
			$scope.sessionID = null;
		});
	}

	$scope.addUser = function(newUser) {
		UserFactory.addUser(newUser, function (userInfo) {
			$location.path('/');
		});	
	}
});