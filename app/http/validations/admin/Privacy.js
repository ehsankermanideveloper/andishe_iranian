const {body} = require('express-validator');

class privacyValidator {
    createAndUpdate(){
        return [
            body('title').notEmpty().withMessage('عنوان را وارد کنید'),
            body('language').notEmpty().withMessage('زبان وب سایت را وارد کنید'),
            body('descripcion').notEmpty().withMessage('توضیحات  را وارد کنید'),
        ]
    }
}

module.exports = new privacyValidator();