const User = require('../app/models/User');

async function findAll(params) {
    try {
        const result = await User.findAll({ where: params });
        return result;
    } catch (error) {
        return error;
    }

}

async function create(newUser) {
    try {
        const result = await User.create(newUser);
        return result;
    } catch (error) {
        return error;
    }

}

async function update(userUpdate) {
    const { id, username, password } = userUpdate;

    try {
        const result = await User.update({ username, password }, { where: { id }});
        return result;
    } catch (error) {
        return error;
    }

}

async function deleteId(req, res) {
    const { id } = req.params;

    try {
        const result = await User.destroy({ where: { id }});
        return res.status(204).json(result);
    } catch (error) {
        return res.status(400).json({ db: error });
    }

}

module.exports = { findAll, create, update, deleteId };