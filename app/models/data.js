"use client"
import React, { useRef, useState } from 'react'
// import Header from '../components/Header'
import Head from 'next/head'
import Link from "next/link";
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

      <Header/>
      <div className={styles.line}></div>
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
            <div className={styles.color}>Our Top</div>
            <div className={styles.blue}>Products</div>
        </div>
        <div className={styles.copierRow}>
          <Link href={'/6153'}>
            <div

              className={styles.copierContainer}
            >
              <h2 className={styles.title}>Lexmark XC 6153</h2>
              <div className={styles.imageContainer}>
                <Image alt={"A Lexmark Copier For Sale"} src={'/6153.webp'} fill={true} />
              </div>
              <button className={styles.buttonBlue}>See Details</button>
            </div>
          </Link>
          <Link href={'/8163'}>
            <div
              style={{ padding: "12px" }}
              className={styles.copierContainer}

            >
              <h2 style={{ padding: "5px" }} className={styles.title}>Lexmark XC8163</h2>
              <div className={styles.imageContainer}>
                <Image alt={"A Konika Copier for Lease"} src={'/8163.webp'} fill={true} />
              </div>
              <button className={styles.buttonBlue}>See Details</button>
            </div>
          </Link>
          <Link href={'/9335'}>
            <div
              className={styles.copierContainer}

            >
              <h2 className={styles.title}>Lexmark XC 9335</h2>
              <div className={styles.imageContainer}>
                <Image alt={"A Epson Copiers for Lease  "} src={'/9225.webp'} fill={true} />
              </div>
              <button style={{ margin: "30px" }} className={styles.buttonBlue}>See Details</button>
            </div>
          </Link>
          <Link href={'/4143'}>
            <div
              style={{ padding: "12px" }}
              className={styles.copierContainer}

            >
              <h2 style={{ padding: "5px" }} className={styles.title}>Lexmark XC4143</h2>
              <div className={styles.imageContainer}>
                <Image alt={"A Konika Copier for Lease"} src={'/4143.webp'} fill={true} />
              </div>
              <button className={styles.buttonBlue}>See Details</button>
            </div>
          </Link>
        </div>
        <div className={styles.copierRowThin}>
          <Link href={'/5255'}>
            <div
              style={{ padding: "12px" }}
              className={styles.copierContainer}

            >
              <h2 style={{ padding: "5px" }} className={styles.title}>Lexmark XC5255</h2>
              <div className={styles.imageContainer}>
                <Image alt={"A Konika Copier for Lease"} src={'/5255.webp'} fill={true} />
              </div>
              <button className={styles.buttonBlue}>See Details</button>
            </div>
          </Link>
          
          <Link href={'/5365'}>
            <div
              style={{ padding: "12px" }}
              className={styles.copierContainer}

            >
              <h2 style={{ padding: "5px" }} className={styles.title}>Lexmark XC5365</h2>
              <div className={styles.imageContainer}>
                <Image alt={"A Konika Copier for Lease"} src={'/5365.webp'} fill={true} />
              </div>
              <button className={styles.buttonBlue}>See Details</button>
            </div>
          </Link>
          <Link href={'/7335'}>
            <div
              className={styles.copierContainer}

            >
              <h2 className={styles.title}>Lexmark XC 7355</h2>
              <div className={styles.imageContainer}>
                <Image alt={"A Epson Copiers for Lease  "} src={'/7355.webp'} fill={true} />
              </div>
              <button style={{ margin: "30px" }} className={styles.buttonBlue}>See Details</button>
            </div>
          </Link>
        </div>
        {/* <div className={`${styles.fifty} ${styles.pic}`}>
          <div className={styles.overlay}>
            <div style={{ width: "90%" }}>
              <div className={styles.titleWhite}>Why <div style={{ marginLeft: "15px", color: "rgb(1,51,93)" }} className={styles.wordBox}>Lexmark?</div><div />
              </div>
              <div className={styles.paragraph}>We take pride in offering only the most reliable copiers in the market, which is why we exclusively sell Konica Minolta, Lexmark, and Epson copiers. These brands have established themselves as industry leaders, renowned for their exceptional performance, durability, and advanced features. Konica Minolta copiers provide cutting-edge technology and unmatched print quality, ensuring that your documents are reproduced with precision. Lexmark copiers are known for their robust build, high-speed functionality, and extensive paper handling capabilities, making them a reliable choice for demanding office environments. Epson copiers offer outstanding color accuracy, energy efficiency, and user-friendly interfaces, making them an excellent option for businesses seeking top-notch printing solutions. Rest assured, with our selection of Konica Minolta, Lexmark, and Epson copiers, you'll have access to the most reliable and efficient printing equipment available.</div>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default Products
