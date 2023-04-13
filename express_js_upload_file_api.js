const path = require("path");
const express = require("express");
const multer = require("multer");
const app = express();

/**
 * Ref. : https://stackoverflow.com/a/60408823
 */

const mult_storage = multer.diskStorage({
    destination: function(req, file, call_back) {
        call_back(null, "my_folder")
    },
    filename: function(req, file, call_back) {
        call_back(null, "my-file-" + Date.now() + path.extname(file.originalname))
    }
});

const mult_file_filter = function(req, file, call_back){
    // Allowed ext
    const filetypes = /png/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        call_back(null, true);
    } else {
        call_back(null, false);
        return call_back(new Error('Only .png format allowed!'));
    }
};

const upload = multer({
    storage: mult_storage,
    fileFilter: mult_file_filter
}).single("file_field_name");

app.post("/upload-file", upload, (req, res) => {
    res.send("File has been uploaded.");
});

app.listen(5000);