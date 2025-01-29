const WhoWeAre = ({ title, description }) => (
  <div className="bg-[url('/images/q1.png')] bg-no-repeat bg-left bg-contain overflow-hidden mt-10">
  <div className="bg-[url('/images/q4.png')] bg-no-repeat bg-right bg-contain overflow-hidden">
    <div className="about py-16 px-[5%]" id="about">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="capitalize text-4xl font-bold mb-8 text-[#71B543] italic">{title}</h2>
          {typeof title === "boolean" && (
            <div className="flex w-full justify-center">
              <img src="/images/why.png" alt=""/>
            </div>
          )}
          <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
  
  export default WhoWeAre;
  