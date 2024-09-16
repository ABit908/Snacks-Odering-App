import express from "express"
import { addFood,listfood,removefood} from "../controllers/foodController.js"
import multer from "multer"  //for this we can create image storage system

const foodRouter= express.Router();

//Image Storage engine
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",listfood)
foodRouter.post("/remove",removefood)



export default foodRouter;