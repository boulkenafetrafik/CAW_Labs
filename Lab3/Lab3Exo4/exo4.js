const fs = require("fs")
const text = process.argv[3]
const destination = process.argv[2]
fs.appendFile(destinationFile, text, (error)=>{
    error ? console.log("error: ", error) : console.log("The file has been saved.")
})