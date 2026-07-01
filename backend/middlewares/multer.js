import multer from "multer"
import uploadOnCloudinary from "../config/cloudinary.js"

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public")
    },filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload=  multer({storage})
export default upload