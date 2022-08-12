import ViewProperty from "./ViewProperty";

interface Property {
  propName: string;
  propDescription: string;
  propRooms: number;
  propBathrooms: number;
  propPrice: string;
  propImage: string;
}

const PropCard = ({
  propName,
  propDescription,
  propRooms,
  propBathrooms,
  propPrice,
  propImage,
}: Property) => {
  return (
    <div
      className="rounded-lg shadow-lg w-[32%] hover:-translate-y-1 
    hover:scale-105 transition ease-in-out delay-150 pb-[2%]"
    >
      <img src={propImage} alt="" className="" />
      <div className="p-5 font-bold text-gray-500 text-xl">
        <h1>{propName}</h1>
      </div>
      <p className="px-5 pb-5">{propDescription}</p>
      <div className="text-green-400 font-semibold pl-5 pb-5 text-lg">
        ${propPrice}
      </div>
      <div className="flex space-x-1 pl-5 py-5">
        <div className="bg-gray-200 py-1 px-3 mb-5 rounded-full">
          {propRooms} Bedrooms
        </div>
        <div className="bg-gray-200 py-1 px-3 mb-5 rounded-full">
          {propBathrooms} Toilets
        </div>
        <div className="bg-gray-200 py-1 px-3 mb-5 rounded-full">
          Pool Included
        </div>
      </div>
      <ViewProperty/>
    </div>
  );
};

export default PropCard;
