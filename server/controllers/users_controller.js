var mysql = require('mysql');
var pool = mysql.createPool({
  	host : 'us-cdbr-iron-east-03.cleardb.net',
  	user : 'bb08a4822ce4b1',
  	password : '10f0179b',
  	database: 'heroku_59370a6610ff7e4',
  	debug: true
});

module.exports = (function() {
	return {
		find: function(req, res) {
			// ad hoc solution for empty longin attempts from iOS devices. DELETE THIS IF/ELSE STATEMENT ONCE VALIDATION IS WORKING
			pool.getConnection(function(error, connection) {
				if (error) {
					console.log(error);
					return;
				}
				connection.query("SELECT * FROM users WHERE users.email = " + "'" + req.body.email + "'" + " AND users.password = " + "'" + req.body.password + "'", function(error, user, fields) {
					if (error) {
						console.log(error);
						res.json(error);
					} else {
						// this is for iOS users
						if (user) {
							console.log(typeof user);
							console.log('valid login!! #2', user[0].first_name);
							req.session.email = user[0].email;
							req.session.user_id = user[0].id;
							req.session.vendor_status = user[0].vendor_status;
							req.session.vendor_id = user[0].user_vendor_id;
							console.log('this is the session stuff:', req.session);
							res.json(user);
						} else {
							// again, this error stuff is for iOS. The iOS app will crash if it sends that request and gets nil back. it needs a value.
							res.json("error");
							}
					}
				});
				connection.release();	
			});
		},

		findOne: function(req, res) {
			// ad hoc solution for empty longin attempts from iOS devices. DELETE THIS IF/ELSE STATEMENT ONCE VALIDATION IS WORKING
			pool.getConnection(function(error, connection) {
				connection.query("SELECT * FROM users WHERE users.email = " + "'" + req.body.email + "'", function(error, user, fields) {
					if (error) {
						console.log(error);
						res.json(error);
					} else {
						// this is for iOS users
						if (typeof user[0] !== 'undefined' ) {
							console.log('valid login!!')
							res.json("user exists")
						} else {
							// again, this error stuff is for iOS. The iOS app will crash if it sends that request and gets nil back. it needs a value.
							res.json("error");
							}
					}
				});
				connection.release();
			});		
		},		

// INSERT INTO users (first_name, last_name, email, password, created_at, updated_at)
// VALUES ('Kris', 'Ekenes', 'kris@ekenes', 'password', '2008-11-11 13:23:44', '2008-11-11 13:23:44'); 

		add: function(req, res) { 
			var check_email_post = {email: req.body.email}

			var post = {first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password, phone: req.body.phone};
			console.log(post, "post");

			pool.getConnection(function(error, connection) {
				connection.query("SELECT * FROM users WHERE users.email = " + "'" + req.body.email + "'", function(error, user, fields) {
					if (error) {
						console.log(error);
						res.json(error);
					} else {
						// this is needed for iOS users
						if (typeof user[0] == 'undefined') {
							console.log('valid login!!')
							connection.query("INSERT INTO users SET ?, created_at = NOW(), updated_at = NOW()", post, function(error, results) {
								if (error) {
									console.log(error);
									res.json(error)
								} else {
									console.log("results", results)
									req.session.email = user.email
									res.json(results);
								}
							});
						} else {
							// again, this error stuff is for iOS. The iOS app will crash if it sends that request and gets nil back. it needs a value.
							res.json("duplicate user");

							}
					}
				});
				connection.release();
			});	
		}	
	}
})();