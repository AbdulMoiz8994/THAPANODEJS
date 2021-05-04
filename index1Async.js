const os = require('os');

// fs.writeFile('read.txt',"Hello World",(err) =>{
//     console.log("This is file finished");
//     console.log(err);
// });
// fs.appendFile('read.txt'," Moiz khanzada",(err) =>{
//     console.log("The Data append has finished");
// })

// fs.readFile("read.txt", "UTF-8", (err, data) => {
//   console.log(data);
// });

// const getData = fs.readFileSync("read.txt", "utf-8");
// console.log("This is last line");
// console.log("This is sync " + getData);

// Doing CURD Challange

// fs.mkdir('fsDir', function(err) {
//    console.log("Folder Created");
// })

// fs.appendFile('./fsDir/readtextAsync.txt',"Hello World This syntax is" ,() =>{
//   console.log("This is file which we amke and add data");
// } )
// fs.writeFile('./fsDir/readtextAsync.txt',"Abdul Moiz re-writing" ,() =>{

// })
// fs.appendFile('./fsDir/readtextAsync.txt',"Abdul moiz zafar ali doing  practice of async",() =>{});


// fs.readFile('./fsDir/readtextAsync.txt', 'utf-8',(err,data)=>{
//   console.log(data);

// })
// console.log("This is last line");

// fs.rename('./fsDir/readAsync.txt','./fsDir/readtextAsync.txt',(err) =>{console.log("Renmae Done")})

// fs.unlink('./fsDir/readtextAsync.txt',(err) =>{})
// fs.rmdir('./fsDir',(err) =>{})


console.log(os.arch());

console.log(os.hostname());

