import { FaCheckCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdError } from "react-icons/md";

interface prop {
  card: {
    paymentMessage: string;
    paymentStatus: string;
    amountPaid: string;
    transactionID: string;
    transactionDate: string;
    paymentMethod: string;
  };
  handleClose: (transactionID: string) => void;
}

function Card({ card, handleClose }: prop) {
  return (
    <div
      className={`h-[27.5625rem] w-[31.25rem]  rounded-2xl ${
        card.paymentStatus === "successfull"
          ? "bg-gradient-to-r from-[#57B53B] to-[#1A7200]"
          : card.paymentStatus === "failed"
          ? "bg-gradient-to-r from-[#D73B3B] to-[#BA0A0A]"
          : "bg-gradient-to-r from-[#F08130] to-[#BA4F00]"
      } flex flex-col justify-end `}
    >
      <div className="h-[98px] w-full flex justify-between pt-[1.25rem] px-[1.875rem]">
        <div
          className="h-[3.125rem] w-[18.25rem] flex flex-col text-white 
        justify-between  "
        >
          <span className="h-[1.875rem]  font-bold text-[26px] ">
            Payment {card.paymentStatus}!
          </span>
          <span className="h-[1rem] text-[.875rem]">{card.paymentMessage}</span>
        </div>
        {/* <div className="flex justify-center items-center"> */}
        {card.paymentStatus === "successfull" ? (
          <FaCheckCircle className=" text-white " size={51} />
        ) : card.paymentStatus === "failed" ? (
          <MdError className="text-white " size={60} />
        ) : (
          <FaClock className=" text-white " size={50} />
        )}
        {/* </div> */}
      </div>
      <div className=" bg-white  h-[343px] flex flex-col rounded-t-3xl rounded-b-2xl py-[1.625rem] px-[3.125rem] gap-[20px] ">
        <div className="text-[#3F3F3F] text-center text-[1rem] font-[700]">
          Transaction Details
        </div>
        <div className="flex items-center justify-between ">
          <span className="h-[1rem]  text-[.875rem] font-[700] text-[#696969]">
            Amount Paid
          </span>{" "}
          <span className="text-[1.5625rem] h-[29px]  text-[#323438] font-[900]">
            {card.amountPaid} AED
          </span>
        </div>
        <span className="bg-gradient-to-r from-[white] from-0%  via-[#92722A] via-50% to-[white] to-80% h-[1px] opacity-[.3]"></span>
        <div className="flex  items-center justify-between ">
          <div className="flex flex-col gap-[20px] ">
            <span className="h-[1rem]  font-[400] text-[.875rem] text-[#696969]">
              Transaction ID
            </span>
            <span className="h-[1rem] font-[400] text-[.875rem] text-[#696969]">
              Transaction Date
            </span>
            <span className="h-[1rem] font-[400]text-[.875rem] text-[#696969]">
              Payment Method
            </span>
          </div>
          <div className="flex flex-col gap-[20px] items-end">
            <span className="h-[1rem] font-[600] text-[.875rem] text-[#323438]">
              {card.transactionID}
            </span>
            <span className="h-[1rem] font-[600] text-[.875rem] text-[#323438]">
              {card.transactionDate}
            </span>
            <span className="h-[1rem] font-[600] text-[.875rem] text-[#323438]">
              {card.paymentMethod}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center p-3 pt-[20px]">
          <button
            className=" h-[36px] w-[100px]   border-[1px] border-[#696969] text-[#696969] text-[12px] font-[400] rounded-[4px] "
            onClick={() => {
              handleClose(card.transactionID);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
