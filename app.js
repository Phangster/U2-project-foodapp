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
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);


const setupRoutesForTheExpressServer = require('./routes');
setupRoutesForTheExpressServer(app);

const ajaxSetUp = require('./ajax_index');
ajaxSetUp(app, db);

const PORT =process.env.PORT || 3000
const server = app.listen(PORT, ()=>console.log('~~~ Tuning in to the waves '+PORT+' ~~~'))

server.on('close', () => {
  console.log('Closed express server');
});