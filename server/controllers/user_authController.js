const pool = require("../configuration/database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userRegister = (req, res) => {
  const { firstname, lastname, email, password, confirmpassword } = req.body;
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
  if (password !== confirmpassword) {
    errors.push({ message: "password do not match" });
  }
  if (errors.length > 0) {
    return res.status(201).json({ errors });
  }

  try {
    pool.query(
      `SELECT * FROM em_registration_details WHERE email = '${email}' `,
      (error, results, fields) => {
        if (results.length > 0) {
          errors.push({ message: "user already exists" });
          return res.status(201).json({ errors });
        } else {
          bcrypt
            .hash(password, 12)
            .then((hashedpassword) => {
              pool.query(
                `INSERT INTO em_registration_details (first_name,last_name,email,plain_password,hashed_password) VALUES('${firstname}','${lastname}','${email}','${password}', '${hashedpassword}')`,
                (error, results, fields) => {
                  if (error) throw error;
                  res.status(200).json({
                    error: false,
                    message: "user has been registered successfully",
                  });
                }
              );
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    );

  } catch (error) {
    console.log(error);
  }

};

const userLogin = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(201).json({ error: "please fill all required fields" });
  }

  try {
    pool.query(`SELECT * FROM em_registration_details WHERE email = '${email}'`, (error, results, fields) => {
      if (error) throw error;
      if (results.length === 0) {
        res.status(404).json({ error: 'Email or password may be invalid' })
      } else {
        bcrypt.compare(password, results[0].hashed_password)
          .then((ismatched) => {
            if (ismatched) {
              const token = jwt.sign({ id: results[0].employee_id }, "jwtsecret");
              const { employee_id, first_name, last_name, email } = results[0];
              res.header('auth-token', token).json({ token, user: { employee_id, first_name, last_name, email } })
            } else {
              return res.status(201).json({ error: "Email or Password may be inavlid,Please try again" })
            }
          }).catch((err) => {
            console.log(err)
          })
      }
    })



  } catch (error) {
    console.log(error);
  }


}





module.exports = {
  userRegister,
  userLogin
};
