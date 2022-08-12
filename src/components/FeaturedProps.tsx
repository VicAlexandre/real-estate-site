import PropCard from "./PropCard";
import SeeMore from "./SeeMore";

interface Property {
  propName: string;
  propDescription: string;
  propRooms: number;
  propBathrooms: number;
  propPrice: string;
  propImage: string;
}

interface PropertyList {
  PropertiesList: Property[];
}

const FeaturedProps = (props: PropertyList) => {
  return (
    <section>
      <h3 className=" text-3xl text-gray-500 flex justify-center p-10 mt-5 ">
        Featured Properties
      </h3>

      <article className="space-x-4 flex justify-center">
        {props.PropertiesList.map((item) => {
          return <PropCard {...item} />;
        })}
      </article>
      <SeeMore />
    </section>
  );
};

export default FeaturedProps;
