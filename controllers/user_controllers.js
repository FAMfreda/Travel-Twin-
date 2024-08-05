import { userModel } from "../model/user_models.js";
import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"

//post route
export const register = async (req, res, next) => {
    try {
        const hashPassword = bcrypt.hashSync(req.body.password, 10);
        const addData = await userModel.create({
            ...req.body,
            password: hashPassword
        });
        res.status(201).json(addData)
        console.log('user added')

    }
    catch (error) {
        next(error)
    }

}

//get user  for now getting login details
export const userLogin = async (req, res, next) => {
    try {
        const getData = await userModel.find({
            $or: [
                { userName: req.body.userName },
                { email: req.body.email }
            ]
        });

        if (!user)
            return res.status(401).json('user not found')


        const correctPassword = bcrypt.hashSync(req.body.password, user.password)
        if (!correctPassword)

            return res.status(401).json('incorrect username or password')

        const token = JWT.sign(
            { Id: user.Id },
            process.env.JWT_PRIVATE_KEY,
            { expiresIn: '24h' });

        res.status(200).json({ message: 'user logged in successfully', accessToken: token })

    } catch (error) {
        next(error)


    }
}



//user log out
export const logoutUser = async (req, res, next) => {
    res.status(200).json('user logged out successfully ')
}
//get One User
const getOneUser = async (req, res, next) => {
    try {
        const getOne = await userModel.findById(req.params.id)
        res.status(401).json(getOne)
    }
    catch (error) {
        next(error)
    }
}


//update Data
const updateUser = async (req, res, next) => {
    try {
        const updateData = userModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(201).json
        console.log('user updated')
    }

    catch (error) {
        next(error)

    }

}

//delete User
const deleteUser = async (req, res, next) => {

    try {
        const deleteData = await userModel.findByIdAndDelete(req.params.id, req.body)
        res.status(201).json
        console.log('user deleted')

    } catch (error) { next(error) } {

    }
}