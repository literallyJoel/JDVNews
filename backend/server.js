const express = require("express");
const app = express();

const authRouter = require("./auth/auth");

app.use("/auth", authRouter);

app.listen(5500, () =>{
    console.log("Running on 5500");
});