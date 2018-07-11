--categories
-- INSERT INTO categories (categories, img) VALUES ('Soba', '/img/categories/soba.jpg')
-- INSERT INTO categories (categories, img) VALUES ('Soup', '/img/categories/soup.jpeg')

--mains
INSERT INTO items (nameitem, num, img, description, price, categories_id) VALUES ('Bulgogi Beef Soba', 001, '/img/main/Korean-Style-Bulgogi-Beef-Soba.jpg', 'Bulgogi Beef imported directly from korea daily, grilled to prefection with a glaze of honey and soya sauce. Hand-made soba by master chef Ashimo whom has been making noodles for 30 years. Every bite is a sensation of juiceness, warmth and texture.', 10.90, 1);

INSERT INTO items (nameitem, num, img, description, price, categories_id) VALUES ('Teriyaki Chicken Soba', 002, '/img/main/Teriyaki-Chicken-Soba.jpg', 'Tender and soft chicken, grilled to prefection with a glaze of honey and teriyaki sauce. Hand-made soba by master chef Ashimo whom has been making noodles for 30 years. Every bite is a sensation of juiceness, warmth and texture.', 8.90, 1);

INSERT INTO items (nameitem, num, img, description, price, categories_id) VALUES ('Barramundi Risotto', 003, '/img/main/Barramundi-Miso-Barley-Risotto.jpg', 'Steam Barramundi Fish with Risotto, a healthy mix of proteins and fibre. A low calorie meal that fills you up and tastes good', 5.90, 1);
--soups
INSERT INTO items (nameitem, num, img, description, price, categories_id) VALUES ('Roasted Pumpkin', 004, '/img/soup/Roasted-Pumpkin.jpg', 'Mummys home-made pumpkin soup good for rainy days to keep you warm', 6.90, 2);
INSERT INTO items (nameitem, num, img, description, price, categories_id) VALUES ('Clam Chowder', 005, '/img/soup/Boston-Clam-Chowder.jpg', 'Fresh clams imported from Australia. A dish for all seafood lovers.  A low calorie meal that fills you up and tastes good', 7.90, 2);
INSERT INTO items (nameitem, num, img, description, price, categories_id) VALUES ('Beef Goulash', 006, '/img/soup/Beef-Goulash.jpg', 'Slow-cooked chuncks of beef with chinese five spieces creates the tender and tasty flavour that burst in your mouth', 8.90, 2);
--drinks