import jwt from "jsonwebtoken"

export const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        next()
    }
    else if (req.headers.authorization) {
        try {

            //split token
            const token = req.headers.authorization.split('')[1];

            //verify tioken to get user and append to request
            req.user = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
            next()
        } catch (error) {
            res.status(401).json({ error: 'token expired' })
        }

    } else {
        res.status(401).json('user not found')
    }

}