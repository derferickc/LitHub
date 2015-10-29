var strains = require('./../server/controllers/strains_controller');
var users = require('./../server/controllers/users_controller');
var reservations = require('./../server/controllers/reservations_controller');
var vendors = require('./../server/controllers/vendors_controller');
var dispensaries = require('./../server/controllers/dispensaries_controller');

var session = require('express-session');

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/getStrains', function(req, res) {
		strains.show(req, res);
	});

	app.post('/loginUser', function(req, res) {
		users.find(req, res);
		//setting the req session data
		// req.session.email = users[0].email
	});

	// This is a logout function for iOS users who must use express session
	app.post('/logoutUser', function(req, res){
		req.session.destroy()
	})

	// This is a function to check which user is logged in. For now this is only used for iOS.
	app.get('/currentUser', function(req, res) {
		var jsonObject = {
			email: req.session.email,
			id: req.session.user_id
		}
		console.log('routes session var: ', req.session);
		res.json(jsonObject)
	})
	
	app.post('/addUser', function(req, res) {
		console.log(req.body, "adding user")
		users.add(req, res)
	});

	// This is for the 'ajax-like' email is unique validation in iOS
	app.post('/findUser', function(req, res) {
		users.findOne(req,res)
	});

	app.post('/getReservations', function(req, res) {
		reservations.retrieve(req, res);
	});

	app.post('/getVendorReservations/:id', function(req, res) {
		vendors.getReservations(req, res);
	});

	app.get('/getMenu/:id', function(req, res) {
		vendors.getMenu(req, res);
	});

	app.get('/dispensaries', function(req, res) {
		dispensaries.get(req, res);
	});

	app.get('/strains/next', function(req, res) {
		strains.getPage(req, res);
	});

	app.post('/cancelOrder', function(req, res) {
		reservations.cancel(req, res);
	});

	app.post('/addOrder', function(req, res) {
		console.log(req.body)
		reservations.add(req, res)
	});

	app.get('/getItem/:vendorID/:strainID', function(req, res) {
		reservations.getItem(req, res);
	});

	app.post('/available', function(req, res) {
		vendors.available(req, res);
	});

	app.post('/unavailable', function(req, res) {
		vendors.unavailable(req, res);
	});

}