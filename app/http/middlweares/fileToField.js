module.exports = (fileds) => (req, res, next) => {
  if (req.files.length > 0) {
    fileds.forEach((filed) => {
      req.files.forEach((file) => {
        if (file.fieldname == filed) {
          console.log(file.destination + file.filename);
          req.body[filed] = file.destination + "/" + file.filename;
        }
      });
    });
    return next();
  }
  return next();
};
