import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const Vertical = ({ title, text, image, isEven }) => {
    const [isEnter, setIsEnter] = useState(false);

    return (
        <ScrollTrigger
            onEnter={() => setIsEnter(true)}
            onExit={() => setIsEnter(false)}
            className={`${isEnter ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
        >
            <div className={`flex flex-col gap-5 md:justify-between md:flex-row ${isEven ? "md:flex-row-reverse" : ""} items-center py-8 px-4 md:px-[8%]`}>
                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center h-[70vh] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 mt-4 md:mt-0 text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
                    <p className="text-gray-600">{text}</p>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default Vertical;
