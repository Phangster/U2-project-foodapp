const db = require('../db.js');
const sha256 = require('js-sha256');

function create(name, email, password, callback){
	let queryString = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
	let values = [name, email, sha256(password)];
	db.query(queryString, values, (error, result)=>{
		callback(error, result.rows[0]['id'])
	});
}

function login(email, password, callback){
	let queryString = 'SELECT * FROM users WHERE email = $1';
	let value = [email];
	db.query(queryString, value, (error, result)=>{
		if (error) {
			console.log(error);
		}
		if(sha256(password)==result.rows[0].password){
			let name = result.rows[0].name;
			callback(true, result.rows[0].id, name.toUpperCase());
		}else{
			callback(false, null, null);
	}
	})
}

function find(id, callback) {
  db.query('SELECT * FROM users WHERE id = $1', [id], (error, result) => {
    callback(result.rows[0]);
  })
}
module.exports = {
	create,
	login,
	find
}
