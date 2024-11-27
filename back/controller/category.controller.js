const Category = require('../models/category.model');

const createCategory = async(req, res) => {
    const blog_name = req.body.blog_name
    const blog_desc = req.body.blog_desc

    const category = new Category({
        'category_name' : blog_name,
        'category_description': blog_desc
    })

    try {
        const resposne = await category.save()
        res.status(201).send(resposne)
    } catch (error) {
        if (error.code == 11000) {
            res.status(400).json({'should be unique' : Object.keys(error.keyPattern)[0]})
        }
       res.status(400).json({"error": error.code})
    }

}
const deleteCategory = async (req, res) => {
    try {
        const response = await Category.deleteOne({"category_name" : req.params.name}) 
        if (response.deletedCount === 0) return res.status(200).send(`there is no category found ${req.params.name}`)
        
        res.json({"delted_data " : response})
    } catch (error) {
        res.status(400).json({"error": error})
    }
    res.send('delete category')
}


const getAllCategory = async (req, res) => {
    try {
        const response = await Category.find({}) 
        res.status(200).send(response)
    } catch (error) {        
        res.status(400).json({"error": error})
    }
}
module.exports = {createCategory ,deleteCategory , getAllCategory}