const {body} = require('express-validator');

class teachersValidator {
    createAndUpdate(){
        return [
            body('firstName').notEmpty().withMessage('نام دبیر را وارد کنید'),
            body('lastName').notEmpty().withMessage('نام خانوادگی دبیر را وارد کنید'),
            body('language').notEmpty().withMessage('زبان وب سایت را وارد کنید'),
            body('experience').notEmpty().withMessage(' تجربه ی دبیر را وارد کنید'),
            body('teacherFor').notEmpty().withMessage('درس دبیر را وارد کنید'),
            body('profile').notEmpty().withMessage('تصویر دبیر را وارد کنید'),
            body('discreption').notEmpty().withMessage('توضیحات دبیر را وارد کنید'),
            body('skillDiscriptions').notEmpty().withMessage('توضیحات ویژگی های دبیر را وارد کنید'),
            body('teachingSkills').notEmpty().withMessage('مهارت تدریس دبیر را وارد کنید'),
            body('spokenSkills').notEmpty().withMessage('مهارت گفتار دبیر را وارد کنید'),
            body('communicationSkills').notEmpty().withMessage('مهارت ارتباطی دبیر را وارد کنید'),
            body('socialSkills').notEmpty().withMessage('مهارت اجتماعی دبیر را وارد کنید'),
        ]
    }
}

module.exports = new teachersValidator();