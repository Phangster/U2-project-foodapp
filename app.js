const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./db');
const reactEngine = require('express-react-views').createEngine();
const pg = require('pg');
const methodOverride = require('method-override');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('_method'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);


const setupRoutesForTheExpressServer = require('./routes');
setupRoutesForTheExpressServer(app);


const server = app.listen(3000, ()=>console.log('~~~ Tuning in to the waves of 3000 ~~~'))

server.on('close', () => {
  console.log('Closed express server');
});