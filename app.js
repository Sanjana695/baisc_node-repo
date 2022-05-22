//os module code
// const os=require('os');

// //info about current user
// const user=os.userInfo()
// console.log(user);

// //method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`)

// const currentos={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem()
// }
// console.log(currentos)


//////////////******path module********////////////////////
// const path=require('path')
// //return specific separator
// console.log(path.sep);

// //use join method that will join all path
// const filepath=path.join('/content','subfolder','test.txt')
// console.log(filepath);

// //base name
// const base=path.basename(filepath)
// console.log(base);

// //__dirname that gives absolute path from root to current directory
// const absolute=path.resolve(__dirname,'content','subfolder','test.txt');
// console.log(absolute);


//////////////******FS-module sync********////////////////////
// const {readFileSync,writeFileSync}=require('fs');
// const first=readFileSync('./content/first.txt','utf8');
// const second=readFileSync('./content/second.txt','utf8');
// console.log(first,second)

// //flag a use for append
// writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`,{flag:'a'})


//////////////******FS-module async********////////////////////
// const {readFile,writeFile}=require('fs');
// readFile('./content/first.txt','utf8',(err,result)=>{    //utf8 used for encoding
//     if(err){
//         console.log(err);
//         return;
//     }
//     // console.log(result)
//     const first=result;
//     readFile('./content/second.txt','utf8',(err,result)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         const second=result;
//     writeFile('./content/result-async.txt',
//     `Here is the result ${first}, ${second}`,(err,result)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(result);
//     })
//     })
   
// })


//////////////******HTTP MODULE SETUP********////////////////////
// const http=require('http');
// const server=http.createServer((req,res)=>{
//     console.log(req)
//     if(req.url==='/'){
//         res.end('Welcome to our home page');
//     }
//    if(req.url==='/about'){
//        res.end('Here is the about page');
//    }
//    res.end(
//        `<h1>Opps!</h1>
//        <p>We can not find the page you are looking for</p>
//        <a href='/'>Back to Home Page</a>`
//    )
// })
// server.listen(5000)


//////////////***********lodash ************////////////
const arr=require('lodash');
const items=[1,[2,[3,[4,[5]]]]];
const newItems=arr.flattenDeep(items);
console.log(newItems);




