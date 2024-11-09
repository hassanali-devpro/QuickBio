import { blog } from "../../../dummydata";

const Footer = () => {
  return (
    <>

      <footer className="bg-gray-200">
        <div className=" px-[10%] grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3  gap-8 py-10">
          <div>
          <img src="/favicon.png" className="w-40" alt="Logo" />
          <span className="text-[#71B543] text-sm pl-1">Your Health Partners</span>
            <p className="text-gray-500 mt-8 mb-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-10">Explore</h3>
            <ul>
              <li className="mb-4">About Us</li>
              <li className="mb-4">Services</li>
              <li className="mb-4">Courses</li>
              <li className="mb-4">Blog</li>
              <li className="mb-4">Contact us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-10">Quick Links</h3>
            <ul>
              <li className="mb-4">Contact Us</li>
              <li className="mb-4">Pricing</li>
              <li className="mb-4">Terms & Conditions</li>
              <li className="mb-4">Privacy</li>
              <li className="mb-4">Feedbacks</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-10">Popular Products</h3>
            {blog.slice(0, 3).map((val, index) => (
              <div className="flex mb-8" key={index}>
                <img
                  src={val.cover}
                  alt=""
                  className="w-12 h-12 rounded-md object-cover mr-4"
                />
                <div>
                  <h4 className="font-normal">{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-medium mb-10">Contact Us</h3>
            <ul>
              <li className="flex items-center mb-12">
                <i className="fa fa-map text-[#71B543] text-lg mr-4"></i>
                United States Of America
              </li>
              <li className="flex items-center mb-12">
                <i className="fa fa-phone-alt text-[#71B543] text-lg mr-4"></i>
                UAN: +92 42 111 111 116
              </li>
              <li className="flex items-center mb-12">
                <i className="fa fa-paper-plane text-[#71B543] text-lg mr-4"></i>
                Info@QuickBio.com
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="text-center py-4 bg-gray-300">
        <p className="text-gray-500 text-sm">
          Copyright ©2024 All rights reserved | A Product of Eastern Group
        </p>
      </div>
    </>
  );
};

export default Footer;
