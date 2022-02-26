

class contactController {
    async index(req,res,next){
        try {
            const options = {
                title : "call with me"
            }
            return  res.render('./public/en/contact/index' , {options})
        } catch (error) {
            console.log(error);
            return res.redirect('/en/')
        }
    }
}


module.exports = new contactController();