var mysql = require('mysql');
var pool = mysql.createPool({
  	host : 'us-cdbr-iron-east-03.cleardb.net',
  	user : 'bb08a4822ce4b1',
  	password : '10f0179b',
  	database: 'heroku_59370a6610ff7e4'
});

//connection.connect();

module.exports = (function() {
	return {
		get: function(req, res) {
			console.log('here');
			const lngDistancePerDegreeAtEquator = 69.172;
			const latDistancePerDegreeAtEquator = 69.08558338297732;

			var maxRadius;
			var fromLat;
			var fromLng;
			var sqlQuery;

			if (typeof req.query.radius != "undefined"){
				maxRadius = req.query.radius;
			} else {
				maxRadius = 5000;
			}
			if (typeof req.query.lat != "undefined")
			{
				if (typeof req.query.lng != "undefined")
				{
					fromLat = req.query.lat;
					fromLng = req.query.lng;
					sqlQuery = 'SELECT *, ' +
						'( 3959 * acos( cos( ' +
							'radians(' + fromLat + ' ) ) * ' +
							'cos( radians( vendors.lat ) ) * ' +
							'cos( radians(vendors.lng) - ' +
							'radians(' + fromLng + ')) + ' +
							'sin(radians(' + fromLat + ')) * ' +
							'sin( radians(vendors.lat)))) AS distance ' +
						'FROM vendors ' +
						'WHERE TRIM(PrivilegeStatus) = "ACTIVE (ISSUED)" ' +
						'HAVING distance < ' + maxRadius + ' ' +
						'ORDER BY distance';
				} else {
					error += "Must supply both longitude & latitude in the form lithubb.com/dispensaries?lat=47.609812&lng=-122.196568";
				}
			} else if (typeof req.query.lng != "undefined")
			{
				error += "Must supply both longitude & latitude in the form lithubb.com/dispensaries?lat=47.609812&lng=-122.196568";
			} else {
				sqlQuery = 'SELECT * FROM vendors WHERE TRIM(PrivilegeStatus) = "ACTIVE (ISSUED)"';
			}
			pool.getConnection(function(error, connection) {
				connection.query(sqlQuery, function(error, results) {

					res.json(results);
				});
				connection.release();
			});
		}
	}
})();