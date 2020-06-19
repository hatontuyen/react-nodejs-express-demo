const app = require('./util/expressUtil');
const homeController = require('./controller/homeController');
const userController = require('./controller/userController');
const constants = require('./constants');
app.listen(constants.PORT, () => {
    console.log(`Server is listening on port ${constants.PORT}`)
})
