var axios = require('axios');
var ApiPath ='http://localhost:4400/';
var path = require('path'); 
var img_chrome_path = 'http://127.0.0.1:8887/';

var recaptcha_siteKey = '6LfJN78UAAAAABKNdSq0YCtJEboRC843H2ZKxOUZ';
var recaptcha_secreatKey = '6LfJN78UAAAAABXzNE-yJNpce5xC2uODATJRX_QE';


var Api = axios.create({
  baseURL: ApiPath,
  timeout: 100000,
  headers: {'Content-Type': 'application/json'},

  // headers: {'Content-Type': 'application/json, multipart/form-data; charset=UTF-8','Access-Control-Allow-Origin': '*'},
});


module.exports={Api,ApiPath,recaptcha_siteKey,recaptcha_secreatKey,img_chrome_path}
