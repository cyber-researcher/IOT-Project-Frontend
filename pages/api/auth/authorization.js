import jwt from 'jsonwebtoken';

export default function authenticateToken(req, res) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.json({Status: "No Token"})

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, data) => {
        if(err) return res.json({Status: "Invalid Token"})
        req.data = data
        res.json({Status: "User Authenticated"})
    })
}