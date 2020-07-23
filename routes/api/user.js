const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');

// @ route GET api/users
// @ desc register user
router.post('/',[ 
    check('email', "email is required").isEmail(),
    check('password', "please enter password with 6 or more characters").isLength({ min: 6})
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try{
        //See if user exists 
        let user = await User.findOne({ email });

        if(user) {
           return res.status(400).json({ errors: [{ msg:'User already exists' }] });
        }

        user = new User({
            email,
            password
        });
        //Encrypt password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        //return jsonwebtoken

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            {expiresIn: 360000}, 
            (err, token) => {
                if(err) throw err;
                res.json({ token });
            });
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
    
});

module.exports = router;