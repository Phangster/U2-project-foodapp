const pg = require('pg');

const config = {
  user: 'drillaxholic',
  host: '127.0.0.1',
  database: 'foodapp',
  port: 5432,
};

const db = new pg.Pool(config);

module.exports = db;