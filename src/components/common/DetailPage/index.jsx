import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollTrigger from 'react-scroll-trigger';

const DetailPage = ({ productDetails }) => {
    const [isEnter, setIsEnter] = useState(false);

    return (
        <div className="flex flex-col w-full my-10">
            <ScrollTrigger onEnter={() => setIsEnter(true)} onExit={() => setIsEnter(false)}>
                <div className="flex lg:flex-row flex-col items-center lg:justify-between">
                    <div className={`${isEnter ? 'animate-slide-right' : 'opacity-0 translate-y-10'} transition-all duration-1000 lg:w-[50%] pl-[10%] text-start w-full`}>
                        <h1 className="text-2xl font-bold mb-4">{productDetails.title}</h1>
                        <ul className="list-disc pl-5 text-xl md:my-0 my-10">
                            {productDetails.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <img src={productDetails.image} alt="product image" className={`${isEnter ? 'animate-slide-left' : 'opacity-0 translate-y-10'} transition-all duration-1000 lg:size-[45%] rounded-3xl lg:mr-[5%]`} />
                </div>
            </ScrollTrigger>

            <div className="flex flex-col md:flex-row w-full my-10 px-[10%]">
                <div className="flex w-full md:w-[45%] justify-center">
                    <div className="text-start">
                        <h1 className="text-2xl font-bold mb-4">{productDetails.title1}</h1>
                        {productDetails.description.map((text, idx) => (
                            <p key={idx} className="mb-4">{text}</p>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-start md:mt-0 mt-10 md:w-[50%] w-full ml-[5%]">
                    {productDetails.images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`product image ${idx + 1}`}
                            className={`w-[30%] ${idx === 1 ? "mt-[10%]" : idx === 2 ? "mt-[20%]" : "mt-0"
                                }`}
                        />
                    ))}
                </div>
            </div>
            <div className="text-center mt-10">
                <Link to='/pricing' className="bg-[#71B543] text-white py-2 px-6 rounded-lg hover:bg-[#71B543] transition duration-300">
                    Contact to Buy
                </Link>
            </div>
        </div>
    );
};

export default DetailPage;
