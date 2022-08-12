import React from "react";

const CEOQuote = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 pb-6 mx-auto text-center lg:pb-16 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-green-500"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-2xl font-medium text-green-900">
              "Prime Real Estate is lorem ipsum, dolor sit amet consectetur
              adipisicing elit. amet consectetur adipisicing elit. Maxime, alias
              in. Eos soluta laboriosam inventore, architecto provident
              repudiandae, quibusdam qui tempore aperiam vitae iste nobis."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src="https://nyc3.digitaloceanspaces.com/memecreator-cdn/media/__processed__/ead/template-hide-the-pain-harold-938-0c6db91aec9c.jpeg"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500">
              <div className="pr-3 font-medium text-gray-900 ">John Doe</div>
              <div className="pl-3 text-sm font-light text-gray-500">
                CEO of Prime Real Estate
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default CEOQuote;
