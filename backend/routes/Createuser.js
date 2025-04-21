const express = require('express')
const User = require("../models/User")
const {body , validationResult} = require('express-validator')

const router = express.Router();

router.post('/createuser' , [
    body('name').isLength({min:5}),
    body('email').isEmail(),
    body('password').isLength({min:5})
], async(req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
try {
    User.create({
        name:req.body.name,
        email:req.body.email,
        password: req.body.password,
        location: req.body.location,
    })
    return res.json({success: true})
} catch (error) {
    console.log(error);
    
    return res.json({success: false})
}
})

module.exports = router;