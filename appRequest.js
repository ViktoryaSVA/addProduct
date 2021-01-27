const request = require('request-promise');
const md5 = require('md5');
var argv = require('optimist').argv;

async function Auth(){
    //AUTH POST
    let result = await request.post({
        url: 'http://api.brain.com.ua/auth',
        json: true,
        form: {
            login : argv.login,
            password : md5(argv.password)
        },
        resolveWithFullResponse: true,
        simple: false,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    });
    let SID = result.body.result;

    //console.log(SID);

    //AUTH GET CATEGORIES


    //AUTH GET
    let getProducts = await request.get({
        url: 'http://api.brain.com.ua/products/7740/' + SID,
        json: true,
        resolveWithFullResponse: true,
        simple: false
    })
    console.log(getProducts.body.result);
    let arr2 = getProducts.body.result.list;
    arr2.forEach(
        function (i) {
           // console.log(i.productID);
        }
    );
}
Auth();
