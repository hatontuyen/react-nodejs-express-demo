const app = require('../util/expressUtil');

app.get('/', (req, res) => {
    res.end("it works")
})
