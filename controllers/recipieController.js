const Recipe = require('../models/recipieModel');
// create new recipes
exports.createRecipie = async(req,res) => {
    try{
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
    }
    catch(err){
    res.status(400).json({error:err.message});
    }
};

//Get all The Recipe

exports.GetAllRecipe = async(req,res) => {
    try{
    const recipes = await Recipe.find();
    res.status(200).json(recipes)
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

// Get by id

exports.GetAllById = async (req,res) => {
    try{
     const recipe = await Recipe.findById(req.params.id,req.body,{
        new:true
     }); 
     if(!recipe) return res.status(404).json({message:"Recipie not Found"});
     res.json(recipe);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

//Update recipe by id
exports.updateRecipebyid = async(req,res) => {
    try{
   const recipe = await Recipe.findByIdAndUpdate(req.params.id,req.body,{
    new:true
   });
    if (!recipe) return res.status(404).json({messahe:"Recipe Not Found"});
    res.json(recipe)
    }
    catch(err){
      res.status(400).json({error:err.message});
    }
};

//delete byid
exports.deleteById = async(req,res) => {
    try{
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if(!recipe) return res.status(400).json({message:"Recipe Deleted Successfully"});
    res.json(recipe);
    }
    catch(err){
     return res.status(500).json({error:err.message});
    }
}