const pool = require('../configuration/database');

const getUserAttendance = (req, res) => {
    const {userId} = req.params;
    try {
        pool.query(`SELECT * FROM attendance_records WHERE employee_id = ' ${userId}'`,(error, results,fields) => {
            if(error) throw error;
            res.status(200).json({data:results})
        })
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    getUserAttendance
}