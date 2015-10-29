myApp.factory('VendorFactory', function ($http) {
	var factory = {};
	var vendor_id;
	if (sessionStorage.getItem('sessionVendor_id') != undefined) {
		vendor_id = sessionStorage.getItem('sessionVendor_id');
	}

	factory.returnVendor_id = function(callback) {
		callback(vendor_id);
	}

	factory.getMenu = function(vendorID, callback) {
		$http.get('/getMenu/' + vendorID).success(function (menu) {
			callback(menu);
		});
	}
	
	factory.getReservations = function(vendorID, callback) {
		$http.post('/getVendorReservations/' + vendorID).success(function (allReservations) {
			callback(allReservations);
		});
	  }

	factory.unavailable = function(reservationID, callback) {
		$http.post('/unavailable', {id: reservationID}).success(function () {
			callback();
		});
	}

	factory.available = function(reservationID, callback) {
		$http.post('/available', {id: reservationID}).success(function () {
			callback();
		});
	}

	return factory;
});