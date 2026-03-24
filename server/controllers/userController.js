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
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      success: true,
      users: users
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
}
const getUserById = async (req, res) => {
  const { userId } = req.params
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "user not found"
      })
    }
    return res.status(200).json({
      success: true,
      user: user
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    })

  }
}
const deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "user not found"
      })
    }
    
    return res.status(200).json({
      success: true,
      message: 'user deleted successfully '
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
}
const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { name, email, age } = req.body;
  
  try {
    let user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "user not found"
      });
    }
    
    if (email && email !== user.email) {
      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({
          success: false,
          error: 'email already exists' 
        });
      }
    }
    
    user = await User.findByIdAndUpdate(
      userId,
      { name, email, age },
      { new: true, runValidators: true }
    );
    
    return res.status(200).json({
      success: true,
      user: user,  
      message: 'user updated successfully'
    });
    
  } catch (error) {
    return res.status(500).json({ 
      success: false,
      error: error.message
    });
  }
};
export { createUser, getAllUsers, getUserById, deleteUser, updateUser }