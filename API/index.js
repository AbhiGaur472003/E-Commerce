const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const productRoute=require("./routes/product");
const orderRoute=require("./routes/order");
const cartRoute=require("./routes/cart");
const stripeRoute = require("./routes/stripe");
const app=express();
app.use(express.json());
dotenv.config();
const cors = require('cors');
app.use(cors());
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("DB connection successful."))
    .catch((err)=>{console.log(err);
});

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/product",productRoute);
app.use("/api/cart",cartRoute);
app.use("/api/order",orderRoute);
app.use("/api/checkout",stripeRoute);

app.listen(process.env.PORT ||5000,()=>{
    console.log("Backend server is running");
})