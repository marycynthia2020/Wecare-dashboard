import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useState } from "react";
import { MdOutlineMeetingRoom } from "react-icons/md";

function MyCalendar() {
  const [selected, setSelected] = useState();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex items-center gap-2 px-8">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xl text-[#67b2f3]">
            <MdOutlineMeetingRoom />
          </div>
          <p>Calendar</p>
        </div>
      </div>

      <DayPicker
        animate
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={selected ? `Selected: ${selected.toLocaleDateString()}` : ""}
      />
    </div>
  );
}

export default MyCalendar;
