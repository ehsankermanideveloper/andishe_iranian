

class privacyController {
    async index(req,res,next){
        try {
            const options = {
                title : "حریم خصوصی"
            }
            return  res.render('./public/fa/privacy/index' , {options})
        } catch (error) {
            console.log(error);
            return res.redirect('/en/')
        }
    }
}


module.exports = new privacyController();