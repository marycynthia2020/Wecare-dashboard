import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import { ChartCard, GreenCard, RoomCard, SurgeryCard } from "../components/Cards";
import BarCharts from "../components/BarCharts";
// import Calendar from "../components/Calendarjsx";
const Overview = () => {
  return (
    <div className="px-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl">Welcome back Alexandro</h1>
          <p className="text-lg opacity-70 mb-6">
            there is the latest update for the last 7 days. Check now &#9995;
          </p>
        </div>
        <div className="flex place-items-center gap-2">
          <button className="p-2 flex gap-6 outline-2 border justify-between items-center">
            <span>Last Week</span>
            <MdOutlineKeyboardArrowDown />
          </button>
          <button className="p-2 px-6 flex gap-2  text-white justify-center bg-black items-center">
          <HiOutlineArrowUpTray />
            <span>Export</span>
          </button>
        </div>
      </div>
      <div className="grid  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mb-8">
      <GreenCard />
      <ChartCard />
      <SurgeryCard />
      <RoomCard />
      </div>
      <div className="grid grid-cols-2 gap-4">
            <BarCharts />
            {/* <Calendar /> */}
      </div>
     

    </div>
  );
};

export default Overview;
