import express from 'express';
import UserController from '../controller/users.controller.js';

const userRouter = express.Router();

userRouter.get('/', UserController.getAllUsers);
userRouter.post('/', UserController.createUser);
// userRouter.get('/:id', UserController.getUserById);
// userRouter.put('/:id', UserController.updateUserById);
// userRouter.delete('/:id', UserController.deleteUserById);

export default userRouter;