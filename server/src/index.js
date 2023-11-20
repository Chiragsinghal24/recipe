import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

app.listen(3001, async() => {
    mongoose.connect(
        "mongodb+srv://bless:87654321@recipes.qimn2n5.mongodb.net/recipes?retryWrites=true&w=majority").then(()=>{
        console.log("Connected to MongoDB")
    })
});
