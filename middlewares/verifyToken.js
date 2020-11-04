const jwt = require('jsonwebtoken');
const { secret } = require('../config/default');

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res
            .status(401)
            .send({
                code: 'not_authorized',
                message: 'Not authorized'
            });
    }

    jwt.verify(token, secret, (error, decode) => {
        if (error) {
            return res
                .status(500)
                .send({ error });
        }
        
        console.log('TOKEN DECODED: ', decode);
        
        next();
    });
}

module.exports = verifyToken;