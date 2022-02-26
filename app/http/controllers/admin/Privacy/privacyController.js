// MODELS
const Privacy = require('../../../../models/privacy');
const Language = require('../../../../models/Language')


class privacyController{
    async index(req, res, next) {
        try {
            const privacys = await Privacy.find({});
            const options = {
                title: "مدیریت حریم حصوصی",
            };

            return res.render("./admin/Privacy/index", { options, privacys });
        } catch (error) {
            console.log(error);
            return res.redirect("/admin");
        }
    }
    async create(req, res, next) {
        try {
            const options = {
                title: "ایجاد حریم خصوصی جدید",
            };
            const languages = await Language.find({});
            return res.render("./admin/Privacy/create", {
                options,
                ClientError: req.flash("ClientError"),
                languages
            });
        } catch (error) {
            console.log(error);
        }
    }
    async store(req, res, next) {
        const { title , descripcion , language } = req.body;

        const addPrivacy = new Privacy({
            title,
            descripcion ,
             language
        });
        addPrivacy.save((err, data) => {
            if (err) {
                console.log(err);
            } else {
                return res.redirect("/admin/privacys");
            }
        });
    }
    async update(req, res, next) {
        try {
            const options = {
                title: "ویرایش حریم خصوصی",
            };
            const { id } = req.params;
            const languages = await  Language.find({});
            const findPrivacy = await Privacy.findById(id)
            if (!findPrivacy) {
                return res.redirect("/admin/privacys");
            }
            return res.render("./admin/Privacy/edit", {
                options,
                privacy : findPrivacy,
                ClientError: req.flash("ClientError"),
                languages
            });
        } catch (error) {
            console.log(error);
        }
    }
    async edit(req, res, next) {
        try {
            const { title , descripcion , language } = req.body;
            const { id } = req.params;
            const updatePrivacy = await Privacy.findOneAndUpdate(
                { id },
                { $set: { title  , descripcion , language} }
            );
            if (updatePrivacy) {
                return res.redirect("/admin/privacys");
            } else {
                req.flash("ClientError", ["حریم خصوصی مورد نظر ویرایش نشد"]);
                return res.redirect(`/admin/privacys/${id}/edit`);
            }
        } catch (error) {
            console.log(error);
            req.flash("ClientError", ["عملیات با موفقیت انجام نشد"]);
        }
    }

   async delete(req, res, next) {
        const {id} = req.params;
        const deleteThePrivacy = await Privacy.findByIdAndDelete(id);
        return res.redirect('/admin/privacys')
    }
}

module.exports = new privacyController();