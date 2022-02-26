//MODELS
const School = require('../../../../../models/School');
class aboutController{
    async index(req,res,next){
        try {
            const options = {
                title : "about we"
            }
            const school = await School.findOne({})
            return  res.render('./public/en/about/index' , {options , school})
        } catch (error) {
            console.log(error);
            return res.redirect('/en/')
        }
    }
}


module.exports = new aboutController();