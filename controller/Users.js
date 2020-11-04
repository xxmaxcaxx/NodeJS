const UsersModel = require('../model/Users');
const usersModel = new UsersModel();

const cryptoPassword = require('../utils/cryptoPassword');

class Users {
    get(req, res) {
        const { id } = req.params;

        usersModel.get(id)
            .then((user) => {
                if (!user.exists) {
                    res.status(404).send({ message: 'User not found' });
                }

                res.json(user.data());
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    }

    add(req, res) {
        const data = {
            ...req.body,
            password: cryptoPassword(req.body.password),
        }
        
        usersModel.create(data)
            .then((user) => {
                delete data.password;

                res.status(201).json({
                    ...data,
                    id: user.id,
                })
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    }
}

module.exports = Users;