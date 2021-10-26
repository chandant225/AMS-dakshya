const pool = require("../configuration/database");
const moment = require("moment");

const user_register = (req, res) => {
  const user = req.user;
  const {
    firstname,
    lastname,
    email,
    phonenumber,
    bloodgroup,
    address,
    city,
    province,
    birthday,
    gender,
    ecname,
    ecnumber,
    joiningdate,
  } = req.body;
  const errors = [];
  if (!firstname) {
    errors.push({ message: "please enter first name" });
  }
  if (!lastname) {
    errors.push({ message: "please enter last name" });
  }
  if (!email) {
    errors.push({ message: "please enter email" });
  }
  if (!phonenumber) {
    errors.push({ message: "please enter phone number" });
  }
  if (!bloodgroup) {
    errors.push({ message: "please enter blood group" });
  }
  if (!address) {
    errors.push({ message: "please enter address" });
  }
  if (!city) {
    errors.push({ message: "please enter city" });
  }
  if (!province) {
    errors.push({ message: "please enter province" });
  }
  if (!birthday) {
    errors.push({ message: "please enter birthday" });
  }
  if (!gender) {
    errors.push({ message: "please enter gender" });
  }
  if (!ecname) {
    errors.push({ message: "please enter a emergency contact name" });
  }
  if (!ecnumber) {
    errors.push({ message: "please enter a emergency contact number" });
  }
  if (!joiningdate) {
    errors.push({ message: "please enter joining date" });
  }
  if (errors.length > 0) {
    res.status(200).json({ errors });
  } else {
    pool.query(
      `INSERT INTO em_personal_details (employee_id,firstname,lastname,employee_email,phone_number,dob,blood_group,gender,address, city, province, emergency_contact_name, emergency_contact_number, joining_date) VALUES('${user.employee_id}','${firstname}','${lastname}','${email}','${phonenumber}','${birthday}','${bloodgroup}','${gender}','${address}','${city}','${province}','${ecname}','${ecnumber}','${joiningdate}')`,
      (error, results, fields) => {
        if (error) throw error;
        return res.status(200).send({ message: "user has been added" });
      }
    );
  }
};


const checkIn = (req, res) => {
  const user = req.user;
  const date = new Date();
  const date_to_be_saved = moment(date).format('ll');
  const checkIn_time = moment(date).format('LT');
  const name = user.first_name + " " + user.last_name;
  try {
    pool.query(`SELECT * FROM attendance_records WHERE date = '${date_to_be_saved}' AND employee_id = '${user.employee_id}'`, (error, results, fields) => {
      if (error) throw error;
      if (results.length > 0) {
        res.status(201).json({ error: "you have already checked in for today" })
      } else {
        pool.query(`INSERT INTO attendance_records(employee_id,date,name,checkIn_time,checkOut_time,reason) VALUES ('${user.employee_id}','${date_to_be_saved}','${name}', '${checkIn_time}','${null}','${null}')`, (error, results, fields) => {
          if (error) throw error;
          res.status(200).json({ error: false, data: results, message: "you have successfully checked in for today" })
        })
      }
    })
  } catch (error) {
    console.log(error);
  }

}

const checkOut = (req, res) => {
  const user = req.user;
  const { reason } = req.body;
  const date = new Date();
  const date_to_be_filtered = moment(date).format('ll')
  const checkOut_time = moment(date).format('LT')
  pool.query(`SELECT * FROM attendance_records WHERE date = '${date_to_be_filtered}' AND employee_id = '${user.employee_id}'`, (error, results, fields) => {
    if (error) throw error;
    if (results[0].checkOut_time === 'null') {
      pool.query(`UPDATE attendance_records SET checkOut_time = '${checkOut_time}', reason = '${reason}' WHERE date = '${date_to_be_filtered}' AND employee_id = '${user.employee_id}'`, (error, results, fields) => {
        if (error) throw error;
        res.status(200).json({ message: "you have successfully checked out for today" })
      })

    } else {
      res.status(201).json({ error: "you have already checked out for today" })
    }
  })

}

const profile_details = (req, res) => {
  const user = req.user;
  try {
    pool.query(`SELECT * FROM em_personal_details WHERE employee_id = '${user.employee_id}'`, (error, results, fields) => {
      if (error) throw error;
      res.status(200).json({ results })
    })
  } catch (err) {
    console.log(err);
  }
}

const edit_userDetails = (req, res) => {
  const user = req.user;
  const {
    firstname,
    lastname,
    email,
    phonenumber,
    bloodgroup,
    address,
    city,
    province,
    birthday,
    gender,
    ecname,
    ecnumber,
    joiningdate,
  } = req.body;
  try {
    pool.query(`UPDATE em_personal_details SET firstname = '${firstname}',lastname = '${lastname}',employee_email = '${email}',phone_number = '${phonenumber}',blood_group = '${bloodgroup}',address = '${address}',city = '${city}',province = '${province}',dob = '${birthday}',gender = '${gender}',emergency_contact_name = '${ecname}',emergency_contact_number = '${ecnumber}',joining_date = '${joiningdate}' WHERE employee_id = '${user.employee_id}'`, (error, results, fields) => {
      if (error) throw error;
      res.status(200).json({ message: "user details have been updated successfully" })
    })
  } catch (err) {
    console.log(err);
  }
}

const uploadImage = (req, res) => {
  const user = req.user;
  const filename = req.file.filename;
  try {
    pool.query(`UPDATE em_personal_details SET profile_picture = '${filename}' WHERE employee_id = '${user.employee_id}'`, (error, results, fields) => {
      if (error) throw error;
      res.status(200).json({ message: "profile picture updated successfully" })
    })
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  user_register,
  checkIn,
  checkOut,
  profile_details,
  edit_userDetails,
  uploadImage
};
