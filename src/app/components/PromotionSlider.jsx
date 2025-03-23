import React from "react";
import Image from "next/image";
import adobeImg from "../../../public/slider/adobe.svg";
import airbnb from "../../../public/slider/airbnb.svg";
import amazon from "../../../public/slider/amazon.svg";
import blom from "../../../public/slider/blom.svg";
import google from "../../../public/slider/googl.svg";
import meta from "../../../public/slider/meta.svg";
import microsoft from "../../../public/slider/microsoft.svg";
import netflix from "../../../public/slider/netflix.svg";
import spotify from "../../../public/slider/spotify.svg";
import tesla from "../../../public/slider/tesla.svg";



const PromotionSlider = () => {

    const images = [adobeImg, airbnb, amazon, blom, google, meta, microsoft, netflix, spotify, tesla];

    
  return (
    <div className="md:mt-15 mt-0 py-10 bg-white px-10">
      <h2 className="text-black md:text-3xl text-xl mx-3 md:mx-0 font-bold text-center">
        Trusted by job seekers who've landed at top companies
      </h2>
      <p className="mt-5 text-black/50 text-center text-xs mx-3 md:mx-0 md:text-xl font-light">
        Our users have secured positions at industry-leading companies such as
      </p>

      {/* Scrolling Logo Container */}
      <div className="mt-10 overflow-hidden md:block hidden">
        <marquee >
           <div className="flex flex-row items-center md:space-x-15 space-x-5">
                <Image src={adobeImg} alt="Adobe Image"/>
                <Image src={airbnb} alt="Airbnb Image"/>
                <Image src={amazon} alt="Amazon Image"/>
                <Image src={blom} alt="Blom Image"/>
                <Image src={google} alt="Google Image"/>
                <Image src={meta} alt="Meta Image"/>
                <Image src={microsoft} alt="Microsoft Image"/>
                <Image src={netflix} alt="Netflix Image"/>
                <Image src={spotify} alt="Spotify Image"/>
                <Image src={tesla} alt="Tesla Image"/>
                <Image src={adobeImg} alt="Adobe Image"/>
                <Image src={airbnb} alt="Airbnb Image"/>
                <Image src={amazon} alt="Amazon Image"/>
                <Image src={blom} alt="Blom Image"/>
                <Image src={google} alt="Google Image"/>
                <Image src={meta} alt="Meta Image"/>
                <Image src={microsoft} alt="Microsoft Image"/>
                <Image src={netflix} alt="Netflix Image"/>
                <Image src={spotify} alt="Spotify Image"/>
                <Image src={tesla} alt="Tesla Image"/>
                <Image src={adobeImg} alt="Adobe Image"/>
                <Image src={airbnb} alt="Airbnb Image"/>
                <Image src={amazon} alt="Amazon Image"/>
                <Image src={blom} alt="Blom Image"/>
                <Image src={google} alt="Google Image"/>
                <Image src={meta} alt="Meta Image"/>
                <Image src={microsoft} alt="Microsoft Image"/>
                <Image src={netflix} alt="Netflix Image"/>
                <Image src={spotify} alt="Spotify Image"/>
                <Image src={tesla} alt="Tesla Image"/>

                
           </div>
           
        </marquee>
      </div>

        <div  className="md:hidden block mx-auto items-center justify-center mt-5 md:p-0">
            <div className="grid grid-cols-3 gap-3 mx-auto place-items-center">
                <Image src={adobeImg} alt="Adobe" width={80} height={80} />
                <Image src={airbnb} alt="Airbnb" width={80} height={80} />
                <Image src={amazon} alt="Amazon" width={80} height={80} />
                <Image src={blom} alt="Blom" width={80} height={80} />
                <Image src={google} alt="Google" width={80} height={80} />
                <Image src={meta} alt="Meta" width={80} height={80} />
                <Image src={microsoft} alt="Microsoft" width={80} height={80} />
                <Image src={netflix} alt="Netflix" width={80} height={80} />
                <Image src={spotify} alt="Spotify" width={80} height={80} />
            </div>
        </div>
    </div>
  );
};

export default PromotionSlider;
