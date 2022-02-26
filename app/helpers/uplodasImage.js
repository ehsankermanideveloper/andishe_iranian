const fs = require("fs");
const mkdirp = require("mkdirp");
const multer = require("multer");

const dynomicDir = function () {
  let Year = new Date().getFullYear();
  let Month = new Date().getMonth();
  let Day = new Date().getDay();
  return `./public/uplodas/images/${Year}/${Month}/${Day}`;
};

const storageImage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir = dynomicDir();
    mkdirp(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    let filePath = dynomicDir() + "/" + file.originalname;
    if (!fs.existsSync(filePath)) {
      cb(null, file.originalname);
    } else {
      cb(null, Date.now() + "-" + file.originalname);
    }
  },
});

const uplodasImage = multer({
  storage: storageImage,
});

module.exports = uplodasImage;
