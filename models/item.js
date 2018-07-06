const db = require('../db');

function viewItems(callback){
	let queryString = 'SELECT * FROM items'
	db.query(queryString, (error, result)=>{
		callback(error, result.rows)
	});
}

function addToCart(users_id, items_id, callback){
	let queryString = 'INSERT INTO users_items (users_id, items_id) VALUES ($1, $2)'
	let values = [users_id, items_id]
	db.query(queryString, values, (error, result)=>{
		if (error) {
			console.log(error.message);
		}else{
			callback(error, result.rows)
		}
	})
}

function displayCart(user_id, callback){
	let queryString = `SELECT * FROM items
						JOIN users_items
						ON users_items.items_id = items.id
						JOIN users
						ON users_items.users_id = users.id
						WHERE users.id= $1`;
	let values = [user_id];
	db.query(queryString, values, (error, result)=>{
		if (error) {
			console.log(error.message);
		}else{
			callback(error, result.rows)
	}
	})
}


module.exports = {
	viewItems,
	displayCart,
	addToCart,
}