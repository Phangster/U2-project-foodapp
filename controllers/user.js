const User = require('../models/user');
const Item = require('../models/item');

function loginInPage(req, res){
	res.render('./user/login_page');
};

function registration(req, res){
	res.render('./user/account_registration');
};

function homePost(req, res){

	function callback(result, id, name){
		if(result === true){
			res.cookie('login', id);
			User.find(id, (error, userResult)=>{
				if (error) {
	    			res.send('deb error: ' + error.message);
	    		}else{
	    			// let name = userResult.name;
					Item.viewItems((error, itemResult)=>{
						if (error) {
		    				res.send('deb error: ' + error.message);
						}else{
							let context = {
								user: req.cookies['name'], 
								item: itemResult
							};
							res.render('./user/home_page', context);
						};
					})
				}
			})
		}else{
			res.render('./user/account_registration');
		}
	}

	User.login(req.body.email, req.body.password, callback);
}

function create(req, res){

	function callback(error, result){
		if (error) {
		    res.send('deb error: ' + error.message);
		}else{
		    let user_id = result
		    res.cookie('logged_in', 'true');
		    res.cookie('user_id', user_id);
		    res.cookie('name', req.body.name);
		    res.render('./user/login_page');
		}
	}
	User.create(req.body.name, req.body.email, req.body.password, callback);
}

function homeGet(req, res){
	Item.viewItems((error, itemResult)=>{
		if (error) {
			res.send('deb error2: ' + error.message);
		}else{
			let context = { 
				item: itemResult
			};
			res.render('./user/home_page', context);
		};
	});
}
function addingToCart(req, res){

	function callback(error, insertResult, selectResult){
		if (error) {
		    res.send('deb error: ' + error.message);
		}else{
			var itemsInCart;
			if( req.cookies['itemsInCart'] == undefined ){
				itemsInCart = 1;

			}else{
				itemsInCart = parseInt(req.cookies['itemsInCart']) + 1;
			}
			res.cookie('itemsInCart', itemsInCart);
			res.render('./item/category' + req.params.cat, {counter: itemsInCart, user: req.cookies['name'], cat: req.params.cat, items: selectResult});
		}
	}
	Item.addToCart(req.cookies['user_id'], req.params.id, req.params.cat, callback)
}

function displayToCart(req, res){

 	function callback(error, result){
 	
 		if (error) {
		    res.send('deb error: ' + error.message);
		}else{
			var count = {};

			result.forEach((item)=>{
				let nameitem = item.nameitem;
				count[nameitem] = count[nameitem] + 1 || 1
			})
			console.log(count)
			var	items=[];
			for(var key in count){
				items.push({
					name: key,
					quantity: count[key]
				})
			}

			res.render('./item/list_of_items', {items: items, cat: req.params.cat, user: req.cookies['name']})
		}
	}
	Item.displayCart(req.cookies['user_id'], callback)
}

function categories(req, res){

	function callback(error, result){
		if (error) {
		    res.send('deb error: ' + error.message);
		}else{
			res.render('./item/category_page', {category: result, user: req.cookies['name']})
		}
	}
	//Display all information is postgresql in catergories
	Item.categoryPage(callback);
}

module.exports = {
	create,
	loginInPage,
	registration,
	homePost,
	homeGet,
	addingToCart,
	displayToCart,
	categories
}

