const express = require('express');
const router = express.Router();
const recipieController = require("../controllers/recipieController");

router.post('/',recipieController.createRecipie);
router.get('/',recipieController.GetAllRecipe);
router.get('/:id',recipieController.GetAllById);
router.put('/:id',recipieController.updateRecipebyid);
router.delete('/:id',recipieController.deleteById);

module.exports = router;