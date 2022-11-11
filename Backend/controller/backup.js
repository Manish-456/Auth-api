// const express = require("express");
// const router = express.Router();
// const { body, validationResult } = require("express-validator");
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const JWT_SECRET = "shhhhhh";
// const fetchuser = require('../middleware/fetchuser')
// router.post(
//   "/createuser",
//   [
//     body("name").isLength({ min: 3 }),
//     body("email").isEmail(),
//     body("password").isLength({ min: 5 }),
//   ],
//   async (req, res) => {
//     let success = false;
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       res.status(400).json({ success, error: errors.array() });
//     }  
//         const { email, password, confirmPassword } = req.body;
//     try {


//       let user = await User.findOne({ email });
//       if (user) {
//         console.log("user already exists");
//         res
//           .status(400)
//           .json({ success, msg: "User with this email already exists" });
//       }
      
//       if (password !== confirmPassword) {
//         res.status(400).json({ success, msg: "password doesn't match" });
//       } else {
//         const salt = await bcrypt.genSalt(10);
//         const secPass = await bcrypt.hash(password, salt);

//         user = await User.create({
//           name: req.body.name,
//           email: req.body.email,
//           password: secPass,
//         });
//         }
//         const data = {
//           user: {
//             id: user.id,
//           },
//         };
//         success = true;
//         let authToken = jwt.sign(data, JWT_SECRET);
//         res.status(200).json({ success, authToken });
    
//     } catch (err) {
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );

// router.post(
//   "/login",
//   [body("email").exists(), body("password").isLength({ min: 5 })],
//   async (req, res) => {
//     let success = false
//     const errors = validationResult(req)
//     if(!errors.isEmpty()){
//       res.status(400).json({success, error:errors.array()})
//     }
//      const {email, password} = req.body
//     try{
   
//     let user = await User.findOne({email})
//     if(!user){
//       res.status(401).json({success, msg:"Invalid email"})
//     }
//     let comparePassword = await bcrypt.compare(password, user.password)
//     if(!comparePassword){
//       res.status(400).send("Password incorrect")
//     }
//     const data = {
//       user: {
//         id : user.id
//       }
//     }
//     const authToken = jwt.sign(data, JWT_SECRET)
//     success = true
//     res.status(200).json({success ,msg: "successfully logged in" , authToken})
//   }catch(err){
//   res.status(500).send("Internal server error")
// }
// })

// router.post('/getuser', fetchuser ,async(req,res) => {
//  try{
//   const userID = req.user.id
//  let user = await User.findById(userID).select('-password');
//   res.send(user)
  
//  }catch(err){
//   res.status(500).send("Internal Server Error")
//  }
// })

// module.exports = router;
