import Accordion from "./Accordion";
import { Questions } from "../../dummydata";

const FAQ = () => {
  return (
    <div className=" bg-gradient-to-r from-[#71B543] to-[#e6e6e6] md:pr-[5%]  grid md:grid-cols-2 items-center"> 
      <img className=" rounded-r-full w-[90%] h-[99%] shadow-2xl" src="/images/mark.jpeg" alt="" />
      <div className="flex flex-wrap px-[5%] py-10 ">
        { Questions.map((items,key) => { return(
          <Accordion
          title={items.question}
          answer={items.answer}
          key={key}
        />
        )})
        
      }
      </div>
    </div>
  );
};

export default FAQ;
