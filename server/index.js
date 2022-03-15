const express = require('express')
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sunny#0145',
    database: "csn_database",
});


app.post("/signup", (req, res) => {
    console.log("signup")
    const emailid = req.body.emailid;
    const password = req.body.password;
    const userid = req.body.userid;
    db.query(
        "SELECT * FROM user WHERE user_emailid = ?", [emailid],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length !== 0 ) {
                res.send({ Message: "Email already exists" });
            }
            else {
                db.query(
                    "INSERT INTO user (user_id,user_emailid,user_password) VALUES (?,?,?)", [userid, emailid, password],
                    (err1, res1) => {
                        if (err1) {
                            res.send({ err: err1 });
                        }
                        if (res1) {
                            res.send({ message: "User registered sucessfully" });
                        }
                        else {
                            res.send({ message: "Error in registering try again later" });
                        }
                    }
                );
            }
        }
    );
});

app.post("/signin", (req, res) => {
    console.log("signin")
    const emailid = req.body.emailid;
    const password = req.body.password;

    db.query(
        "SELECT * FROM user WHERE user_emailid = ?", [emailid],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length !== 0) {
                res.send(result);
            }else
            {
                res.send({ message: "No User exits!" });
            }
        }
    );
});


app.listen(3001, () => {
    console.log("running");
});