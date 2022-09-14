import React from "react";
import Link from "next/link";
import LogoBlack from "./LogoBlack";
// import SocialLinks from "./common/SocialLinks"

export default function Footer() {
  return (
    <div className=" bg-black text-gray-100 px-4 lg:px-8  py-8 lg:py-24">
      <div className="flex flex-col lg:flex-row justify-around  items-start ">
        <div className=" flex-1">
          <div className="w-48 xl:w-64">
            <LogoBlack />
          </div>
        </div>
        <div className="flex-1  ">
          <p className="font-bold">Hitta hit</p>
          <p>
            Ystadvägen 44, 214 45 Malmö
            <br />
            info@bryggerietsgymnasium.se
            <br />
            040-320541
            <br />
          </p>
        </div>
        <div className="flex-1">
          <p className="font-bold">Sjukanmälan</p>
          <p>
            040-320541
            <br />
            <Link
              href="https://sms11.schoolsoft.se/bryggerietsgymnasium/jsp/Login.jsp"
              className="underline underline-offset-2"
            >
              Länk till Schoolsoft
            </Link>
          </p>
        </div>
        <div className=" flex-1">
          <p className="font-bold">Våra sociala medier</p>
          <div className="-ml-3">{/* <SocialLinks fill="#ffffff" /> */}</div>
        </div>
      </div>
    </div>
  );
}
