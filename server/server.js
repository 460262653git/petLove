let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');

let app = express();
app.use(bodyParser.json());
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'mxm'
}));

let sliders = require('./mock/slider');
let kinds = require('./mock/kind');
console.log(kinds)

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
app.get('/kinds',function (req,res) {
    let cloneKinds = JSON.parse(JSON.stringify(kinds));
    console.log(cloneKinds);

    let {offset=0,limit=8} = req.query;
    for(let i=0;i<cloneKinds.kindList.length;i++){
        let kind = cloneKinds.kindList[i];
        kind.title = `${+offset+i+1}-${kind.title}`
    }
    if(parseFloat(offset)+parseFloat(limit) >= 35){
        cloneKinds.hasMore = false;
    }
    cloneKinds.kindList=cloneKinds.kindList.slice(parseFloat(offset),parseFloat(offset)+parseFloat(limit))
    setTimeout(function () {
        res.json(cloneKinds)
    },1300)
});






app.listen(3500,function (req,res) {
    console.log('server is ok')
});