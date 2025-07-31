const os=require('os')
const path = require('path')
const http=require('http')
const fs=require('fs')

//OS Module
console.log(os.type())
console.log(os.version())
console.log(os.freemem())

//Getting The current working directory 
console.log(__dirname)

//Getting the current working filename Directory 
console.log(__filename)

//Another  Getting Directory 
console.log(path.dirname(__filename))

//Getting only Current Filename
console.log(path.basename(__filename))

//Getting extension name of filename 
console.log(path.extname(__filename))

//Getting All Path Data in Json Format 
console.log(path.parse(__filename))

//FS Module- CRUD Operations
//Creating a file
fs.writeFile('demo.text','Hey This is a Demo File',(err,data)=>{
    if(err){
        console.log(err.message)
    }
    console.log('File Created Succesfully with the content')
})

//Reading a File
fs.readFile('demo.text','utf-8',(err,data)=>{
    if(err){
        console.log(err.message)
    }
    console.log(data)
})

//Renaming File name 
fs.rename('demo.text','sample.txt',(err,res)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log('File name Changed Succesfully')

    }
    
})

//Delating a file
fs.unlink('sample.txt',(err,res)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log('File Deleted Succesfully')

    }
})

//Checking is File exists
if(fs.existsSync('sample.txt')){
    console.log('True')
}

//HTTP Module 
const server=http.createServer((req,res)=>{
    res.write('Hello Today I learned Built in Modules')
    res.end()
})
server.listen(3000)