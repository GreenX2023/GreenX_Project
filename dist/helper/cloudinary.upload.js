const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: "drntday51",
    api_key: "119814624233554",
    api_secret: "kjkSq6TF7JsYkaPVzrrpVJfvYEs",
    secure: true,
});
exports.uploadImage = async (photo) => {
    try {
        const result = await cloudinary.uploader
            .upload(photo, {
            allowed_formats: ["jpg", "png"],
            public_id: "",
            folder: "greenx",
        })
            .then((res) => {
            return res.secure_url;
        })
            .catch((e) => {
            console.log(e);
            throw new Error("Image upload failed " + e);
        });
        return result;
    }
    catch (e) {
        console.log(e);
        throw new Error("Image upload failed");
    }
};
//# sourceMappingURL=cloudinary.upload.js.map