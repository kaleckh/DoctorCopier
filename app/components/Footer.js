import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Footer() {
  const router = useRouter();
  return (
    <div className={styles.footer}>
      <div className={styles.smallerContainer}>
        <div className={styles.exploreContainerGood}>
          <div style={{ paddingBottom: "15px" }} className={styles.exploreContainerGood}>
            {/* <Image src={"/profile.png"} width={150} height={150} /> */}
          </div>
          <div className={styles.footerTags}>
            At Doctor Copier we promise transparent pricing
          </div>
          <div className={styles.footerTags}>
            high-quality equipment, and exceptional service
          </div>
          <div className={styles.footerTags}>
            on all new, used and refurbished copiers! Contact us
          </div>
          <div style={{ paddingBottom: "30px" }} className={styles.footerTags}>
            today!
          </div>
          <div className={styles.even}>
            <a href="https://www.linkedin.com/in/copiers-utah-5b2b85148/">
              <Image alt={'linkedin logo'} src={'/linkedin.webp'} width={20} height={20} />
            </a>
            <a href="https://twitter.com/bizinUSAok">
              <Image alt={'twitter logo'} src={'/twitter.webp'} width={20} height={20} />
            </a>
            <a href="https://www.facebook.com/copiersforlessutah/">
              <Image alt={'facebook logo'} src={'/facebook.webp'} width={20} height={20} />
            </a>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.exploreContainer}>
          <div className={styles.footerTitle}>Services</div>
          <Link href="/">
            <h4 className={styles.h4}>Home</h4>
          </Link>
          <Link href="/models">
            <h4 className={styles.h4}>Models</h4>
          </Link>
          <Link href="/lexmark">
            <h4 className={styles.h4}>Why Lexmark?</h4>
          </Link>
          <Link href="/contact">
            <div className={styles.h4}>Contact Us</div>
          </Link>          
        </div>
        <div className={styles.line}></div>
        <div className={styles.exploreContainer2}>
          <div style={{ paddingBottom: "3px" }} className={styles.footerTitle}>Contact Us</div>
          <div style={{ paddingBottom: "10px" }} className={styles.footerContainer}>
            <div style={{ fontSize: "13px", fontWeight: "200" }}>Doctor Copier</div>
            <div style={{ fontSize: "13px", fontWeight: "200" }}>We have Copiers For Sale</div>
            <div style={{ fontSize: "13px", fontWeight: "200" }}>554 W 8360 S</div>
            <div style={{ fontSize: "13px", fontWeight: "200" }}>Sandy, UT 84070</div>
          </div>
          <div >
            <div className={styles.flex}>
              <div style={{ paddingRight: "10px" }}>
                <Image alt={'phone call logo'} src={'/phone.webp'} width={15} height={15} />
              </div>
              <div style={{ fontSize: "13px", fontWeight: "200" }}>Call us at (801)-261 0510 </div>
            </div>
            <div className={styles.flex}>
              <div style={{ paddingRight: "10px" }}>
                <Image alt={'mail logo'} src={'/mail.webp'} width={15} height={15} />
              </div>
              <div style={{ fontSize: "13px", fontWeight: "200" }}>Info@copiersutah.com</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
