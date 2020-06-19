const app = require('../util/expressUtil');
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const UserModel = require('../model/UserModel');
const { saveUser, getUsers } = require('../services/userService');
const constants = require('../constants');
app.get('/api/users', async (req, res) => {
    try {
        const users = await getUsers();
        res.json({
            status: constants.SUCCESS_STATUS,
            users
        })
    }
    catch (err) {
        console.error(err);
        res.status(500);
        res.end({
            status: constants.FAILED_STATUS,
            message: constants.messages.GET_USERS_FAILED
        })
    }

})

app.post('/api/user', async (req, res) => {
    try {
        const {firstName, lastName} = req.body;
        const result = await saveUser(new UserModel(firstName, lastName));
        res.json({
            status: constants.SUCCESS_STATUS,
            id: result.insertId
        })
    }
    catch (err) {
        console.error(err);
        res.status(500);
        res.json({
            status: constants.FAILED_STATUS,
            message: constants.messages.ADD_USER_FAILED
        })
    }

})