const User = require('../models/User');
const jwt = require('jsonwebtoken');
// const { jwtSecret } = require('../config');

class UserService {
    async register(username, password) {
        const user = new User({ username, password });
        await user.save();
        return user;
    }

    async login(username, password) {
        const user = await User.findOne({ username });
        if (!user || !(await user.comparePassword(password))) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.jwtSecret, { expiresIn: '1h' });
        return token;
    }
}

module.exports = new UserService();
