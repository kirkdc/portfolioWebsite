require('dotenv').config()

const express = require ("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.set("view engine", "ejs");

//Static folders
app.use(express.static("public"));
app.use(express.static("frontCode"));



//bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.get("/", function(req, res){
    res.render("home");
});

app.post("/send", function(req, res){
    const output = `
<p> You have a new contact request</p>
<h3> Contact Details</h3>
<ul> 
    <li>Name: ${req.body.name} </li>
    <li>email: ${req.body.email} </li>
    <li>Subject: ${req.body.subject} </li>
</ul>
<h3> Message</h3>
<p> ${req.body.message} </p>
`;
    
// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
//        host: 'smtp-mail.outlook.com',
//        port: 587,
        service: process.env.SERVICE,
        secure: false, // true for 465, false for other ports
        tls: {
        ciphers:'SSLv3',
        rejectUnauthorized: false //new code for outlook. remove if it doesnt work.
    }, 
        auth: {
            user: process.env.USER, // generated ethereal user
            pass: process.env.PASS // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <dcostacode@yahoo.com>', // sender address
        to: 'dcostacode@gmail.com, process.env.MY_EMAIL', // list of receivers
        subject: 'Node Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output
        //html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info)); //DONT KNOW ABT THIS LINE OF CODE WASNT THERE IN THE EXAMPLE 
        
        res.render('home'); //HAVE TO CHANGE THIS I DONT HAVE A CONTACT ROUTE. should ideally go back home with flash message
    });
});

app.listen(process.env.PORT ||3000, function(){
   console.log("SERVER IS ACTIVE!"); 
});