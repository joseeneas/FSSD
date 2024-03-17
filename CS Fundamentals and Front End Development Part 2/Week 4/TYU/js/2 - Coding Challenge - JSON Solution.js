const json=`{
    "name":"JSON",
    "type":"Exchange format",
    "similarTypes":[
    "XML","YML","CSV"
    ],
    "rating":10
    }
    `
    var jsObj=JSON.parse(json);
    console.log(jsObj);
