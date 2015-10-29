// dont know whats going on with this controller

var mysql = require('mysql');
var http = require('https');

var connection = mysql.createConnection({
  	host : 'us-cdbr-iron-east-03.cleardb.net',
  	user : 'bb08a4822ce4b1',
  	password : '10f0179b',
  	database: 'heroku_59370a6610ff7e4'
});

function generateUrl(address) {
	var apiKey = 'AIzaSyC0qewgbUrXxtjibRi_GijwTgtfOXtDxeg';
	var url = 'https://maps.googleapis.com/maps/api/geocode/json?';
	return url + 'key=' + apiKey + '&' + 'address=' + address;
}

function getGeocode(address, resid, success, error) {
	var link = generateUrl(address)
	//console.log("link " + link);
	var data = '';
	http.get(link, function(res) {
	    //console.log("Response: " + res.statusCode);
	    res.on('data', function(d) {
	        data += d;
	    });
	    res.on('end', function(d) {
	        //data += d;
	        //console.log('data ' + data);
	        success(data,resid);
	    });

	}).on('error', function(e) {
	    //console.log("Error " + e.message);
	    error(e.message);
	});
}


//connection.connect();

module.exports = (function() {
	return {
		get: function(req, res) {
			console.log('here');
			const lngDistancePerDegreeAtEquator = 69.172
			const latDistancePerDegreeAtEquator = 69.08558338297732
			var fromLat = 47.609812;
			var fromLng = -122.196568;
			//var fromLat = req.query.lat;
			//var fromLng = req.query.lng;
			if (typeof req.query.radius != 'undefined'){
				var maxRadius = req.query.radius;
			} else {
				var maxRadius = 5000;
			}
			
console.log("**********************BEGIN***********************************************")
console.log("GET LAT: ", req.query.lat);
console.log("GET LAT: ", req.query.lng);
console.log("GET RADIUS: ", req.query.radius);
console.log("**********************END***********************************************")
var sqlQuery = 'SELECT *, ' +
				'( 3959 * acos( cos( ' +
					'radians(' + fromLat + ' ) ) * ' +
					'cos( radians( vendors.lat ) ) * ' +
					'cos( radians(vendors.lng) - ' +
					'radians(' + fromLng + ')) + ' +
					'sin(radians(' + fromLat + ')) * ' +
					'sin( radians(vendors.lat)))) AS distance ' +
				'FROM vendors ' +
				'HAVING distance < ' + maxRadius + ' ' +
				'ORDER BY distance';

			// var lngDistancePerDegree 
			// var lat = req.lat;
			// var lng = req.lng;

			// var lngDistancePerDegree = math.cos(lat) * lngDistancePerDegreeAtEquator



			// var maxLat = 
			// var minLat = 
			// var maxLng = 
			// var maxLng = 

			connection.query(sqlQuery, function(error, results) {
				// console.log(results);
				res.json(results);
			});
			connection.end();
		},









		create: function(req, res)	{
			connection.query('SELECT id AS ID, TRIM(`Street Address`) AS Address,TRIM(City) AS City, TRIM(State) AS State, SUBSTRING(TRIM(ZipCode),1,5) AS ZipCode FROM greencommerce.officialVendors WHERE lat IS NULL;',function(error, results) {
				// console.log("dispensaries GET",results);


vendors.logo,vendors.name,vendors.phone,vendors.hours,vendors.coverPhoto
// {
// id: 1605,
// Tradename: 'WORLD OF WEED                                ',
// 'License #': '414449',
// UBI: '6034023650010001',
// 'Street Address': '3202 E PORTLAND AVE           ',
// 'Suite/Rm': '                         ',
// City: 'TACOMA                  ',
// State: 'WA',
// County: 'PIERCE',
// ZipCode: '984044929',
// PrivDesc: 'MARIJUANA RETAILER                 ',
// PrivilegeStatus: 'ACTIVE (ISSUED)',
// DateCreated: '20150609',
// DayPhone: '2532729333' 
// }
				
// Each longitude = 36.594789
// each mile 0.027326
// five miles in degrees = 0.136631
// 0 = 69.172 miles
// 90 = 0 miles 
// ((69.172/90) * latitude)  longitude
// 47.609749, -122.196195
// 46.6341526333821
// Length of 1 degree of Longitude = cosine (latitude in decimal degrees) * length of degree (miles) at equator
// 0.02144351175117
// 0.10721755875585 





				for (var id in results){
					// var addresss = results[id].Address + ' ' + results[id].City + ',' + results[id].State + ' ' + results[id].ZipCode;
					var address = results[id].Address + ' ' + results[id].City + ',' + results[id].State + ' ' + results[id].ZipCode;
					var resid = results[id].ID
					// Using callback 
					console.log(resid)
					getGeocode(address,resid, function(data,resid) {
				console.log("**********************START****************************************************************")
						// console.log("latitude " + data.results[0].geometry.location.lat);
						// console.log("longitude " + data.results[0].geometry.location.lng);
						asJSON = JSON.parse(data);
						//console.log(asJSON);
						if (typeof(asJSON.results[0]) != 'undefined' && typeof(asJSON.results[0].geometry) != 'undefined'){
							var lat = asJSON.results[0].geometry.location.lat;
							var lng = asJSON.results[0].geometry.location.lng;
					console.log(resid)
							
						connection.query('UPDATE greencommerce.officialVendors SET lat=?, lng=? WHERE id =?', [lat,lng,resid]);

					}
				 console.log("**************************DONE**********************************************************")
					}, function(err) {
						//console.log("error " + err);
					});

					// console.log(address);


				}
			});
			connection.end();

		},
		add: function(req, res) {

			// Automatically add columns and tables
			// ALTER TABLE `greencommerce`.`vendors` 
			// ADD COLUMN `slug` VARCHAR(255) NULL AFTER `updated_at`;
			var post = {
			  id: req.id,
			  slug:req.slug,
			  name:req.name,
			  atm:req.atm,
			  creditCards:req.creditCards,
			  veteranDiscount:req.veteranDiscount,
			  ada:req.ada,
			  delivery:req.delivery,
			  retail:req.retail,
			  medical:req.medical,
			  storefront:req.storefront,
			  logo:req.logo,
			  address1:req.address1,
			  address2:req.address2,
			  city:req.city,
			  state:req.state,
			  zip:req.zip,
			  phone:req.phone,
			  hours:req.hours,
			  website:req.website,
			  blurb:req.blurb,
			  rating:req.rating,
			  meds:req.meds,
			  service:req.service,
			  atmosphere:req.atmosphere,
			  followerCount:req.followerCount,
			  reviewCount:req.reviewCount,
			  latitude:req.latitude,
			  longitude:req.longitude,
			  permalink:req.permalink,
			  menu:req.menu,
			  canadaLP:req.canadaLP,
			  coverPhoto:req.coverPhoto,
			  tagLine:req.tagLine,
			  tagLineBlurb:req.tagLineBlurb,
			  facebookUrl:req.facebookUrl,
			  twitterUrl:req.twitterUrl,
			  googlePlusUrl:req.googlePlusUrl,
			  pinterestUrl:req.pinterestUrl,
			  tumblrUrl:req.tumblrUrl,
			  instagramUrl:req.instagramUrl,
			  starImage:req.starImage
			};
			//console.log('dispensaries add post',post);
			try {
			connection.query("INSERT INTO vendors SET ?", post, function(error, reservations, fields) {
				// if (error) {
				// 	console.log(error);
				// } else {
				// 	res.json({});
				// }
			}); }
			catch(err) {console.log(error);}

		}
	}
})();