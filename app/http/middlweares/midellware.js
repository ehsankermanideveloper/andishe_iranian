const autoBind = require('auto-bind')

module.exports = class midellware {
    constructor() {
        autoBind(this)
    }
}