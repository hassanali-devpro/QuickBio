import { useState } from "react";
import PropTypes from "prop-types";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="rounded-2xl bg-gray-100 px-3 shadow-2xl my-2 border-gray-200 border-2">
      <button className="flex justify-between items-center py-3 w-full" onClick={() => setAccordionOpen(!accordionOpen)} >
        <span className="lg:text-xl text-sm text-start font-semibold">{title}</span>
        <svg className="fill-[#71B543] shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg" >
          <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`} />
          <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`} />
        </svg>
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen ? "grid-rows-[1fr] opacity-100 pb-3 pl-1" : "grid-rows-[0fr] opacity-0"}`} >
        <div className="overflow-hidden lg:text-base text-sm">{answer}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Accordion;
