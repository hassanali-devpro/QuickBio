import { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Head from "./Head";

const CombinedHeroHeader = ({ bgColor, heroText, welcome }) => {
  const [click, setClick] = useState(false);

  return (
    <>
      {/* Background Image with dynamic bg color */}
      <div className={`bg-[url('/images/bg.png')] ${bgColor} bg-cover bg-fixed absolute w-full h-screen z-[-1]`} ></div>

      {/* Hero Section */}
      <div className="h-screen w-full">
        {/* Navbar */}
        <Head />
        <header className={`bg-white/20 md:mx-7 ${click ? "bg-[#71B543]" : ""}`}>
          <nav className="flex justify-between items-center">
            <ul
              className={`${
                click
                  ? "flex flex-col bg-[#71B543] w-screen mt-[40%] sm:mt-[20%] py-10 absolute"
                  : "hidden md:flex md:flex-row items-center"
              }`}
              onClick={() => setClick(false)}
            >
              <li>
                <Link
                  className="text-white font-medium transition duration-500 hover:text-[#71B543] md:px-5 px-10"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-medium transition duration-500 hover:text-[#71B543] md:px-5 px-10"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-medium transition duration-500 hover:text-[#71B543] md:px-5 px-10"
                  to="/industries"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-medium transition duration-500 hover:text-[#71B543] md:px-5 px-10"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-medium transition duration-500 hover:text-[#71B543] md:px-5 px-10"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-medium transition duration-500 hover:text-[#71B543] md:px-5 px-10"
                  to="/Pricing"
                >
                  Pricing
                </Link>
              </li>
            </ul>

            {/* CTA Button */}
            <div
              className="bg-[#71B543] py-7 px-20 text-white hidden md:block"
              style={{
                clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <div className="button">GET PRODUCT</div>
            </div>

            {/* Toggle Button */}
            <button
              className="text-white text-3xl absolute right-[50px] top-[20px] md:hidden"
              onClick={() => setClick(!click)}
            >
              {click ? <i className="fa fa-times" /> : <i className="fa fa-bars" />}
            </button>
          </nav>
        </header>

        {/* Content Section */}
        <section className="px-4 lg:px-12 2xl:pt-[10%] md:pt-[5%] sm:pt-[20%] pt-[50%] text-white">
          <div className="row lg:w-[50%] md:w-[50%] sm:w-[70%] mx-[5%]">
            <div id="heading" className="text-start py-5">
              <h3 className="font-bold tracking-widest text-[#71B543 text-white uppercase text-xs sm:text-sm md:text-base lg:text-lg">
                {welcome}
              </h3>
              <TypeAnimation
                sequence={[
                  heroText, // Passing the prop value here
                  1500,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold capitalize"
              />
            </div>
            <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg">
              In the world of cutting-edge science and accuracy, QuickBio stands
              as the trusted guide in diagnostic testing.
            </p>
            <div className="button mt-6 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="cursor-pointer primary-btn bg-[#71B543] text-white font-semibold py-3 px-6 lg:py-4 lg:px-8 rounded shadow hover:shadow-none transition"
              >
                Contact Us NOW <i className="fa fa-long-arrow-alt-right ml-3 lg:ml-5"></i>
              </Link>
              <Link
                to="/products"
                className="cursor-pointer bg-white text-[#71B543] font-semibold py-3 px-6 lg:py-4 lg:px-8 rounded shadow hover:shadow-none transition"
              >
                View Products <i className="fa fa-long-arrow-alt-right ml-3 lg:ml-5"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CombinedHeroHeader;
