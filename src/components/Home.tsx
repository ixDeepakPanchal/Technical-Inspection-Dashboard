import { FiChevronRight } from "react-icons/fi";
import InfoCardList from "./InfoCardList";
import VisiteCategory from "./VisiteCategory";
import VisiteChart from "./VisiteChart";
import VisiteMap from "./VisiteMap";
import VisitesCardList from "./VisitesCardList";

function Home() {
 
  return (
    <div className=" flex flex-col gap-[.9375rem] sm:px-8 p-4">
      <div className=" flex justify-between items-center">
        <div className="font-[700] text-[1.125rem] text-[#323438]">
          Dashboard
        </div>
        <div className="flex gap-[3px] ">
          <div className="text-[#8D8E90] text-[.75rem]">Home</div>

          <FiChevronRight className="size-[15px]  text-[#8D8E90] " />

          <div className="text-[#323438] text-[.75rem]">Dashboard</div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:flex gap-[.9375rem] ">
        <div className="flex flex-col justify-between gap-[.9375rem] ">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[.625rem] md:flex-nowrap">
            <VisitesCardList></VisitesCardList>
          </div>
          <div>
            <VisiteMap></VisiteMap>
          </div>
        </div>
        <div className="flex flex-col gap-[.9375rem]">
          <div>
            <VisiteCategory></VisiteCategory>
          </div>
          <div>
            <VisiteChart></VisiteChart>
          </div>
        </div>
      </div>
      <div>
        <InfoCardList></InfoCardList>
      </div>
    </div>
  );
}

export default Home;
