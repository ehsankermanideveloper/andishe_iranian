const router = require('express').Router();

//CONTROLLERS
const categoryController = require('../../../http/controllers/admin/Categorys/categoryController');
//VALIDATIONS
const validation = require('../../../http/middlweares/validation');
const categoryValidator = require('../../../http/validations/admin/Category')
router.get('/' , categoryController.index)
router.get('/create' , categoryController.create)
router.post('/create' , categoryValidator.createAndUpdate() , validation , categoryController.store);

router.get('/:id/edit' , categoryController.update);
router.put('/:id/edit' , categoryValidator.createAndUpdate() , validation , categoryController.edit)
module.exports = router;