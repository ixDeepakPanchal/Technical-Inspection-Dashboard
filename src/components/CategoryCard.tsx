import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
interface prop {
  categoryData: {
    type: string;
    image: string;
    noData: string;
  };
}

function CategoryCard({ categoryData }: prop) {
  return (
    <div className="grid grid-cols-3   max-h-[104px] xl:min-w-[205px] text-[#323438]  border-[1px] border-[#cba24448] rounded-[10px] bg-[#f9f7ed8c]  p-[.9375rem] gap-[.5625rem] ">
      <div className="h-[40px] md:h-[60px] w-full col-span-1 bg-[#cba24444] rounded-[5px] flex justify-center items-center">
        <img
          className="h-[65%] object-contain "
          src="https://s3-alpha-sig.figma.com/img/90fd/f7bb/39b67b7a7b3cbc37dbddb1bad876c4e5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzz1tmhrPULYUHqKkwtOOxiSzONhjvieuzjTCiHW3YQUVwtjw-ttaKxmFrd35Ch5ZzVzCnKgEl5yWPn-fQW8CdXdCS0rZQMdxu~aL5VtfGc54Vec5cbWz02~kGDtt7j8HrZ-wJywUWCbFGFqDSLyR3m9rl0~YvTAYaV3dIIr2BF9HgfsRrjCMmJ9zWWfQ-9DoA-N-UgkCJTtWMkLN-GGot051a5gptjwOflPwwe1EmWueSDLyQqPwPvEbUMBmUbGIRG1D970izSiCM8PhbJPW0PlPaNbg442ENiygGQAgC5V~giP1gzctaEmTB2YRhOfqfshr8OkWv2szvXyWgDGnw__"
          alt="404"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-between">
        <div className=" font-[600] text-[.75rem] ">
          {categoryData.type} Inspection Visits
        </div>
        <div className=" flex justify-between items-center">
          <div className=" text-[2rem] font-[700] text-[#CBA344]">
            {categoryData.noData}
          </div>
          <div className="flex justify-evenly grow items-center ">
            <Link to={"/category-card"} className="text-[.75rem]  underline hover:cursor-pointer" >
              View more
            </Link>
            <FiChevronRight className=" size-[15px]  text-[#323438] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
