import React, { useState } from "react";
import Login from "../Account/Login";
import Register from "../Account/Register";
import logo from "../../images/lo.svg"
import logo2 from "../../images/lo2.jpeg"
export default function Home() {
  const [selection, setSelection] = useState("login");
  return (
    <div className="shadow-xl h-full lg:h-screen">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
          alt="People working on laptops"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-red-800 to-purple-900"
          style={{ mixBlendMode: "multiply" }}
        ></div>
      </div>
      <div className="flex flex-col sm:flex-row relative items-center h-full  px-4 py-16 sm:px-6 sm:py-24 lg:py-16 lg:px-8">
        <div className="w-full">
          <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {/* <img
              className="mx-auto"
              src={logo2} style={{opacity:0.2}} 
              alt="SocioMark"
            /> */}
            <span className="block text-3xl font-bold text-indigo-200">
              The Social Media Platform We All Deserve
            </span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-center text-xl italic text-indigo-200 sm:max-w-3xl">
            SafePal is an all-new platform that lets you upload images and
            secure them with a personalized encryption. Your assets will always
            be yours!
          </p>
        </div>
        <div className="w-full">
          
          {selection === "login" ? (
            <Login
              onToggle={() => {
                setSelection("register");
              }}
            />
          ) : (
            <Register
              onToggle={() => {
                setSelection("login");
              }}
            />
            
          )}
          
        </div>
      </div>
    </div>
  );
}
