const db = require('../database');


exports.getAllUsers = async (req, res) => {
    await db.query(`SELECT * FROM users;`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            if (req.headers['my-auth'] !== 'admin') {
                res.status(403).json(
                    {status: 'rejected'}
                )
            } else {
                res.status(200).json({
                    status: 'success',
                    data: {
                        result
                    }
                })

            }
        }
    })
};

exports.getUser = async (req, res) => {
    const email = req.query.email;
    const password = req.query.password;

    await db.query(`SELECT * FROM users WHERE email='${email}';`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            if (result[0].password === password) {
                res.status(200).json({
                    status: 'success',
                    data: {
                        result
                    }
                })
            } else {
                res.status(203).json({
                    status: 'access forbidden',
                    data: {
                        access: 'forbidden'
                    }
                })
            }

        }
    })
};
exports.postLoginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    await db.query(`SELECT * FROM users WHERE email='${email}' AND password='${password}';`, (err, result) => {

        if (err) {
            console.log(err)
        } else {
            if (result.length) {
                res.status(200).json({
                    status: 'success',
                    data: {
                        result
                    }
                })
            } else {
                res.status(203).json({
                    status: 'access forbidden',
                    data: {
                        access: 'forbidden'
                    }
                })
            }
        }
    })
};
exports.postWishList = async (req, res) => {
    const user_id = req.body.user_id;
    const product_id = req.body.product_id;

    await db.query(`insert into wishlist values (${user_id}, ${product_id});`, (err, result) => {

        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    result
                }
            })

        }
    })
};
exports.deleteWishList = async (req, res) => {
    const user_id = req.body.user_id;
    const product_id = req.body.product_id;

    await db.query(`delete from wishlist where user_id=${user_id} and product_id=${product_id};`, (err, result) => {

        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    result
                }
            })

        }
    })
};
exports.getWishList = async (req, res) => {
    const user_id = req.params.id;

    await db.query(`SELECT * FROM wishlist WHERE user_id=${user_id};`, (err, result) => {

        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    result
                }
            })

        }
    })
};
// "qweQW12!8T"