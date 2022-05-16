import React from 'react'
import Link from "next/link"
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <nav className={styles.mainNav} >
    <ul >
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/blog">Blog</Link></li>
      <li><Link href="/contact">Contact</Link></li>
     {/* <Link href="/about"> <li>About</li></Link>
     <Link href="/blog"> <li>Blog</li></Link>
     <Link href="/contact"> <li>Contact</li></Link> */}
    </ul>
  </nav>
  )
}

export default Navbar