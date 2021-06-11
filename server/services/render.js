const axios = require('axios');

exports.homeRoutes = (req,res)=>{
    res.render('index');
}

exports.musicRoutes = (req,res)=>{
    res.render('music');
}

exports.NaniRoutes = (req,res)=>{
    res.render('nani');
}

exports.DeejalRoutes = (req,res)=>{
    res.render('deejal')
}

exports.consultRoutes = (req,res)=>{
    res.render('consultancy');
}

exports.contactRoutes = (req,res)=>{
    res.render('contact');
}


