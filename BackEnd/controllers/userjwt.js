const jwt = require("jsonwebtoken")

const userJwt = (user) => {
  const secretKey = process.env.JWT_SECRET_KEY

  const token = jwt.sign(
    {
        _id: user._id,
        name: user.name,
        email: user.email
    },
    secretKey 
  );
  return token
};



moduke.exports = userJwt