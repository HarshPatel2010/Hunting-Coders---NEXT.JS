

  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/getBlog?slug=how-to-learn-javascript //exaple of api
import * as fs from 'node:fs';

export default async function handler(req, res) {
    let data =await fs.promises.readdir("blogdata");
    let myFile;
    let allBlogs =[];
    // to use of forEach loop
    // data.forEach(async(item)=>{
    //     myFile=  await fs.promises.readFile(("blogdata/"+item),"utf-8")
    //     console.log("item",myFile)
    // })
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        myFile =await fs.promises.readFile(("blogdata/"+item),"utf-8");
        // console.log( JSON.parse(myFile)); // type of is object
        // console.log( myFile); type of is string
        allBlogs.push(JSON.parse(myFile))
        
    }
    res.status(200).json(allBlogs)
}
  