import cloudinary from "cloudinary";

export const isImageUrl = async (url: any): Promise<boolean> => {
  try {
    const { resource_type } = await cloudinary.v2.api.resource(url);
    console.log(resource_type)
    return resource_type === "image";
  } catch (error) {
    console.error(`Failed to check image URL: ${url}`, error);
    return false;
  }
};