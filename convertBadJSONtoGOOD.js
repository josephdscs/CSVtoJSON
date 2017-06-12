/*var fs = require('fs');

var obj = JSON.parse(fs.readFileSync('./converted8.json', 'utf8',));
*/

var fs = require('fs');
var obj;
fs.readFile('./converted8.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    console.log("Result", obj);
    transString2 = {};
    transString = obj.map(function (ele) {
        console.log("Lang", ele.lang);
        let lang = ele.lang;
        transString2[lang] = {};
        for (prop in ele) {
            console.log('prop', prop);
            transString2.lang = prop;
        }
        /*
        let propN = prop;
            transString2.lang = prop;
            transString2[ele.lang][prop] = ele.msg1;
        transString2[ele.lang]["msg2"] = ele.msg2;
        transString2[ele.lang]["msg3"] = ele.msg3;
        */
    });
    console.log("Result2", transString2);
    console.log("Result2", transString);

});



/*

var res = {
    bulks: []
};
for (var key in req) {
    if (req.hasOwnProperty(key)) {
        var temp = req[key];
        temp["id"] = key;
        res.bulks.push(temp);
    }
}

console.log(res);
});
*/

/*

var req = {

  "111111": {
    "name": "exp1",
    "status": 10000
  },
  "222222": {
    "name": "exp2",
    "status": 20000
  },
  "333333": {
    "name": "exp3",
    "status": 30000
  }
}


*/