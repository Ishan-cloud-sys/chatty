import jwt from 'jsonwebtoken'
export const generateToken=(_id,res)=>{
    const token=jwt.sign({_id},process.env.JWT_SECRET,{
        expiresIn:'7d'
    })
    res.cookie('jwt',token,{
        maxAge:7*24*60*60*1000,//in ms
        httpOnly:true, //prevent XSS attacks:cross-site scripting
        sameSite:'strict',//csrf attacks prevention
        secure:process.env.NODE_ENV==='development'?false:true
    })
    return token
}