const User = require('../../models/users')
const midellware = require('./midellware')

class remember_token extends midellware {
    handel(req, res, next) {
        let token = req.signedCookies.remember_Token;
        if (token) {
            this.userFind(token, req, next)
        } else {
            next()
        }
    }
    async userFind(token, req, next) {
        const user = await User.findOne({ 'remember_token': token })
        if (user) {
            req.login(user, (err) => {
                if (err) console.log(err);
                next()
            })
        } else {
            next()
        }
    }
}

module.exports = new remember_token()