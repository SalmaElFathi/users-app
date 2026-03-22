import User from '../models/User.js';
import bcrypt from 'bcryptjs';

const createUser = async (req, res) => {
  try {
    const { name, email, password, age } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        error: 'name, email and password are required'
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User already exists'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      age
    });

    return res.status(201).json({
      success: true,
      id: user._id,
      message: 'User created successfully'
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}; 
const getAllUsers=async(req,res)=>{
try{
    const users=await User.find();
    return res.status(200).json({
        success:true,
        users:users
    });
}catch(error){
    return res.status(500).json({
        success:false,
        error:error
    })
}
}
export {createUser,getAllUsers}