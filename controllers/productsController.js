const db = require('../database');

exports.getProductByTitle = async (req, res) => {
    let queryArr = req.query.title.split('_');
    queryArr = '%' + queryArr.join('%') + '%';
    await db.query(`SELECT * FROM products WHERE title LIKE '${queryArr}';`, (err, result) => {
        if (err) {
            res.status(500).json({
                status: 'error',
                data: {
                    err
                }})
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    result
                }})

        }
    })
};

exports.getAllProducts = async (req, res) => {
    await db.query('SELECT * FROM products;', (err, result) => {
        if (err) {
            res.status(500).json({
                status: 'error',
                data: {
                    err
                }})
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    result
                }})
        }
    })
};
exports.getProductImage = async (req, res) => {
    const id = req.query.image;
    await db.query(`SELECT img FROM images WHERE product_id=${id};`, (err, result) => {
        if (err) {
            res.status(500).json({
                status: 'error',
                data: {
                    err
                }})
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    result
                }})
        }
    })
};
exports.getProductsByCategory = async (req, res) => {
    await db.query(`SELECT * FROM products JOIN categories ON products.category_id=categories.id WHERE categories.title='${req.query.category}';`, (err, result) => {
        if (err) {
            res.status(500).json({
                status: 'error',
                data: {
                    err
                }});
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    result
                }})
        }
    })};
exports.getGameProductSpecs = async (req, res) => {

    await db.query(`SELECT * FROM games WHERE product_id=${req.query.id}`, (err, result) => {
        if (err) {
            res.status(500).json({
                status: 'error',
                data: {
                    err
                }})
        } else {
            if(result.length){
                res.status(200).json({
                    status: 'success',
                    data: {
                        result
                    }})

            }else{
                res.json({result: 'No data'})
            }
        }
    })

};
exports.getConsoleProductSpecs = async (req, res) => {

    await db.query(`SELECT * FROM consoles WHERE product_id=${req.query.id}`, (err, result) => {
        if (err) {
            res.status(500).json({
                status: 'error',
                data: {
                    err
                }})
        } else {
            if(result.length){
                res.status(200).json({
                    status: 'success',
                    data: {
                        result
                    }})

            }else{
                res.json({result: 'No data'})
            }
        }
    })

};
exports.getProductById = async (req, res) => {
    const pId = req.params.id;
    await db.query(`SELECT * FROM store.products WHERE id=${pId};`, (err, result) => {
        if (err) {
            res.status(500).json({
                status: 'error',
                data: {
                    err
                }})
        } else {
            if(result.length){
                res.status(200).json({
                    status: 'success',
                    data: {
                        result
                    }})

            }else{
                res.json({result: 'No data'})
            }
        }
    })
};