import React,{useEffect,useState} from 'react';
import Link from 'next/link';
import styles from '../styles/Blog.module.css'

const Blog = (props) => {
  const {allBlogs} = props;
  console.log("from blogs.js",allBlogs);
  
  const [blog, setblog] = useState(allBlogs)
//   useEffect(() => {
//     // fetch("http://localhost:3000/api/blogs")
//     // .then((data)=>{
//     //  return data.json()})
//     //  .then((parsed)=>{
//     //    console.log(parsed)
//     //    setblog(parsed)
//     //  })

// },[])
  
  return (
    <div  className={styles.container}>
       <main className={styles.main}>
    {
      blog.map((blogItem)=>{
        return   <div className={styles.blogItemh3} key={blogItem.title}>
        <Link href={`/blogpost/${blogItem.slug}`}>
        <h3>{blogItem.title}</h3>
        </Link>
        <p>{blogItem.content.substr(0,140)}</p>
      </div>
      })
    }

   <div className={styles.blogItemh3}>
     <Link href="/blogpost/learn-javascript">
     <h3>How to learn javascript in 2022</h3>
     </Link>
     <p>Javascript is the language used to design logic for the web</p>
   </div>
   <div className="blogItem">
     <h3>How to learn javascript in 2022</h3>
     <p>Javascript is the language used to design logic for the web</p>
   </div>
   <div className="blogItem">
     <h3>How to learn javascript in 2022</h3>
     <p>Javascript is the language used to design logic for the web</p>
   </div>
   </main>
  </div>
  )
}

export async function getServerSideProps(context) {
 let data = await fetch("http://localhost:3000/api/blogs");
 let allBlogs = await data.json();
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog