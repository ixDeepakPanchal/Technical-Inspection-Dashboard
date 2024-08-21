import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

interface prop {
  visitsData: {
    status: string;
    noData: string;
  };
}
function VisitesCard({ visitsData }: prop) {
  return (
    <div
      className={`grid grid-cols-7 md:grid-cols-7 sm:grid-cols-6 gap-[7px] sm:gap-[6px] xl:min-w-[160px] max-h-[120px] md:max-h-[133px] text-white  rounded-[10px] ${
        visitsData.status === "Assigned"
          ? "bg-gradient-to-r from-[#9E9AF2] to-[#464875] shadow-md shadow-[#8282823d]"
          : visitsData.status === "Active"
          ? "bg-gradient-to-r from-[#7FE995] to-[#0E6922] shadow-md shadow-[#8282823d]"
          : "bg-gradient-to-r from-[#F5AC7D] to-[#90400F] shadow-md shadow-[#f0a6786b]"
      }  p-[.9375rem] `}
    >
      <div
        className={`max-h-[40px] w-full col-span-2 sm:col-span-1 md:col-span-2   flex justify-center items-center ${
          visitsData.status === "Assigned"
            ? "bg-[#E8E6FF]"
            : visitsData.status === "Active"
            ? "bg-[#D5FDDE]"
            : "bg-[#FCE9D8]"
        }  rounded-[5px] `}
      >
        <img
          className="h-[70%] object-cover "
          src="https://s3-alpha-sig.figma.com/img/90fd/f7bb/39b67b7a7b3cbc37dbddb1bad876c4e5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzz1tmhrPULYUHqKkwtOOxiSzONhjvieuzjTCiHW3YQUVwtjw-ttaKxmFrd35Ch5ZzVzCnKgEl5yWPn-fQW8CdXdCS0rZQMdxu~aL5VtfGc54Vec5cbWz02~kGDtt7j8HrZ-wJywUWCbFGFqDSLyR3m9rl0~YvTAYaV3dIIr2BF9HgfsRrjCMmJ9zWWfQ-9DoA-N-UgkCJTtWMkLN-GGot051a5gptjwOflPwwe1EmWueSDLyQqPwPvEbUMBmUbGIRG1D970izSiCM8PhbJPW0PlPaNbg442ENiygGQAgC5V~giP1gzctaEmTB2YRhOfqfshr8OkWv2szvXyWgDGnw__"
          alt="404"
        />
      </div>

      <div className="col-span-5 flex flex-col justify-between ">
        <div className=" font-[700] text-[1rem] xl:text-[.8rem]">
          Total {visitsData.status} Visits
        </div>
        <div className=" grid grid-cols-2 items-center">
          <div className="text-[2rem] font-[700]">{visitsData.noData}</div>
          <div className="flex justify-evenly grow">
            <Link to={"/visits-card"}>
              <IoArrowForwardCircleSharp className="size-[2rem] hover:cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitesCard;

{
  /* <div className="flex   items-center"></div> */
}
