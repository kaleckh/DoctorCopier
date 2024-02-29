"use client";
import React, { useRef, useEffect, useContext } from "react";
import Header from "../components/Header";
import Head from "next/head";
import Link from "next/link";

// import Footer from "./footer/page";
// import BreadCrumbs from "../components/Breadcrumbs";
import Image from "next/image";
import { PatternFormat } from "react-number-format";
import styles from "../styles/copier.module.css";
// import { useRouter } from "next/router";
import Footer from '../components/Footer'
import ReCAPTCHA from "react-google-recaptcha";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useState } from "react";
const Home = () => {
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const tawkMessengerRef = useRef();
  const [gray, setGray] = useState(true);
  //const { cart, setCart } = useContext(CartContext);
  const [grayBottom, setGrayBottom] = useState(true);
  const [brandDescription, setBrandDescription] = useState();
  const [quote, setQuote] = useState(false);
  const [model, setModel] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [type, setType] = useState();
  const [timeOut, setTimeOut] = useState();
  const [printSpeed, setPrintSpeed] = useState();
  const [paperSize, setpaperSize] = useState();
  const [modelNumber, setModelNumber] = useState();
  const [lastBullet, setLastBullet] = useState();
  const [almostLastBullet, setAlmostLastBullet] = useState();
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const onLoad = () => {
    console.log("onLoad works!");
  };
  var verifyCallback = function (response) {
    setRecaptchaResponse(response);
  };
  const captchaRef = useRef(null);
  useEffect(() => {
    const storedModel = localStorage.getItem("Model");
    const photo = localStorage.getItem("Image");
    const time = localStorage.getItem("timeOut");
    const back = localStorage.getItem("type");
    const speed = localStorage.getItem("PagesPerMinute");
    const modelNumber = localStorage.getItem("modelNumber");
    const paperSize = localStorage.getItem("paperSize");
    const desc = localStorage.getItem("description");
    setModel(storedModel);
    setImage(photo);
    setType(back);
    setPrintSpeed(speed);
    setModelNumber(modelNumber);
    setpaperSize(paperSize);
    setTimeOut(time);
    setDescription(desc);

    if (localStorage.getItem("brand") === "lexmark") {
      setBrandDescription(
        "Lexmark, formerly an IBM company, had produced hands down the most reliable machines ever built. Their modular construction ensures the most efficient paper path in the industry. Independent BLI testing proved their top copier models performing with only 1 jam after 1,000,000 copies tested. Their dominant 85% of the market share in pharmacuetical and medical establishments is a testament to their unrivaled reliability"
      );
      setLastBullet(
        " Known for their fast print speeds and efficient performance."
      );
      setAlmostLastBullet(
        "Durability and reliability: Lexmark copiers are built to withstand heavy use and are known for their reliability, reducing downtime and ensuring consistent performance."
      );
    } else if (localStorage.getItem("brand") !== "lexmark") {
      setLastBullet(
        "High-quality output: Konica Minolta copiers are known for delivering exceptional print quality with sharp text and vibrant images."
      );
      setBrandDescription(
        "Konica Minolta offers the top color quality output in the industry. These machines are built to last with minimal disruption. With up to 12x18 paper sizes standard, there is nothing your office cannot do with these copiers."
      );
      setAlmostLastBullet(
        "Energy efficiency: Konica Minolta copiers are designed with energy-saving features, helping businesses reduce their environmental footprint and save on energy costs."
      );
    }
  }, []);
  const breadCrumbs = [
    { name: "Home", url: "/" },
  ]
  return (
    <div className={styles.main}>
      <div>
        <TawkMessengerReact
          onLoad={onLoad}
          propertyId="5abd4931d7591465c7090c65"
          widgetId="default"
          useRef={tawkMessengerRef}
        />
      </div>
      <Header />
      {/* <BreadCrumbs breadCrumbs={breadCrumbs} /> */}
      <div className={styles.section}>
        <div className={styles.copierContainer}>
          <Image alt={"lexmark 8160"} src={`/9335.webp`} width={300} height={300} />
          <div className={styles.rowSpace}>
            <div className={styles.thick}>Model:</div>
            <div>Lexmark XC9335</div>
          </div>
        </div>
        <div className={styles.centerMain}>
          <h1 className={styles.title}>Lexmark XC 9335</h1>
          <div className={styles.bulletPoint}>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>Print speeds at 52 per minute</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>largest Print size is 8.5 in x 14.0 in</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>First page out time is 7 Seconds</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>exceptional print quality with sharp text and vibrant images.</div>
            </div>
          </div>

          <div className={styles.fifty}>
            {/* <Link href={'/cart'}>
              <button onClick={() => {
                const updatedCart = [
                  ...cart,
                  { title: "6153", price: 10, quantity: 10, id: 1, image: "/6153.webp" }
                ]
                setCart(updatedCart)
              }} className={styles.button}>Add To Cart</button>
            </Link> */}
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.sectionSmall}>
          
          <div>Konica Minolta offers the top color quality output in the industry. These machines are built to last with minimal disruption. With up to 12x18 paper sizes standard, there is nothing your office cannot do with these copiers.</div>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.lineSmall}></div>
      </div>

      {/* <div className={styles.centerBox}>
        <div style={{ paddingBottom: "10px" }} className={styles.titleThin}>Our Select Reliable Choices</div>
        <div className={styles.titleSmall}>(Our favorite options)</div>
        <div className={styles.grid}>
          <div className={styles.flex}>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.titleMed}>
                  Our Favorite Black And White option
                </div>
                <div>
                  <Image alt={"lexmark xc62152"} src={"/xc6152.webp"} height={250} width={250} />
                </div>
                <div className={styles.titleSmall}>Lexmark XC6152</div>
                <div className={styles.buttonContainer1}>
                  <Link className={styles.aFlex} href={"/6152"}>
                    <button className={styles.button1}>See Details</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.titleMed}>
                  Our Favorite Desktop Printer
                </div>
                <div>
                  <Image alt={"lexmark xc8160"} src={'/8160.webp'} height={250} width={200} />
                </div>
                <div className={styles.titleSmall}>Lexmark XC6152</div>
                <div className={styles.buttonContainer1}>
                  <Link href={"/6152"}>
                    <button className={styles.button1}>See Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.titleMed}>
                  Our Favorite  And White Option
                </div>
                <div>
                  <Image alt={"lexmark xc6152"} src={"/xc6152.webp"} height={250} width={250} />
                </div>
                <div className={styles.titleSmall}>Lexmark XC8163</div>
                <div className={styles.buttonContainer1}>
                  <Link href={"/6152"}>
                    <button className={styles.button1}>See Details</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.titleMed}>
                  Our Favorite  And White Option
                </div>
                <div>
                  <Image alt={"lexmark xc6152"} src={"/8163.webp"} height={250} width={250} />
                </div>
                <div className={styles.titleSmall}>Lexmark XC6152</div>
                <div className={styles.buttonContainer1}>
                  <Link href={"/6152"}>
                    <button className={styles.button1}>See Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.centerBoxRow}>
        <div className={styles.container}>
          <h2 className={styles.black}>Get Your free Quote!</h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "80%",
              alignItems: "center",
            }}
          >
            <div className={styles.space}>

              <input
                style={{ outline: "none", backgroundColor: "transparent", border: "1px solid rgb(210,210,210)", borderRadius: "5px", padding: "15px", width: "100%", margin: "5px" }}

                className={styles.inputSingle}
                placeholder="Full name"
                type="text"
                name=""
                id=""
                required={true}
              // onChange={() => {
              //   setName(event.target.value);
              // }}
              />
              <input
                style={{ outline: "none", backgroundColor: "transparent", border: "1px solid rgb(210,210,210)", borderRadius: "5px", padding: "15px", width: "90%", margin: "5px" }}
                className={styles.inputSingle}
                placeholder="Email"
                type="text"
                name=""
                id=""
                required={true}
              // onChange={() => {
              //   setEmail(event.target.value);
              // }}
              />
            </div>
            <div className={styles.space}>

              <PatternFormat
                format="+1 (###) ### ####"
                allowEmptyFormatting
                mask="_"
                className={styles.phoneNumber}
                onChange={(event) => {
                  setNumber(event.target.value);
                }}
              />
            </div>

            <div className={styles.space}>

              <input
                style={{ outline: "none", backgroundColor: "transparent", border: "1px solid rgb(210,210,210)", borderRadius: "5px", padding: "15px", width: "90%" }}
                onChange={() => {
                  setMessage(event.target.value);
                }}
                className={styles.inputSingle}
                placeholder="Comments"
                type="text"
              />
            </div>
          </div>
          <div
            style={{ height: "25%", display: "flex" }}
            className={styles.padding}
          >
            <ReCAPTCHA
              style={{
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
              }}
              className="recaptcha"
              sitekey={"6LdNLYElAAAAAIMv324AxwjVLAnHHIdnIWPEYeQi"}
              ref={captchaRef}
              onChange={verifyCallback}
            />
          </div>
          <button
            onClick={(e) => {
              // setQuoteToggle(!quoteToggle);
              // sendEmail(e);
            }}
            className={styles.buttonBlue}
          // disabled={!toggle}
          >
            Get My Quote
          </button>
        </div>
        <div className={styles.mobileNone}>
          <Image alt={"handshake"} src={'/handshake.webp'} height={600} width={500} />
        </div>
      </div>
      <div className={styles.centerBoxColumn}>
        <div style={{ padding: "20px" }} className={styles.title}>About Copiers Arizona</div>
        <Image alt={"copiers arizona team"} style={{ borderRadius: "5px" }} src={'/team.webp'} height={450} width={350} />
        <div className={styles.paragraphContainerMed}>
          <div className={styles.paragraphNo}>

            At Copiers Arizona, we are dedicated to providing businesses in Arizona with reliable copiers that deliver exceptional performance. That's why we have partnered exclusively with Lexmark, a trusted industry leader known for their dependable office equipment. With our strong focus on reliability, you can trust that our selection of Lexmark copiers will meet and exceed your expectations.</div>
        </div>
        <div className={styles.paragraphContainerMed}>
          <div className={styles.paragraphNo}>

            With Lexmark's renowned dependability, our copiers ensure smooth and uninterrupted operations for your business. Whether you need a compact desktop printer or a powerful multifunction device, our range of reliable Lexmark models is designed to handle your printing and copying needs with ease. You can count on our copiers to consistently deliver high-quality results, minimizing downtime and maximizing productivity in your office.</div>
        </div>
        <div className={styles.paragraphContainerMed}>
          <div className={styles.paragraphNo}>

            Choose Copiers Arizona and Lexmark for unrivaled reliability in your office. Contact us today to explore our range of reliable copiers and discover the difference they can make in your business operations.</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
