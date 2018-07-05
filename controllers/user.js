const User = require('../models/user');
const Item = require('../models/item');

function create(req, res){

	function callback(error, result){
		if (error) {
		    res.send('deb error: ' + error.message);
		}else{
		    let user_id = result
		    res.cookie('logged_in', 'true');
		    res.cookie('user_id', user_id);
		    res.render('./user/login_page');
		}
	}
	User.create(req.body.name, req.body.email, req.body.password, callback);
	}

function homePage(req, res){
	res.render('./user/login_page');
};

function registration(req, res){
	res.render('./user/account_registration');
};

function home(req, res){

	function callback(result, id, name){
		if(result === true){
			res.cookie('login', id);
			Item.viewCart(id, (error, itemResult)=>{
				if (error) {
	    			res.send('deb error: ' + error.message);
				}else{
					let context = {
						user: name, 
						item: itemResult
					};
					res.render('./user/home_page', context);
				};
			})
		}else{
			res.render('./user/account_registration');
		}
	}

	User.login(req.body.email, req.body.password, callback);
}
function viewCart(req, res){

	function callback(error, result){
		if (error) {
		    res.send('deb error: ' + error.message);
		}else{
			res.render('./item/mylistofitem', {item : result});
		}
	}
	Item.viewCart(req.cookies['id'], callback);
}

function addingToCart(req, res){

	function callback(error, result){
		if (error) {
		    res.send('deb error: ' + error.message);
		}else{
			res.redirect('/user')
		}
	}
	Item.addToCart(req.cookies['user_id'], req.body.id, callback)
}
 function displayToCart(req, res){

 	function callback(error, result){
 		if (error) {
		    res.send('deb error: ' + error.message);
		}else{
			console.log(result.rows)
			res.render('./item/mylistofitem', {addedItems: result.rows})
		}
	}
	Item.displayCart(req.cookies['users_id'], callback)
}

module.exports = {
	create,
	homePage,
	registration,
	home,
	viewCart,
	addingToCart,
	displayToCart
}

