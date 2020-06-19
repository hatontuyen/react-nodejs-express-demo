const sqlUtil = require('../util/sqlUtil')
const { getConnection } = sqlUtil;
const getUsers = () => {
    return new Promise((resolve,reject) => {
        getConnection().query("SELECT * FROM USER", (error, results) => {
            if (error) 
                return reject(error)
            resolve(results)
        })
    })
}
const saveUser = (user)=>{
    return new Promise((resolve,reject) => {
        getConnection().query('INSERT INTO user SET ?', user, (error, results) => {
            if (error) 
                return reject(error)
            resolve(results)
        })
    })
}
module.exports = {
    getUsers,
    saveUser
}