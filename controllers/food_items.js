const Food = require('../models/food');


function getItemsOfCat(req, res){
	console.log(req.cookies['itemsInCart'])

	function callback(error, result){
		if (error) {
		    res.send('deb error: ' + error.message);
		}else{
			let idOfCat = req.params.cat
			let content = {
				items: result, 
				cat: idOfCat, 
				user: req.cookies['name'],
			}
			res.render('item/category' + idOfCat, content);
		}
	}
	Food.categoryOfItems(req.params.cat, callback);
}

module.exports = {
	getItemsOfCat,
}