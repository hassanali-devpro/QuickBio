import { Link } from "react-router-dom";
import { blog } from "../../../dummydata";

const Footer = () => {
  return (
    <>

      <footer className="bg-gray-200">
        <div className=" px-[10%] grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3  gap-8 py-10">
          <div>
          <img src="images/blog/quickl.png" className="w-40" alt="Logo" />
          <span className="text-[#71B543] text-sm pl-1">Your Health Partners</span>
            <p className="text-gray-500 mt-8 mb-4">
            In the world of cutting-edge science and accuracy, QuickBio stands as the trusted guide in diagnostic testing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-10">Explore</h3>
            <ul className="flex flex-col">
              <Link to="/about" className="mb-4">About Us</Link>
              <Link to="/contact" className="mb-4">Contact us</Link>
              <Link to="/products" className="mb-4">Products</Link>
              <Link to="/industries" className="mb-4">Industries</Link>
              <Link to="/" className="mb-4">Home</Link>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-10 ">Quick Links</h3>
            <ul className="flex flex-col">
              <Link to="/industries" className="mb-4">Industries</Link>
              <Link to="/pricing" className="mb-4">Pricing</Link>
              <Link to="/about" className="mb-4">Distribution Network</Link>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-10">Popular Products</h3>
            {blog.slice(0, 3).map((val, index) => (
              <Link to={val.link} className="flex mb-8" key={index}>
                <img
                  src={val.cover}
                  alt=""
                  className="w-12 h-12 rounded-md object-cover mr-4"
                />
                <div>
                  <h4 className="font-normal">{val.title.slice(0, 40)}...</h4>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-medium mb-10">Contact Us</h3>
            <ul>
              <li className="flex items-center mb-12">
                <i className="fa fa-map text-[#71B543] text-lg mr-4"></i>
                999 Gaoxin Hi-Tech East Rd, Xinxiang, Henan Province, China.
              </li>
              <li className="flex items-center mb-12">
                <i className="fa fa-phone-alt text-[#71B543] text-lg mr-4"></i>
                +86 42 111 111 116
              </li>
              <li className="flex items-center mb-12">
                <i className="fa fa-paper-plane text-[#71B543] text-lg mr-4"></i>
                Info@quickbiodiagnostics.com
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="text-center py-4 bg-gray-300">
        <p className="text-gray-500 text-sm">
          Copyright ©2024 All rights reserved | Design and developed By CodeVector
        </p>
      </div>
    </>
  );
};

export default Footer;
