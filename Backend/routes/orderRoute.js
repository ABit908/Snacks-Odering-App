import express from "express"
import authMiddleware from "../middlewares/auth.js"
import { placeOrder, verifyOrder, userOrders } from "../controllers/orderController.js"

const orderRouter=express.Router();



//end points
orderRouter.post("/place",authMiddleware,placeOrder);

orderRouter.post("/verify",verifyOrder);

orderRouter.post("/userorders",authMiddleware,userOrders)

export default orderRouter;