const { User } = require('../models');

/**
 * Some Comments
 */
class SessionController {
    /**
     * @param { express.Request } req
     * @param { express.Response } res
     * @return { Promise }
     */
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ messages: 'Incorrect passwords' });
        }

        res.json({
            user,
            token: user.generateToken()
        });
    }
}

module.exports = new SessionController();
