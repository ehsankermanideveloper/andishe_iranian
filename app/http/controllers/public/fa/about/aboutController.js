

class aboutController{
    async index(req,res,next){
        try {
            const options = {
                title : "درباره ی ما"
            }
            return  res.render('./public/fa/about/index' , {options})
        } catch (error) {
            console.log(error);
            return res.redirect('/en/')
        }
    }
}


module.exports = new aboutController();