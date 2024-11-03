import React from "react";
import { FcGoogle } from 'react-icons/fc'; // Import Google icon
import loginImage from '../assets/loginPhoto.jpg';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col sm:flex-row font-gilroy">
      {/* Left Section */}
      <section className="w-full md:w-[50%] bg-[#fff] order-2 overflow-y-auto flex-shrink-0 p-16">
        <div className="w-full">
          <div className="w-full h-full flex flex-col gap-5">
            <h2 className="font-poppins font-semibold text-2xl">SIGNUP</h2>
            <div className="w-full h-full">
              <p>EMAIL</p>
              <input
                type="text"
                className="w-full h-12 border-b-2 border-black mb-4 p-2"
              />
              <p>PASSWORD</p>
              <input
                type="password"
                className="w-full h-12 border-b-2 border-black mb-4 p-2"
              />
              <a
                href="https://www.instagram.com"
                className="text-[#525DE0] text-xs text-left block mb-4"
              >
                FORGET PASSWORD?
              </a>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-60 h-[1px] bg-[#000]"></div>
              <div className="mx-2">OR</div>
              <div className="w-60 h-[1px] bg-[#000]"></div>
            </div>
            <button className="border-2 border-accent w-full h-12 flex justify-center text-xs items-center gap-2 mb-4">
              <FcGoogle size={20} /> {/* Google Icon */}
              LOGIN WITH GOOGLE
            </button>
            <button className="bg-black text-[#FFF] w-full h-12 mb-4">
              LOGIN
            </button>
            <button onClick={() => navigate('/login')} className="text-center">
              HAVE AN ACCOUNT ALREADY. LOGIN
            </button>
          </div>
        </div>
      </section>
      {/* Right Section */}
      <section
        className="w-full md:w-[50%] h-full order-1 bg-[#FFA31A] relative overflow-hidden flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${loginImage})` }}
      >
        {/* Additional content can go here */}
      </section>
    </div>
  );
}
