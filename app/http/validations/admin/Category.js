const {body} = require('express-validator');

class categoryValidator{
    createAndUpdate(){
        return [
            body('title').notEmpty().withMessage('عنوان دسته بندی نباید خالی باشد'),
            body('language').notEmpty().withMessage('زبان دسته بندی نباید خالی باشد')
        ]
    }
}
module.exports = new categoryValidator();