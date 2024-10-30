const fs = require("fs")

const fileName = process.argv[2];

fs.readFile(fileName, (err, data)=>{
    if(err){
        console.log("error: ", err)
    }else{
        console.log("file content: ", data.toString())
    }
})
