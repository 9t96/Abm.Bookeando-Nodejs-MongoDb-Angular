var express = require('express');
var router = express.Router();
const UsersModel = require('../src/models/user');
var jwt = require('jsonwebtoken');
var payload = {
    "sub": "1234567890",
    "iat": 1516239022
};

router.post('/signin', function(req, res, next) {
    
    if(req.body.user !== '' && req.body.pass !== '')
    {
        let user = {user:req.body.user,password:req.body.pass};
        UsersModel.find(user)
        .then( records => { 
            payload.user = records._id;          
            let token = jwt.sign(payload,process.env.SECRET_KEY);
            res.send({token:token});
        })
        .catch(err => {
            res.status(200).send({message: 'err'});
        })
    }
    else
    {
        res.status(500).send({message: 'Debe proporcionar un usuario'});      
    } 
});

module.exports = router; 