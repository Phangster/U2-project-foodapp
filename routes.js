const user = require('./controllers/user');

function setupRoutes(app){
	
	app.get('/user', user.loginInPage);
	app.get('/user/new', user.registration);
	app.post('/user/new', user.create);
	app.post('/home', user.homePost);
	app.post('/user/additem/:id', user.addingToCart);
	app.get('/user/cart', user.displayToCart);
	app.get('/home', user.homeGet)
}
module.exports = setupRoutes;