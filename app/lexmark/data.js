"use client"
import React, { useRef, useState } from 'react'
// import Header from '../components/Header'
import Head from 'next/head'
import Link from "next/link";
import Section from "../components/Section";
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useRouter } from 'next/navigation'
import { Metadata } from 'next'
import styles from '../styles/product.module.css'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
const Products = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('this is the test message')
  const router = useRouter()

  const tawkMessengerRef = useRef()

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize()
  }
  const onLoad = () => {
    console.log('onLoad works!')
  }
  const sendEmail = (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name,
      email,
      message,
      number,
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        // setSubmitted(true);
        // setName("");
        // setEmail("");
        // setBody("");
      }
    })
  }

  return (
    <div className={styles.main}>

      <Header />
      {/* <div className={styles.line}></div> */}
      <div>
        <TawkMessengerReact
          onLoad={onLoad}
          propertyId="5abd4931d7591465c7090c65"
          widgetId="default"
          useRef={tawkMessengerRef}
        />
      </div>
      <div className={styles.mainContainer}>
        <div style={{ padding: "30px" }} className={styles.flex}>
          <div className={styles.color}>Why</div>
          <div className={styles.blue}>Lexmark?</div>
        </div>
        <div className={styles.row}>
          <div className={styles.mobileNone} >
            <Image src={"/lexmarkLogo.webp"} height={"350"} width={"350"} />
          </div>
          <div className={styles.lexmarkParagraph}>
            Lexmark printers stand out as an exceptional choice for hospitals due to their unmatched reliability and tailored features. In the fast-paced environment of healthcare, where printing demands are constant and critical, Lexmark printers excel in consistently delivering high-quality results. Their robust construction ensures uninterrupted performance, minimizing downtime and maximizing productivity. With advanced security features, including encryption and authentication protocols, Lexmark printers provide peace of mind in safeguarding sensitive patient information—a paramount concern in hospital settings. Moreover, their seamless integration with electronic medical record systems streamlines administrative tasks, enhancing overall operational efficiency. Lexmark's commitment to reliability and security makes it the perfect printing solution for hospitals, where accuracy and dependability are paramount.
          </div>
        </div>
      </div>
      <Section/>
      <Footer />
    </div>
  )
}

export default Products
