const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "drntday51",
  api_key: "119814624233554",
  api_secret: "kjkSq6TF7JsYkaPVzrrpVJfvYEs",
  secure: true,
});


 exports.uploadImage=async (photo:any) => {
    try {
      const result = await cloudinary.uploader
        .upload(photo, {
          allowed_formats: ["jpg", "png"],
          public_id: "",
          folder: "greenx",
        })
        .then((res:any) => {
          return res.secure_url;
        })
        .catch((e:any) => {
          throw new Error("Image upload failed");
        });
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }
