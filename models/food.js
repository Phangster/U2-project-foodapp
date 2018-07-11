const db = require('../db.js');

function categoryOfItems(id, callback) {
	let queryString = 'SELECT * FROM items WHERE categories_id = $1';
	let values = [id];
	db.query(queryString, values, (error, result)=>{
		if (error) {
			console.log(error.message);
		}else{
			callback(error, result.rows)
		}
	})
}

module.exports = {
	categoryOfItems,

}