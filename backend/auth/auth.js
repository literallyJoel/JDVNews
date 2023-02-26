const express = require("express");
const router = express.Router();
const db = require("./db");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");


const parser = bodyParser.urlencoded({ extended: false });

router.post("/authorise", (req,res) =>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "SDKFNVLSKDN93223NC332CCALSLODZXCAMPQW");

        db.getByEmail(decoded.userEmail).then((accounts) =>{
           if( accounts[0].reauth){
                res.status(401).send({message: "unauthorised"});
           }else{
            res.status(200).send("OK");
           }
        })
        console.log(decoded.userEmail);
    }catch(e){
        res.status(401).send({message: "Unauthorized"});
    }
});

router.post("/login", parser, (req, res) => {
    const now = new Date();
    try {
        console.log(req.body.email);
        db.getByEmail(req.body.email).then((accounts) => {
            if (accounts.length === 0) {
                res.status(404).send({ message: "Account Issue" });
            } else {
                const account = accounts[0];

                if(!req.body.password){
                    res.status(500).send({ message: "Internal Server Error" });
                    return;
                }

                bcrypt.compare(req.body.password, account.password).then((passwordCheck) => {
                    if (!passwordCheck) {
                        return res.status(404).send({ message: "Account Issue   " });
                    }

                    const token = jwt.sign(
                        {
                            userId: account.id,     
                            userEmail: account.email,
                            userName: account.name,
                        },
                        "SDKFNVLSKDN93223NC332CCALSLODZXCAMPQW",
                        { expiresIn: "24h"}
                    );

                    res.status(200).send({
                        message: "Login Success",
                        email: account.email,
                        token
                    });
                }).catch((err) => {
                    console.error(`[${now}]: ${err}`);
                    res.status(404).send({ message: "Account Issue" });
                })
            }
        });
        
    } catch {
        console.error(`[${now}]: ${err}`);
        res.status(500).send({ message: "Internal Server Error" });
    }

});



router.post("/register", parser, (req, res) => {
    try {

        bcrypt.hash(req.body.password, 10).then((hashedPass) => {


            const user = ({
                email: req.body.email,
                name: req.body.name,
                password: hashedPass,
            });


            db.register(user);

            res.status(200).send("OK");
        }).catch((err) => {
            const now = new Date();
            console.error(`[${now}]: ${err}`);
            res.status(500).send({ message: "Internal Server Error" });
            throw err;
        });



    } catch (err) {
        const now = new Date();
        console.error(`[${now}]: ${err}`);
        res.status(500).send({ message: "Internal Server Error" });
        throw err;
    }


});

router.post("/login", (req, res) => {

})

module.exports = router;