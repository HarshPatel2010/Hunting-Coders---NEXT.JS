// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/getBlog?slug=how-to-learn-javascript //exaple of api
import * as fs from 'node:fs';

export default  function handler(req, res) {
   fs.readFile(`blogdata/${req.query.slug}.json`,"utf-8",(err,data)=>{
       if (err){
           res.status(500).json({error:"No such blog is found"})
       }
       console.log(req.query.slug);
       res.status(200).json(JSON.parse(data))
       
   })
    // // console.log(res)
    // // fs.readFile(`blogData/${req.query.slug}.json`,"utf-8",(err,data)=>{
    // fs.readdir(`blogData`,(err,data)=>{
    //     // if(err){
    //     //     res.status(500).json({error:"No such blogs found"})
    //     // }
    //     data.forEach((item)=>{
    //         console.log(item);
            
    //     })
    //     // console.log(data);
    //     // console.log(req.query.slug)
    //     res.status(200).json(data)
    // })
    // // res.status(200).json(JSON.parse(data))
}
// export default function handler(req, res) {
//     // console.log(res)
//     // fs.readFile(`blogData/${req.query.slug}.json`,"utf-8",(err,data)=>{
//     fs.readdir(`blogData`,(err,data)=>{
//         // if(err){
//         //     res.status(500).json({error:"No such blogs found"})
//         // }
//         data.forEach((item)=>{
//             console.log(item);
            
//         })
//         // console.log(data);
//         // console.log(req.query.slug)
//         res.status(200).json(data)
//     })
//     // res.status(200).json(JSON.parse(data))
// }








// new
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import * as fs from 'node:fs';

// export default function handler(req, res) {
//     // console.log(res)
//     fs.readFile("blogData/how-to-learn-javascript.json","utf-8",(err,data)=>{
//         console.log(data);
//         res.status(200).json(JSON.parse(data))
//     })
//     // res.status(200).json(JSON.parse(data))
//   }