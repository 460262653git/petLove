let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');

let app = express();
app.use(session.json());
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'mxm'
}));

let sliders = require('./mock/slider');
let kinds = require('./mock/kind');

app.use(function (req,res,next) {
    res.header('Access-Control-Allow-Origin','http://localhost:8080');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT');
    res.header('Access-Control-Allow-Headers','Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    if(req.method == 'OPTIONS'){
        res.end();
    }else{
        next();
    }
});
// 获取轮播图
app.get('/sliders',function (req,res) {
   res.json(sliders)
});
// 获取部分图片
app.get('/class',function (req,res) {
    let cloneKinds = JSON.parse(JSON.stringify(kinds));
    let {offset=0,limit=8} = req.query;
    for(let i=0;i<cloneKinds.list.length;i++){
        let kind = cloneKinds.list[i];
        kind.title = `${+offset+i+1}-${kind.title}`
    }
    setTimeout(()=>{
        res.json(cloneKinds)
    },1000)
});






app.listen(3500,function (req,res) {
    console.log('server is ok')
});