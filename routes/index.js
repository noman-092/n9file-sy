var express = require('express');
var router = express.Router();
const path = require("path");
const fs = require("fs");
const { get } = require('http');

// fs.mkdirSync( path.join(__dirname, "..", "public","upload"))


  

/* GET home page. */


// 1),6)
router.get('/', function(req, res, next) {
  const pathname= path.join(__dirname, "..", "public","upload");
  const files = fs.readdirSync(pathname);
  console.log(files);
  res.render('index', {files,filedata:null,filename:null});
});

// 8),9)
router.get("/file/:filename", (req,res)=>{
  const params = req.params.filename;
  const pathname = path.join(__dirname,"..", "public","upload",params)
  fs.unlinkSync(pathname);
  res.redirect("/");
  // res.send(params)
});


// 10) 11)
// router.get("/:filename",(req,res)=>{
// const pathname= path.join(__dirname,"..","public","upload",req.params.filename);
// const filedata= fs.readFileSync(pathname,"utf-8");
// res.send(filedata)
// });


// 12)
  router.get("/:filename",(req,res)=>{
  const pathnam= path.join(__dirname, "..", "public","upload");
  const files = fs.readdirSync(pathnam);
  const pathname= path.join(__dirname,"..","public","upload",req.params.filename);
  const filedata= fs.readFileSync(pathname,"utf-8");
  res.render("index", {files,filedata,filename:req.params.filename})
  });



// 13)
router.post("/create", (req,res)=>{
  const pathname = path.join(__dirname, "..","public","upload",req.body.filename);
  fs.writeFileSync(pathname,"//start coding here..");
  res.redirect(`/${req.body.filename}`)
 });


//  14)
router.post("/update/:filename", (req,res)=>{
const pathname=path.join(__dirname,"..","public","upload",req.params.filename);
fs.writeFileSync(pathname,req.body.filedata);
res.redirect(`/${req.params.filename}`);
});


// 2),3),4)
router.post("/create", (req,res)=>{
 const pathname = path.join(__dirname, "..","public","upload",req.body.filename);
 fs.writeFileSync(pathname,"")
 res.redirect("/")
 //  res.send(pathname) && res.send("file is created")
});
module.exports = router;
