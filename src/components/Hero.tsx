import SeeProperty from "./SeeProperty";

const Hero = () => {
  return (
    <section className=" mx-auto px-4 sm:mt-12 sm:px-6 lg:px-8">
      <div className="text-9xl font-bold text-center text-gray-500 py-[3%]">
        Premium properties,
        <div className="text-green-500 pt-1">Non-premium prices.</div>
        <div className="text-2xl pt-[5%]">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p className="text-green-500">
            Placeat aut temporibus consectetur ut, similique odit distinctio
            optio?
          </p>
        </div>
      </div>
      <div className="mt-5 sm:mt-8 sm:flex justify-center font-bold text-xl">
        <SeeProperty />
        <div className="m-3 rounded-md shadow-md w-[17rem]">
          <a
            href="#"
            className="bg-green-100 text-green-700 px-14 py-5 flex justify-center rounded-md hover:bg-green-200"
          >
            Explore cities
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
