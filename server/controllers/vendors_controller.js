var mysql = require('mysql');
var pool = mysql.createPool({
  	host : 'us-cdbr-iron-east-03.cleardb.net',
  	user : 'bb08a4822ce4b1',
  	password : '10f0179b',
  	database: 'heroku_59370a6610ff7e4'
});

module.exports = (function() {
	return {
		getReservations: function(req, res) {
			pool.getConnection(function(err, connection) {
				connection.query("SELECT users.first_name, users.last_name, vendors.name as vendor, vendors_has_strains.price_gram, reservations.quantity_gram, reservations.quantity_eigth, reservations.quantity_quarter, reservations.quantity_half, reservations.quantity_oz, strains.name, strains.category, reservations.status, reservations.id, reservations.strain_id, reservations.vendor_id, reservations.created_at, reservations.updated_at FROM reservations JOIN users ON users.id = reservations.user_id JOIN vendors ON vendors.id = reservations.vendor_id JOIN vendors_has_strains ON vendors_has_strains.strain_id = reservations.strain_id AND vendors_has_strains.vendor_id = reservations.vendor_id JOIN strains ON strains.id = vendors_has_strains.strain_id  WHERE reservations.vendor_id = " + req.params.id, function(error, reservations, fields) {
					if (error) {
						console.log(error);
					} else {
						res.json(reservations);
					}
				});
				connection.release();
			});
	},

		getMenu: function(req, res) {
			pool.getConnection(function(err, connection) {
				connection.query("SELECT officialvendors.name, vendors_has_strains.strain_id, vendors_has_strains.vendor_id, price_gram, price_eigth, price_quarter, price_half, price_oz, strains.name as strain_name, category, symbol, description, star_image, thumb_img1, thumb_img2, thumb_img3, thumb_img4, fullsize_img1, fullsize_img2, fullsize_img3, fullsize_img4, test_graph, effects1, effects2, effects3, effects4, effects5, medical1, medical2, medical3, medical4, medical5, negatives1, negatives2, negatives3, negatives4, negatives5, grow_difficulty FROM officialvendors " + 
								"JOIN vendors_has_strains ON officialvendors.id = vendors_has_strains.vendor_id " + 
								"JOIN strains ON strains.id = vendors_has_strains.strain_id " + 
								"WHERE officialvendors.id = " + req.params.id, function(error, menu, fields) {
					if (error) {
						console.log(error);
					} else {
						res.json(menu);
					}
				});
				connection.release();
			});
		},

		available: function(req, res) {
			pool.getConnection(function(err, connection) {
				connection.query("UPDATE reservations SET status = 1 WHERE id = " + "'" + req.body.id + "'",
				function(error, reservations, fields) {
					if (error) {
						console.log(error);
					} else {
						res.json({});
					}
				});
				connection.release();
			});
		},

		unavailable: function(req, res) {
			pool.getConnection(function(err, connection) {
				connection.query("UPDATE reservations SET status = 0 WHERE id = " + "'" + req.body.id + "'",
				function(error, reservations, fields) {
					if (error) {
						console.log(error);
					} else {
						res.json({});
					}
				});
				connection.release();
			});
		}
	}
})();