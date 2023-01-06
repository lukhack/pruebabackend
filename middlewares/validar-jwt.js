const { TokenExpiredError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');

const validarjwt = (req,res, next) =>{
    next()
    /*const token = req.header('Authorization');
    if(!token){
        return res.status(400).json({
            ok:false,
            msn: 'no hay token en la petición'
        });
    }

    try{
        jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        const decoded = jwt_decode(token);
        req.middleware_uid = decoded.authUser.UID;
        req.token = token;
        next();
    }catch(e){
        if (e instanceof TokenExpiredError) {
            return res.status(406).json({
                ok:false,
                msg: 'Token expirado'
            });
        }else{
            return res.status(400).json({
                    ok:false,
                    msg: 'Token no válido'
            });
        }
    }*/

};


const tokenvalid = (req,res) =>{
    const token = req.token;
    if(token){
        return res.status(200).json({
            ok:true,
            token
        });
    }else{
        return res.status(406).json({
            ok:false,
            token
        });
    }
}

module.exports = {
    validarjwt, tokenvalid
};