import { useState } from 'react';
import { blog } from "../../dummydata";
import { Link } from 'react-router-dom';

const Hblog = ({ isShow }) => {
  const [showAll, setShowAll] = useState(false);  // State to manage showing all or fewer items

  // Conditionally show either all items or the first 6, based on isShow prop
  const visibleItems = isShow ? (showAll ? blog : blog.slice(0, 6)) : blog;

  const handleToggleItems = () => {
    setShowAll(!showAll);  // Toggle between showing all and showing fewer items
  };

  return (
    <section className='bg-gray-100 px-[10%] pb-[10%]'>
      <div className=''>
        <div id="heading" className="text-center py-10">
          <h3 className="font-semibold tracking-widest text-[#1eb2a6] uppercase">Our Products</h3>
          <h1 className="text-4xl md:text-5xl my-5 capitalize">QuickBio Popular Products</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {visibleItems.map((val, index) => (
            <div className='shadow-md bg-white p-4 cursor-pointer hover:shadow-2xl transition-transform transform hover:-translate-y-2' key={index}>
              <div className='mb-4'>
                <img src={val.cover} alt='' className='w-full h-auto' />
              </div>
              <div className='text mb-5'>
                <div className='flex justify-between mb-2'>
                  <span className='flex items-center'>
                    <i className="fa fa-check-circle mr-2 text-[#71B543]"></i>
                    <label>{val.com}</label>
                  </span>
                </div>
                <h1 className='text-xl font-semibold'>{val.title}</h1>
                <p className='text-base leading-7'>{val.desc}</p>
              </div>
              <Link to="/contact" className="bg-[#71B543] text-white py-2 px-3 rounded-lg hover:bg-[#71B543] transition duration-300">Get Quotation</Link>
            </div>
          ))}
        </div>

        {/* Conditionally render the Show More/Show Less button based on the isShow prop */}
        {isShow && (
          <div className="text-center mt-10">
            <button 
              onClick={handleToggleItems} 
              className="bg-[#71B543] text-white py-2 px-6 rounded-lg hover:bg-[#71B543] transition duration-300">
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hblog;
