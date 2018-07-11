-- create users database
-- CREATE TABLE IF NOT EXISTS users (
-- 	id SERIAL PRIMARY KEY,
-- 	name varchar(255),
-- 	email varchar(255),
-- 	password varchar(255)
-- );

--create item list
-- CREATE TABLE IF NOT EXISTS items (
-- 	id SERIAL PRIMARY KEY,
-- 	nameitem varchar(255),
-- 	num varchar(255),
-- 	img varchar(255),
-- 	description varchar(255),
-- 	price varchar(255),
-- 	categories_id INTEGER
-- );

-- create users_items
CREATE TABLE IF NOT EXISTS users_items (
id SERIAL PRIMARY KEY,
users_id INTEGER,
items_id INTEGER,
categories_id INTEGER
);

--create categories
-- CREATE TABLE IF NOT EXISTS categories (
-- id SERIAL PRIMARY KEY,
-- categories varchar(255),
-- img varchar(255)
-- );

