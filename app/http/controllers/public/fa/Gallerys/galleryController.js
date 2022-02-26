// MODELS
const Gallery = require('../../../../../models/Gallery');

class galleryController{
   async index(req,res,next){
        try {
            const options = {
                title : "صفحه ی گالری"
            }
            const gallerys = await Gallery.find({});
            return res.render('./public/fa/Gallery/index' , {
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