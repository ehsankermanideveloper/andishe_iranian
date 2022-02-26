// MODUELS
const Category = require("../../../../models/Categorys");
const Language = require('../../../../models/Language')
class categoryController {
    async index(req, res, next) {
        try {
            const categorys = await Category.find({}).populate([{path : 'language'}])
            const options = {
                title: "مدیریت دسته بندی ها",
            };

            return res.render("./admin/Categorys/index", { options, categorys });
        } catch (error) {
            console.log(error);
            return res.redirect("/admin");
        }
    }
    async create(req, res, next) {
        try {
            const options = {
                title: "ایجاد دسته بندی جدید",
            };
            const languages = await Language.find({});
            return res.render("./admin/Categorys/create", {
                options,
                ClientError: req.flash("ClientError"),
                languages
            });
        } catch (error) {
            console.log(error);
        }
    }
    async store(req, res, next) {
        const { title , language } = req.body;
        return  res.json({title , language})
        const findWithTitle = await Category.findOne({ title });
        if (findWithTitle) {
            req.flash("ClientError", ["این عنوان در سامانه موجود هست"]);
            return res.redirect("/admin/categorys/create");
        }
        const addCategory = new Category({
            title,
            language
        });
        addCategory.save((err, data) => {
            if (err) {
                console.log(err);
            } else {
                return res.redirect("/admin/categorys");
            }
        });
    }
    async update(req, res, next) {
        try {
            const options = {
                title: "ویرایش دسته بندی",
            };
            const { id } = req.params;
            const findCategory = await Category.findOne({ id });
            const languages = await Language.find({});
            if (!findCategory) {
                return res.redirect("/admin/categorys");
            }
            return res.render("./admin/Categorys/edit", {
                options,
                category : findCategory,
                ClientError: req.flash("ClientError"),
                languages
            });
        } catch (error) {
            console.log(error);
        }
    }
    async edit(req, res, next) {
        try {
            const { title , language } = req.body;
            const { id } = req.params;
            const findWithTitle = await Category.findOne({ title});
            if(findWithTitle && findWithTitle.id != id){
                req.flash('ClientError' , ['عنوان انتخاب شده برای دسته بندی دیگیری نیز استفاده شده'])
                return res.redirect(`/admin/categorys/${id}/edit`)
            }
            const updateCategoy = await Category.findOneAndUpdate(
                {  id },
                { $set: { title , language } }
            );
            if (updateCategoy) {
                return res.redirect("/admin/categorys");
            } else {
                req.flash("ClientError", ["دسته بندی مورد نظر ویرایش نشد"]);
                return res.redirect(`/admin/categorys/${id}/edit`);
            }
        } catch (error) {
            console.log(error);
            req.flash("ClientError", ["عملیات با موفقیت انجام نشد"]);
        }
    }
}

module.exports = new categoryController();
