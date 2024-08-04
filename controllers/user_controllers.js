import { userModel } from "../model/user_models.js";

//post route
export const userRegistration = async (req, res, next) => {
  try {
    const hashPassword =brypt.hashsync(req.body.password, 10);
     const addData = await userModel.create({...req.body, 
      password:hashPassword
  });
     res.status(201).json(addData)
     console.log('user added')
  
  }
   catch (error)  {
    next(error)
  } 
    
  }

  //get user  for now getting login details
  const userLogin = async (req,res, next) =>{
  try {
      const getData = await userModel.find(req.body)
      res.status(201).json(getData)
  
  } catch (error) {
    next(error)
    
  }
  }



  //user log out
  const logoutUser = async(req,res,next) => {
    res.status(201).json ('user logged out successfully ')
  }
  //get One User
  const getOneUser = async(req,res, next) => {
    try {
         const getOne = await userModel.findById(req.params.id)
         res.status(401).json(getOne)
      }
    catch (error) {
        next (error)
    }
}

    
   //update Data
   const updateUser = async(req,res,next) =>{
   try {
      const updateData = userModel.findByIdAndUpdate(req.params.id , req.body,{new:true})
 
      res.status(404).json  
      console.log ('user updated')
    }
     
    catch (error) 
    {next(error)

    } 
    
   }

   //delete User
   const deleteUser = async(req, res, next) =>{

    try {
        const deleteData = await userModel.findByIdAndDelete (req.params.id , req.body)
        res.status(404).json 
        console.log('user deleted')
    
    } catch (error)
    { next (error)} {
        
    }
   }