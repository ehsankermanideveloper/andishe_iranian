const express = require("express");
const router = express.Router();

// CONTROLLERS
const userController = require("../../../http/controllers/admin/usersmanagments/userController");

// MIDDLWEARES

// VALIDAIONS
const validation = require("../../../http/middlweares/validation");
const UserManagmentValidatior = require("../../../http/validations/admin/UsersManagment");
router.get("/", userController.indexUsers);
router.get("/:id/edit", userController.update);
router.get('/register' , userController.register)
router.post('/register/add' , UserManagmentValidatior.add() , validation , userController.add)
router.put(
  "/:id/edit",
  UserManagmentValidatior.edit(),
  validation,
  userController.edit
);


module.exports = router;
