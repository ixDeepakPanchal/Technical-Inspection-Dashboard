import { Link } from "react-router-dom";

interface prop {
  info: {
    name: string;
    refId: string;
    emirates: string;
    visiterType: string;
    status: string;
  };
}
function InfoCard({ info }: prop) {
  return (
    <Link to={"/visits-info"} className="cursor-pointer">
      <div className=" rounded-[10px] shadow-sm shadow-[#817F7F] grid grid-cols-2 gap-2 border-l-[3px] border-[#CBA344] w-full  p-[.75rem]">
        <div className="flex justify-around gap-2">
          <img
            className="rounded-full size-[66px] object-top object-cover"
            src="https://s3-alpha-sig.figma.com/img/5ef6/37fd/e8f06a6eeb24875b586686c5b45123a9?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qVCRuqmM9l5NEV7tJh31wxkKSJVfUlUDtw~I8mpiFrseAoEcJPwxotGLz8ET52wNiEGmFheD6HZDYfDWTG1IVHcLCcujEMFMzwuhMxTvOGL8vfSlX2foj6twnmOVCVYPa4y1k3pJauHUizJ4L7-8ACSfJjzfcw5PFEO5V6Art-Nf5zW0gdD7~0CDtpUv6ePO5nCwQZuYkpUI3xfzBirdMr4JuZV7~d5ITDIo1eqKzeya~UWn8hzCoiNJoGa-aAlNpFs68TcHWTOYcM6KDJGYOclKyBu7WXcrHyM-Q1xPgqT0GqSHDUvd0lQmzRyUcGWXa6k6txbpKt3eAa8LwOjFeg__"
            alt=""
          />
          <div className="flex flex-col justify-center">
            <span className="sm:text-[.75rem] font-[600] text-[#323438]">
              Mohamad Hasan
            </span>
            <span className="sm:text-[.625rem] text-[.8rem] font-[500] text-[#8D8E90]">
              Ref ID : 1243yu3
            </span>
          </div>
        </div>
        <div className="flex justify-around">
          <span className="bg-gradient-to-b from-white via-[#92722A] to-white h-[62px] w-[1px] opacity-[.3]"></span>
          <div className="flex flex-col gap-[4px] ">
            <div className="flex flex-col justify-center">
              <span className="text-[#8D8E90] text-[.8rem] sm:text-[.625rem]  font-[500]">
                Emirate
              </span>

              <span className="text-[11px] text-[#323438] font-[500]">
                Alsavan ajman
              </span>
            </div>
            <div className="flex flex-col gap-0 justify-center">
              <span className=" text-[#8D8E90] text-[.8rem] sm:text-[.625rem] font-[500]">
                Visiter Type
              </span>
              <span className="text-[11px] text-[#323438] font-[500]">
                Mohamad Hasan
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative rounded-[32px] text-center py-[6px] bottom-[12px] left-[35%] h-[24px] w-[108px] text-[10px] font[500] ${
          info.status === "Completed"
            ? "bg-[#DFFFEC] text-[#00963C]"
            : info.status.includes("left")
            ? "text-[#FF8A34] bg-[#FFEFE3]"
            : "bg-[#FFEDEE] text-[#DB2E36]"
        }  `}
      >
        {info.status}
      </div>
    </Link>
  );
}

export default InfoCard;

{
  /* <span className="bg-gradient-to-b from-white via-[#92722A] to-white h-[62px] w-[1px] opacity-[.3]"></span> */
}
