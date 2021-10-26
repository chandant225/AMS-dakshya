const express = require('express');
const router = express.Router();
const {getUserAttendance} = require('../controllers/attendanceController')
const {authenticate} = require('../configuration/verifytoken')

router.get('/:userId',authenticate, getUserAttendance)


module.exports = router;