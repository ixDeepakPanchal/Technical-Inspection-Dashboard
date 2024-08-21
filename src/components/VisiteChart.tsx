import { Input } from "antd";
import Chart from "react-apexcharts";

function VisiteChart() {
  const options = {
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: false,
        columnWidth: "35",
      },
    },
    colors: ["#9894EA"],
    dataLabels: {
      enabled: false,
    },

    grid: {
      borderColor: "#e7e7e7",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    chart: { toolbar: { show: false } },
    legend: {
      show: false,
    },
    
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: [
          "#5F5F98",
          "#5F5F98",
          "#5F5F98",
          "#5F5F98",
          "#5F5F98",
          "#5F5F98",
          "#5F5F98",
          "#5F5F98",
          "#5F5F98",
          "#5F5F98",
          "#5F5F98",
          "#5F5F98",
          "#5F5F98",

        ],
        shadeIntensity: 0.5,
      },
    },
  };

  const series = [
    {
      name: "Visits",
      data: [20, 30, 40, 15, 25, 32, 12, 43, 54, 67, 53, 23],
    },
  ];

  return (
    <div className="border-b-[3px] p-[15px]  flex flex-col justify-center gap-[1.25rem] rounded-[.625rem] shadow-sm shadow-[#828282] border-[#b68b3546]">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-[.875rem] font-[700] text-[#323438]">
            Number of Field Visits : <span className="text-[#92722A]">798</span>
          </div>
          <div className="text-[.75rem] text-[#8D8E90]">
            Total number of visits based on each category
          </div>
        </div>

        <Input
          value={"2024"}
          className="h-[1.625rem] w-[5.9375rem] border-[1px] px-[.625rem] py-[.4375rem] p-0 text-[.7rem] font-[500] border-[#CBA344]"
          readOnly
        />
      </div>
      <div>
        <Chart options={options} series={series} type="bar" height={200} />
      </div>
    </div>
  );
}

export default VisiteChart;
