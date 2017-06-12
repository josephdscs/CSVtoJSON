/** csv file
a,b,c
1,2,3
4,5,6
*/
const csvFilePath='./autobot.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    // combine csv header row and csv line to a json object 
    // jsonObj.a ==> 1 or 4 
})
.on('done',(error)=>{
    console.log('end')
})
 