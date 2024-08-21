import { Input } from "antd";
import InfoCard from "./InfoCard";

function InfoCardList() {
  const infoData = [
    {
      name: "",
      refId: "1",
      emirates: "",
      visiterType: "",
      status: "2 days left",
    },
    {
      name: "",
      refId: "2",
      emirates: "",
      visiterType: "",
      status: "3 days delay",
    },
    {
      name: "",
      refId: "3",
      emirates: "",
      visiterType: "",
      status: "Completed",
    },
    {
      name: "",
      refId: "4",
      emirates: "",
      visiterType: "",
      status: "2 days left",
    },  {
      name: "",
      refId: "1",
      emirates: "",
      visiterType: "",
      status: "2 days left",
    },  {
      name: "",
      refId: "1",
      emirates: "",
      visiterType: "",
      status: "2 days left",
    },  {
      name: "",
      refId: "1",
      emirates: "",
      visiterType: "",
      status: "2 days left",
    },  {
      name: "",
      refId: "1",
      emirates: "",
      visiterType: "",
      status: "2 days left",
    },  {
      name: "",
      refId: "1",
      emirates: "",
      visiterType: "",
      status: "2 days left",
    },  {
      name: "",
      refId: "1",
      emirates: "",
      visiterType: "",
      status: "2 days left",
    },  {
      name: "",
      refId: "1",
      emirates: "",
      visiterType: "",
      status: "2 days left",
    },  {
      name: "",
      refId: "1",
      emirates: "",
      visiterType: "",
      status: "2 days left",
    },  {
      name: "",
      refId: "1",
      emirates: "",
      visiterType: "",
      status: "2 days left",
    },  {
      name: "",
      refId: "1",
      emirates: "",
      visiterType: "",
      status: "2 days left",
    },  {
      name: "",
      refId: "1",
      emirates: "",
      visiterType: "",
      status: "2 days left",
    },
  ];
  return (
    <div className=" border-b-[3px] p-[15px]  flex flex-col justify-center gap-[1.25rem] rounded-[.625rem] shadow-sm shadow-[#828282]  border-[#b68b3546] ">
      <div className="flex justify-between items-center">
        <div className="">
          <div className="text-[.875rem] font-[700] text-[#323438] ">
            Today’s Visits : <span className="text-[#92722A]">06</span>
          </div>
        </div>

        <Input
          value={"12-08-2024"}
          className="h-[1.625rem] w-[5.9375rem] border-[1px] px-[.625rem] py-[.4375rem] p-0 text-[.7rem] font-[500] border-[#CBA344] "
          readOnly
        />
      </div>
      <div className="grid grid-rows-1 sm:grid-cols-2  lg:grid-cols-3 gap-[.625rem]  ">
        {infoData?.map((info) => (
          <InfoCard key={info.refId} info={info}></InfoCard>
        ))}
      </div>
    </div>
  );
}

export default InfoCardList;
