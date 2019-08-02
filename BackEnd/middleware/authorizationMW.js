const jwt = require('jsonwebtoken');


module.exports = (req,res,next) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        let payload  = jwt.verify(token,process.env.SECRET_KEY);
        if (payload) {
          next();
        }
        else{
          res.status(200).send({message: 'Token invalido'});
        }
    } catch (error) {
          res.status(404).send({message: 'error jwt middleware'});
    }
}