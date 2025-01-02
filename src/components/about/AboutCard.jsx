import { homeAbout } from "../../dummydata";

const AboutCard = () => {
  return (
    <>
      <section className="p-[5%]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2">
            <img src="./images/strip.jpeg" alt="" className="w-full h-auto object-cover" />
          </div>
          <div className="w-full lg:w-1/2 px-6 lg:px-12">
            <div id="heading" className="text-start">
              <h3 className="font-semibold tracking-widest text-[#1eb2a6] uppercase text-sm md:text-base lg:text-lg">
                Benefits About QuickBio Testing Kits
              </h3>
              <h1 className="text-3xl md:text-4xl lg:text-5xl my-3 md:my-5 capitalize font-bold">
                QuickBio Testing kits
              </h1>
            </div>            
            <div className="mt-12 space-y-8">
              {homeAbout.map((val, index) => (
                <div className="flex items-center bg-white p-6 shadow-lg rounded-lg transition hover:bg-[#71B543] hover:text-white" key={index}>
                  <div className="w-16 h-16">
                    <img src={val.cover} alt="" className="w-full h-full" />
                  </div>
                  <div className="ml-6">
                    <h2 className="text-lg font-semibold">{val.title}</h2>
                    <p className="">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
