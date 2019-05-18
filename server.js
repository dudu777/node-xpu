const express = require("express");
const router = require("./routers/api/users")
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

 app.use(router)
 app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 4 监听端口号
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})



var formidable = require("formidable");
var path = require("path")
var fs = require("fs")
app.use(express.static('./upload'))//这个很重要，必须要这个才能拿到图片链接，而不是进入路由，有兴趣的同学可以删掉试验一下

app.post("/upload", (req, res) => {
    var form = new formidable.IncomingForm();//既处理表单，又处理文件上传
    //设置文件上传文件夹/路径，__dirname是一个常量，为当前路径
    let uploadDir = path.join(__dirname, "./upload/");//本地upload文件夹在同级
    form.uploadDir = uploadDir;//本地文件夹目录路径

    form.parse(req, (err, fields, files) => {
        let oldPath = files.file.path;//这里的路径是图片的本地路径
        console.log(files)
        console.log(files.file.name)//图片传过来的名字
        let newPath = path.join(path.dirname(oldPath), files.file.name);
        //这里我传回一个下载此图片的Url
        var downUrl = 'http://localhost:5000/' + files.file.name;//这里是想传回图片的链接
    
        fs.rename(oldPath, newPath, () => {//fs.rename重命名图片名称

            
            res.json({url:downUrl})
        })
    })
})





