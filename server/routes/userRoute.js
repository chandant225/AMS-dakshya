const express = require("express");
const router = express.Router();
const { user_register,checkIn,checkOut,profile_details,edit_userDetails,uploadImage } = require("../controllers/userController");
const { authenticate } = require("../configuration/verifytoken");
const {upload} = require('../helper/product_fileHelper')
router.get('/profile_details',authenticate,profile_details);
router.post("/add_details",authenticate, user_register);
router.post('/check_in', authenticate, checkIn);
router.post('/check_out',authenticate, checkOut);
router.put('/edit_profile',authenticate,edit_userDetails);
router.post('/upload_image',authenticate, upload.single('image'), uploadImage)


module.exports = router;
