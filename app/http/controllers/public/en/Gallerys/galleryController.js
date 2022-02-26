// MODELS
const Gallery = require('../../../../../models/Gallery');

class galleryController{
   async index(req,res,next){
        try {
            const options = {
                title : "Gallery Page"
            }
            const gallerys = await Gallery.find({});
            return res.render('./public/en/Gallery/index' , {
                options ,
                gallerys
            })
        } catch (error) {
            console.log(error);
            return res.redirect('/en/')
        }
    }
}


module.exports = new galleryController();