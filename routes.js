const user = require('./controllers/user');
const food = require('./controllers/food_items');

function setupRoutes(app){
	
	app.get('/user', user.loginInPage);
	app.get('/user/new', user.registration);
	app.post('/user/new', user.create);
	app.post('/home', user.homePost);
	app.get('/category/:cat',food.getItemsOfCat);
	app.post('/category/:cat/additem/:id', user.addingToCart);
	app.get('/user/cart', user.displayToCart);
	app.get('/home', user.homeGet);
	
	//getting the categories items
	app.post('/category',user.categories);



}
module.exports = setupRoutes;