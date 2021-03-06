let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let url = require('url');

let app = express();
app.use(bodyParser.json());
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'mxm'
}));

let sliders = require('./mock/slider');
let kinds = require('./mock/kind');
let petLists = require('./mock/pet');
let address = require('./mock/address');

// 用户的注册登录数据数组
let users= [];
// 用户输入的收货地址信息
// let addressList = [];

//跨域请求条件的设置
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
app.get('/detail/:id',function (req,res) {
    let sID = req.params.id;
    let clonePet = petLists.petList||[];
    console.log("111",clonePet);
    let pet = clonePet.find((item,index)=>item.id == sID);
    console.log(sID);
    if(pet){
        res.json(pet)
    }
});
// app.get('/detail',function (req,res) {
//     let {query} = url.parse(req.url,true);
//     let
// })
// 获取所有的地址信息
app.get('/address',function (req,res) {
    let addressList = address.addressList;
    res.json(addressList)
});



// 获取部分图片
app.get('/kinds',function (req,res) {
    let cloneKinds = JSON.parse(JSON.stringify(kinds));
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

// 注册接口
app.post('/signup',function (req,res) {
    let user = req.body;
    let oldUser = users.find((item,index)=>item.username == user.username);
    if(oldUser){
        res.json({code:1,error:'用户名已经注册过，请另选他名进行注册'})
    }else{
        users.push(user);
        res.json({code:0,success:'恭喜你，注册成功！请登录！'})
    }
});
//登录接口
app.post('/login',function (req,res) {
    let user = req.body;
    let oldUser = users.find((item,index)=>item.username == user.username && item.tel == user.tel && item.password == user.password);
    if(oldUser){
        req.session.user = user;
        res.json({code:0,success:'登录成功!',user})
    }else{
        res.json({code:1,error:'用户名、密码或手机号错误!'})
    }
});

// 验证用户当前状态是否登录
app.get('/validate',function (req,res) {
    if(req.session.user){
        res.json({code:0,user:req.session.user})
    }else{
        res.json({code:1})
    }
});



app.listen(3500,function (req,res) {
    console.log('server is ok')
});