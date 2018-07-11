const db = require('../db');

function viewItems(callback){
	let queryString = 'SELECT * FROM items'
	db.query(queryString, (error, result)=>{
		callback(error, result.rows)
	});
}

function addToCart(users_id, items_id, categories_id, callback){
	let queryString = 'INSERT INTO users_items (users_id, items_id, categories_id) VALUES ($1, $2, $3)'
	let values = [users_id, items_id, categories_id];
	db.query(queryString, values, (error, insertResult)=>{
		if (error) {
			console.log(error.message);
		}else{
			let queryString = 'SELECT * FROM items WHERE categories_id = $1';
			let values = [categories_id]
			db.query(queryString, values, (error, selectResult)=>{
				if (error) {
					console.log(error.message);
				}else{
					callback(error, insertResult.rows, selectResult.rows)
				}
			})
		}
	})
}

function displayCart(user_id, callback){
	let queryString = `SELECT * FROM items
						JOIN users_items
						ON users_items.items_id = items.id
						JOIN users
						ON users_items.users_id = users.id
						JOIN categories
						ON users_items.categories_id = categories.id
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

function quantityOfItems(callback){
	let queryString = `	SELECT items.name, COUNT(DISTINCT
						users_items.id) AS quantity FROM items
						JOIN users_items
						ON users_items.items_id = items.id
						JOIN users
						ON users_items.users_id = users.id
						WHERE users.id = $1
						GROUP BY items.id `;
	let values = [id];
	db.query(queryString, values, (error, result)=>{
		if (error) {
			console.log(error.message);
		}else{
			callback(error, result.rows)
		}
	})
}

function categoryPage(callback){
	let queryString = 'SELECT * FROM categories';
	db.query(queryString, (error, result)=>{
		if (error) {
			console.log(error.message);
		}else {
			 callback(error,result.rows)
		}
	})
}


module.exports = {
	viewItems,
	displayCart,
	addToCart,
	quantityOfItems,
	categoryPage
}