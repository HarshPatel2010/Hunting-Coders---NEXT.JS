import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = (props) => {
  const {myBlog}=props
  // const router = useRouter();
  const [blog, setblog] = useState(myBlog);
  // useEffect(() => {
  //   const { slug } = router.query;
  //   if (!router.isReady) return;
  //   fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((parsed) => {
  //       setblog(parsed);
  //     });

  //   // console.log(router.query);
  // }, [router.isReady]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {blog && blog.title}</h1>
        <hr />
        <div>
         {blog && blog.content}
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;

 let data =await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
 let myBlog =await data.json();


   return {
     props: {myBlog}, // will be passed to the page component as props
   }
 }

export default slug;
