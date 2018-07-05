const user = require('./controllers/user');

function setupRoutes(app){
	
	app.get('/user', user.homePage);
	app.get('/user/new', user.registration);
	app.get('/user/cart', user.displayToCart);

	app.post('/user/home', user.home);
	app.post('/user/new', user.create);
	app.post('/user/additem', user.addingToCart);
}
module.exports = setupRoutes;