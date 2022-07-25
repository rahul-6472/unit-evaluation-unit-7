const User = require ("../Database/user")

const jwt = require("jsonwebtoken");
const SECRET = "etert345try67567try546@#4";


async function register(req, res) {
    const { user } = req.body;
  
    let existingUser = await User.findOne({
      email: user.email,
    });
  
    if (existingUser) {
      return res.status(400).send({
        error: "user already exists",
      });
    }
  
    let userdoc = await User.create(user);
  
    userdoc = userdoc.toJSON()
  
    delete userdoc.password
  
    return res.send({
      data: userdoc,
    });
  }


  
  
  async function login(req, res) {
    const { email, password } = req.body;
  
    let user = await User.findOne({
      email: email
    },{
        password:1,
        _id:1,
        email:1,
        name:1
    });
  
    if (user) {
      if (user.password === password) {
        //generate a secret token
        let encrypted_token = jwt.sign(
          {
            id: user._id,
            email: user.email,
            name: user.name,
          },
          SECRET
        );
  
        return res.send({
          data: {
            token: encrypted_token,
          },
        });
      }
      else{
          return res.send({
              error:"password doenot match"
          })
      }
     
    } else {
      return res.status(404).send({
        error: "user not found",
      });
    }
  }

  module.exports = {
    register,
    login
  }