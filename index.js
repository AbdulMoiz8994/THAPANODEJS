const fs = require("fs");

// // This thing make overwite our last saving file
// //This is ka key to make file.
// fs.writeFileSync("read.txt", "Welocome to node js");

// //This key of synatx  does not do overwirte
// fs.appendFileSync("read.txt", "  Welcome to our first file.");

// fs.appendFileSync("read.txt", " This is second line of appendFile Sync");

// const buffer_Data = fs.readFileSync("read.txt");
// const buffer_Datas = buffer_Data.toString();
// console.log(buffer_Datas);


// fs.renameSync('read.txt',"nodejspract.txt");



//Seocnd time of challange

//create file 
// fs.writeFileSync('thapapractice1.txt','Welcome to challange')

// fs.appendFileSync('thapapractice1.txt'," This is second line")
// //read file 
// const bio_Data=fs.readFileSync('thapapractice1.txt').toString();
// console.log(bio_Data);
// // //rename file
// fs.renameSync('thapapractice.txt','thapapractice1.txt')
// fs.mkdirSync("MoizFolder")

fs.appendFileSync('MoizFolder/moizpract.txt',"My name is abdul moiz")

fs.appendFileSync('MoizFolder/moizpract.txt'," Please come in second line")

// const buffer_Data=fs.readFileSync('MoizFolder/moizpract.txt', 'utf8');
// console.log(buffer_Data);

fs.unlinkSync('MoizFolder/moizpract.txt')
fs.rmdirSync('MoizFolder')