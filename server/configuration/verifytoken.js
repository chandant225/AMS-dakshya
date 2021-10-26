const jwt = require('jsonwebtoken');
const pool = require('./database');

function authenticate(req, res, next) {
    const token = req.header('auth-token');
    if(!token){
        return res.status(201).json({message:"please login to visit this page"});
    }
    const payload  = jwt.verify(token, "jwtsecret");
    const {id} = payload;
    pool.query(`SELECT * FROM em_registration_details WHERE employee_id = '${id}'`, (error, results, fields) => {
        if(error) throw error;
        req.user = results[0];
        next();
    })
}

module.exports.authenticate = authenticate;
