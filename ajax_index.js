function ajaxSetUp(app, db){

    app.get('/user/additem/:id', (req, res) => {
        let queryText = 'SELECT * FROM items WHERE id= $1';
        let values = [req.params.id];
        db.query(queryText, values, (err, result) => {
            if( err ){
                res.status(500).send("error: "+err.message);
            }else{
                res.send(result.rows)
            }
        });
    })
}

module.exports = ajaxSetUp;