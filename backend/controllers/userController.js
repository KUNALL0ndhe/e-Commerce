import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

/**
*  @description   Auth User
   @route        Post /api/users/login
   @access          public
*
*/

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
            res.status(401); //Unauthorized;
            throw new Error ('Invalid email or password');
        }
    
});

/**
*  @description   Get user profile
   @route        Get /api/users/profile
   @access          private
*
*/

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

/**
*  @description   Register new user
   @route        Post /api/users/
   @access          public
*
*/

const registerUser = asyncHandler ( async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400); // Bad Request
        throw new Error (' User already Exists');
    }

    const user = await User.create({ name, email, password });

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(400);
        throw new Error ('Invalid user data');
    }
});

/**
*  @description   Update user profile
   @route        PUT /api/users/profile
   @access          private
*
*/

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save(); // user is mongoose provided object which he will take care of it and we provide the save()fn which is mongoose fn to save and update in database

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
        });
    } else {
        res.status(404);
        throw new Error('User not Found');
    }
})

/**
*  @description   Get all user
   @route        GET /api/users
   @access        private/admin
*
*/
const getUsers = asyncHandler( async (req, res) => {
    const users = await User.find({}).select('-password');
    res.json(users);
});

/**
*  @description   Delete a user
   @route        DELETE /api/users/:id
   @access        private/admin
*
*/
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        res.status(404);
        throw new Error('User not found');
       }
   if (req.user._id.toString() === req.params.id.toString()) {
    res.status(400);
    throw new Error('Sorry You cannot Delete yourself');   
   } else {
    await User.deleteOne(user);
    res.json({ message: 'User Deleted' });
   }
});
export { authUser, deleteUser, getUserProfile , registerUser, getUsers, updateUserProfile};