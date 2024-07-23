import React from "react";
import { FooterData1 } from "../../DataForPage/dummyData";
import { FooterData2 } from "../../DataForPage/dummyData";
import { FooterData3 } from "../../DataForPage/dummyData";
import logo from "../../assets/images/logo.svg";
import googlePlay from "../../assets/images/google-play.svg";
import appleStore from "../../assets/images/apple-store.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="grid items-center grid-cols-4 gap-0 sm:grid-cols-2 justify-items-center">
        <div className="h-64 pl-24 mx-auto sm:w-full sm:pl-8">
          <div>
            <img className="h-10 cursor-pointer" src={logo} alt="logo"></img>
          </div>
          <div className="mt-5">
            <img
              className="h-8 cursor-pointer"
              src={appleStore}
              alt="apple-store"
            ></img>
          </div>
          <div className="mt-5">
            <img
              className="h-8 cursor-pointer"
              src={googlePlay}
              alt="apple-store"
            ></img>
          </div>
        </div>
        <div className="h-64 sm:pr-4">
          <h3 className="text-lg font-medium tracking-wide no-underline normal-case align-middle text-dark font-inter">
            Features
          </h3>
          {FooterData1.map((item) => {
            return (
              <div key={item.id}>
                <p className="font-normal tracking-wide no-underline normal-case align-middle cursor-pointer text-dark font-inter text-md">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="h-64 sm:pr-8">
          <h3 className="text-lg font-medium tracking-wide no-underline normal-case align-middle text-dark font-inter">
            Features
          </h3>
          {FooterData2.map((item) => {
            return (
              <div key={item.id}>
                <p className="font-normal tracking-wide no-underline normal-case align-middle cursor-pointer text-dark font-inter text-md">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="h-64 sm:pl-8">
          <h3 className="text-lg font-medium tracking-wide no-underline normal-case align-middle text-dark font-inter">
            Features
          </h3>
          {FooterData3.map((item) => {
            return (
              <div key={item.id}>
                <p className="font-normal tracking-wide no-underline normal-case align-middle cursor-pointer text-dark font-inter text-md">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <hr className="w-4/5 h-px bg-gray-400 border-none outline-none opacity-50 sm:w-full" />
      </div>
      <div className="flex items-center justify-around py-6">
        <div>
          <p className="pb-2 font-medium tracking-wide no-underline normal-case align-middle cursor-pointer sm:text-sm text-dark font-inter">
            AxeL
          </p>
        </div>
        <div>
          <p className="pb-2 font-light tracking-wide no-underline normal-case align-middle cursor-pointer sm:text-xs text-dark font-inter">
            Copyright {year} page by Shehan web Dev
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
