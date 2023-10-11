const userController = require("../controllers/users");
const axios = require("axios");

exports.Login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password; // Corrected to 'password'

  try {
    const response = await axios.get("http://localhost:3000/user", {
      params: {
        email: email,
        password: password,
      },
    });

    const users = response.data.users;

    if (users.length >= 1) {
      for (var i = 0; i < users.length; i++) {
        const userEmail = users[i].email;
        const userPassword = users[i].password;
        if (userEmail == email) {
          if (userPassword == password) {
            return res.status(200).json({ message: users[i] });
          }
        }
      }
    }

    return res.status(400).json({ message: "User not found" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
