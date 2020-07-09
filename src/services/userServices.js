const userRepository = require('../repositories/userRepository');

async function getId(req, res) {
    const { username } = req.params || {};

    if (!username || username.length < 8) {
        return res.status(400).json({ description: "Username required or invalid!" });
    }

    const user = await userRepository.findAll({ username });

    if (Array.isArray(user) && newUser.name !== 'SequelizeDatabaseError') {
        if (user.length) {
            return res.status(200).json(user);
        }
        return res.status(404).json({ description: "User not found." });
    } else {
        return res.status(400).json({ dbError: user });
    }

};

async function getData(req, res) {
    const { id } = req.params || {};

    const user = await userRepository.findAll({ id });

    if (Array.isArray(user) && newUser.name !== 'SequelizeDatabaseError') {
        if (user.length) {
            return res.status(200).json(user);
        }
        return res.status(404).json({ description: "User not found." });
    } else {
        return res.status(400).json({ db: user });
    }

};

async function create(req, res) {
    const { username, password, email } = req.body;

    if (!username || !password) {
        return res.status(400).json({ description: "username or password not found!" });
    }

    const newUser = await userRepository.create({ username, password, email });

    if (newUser && newUser.name !== 'SequelizeDatabaseError') {
        return res.status(201).json(newUser);
    } else {
        return res.status(400).json({ db: newUser });
    }

}

async function updateId(req, res) {
    const { id } = req.params || {};
    const { username, password } = req.body;

    if (!username || !password || !id) {
        return res.status(400).json({ description: "username, password or id not found!" });
    }

    const userUpdated = await userRepository.update({ id, username, password });

    if (userUpdated && userUpdated.name !== 'SequelizeDatabaseError') {
        return res.status(201).json(userUpdated);
    } else {
        return res.status(400).json({ db: userUpdated });
    }

}

module.exports = { getId, create, updateId };