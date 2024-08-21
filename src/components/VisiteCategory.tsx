import { Input } from "antd";
import CategoryCard from "./CategoryCard";

function VisiteCategory() {
  const categoryData = [
    {
      type: "Handover",
      image: "",
      noData: "06",
    },
    {
      type: "Complex",
      image: "",
      noData: "03",
    },
    {
      type: "initial Delivery",
      image: "",
      noData: "01"
    },
    {
      type: "Emergency ",
      image: "",
      noData: "10",
    },
    {
      type: "Dwelling",
      image: "",
      noData: "05",
    },
    {
      type: "Payments",
      image: "",
      noData: "04",
    },
  ];
  return (
    <div className=" w-full border-b-[3px] p-[.9375rem] flex flex-col justify-center gap-[1.25rem] rounded-[.625rem] shadow-sm shadow-[#828282]  border-[#b68b3546] ">
      <div className="flex justify-between items-center">
        <div className="">
          <div className="text-[.875rem] font-[700] text-[#323438] ">
            Total no of Visits : <span className="text-[#92722A]">29</span>
          </div>
          <div className="text-[.75rem] text-[#8D8E90] ">
            Total number of visits based on each category
          </div>
        </div>

        <Input
          value={"June"}
          className="h-[1.625rem] w-[5.9375rem] border-[1px] px-[.625rem] py-[.4375rem] p-0 text-[.7rem] font-[500] border-[#CBA344] "
          readOnly
        />
      </div>
      <div className="grid grid-cols-2 gap-[.625rem] md:grid-cols-3 lg: ">
        {categoryData.map((item) => (
          <CategoryCard categoryData={item}></CategoryCard>
        ))}
      </div>
    </div>
  );
}

export default VisiteCategory;
