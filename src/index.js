var Tesseract = require("tesseract.js"),
  image = require("path").resolve(__dirname, "cosmic.png");

Tesseract.detect(image)
  .progress(function(info) {
    console.log(info);
  })
  .then(function(data) {
    console.log("done", data);
    process.exit();
  });
