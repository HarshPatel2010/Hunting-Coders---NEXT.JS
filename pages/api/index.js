// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'node:fs';

export default function handler(req, res) {
    // console.log(res)
   
    res.status(200).json({ name: 'John Doe' })
  }
  