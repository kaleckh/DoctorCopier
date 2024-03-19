import styles from "../styles/Headers.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from '../../public/logo.png'
// import Sliver from '../components/sliverr'
import React, { useEffect, useRef, useState, useContext } from "react";
import Image from "next/image";
// import cart from "../cart/page";
// import { CartContext } from "../../providers/cart";
export default function Header() {
  const router = useRouter();
  // const { cart, setCart, cartLook, setRealPrice } = useContext(CartContext);

  return (
    <div>
      {/* <Sliver /> */}
      <header className={styles.contactHeader}>
        <div className={styles.logoSpaceContainer}>
          <div className={styles.logoSpace}>
            <Link href={'/'}>
              {/* <div className={styles.logoContainers}>
                <Image
                  src={Logo}
                  alt="Picture of the author"
                  sizes="100vw"
                  style={{
                    width: '100%',                    
                    height: 'auto',
                  }}
                />
              </div> */}
            </Link>
            <div className={styles.pieceContainer}>
              <Link href="/">
                <div className={styles.headerPieces}>Home</div>
                <div className={styles.lineSmall}></div>
              </Link>
            </div>
            <div className={`${styles.pieceContainer}`}>
              <Link href="/models">
                <div className={styles.headerPieces}>All Models</div>
                <div className={styles.lineSmall}></div>
              </Link>
            </div>
            <div className={`${styles.pieceContainer} `}>
              <Link href="/lexmark">
                <div className={styles.headerPieces}>Why Lexmark?</div>
                <div className={styles.lineSmall}></div>
              </Link>
            </div>

            <div className={`${styles.pieceContainer} ${styles.hidden}`}>
              <Link href="/contact">
                <div className={styles.headerPieces}>Contact Us</div>
                <div className={styles.lineSmall}></div>
              </Link>
            </div>
            {/* <Link href={'/cart'}>
              <div className={styles.cartContainer}>
                <Image
                  src="/cart.webp"
                  alt="cart icon"
                  fill={true}
                />
              </div>
            </Link> */}
            <div></div>
          </div>
        </div >
        <div className={styles.line}></div>
        <div className={styles.headerContainer}>
        </div>
      </header >
    </div>
  );
}
