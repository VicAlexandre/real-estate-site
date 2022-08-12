import React from "react";

interface CityCardProps {
  city: number;
}

const CityCard = (props: CityCardProps) => {
  const cities = [
    {
      cityName: "New York City",
      cityDescription: "The Big Apple",
      cityImg: "https://fenwayhealth.org/wp-content/uploads/1-1.jpg",
    },
    {
      cityName: "Los Angeles",
      cityDescription: "The City of Angels",
      cityImg:
        "https://www.wallpapers4u.org/wp-content/uploads/los_angeles_skyscrapers_sunrise_mountains_horizon_63011_1920x1080.jpg",
    },
    {
      cityName: "Chicago",
      cityDescription: "The Windy City",
      cityImg:
        "https://media.gettyimages.com/videos/wide-shot-of-famous-chicago-skyline-at-magic-hour-in-united-states-video-idsfw21890018?s=640x640",
    },
    {
      cityName: "Texas",
      cityDescription: "The Big D",
      cityImg:
        "https://assets.dmagstatic.com/wp-content/uploads/2016/03/PupleSkyline_MNS2616.jpg",
    },
    {
      cityName: "Newark",
      cityDescription: "The Brick City",
      cityImg:
        "https://media.istockphoto.com/photos/newark-new-jersey-picture-id183047841?k=20&m=183047841&s=612x612&w=0&h=DfXrWlBB906inub29mxEox4wE_MHsgHbj9h_NzWEA8I=",
    },
    {
      cityName: "Albuquerque",
      cityDescription: "The Duke City",
      cityImg:
        "https://media.istockphoto.com/photos/albuquerque-downtown-cityscape-new-mexico-usa-picture-id1218491785?k=20&m=1218491785&s=612x612&w=0&h=4ovkj0G8JOIq-jQkE9Y2MtCyWDXlqcdSVmWwkMr9wJk=",
    }
  ];

  return (
    <article className="shadow-lg w-[90%] bg-white mx-auto hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150">
      <img src={cities.at(props.city)?.cityImg} className="w-full h-[20rem]" />
      <h3 className="text-center text-3xl font-bold py-4 text-green-700">
        {cities.at(props.city)?.cityName}
      </h3>
      <h4 className="text-center text-green-500 text-xl">
        {cities.at(props.city)?.cityDescription}
      </h4>
      <p className="p-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
        consectetur a, nemo soluta laboriosam possimus ducimus distinctio
        pariatur similique ratione cum cupiditate, vitae, ad facilis nulla
        cumque tempora perspiciatis suscipit.
      </p>
    </article>
  );
};

export default CityCard;
