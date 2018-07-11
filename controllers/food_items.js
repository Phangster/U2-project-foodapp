const Food = require('../models/food');


function getItemsOfCat(req, res){

	function callback(error, result){
		if (error) {
		    res.send('deb error: ' + error.message);
		}else{
			let idOfCat = req.params.cat
			//need to get the category id
			res.render('item/category' + idOfCat, {items: result, cat: idOfCat, user: req.cookies['name'] });
		}
	}
	Food.categoryOfItems(req.params.cat, callback);
}

module.exports = {
	getItemsOfCat,
}