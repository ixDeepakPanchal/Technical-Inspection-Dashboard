import { Input } from "antd";
import map from "../assets/map.png";

function VisiteMap() {
  return (
    <div className="lg:max-h-[486px] lg:min-w-[560px] border-b-[3px] p-[15px]  flex flex-col justify-center gap-[1.25rem] rounded-[.625rem] shadow-sm shadow-[#828282]  border-[#b68b3546] ">
      <div className="flex justify-between items-center">
        <div className="">
          <div className="text-[.875rem] font-[700] text-[#323438] ">
            Scheduled Visits Master Map :{" "}
            <span className="text-[#92722A]">30</span>
          </div>
          <div className="text-[.75rem] text-[#8D8E90] ">
            Location of scheduled visits
          </div>
        </div>

        <Input
          value={"All"}
          className="h-[1.625rem] w-[5.9375rem] border-[1px] px-[.625rem] py-[.4375rem] p-0 text-[.7rem] font-[500] border-[#CBA344] "
          readOnly
        />
      </div>
      <div className=" ">
        <img className="w-full max-h-[404px] object-cover" src={map} alt="" />
      </div>
    </div>
  );
}

export default VisiteMap;
