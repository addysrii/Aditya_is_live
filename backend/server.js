import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js"
dotenv.config()
mongoose.connect(process.env.MONGO_URI)
.then((()=> console.log("MONGODB CONNECTED")))
.catch((err => console.log(err)))


const app = express();
app.use(express.json());

app.use('/api/users',userRoutes)
const PORT =process.env.PORT || 5001 
app.listen(PORT, () => {
console.log(`server is live at ${PORT}`)
})