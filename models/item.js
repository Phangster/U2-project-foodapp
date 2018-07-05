const db = require('../db');

function viewCart(id, callback){
	let queryString = 'SELECT * FROM items INNER JOIN users_items ON users_items.items_id = items.id INNER JOIN users ON users_items.users_id = users.id'
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

function displayCart(users_id, callback){
	let queryString = 'SELECT * FROM items INNER JOIN users_items ON users_items.items_id = items.id INNER JOIN users ON users_items.users_id = users.id WHERE users.id= $1';
	let values = [users_id];
	db.query(queryString, values, (error, result)=>{
		if (error) {
			console.log(error.message);
		}else{
			callback(error, result.rows)
	}
	})
}


module.exports = {
	viewCart,
	displayCart,
	addToCart,
}