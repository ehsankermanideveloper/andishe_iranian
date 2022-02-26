

class contactController {
    async index(req,res,next){
        try {
            const options = {
                title : "تماس با ما"
            }
            return  res.render('./public/fa/contact/index' , {options})
        } catch (error) {
            console.log(error);
            return res.redirect('/en/')
        }
    }
}


module.exports = new contactController();