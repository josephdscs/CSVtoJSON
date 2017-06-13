const csvFilePath = './autobot8.csv';
const csv = require('csvtojson');
const colors = require('colors');
const fs = require('fs');

var translationStrings = [];
csv()
    .fromFile(csvFilePath)
    .on('json', (json) => {
        translationStrings.push(json);
        //console.log(json);
    })
    .on('done', () => {
        console.log('end')
        //console.log('preTransform: ', JSON.stringify(translationStrings, null, 2));
        let idealInput = [{
                "lang": "en",
                "msg1": "hi",
                "msg2": "we"
            },
            {
                "lang": "es",
                "msg1": "hola",
                "msg2": "nos"
            }
        ]
        let idealOutput = {
            'msg1': {
                'en': 'hi',
                'es': 'hola'
            },
            'msg2': {
                'en': 'we',
                'es': 'nos'
            }
        }
        let idealOutputSchema = {
            'specificMessage': {
                'lang': 'languageTranslation',
            }
        }


        var resp = transformJSON(translationStrings);
        //for(let msg in idealInput[0])

        var configJSON = JSON.stringify(resp);
        fs.writeFileSync('./Result2.json', configJSON);

        console.log('ideal output: ', JSON.stringify(idealOutput, null, 2).green)
        console.log('final output: ', JSON.stringify(resp, null, 2).yellow)
        console.assert(JSON.stringify(idealOutput) == JSON.stringify(transformJSON(idealInput)), 'not there yet buddy'.red);
    })

function transformJSON(array) {

    let result = {};

    Object.keys(array[0]).slice(1).map((msg, index) => {
        result[msg] = Object.assign(...array.map(langObj => {

            //let self = this;
            //self['msg1'] = Object.keys(langObj).slice(1)[0];
            let msg1 = Object.keys(langObj).slice(1)[index]
            //console.log('viewer: ', self.bgMagenta)
            return {
                [langObj.lang]: langObj[msg1]
            }
        }))
    })
    return result;
};