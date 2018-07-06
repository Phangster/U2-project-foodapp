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
	    			let name = userResult.name;
					Item.viewItems((error, itemResult)=>{
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

	function callback(error, result){
		if (error) {
		    res.send('deb error: ' + error.message);
		}else{
			res.redirect('/home')
		}
	}
	Item.addToCart(req.cookies['user_id'], req.body.id, callback)
}

function viewCart(req, res){

	function callback(error, result){
		if (error) {
		    res.send('deb error: ' + error.message);
		}else{
			res.render('./item/mylistofitem', {item : result});
		}
	}
	Item.displayCart(req.cookies['id'], callback);
}

 function displayToCart(req, res){

 	function callback(error, result){
 		console.log(result)
 		if (error) {
		    res.send('deb error: ' + error.message);
		}else{
			res.render('./item/list_of_items', {item: result})
		}
	}
	Item.displayCart(req.cookies['user_id'], callback)
}

module.exports = {
	create,
	loginInPage,
	registration,
	homePost,
	homeGet,
	viewCart,
	addingToCart,
	displayToCart
}

