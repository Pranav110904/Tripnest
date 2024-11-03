import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="bg-black px-4  rounded-t-3xl">
        <div className="flex flex-col md:flex-row">
          <section className="w-full md:w-[40%] flex flex-col justify-center gap-3 items-center">
            <img src="/src/assets/logowhite.svg" alt="logo" className="w-32 md:w-auto" />
            <pre className="font-gilroy text-white text-lg md:text-xl font-extralight text-center">
              Army Institute of Technology,<br />
              Alandi Rd, Dighi, Pune,<br />
              Maharashtra 411015
            </pre>
          </section>
          <section className="w-full md:w-[60%] flex flex-col gap-10 pt-10 md:pt-20 items-center md:items-start">  
            <p className='font-gilroy text-white font-semibold text-5xl md:text-9xl text-center md:text-left'>
              TRAVEL<br />
              WITH US!!
            </p>

            <div className="flex flex-col md:flex-row items-center w-full">
              <input
                type="text"
                placeholder="Enter the mail id"
                className="border rounded-md px-3 py-2 w-full md:w-[60%] mr-2 mb-2 md:mb-0"
              />
              <input
                type="submit"
                value="Submit"
                className="px-4 py-2 border border-[#575454] text-white font-semibold rounded-md hover:bg-[#0c0c0d] cursor-pointer"
              />
            </div>
          </section>
        </div>
        <hr className="border-t border-gray-600 my-4" /> {/* Bottom line */}
        <div className="flex justify-between text-white text-sm  py-2">
          <span>© 2024 Your Company Name</span>
          <div className="flex space-x-4">
            <a href="/terms" className="hover:underline">Terms and Conditions</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/cookies" className="hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
