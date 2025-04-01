import { FaRegHospital } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineMeetingRoom } from "react-icons/md";

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  



export const GreenCard = () => {
  return (
    <div className="p-4 text-white bg-[#339488] flex flex-col gap-6 rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center ">
          <FaRegHospital />
          <p className="text-lg">Overall visitors</p>
        </div>
        <BsThreeDots />
      </div>
      <div className="flex gap-1">
        <p className="text-4xl">10.525</p>
        <span className="bg-[#66a7a0] my-auto px-1 rounded-full text-sm">+15.2%</span>
      </div>
      <p>
        Data obtained for the last 7 days form 5.67 visitors to 7,525 visitors.
      </p>
      <div className="flex items-center justify-between ">
        <div className="bg-[#116e69] rounded-full w-[60%] h-[10px] ">
          <div className="w-[70%] h-full bg-white rounded-full"></div>
        </div>
        <p>1,345 visitors</p>
      </div>
    </div>
  );
};


export const ChartCard = () => {
    return (
      <div className="p-4 bg-white flex flex-col gap-6 rounded-md shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center ">
            <FaRegHospital />
            <p className="text-lg">Total patient</p>
          </div>
          <BsThreeDots />
        </div>
        <div className="flex gap-1">
          <p className="text-4xl">5.715</p>
          <span className="bg-[#d3f7e8] my-auto px-1 rounded-full text-sm">+10.4%</span>
        </div>
        <div className="flex justify-between items-center gap-8">
        <div className="flex gap-2 w-1/2">
            <div className="bg-[#116e69] rounded-full  w-[10px] h-[40px] self-end"></div>
            <div className="bg-[#116e69] rounded-full  w-[10px] h-[60px] self-end"></div>
            <div className="bg-[#116e69] rounded-full  w-[10px] h-[100px] self-end"></div>
            <div className="bg-[#116e69] rounded-full  w-[10px] h-[50px] self-end"></div>
            <div className="bg-[#116e69] rounded-full  w-[10px] h-[80px] self-end"></div>
            <div className="bg-[#116e69] rounded-full  w-[10px] h-[40px] self-end"></div>
            <div className="bg-[#116e69] rounded-full  w-[10px] h-[90px] self-end"></div>
        </div>
        <p className=" text-lg">increase in data by 500 in patients in the last 7 days</p>
        </div>
      </div>
    );
  };


  export const SurgeryCard = () => {
    return (
      <div className="p-4 bg-white flex flex-col gap-6 rounded-md shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center ">
            <FaRegHospital />
            <p className="text-lg">Surgery</p>
          </div>
          <BsThreeDots />
        </div>
        <div className="flex gap-1">
          <p className="text-4xl">523</p>
          <span className="bg-[#d3f7e8] my-auto px-1 rounded-full text-sm">+162%</span>
        </div>
        <p>
          Data obtained for the last 7 days form 5.67 visitors to 7,525 visitors.
        </p>
        <div className="flex items-center justify-between ">
          <div className="bg-[#acadae] rounded-full w-[60%] h-[10px] ">
            <div className="w-[70%] h-full bg-[#116e69] rounded-full"></div>
          </div>
          <p>1,345 visitors</p>
        </div>
      </div>
    );
  };



export const RoomCard = () => {
    return (
      <div className="p-4  bg-white flex flex-col gap-6 rounded-md shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center ">
            <FaRegHospital />
            <p className="text-lg">Overall Rooms</p>
          </div>
          <BsThreeDots />
        </div>
        <div className="flex gap-1">
          <p className="text-4xl">225</p>
          <span className="bg-[#d3f7e8] my-auto px-1 rounded-full text-sm">+165%</span>
        </div>
        <div className="flex items-center justify-between border-b-2 pb-2">
            <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#67b2f3] text-white">
                <MdOutlineMeetingRoom />
            </div>
                <p>GeneralRooms</p>
            </div>
            <p>110</p>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#69b6a6] text-white">
                <MdOutlineMeetingRoom />
            </div>
                <p>Private Rooms</p>
            </div>
            <p>111</p>
        </div>
       
      </div>
    );
  };

 