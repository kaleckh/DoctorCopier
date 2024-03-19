"use client"
import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Section from "../app/components/Section";
import Doctor from '../public/doctor.webp'
// import Section from "../app/components/Section";
import Header from "./components/Header";
import Link from "next/link";
import styles from "./styles/homepage.module.css";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
export default function Data() {

  const [name, setName] = useState("");
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const [email, setEmail] = useState("");
  const [toggle, setToggle] = useState(true);
  const [number, setNumber] = useState("");
  const [images, setImages] = useState({
    imageOne: true, imageTwo: false, imageThree: false, imageFour: false
  })
  const [message, setMessage] = useState("this is the test message");
  const tawkMessengerRef = useRef();
  const captchaRef = useRef(null);
  const onLoad = () => {
    console.log("onLoad works!");
  };
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const router = useRouter();
  var verifyCallback = function (response) {
    setRecaptchaResponse(response);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending");

    fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: "api-DC44EBDEE45411ED847EF23C91C88F4E",
        to: [`<info@copiersutah.com>`],
        sender: "<info@copiersutah.com>",
        subject: `This is${name}'s quote form. Their number is ${number}`,
        text_body: `${message}`,
        html_body: `<h1>${message}</h1>`,
        template_id: "5120871",
        template_data: {
          message: message,
          number: number,
          name: name,
        },
      }),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log("Response succeeded!");
        // setSubmitted(true);
        // setName("");
        // setEmail("");
        // setBody("");
      }
    });
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setImages({
        imageOne: images.imageFour,
        imageTwo: images.imageOne,
        imageThree: images.imageTwo,
        imageFour: images.imageThree,
      });
    }, 8000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [images.imageOne, images.imageTwo, images.imageThree, images.imageFour]);
  console.log(images, "images")

  return (
    <div className={styles.main}>
      <TawkMessengerReact
        onLoad={onLoad}
        propertyId="5abd4931d7591465c7090c65"
        widgetId="default"
        useRef={tawkMessengerRef}
      />
      <Header />
      <div className={styles.secondSection}>
        <div className={styles.flexSomething}>
          <div className={styles.flex}>
            <div className={styles.mainContainer}>
              <div className={styles.buttonCenter}>
                <div className={styles.bubble}>
                  Doctor Copier Welcomes You
                </div>
              </div>
              <h1>
                <div className={styles.homepageTitle}>
                  Buy or Lease a Copier
                </div>
              </h1>
              <div className={styles.paragraphSmall}>
                We provide a variety of high-quality copiers for your business needs. Whether you buy or lease, our cutting-edge solutions will boost your office efficiency to new heights.
              </div>
              <div className={styles.buttonCenter}>
                <Link href={'/contact'}>
                  <button className={styles.buttonBlue}>Get A Quote Now</button>
                </Link>
              </div>
            </div>

            <div className={styles.displayNone}>
              <div className={styles.showing}>
                <div className={styles.bigImage}>
                  <Image
                    src={Doctor}
                    alt="Picture of the author"
                    sizes="100vw"
                    style={{
                      borderRadius:"10px",
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fourthSection}>
          <div>
            <div className={styles.titleBig}>Our Favorite Products
              <div className={styles.blue}>For You</div>
            </div>
          </div>
          <div className={styles.copierRow}>

            <Link href={'/6153'}>
              <div

                className={styles.copierContainer}
              >
                <h2 className={styles.title}>Lexmark XC 6153</h2>
                <div className={styles.imageContainerSmall}>
                  <Image alt={"lexmark copier for sale"} src={'/6153.webp'} fill={true} />
                </div>
                <button className={styles.buttonBlue}>See Details</button>
              </div>
            </Link>
            <Link href={'/8163'}>
              <div

                className={styles.copierContainer}

              >
                <h2 className={styles.title}>Lexmark XC 8163</h2>
                <div className={styles.imageContainerSmall}>
                  <Image
                    src="/8163.webp"
                    alt="konika minolta copier"
                    fill={true}
                  />
                </div>
                <button className={styles.buttonBlue}>See Details</button>
              </div>
            </Link>
            <Link href={'/9335'}>
              <div
                className={styles.copierContainer}

              >
                <h2 className={styles.title}>Lexmark XC 9335</h2>
                <div className={styles.imageContainerSmall}>
                  <Image
                    src="/9335.webp"
                    alt="Epson copier"
                    fill={true}
                  />
                </div>
                <button className={styles.buttonBlue}>See Details</button>
              </div>
            </Link>
          </div>

        </div>
        <div className={`${styles.sectionMedium} ${styles.hideBox} `}>
          <div className={styles.image1}>
            <div className={styles.titleSmallWhite}>What We Do</div>
            <div className={styles.paragraphNormal}>Doctor Copier offers new copiers sales, leases and rentals. Plus, we run Utah's leading copier rebuild center for top-notch refurbished copiers. Our skilled technicians can repair nearly any copier brand. For cutting-edge IT services, check out our sister company, Alien IT Services. Your one stop solution for quality and expertise. </div>
          </div>
          <div className={styles.image2}>
            <div className={styles.titleSmallWhite}>Our Promise</div>
            <div className={styles.paragraphNormal}>We uphold the highest standards of integrity in our products and services. Our copier rebuild service agreements encompass all toner, parts and on-site repairs, and a first year replacement gurantee. When you choose us, rest assured your copier will operate seamlessly in your office, providing you with complete peace of mind.</div>
          </div>
        </div>
        <div style={{ paddingTop: "80px" }} className={styles.section}>
          <div style={{ width: "55%" }} className={styles.imageContainerParagraph}>
            <Image
              src="/buy.webp"
              alt="cartoon image of woman using copier"
              width={400}
              height={400}
            />
            <Link href={'/buy'}>
              <button style={{ marginBottom: "70px" }} className={styles.buttonBlue}>Learn More</button>
            </Link>
          </div>
          <div className={styles.sectionContainer}>
            <div className={styles.paragraphTitle}>Copiers And Printers</div>
            <div className={styles.paragraphMedium}>Welcome to Doctor Copier, your ultimate destination for comprehensive copier solutions in the heart of Utah. Whether you're looking for copiers for sale, leasing options, or convenient short-term copier rentals, we've got you covered. Our shelves boast a diverse selection of top-notch copiers from renowned brands such as Lexmark, Konica Minolta, and Epson, ensuring you'll find the perfect fit for your specific business requirements.</div>
            <div className={styles.paragraphMedium}>Encountering issues with your copier? No need to worry. Our dedicated team of skilled technicians is committed to maintaining your machines in peak condition through expert repair and maintenance services. We understand the challenges of running a business, and we're here to ensure your copiers keep up with the fast-paced demands.</div>
            <div className={styles.paragraphMedium}>At Doctor Copier, we don't just provide products; we deliver a promise of quality and reliability. Our mission is to offer not only top-tier copiers but also unparalleled service, with all copier rentals and sales. Whether you're seeking a long-term copier solution or a quick fix, count on us for our extensive expertise and unwavering dedication to meeting your copier needs.</div>
          </div>
        </div>
        <div style={{ flexDirection: "row-reverse", width: "100vw", backgroundColor: "rgb(224 224 224)", padding: "30px" }} className={styles.section}>
          <div style={{ width: "55%", paddingTop: "30px" }} className={styles.imageContainerParagraph}>
            <Image
              src="/itWork.png"
              alt="cartoon image of man using computer"
              width={400}
              height={400}
            />
            <Link href={'https://www.alienitservices.com/'} target="_blank">
              <button style={{ marginBottom: "70px" }} className={styles.buttonBlue}>Learn More</button>
            </Link>

          </div>
          <div className={styles.sectionContainer}>
            <div className={styles.paragraphTitle}>Managed It Services And Support</div>
            <div className={styles.paragraphMedium}>Welcome to Alien IT Services, your trusted provider of easy IT support and managed IT services in Utah. From comprehensive network security to proactive approaches in ransomware protection and secure setup, we offer a range of expert IT services tailored to streamline your digital solutions. Our reliable support team is dedicated to ensuring efficient data management and secure collaboration for Utah businesses. With a strong focus on cloud computing and backup and restore solutions, Alien IT Services is your go-to partner for all things IT.</div>
            <div className={styles.paragraphMedium}>At Alien IT Services, we believe in taking a proactive approach to IT solutions. Our comprehensive range of services includes technical support, printer support, and software and app support for businesses in Utah. We specialize in ensuring network efficiency and secure data management, offering reliable support and fix for broken hardware when you need it most. With a strong focus on delivering expert IT services and reliable support, Alien IT Services is committed to providing top-notch digital solutions for businesses in the Utah area.  </div>
            <div className={styles.paragraphMedium}>In the fast-paced world of technology, having a reliable IT support system is crucial for Utah businesses. Alien IT Services offers a wide range of IT solutions, including managed IT services and network security, tailored to meet the specific needs of local businesses. Our skilled team specializes in delivering secure collaboration and efficient data management, ensuring seamless operations and secure setup. With a strong emphasis on delivering expert IT services and reliable support, Alien IT Services is committed to providing tailored digital solutions for businesses in the heart of Utah.</div>
          </div>
        </div>
      </div >
      <Section />
      <Footer />
    </div >
  );
}
