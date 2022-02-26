

class privacyController {
    async index(req,res,next){
        try {
            const options = {
                title : "privacy"
            }
            return  res.render('./public/en/privacy/index' , {options})
        } catch (error) {
            console.log(error);
            return res.redirect('/en/')
        }
    }
}


module.exports = new privacyController();