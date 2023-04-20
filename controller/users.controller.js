import User from '../models/users.model.js';

const UserController = {
    getAllUsers: async (_req, res) => {
        try {
            const brukere = await User.getAll();
            res.status(200).json(brukere);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Problem med å få tak i brukere' });
        }
    },
    createUser: async (_req, res) => {
        const newUser = _req.body;
        try {
            const brukere = await User.create(newUser);
            res.status(201).json(brukere);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Problem med å opprette bruker' });
        }
    }
};

export default UserController;