const userService = require('../services/userService');

class UserController {
    async register(req, res) {
        try {
            const { username, password } = req.body;
            const user = await userService.register(username, password);
            res.status(201).json({ message: 'User registered successfully', userId: user._id });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const token = await userService.login(username, password);
            res.status(200).json({ token });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new UserController();
