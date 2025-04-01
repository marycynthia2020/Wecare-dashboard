import React from "react";
import { MdOutlineMeetingRoom } from "react-icons/md";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    patients: 950,
    inpatients: 480,
    amt: 50,
  },
  {
    name: "Tuesday",
    patients: 792,
    inpatients: 493,
    amt: 100,
  },
  {
    name: "Wednesday",
    patients: 501,
    inpatients: 150,
    amt: 2290,
  },
  {
    name: "Thursday",
    patients: 800,
    inpatients: 523,
    amt: 2000,
  },
  {
    name: "Friday",
    patients: 500,
    inpatients: 150,
    amt: 2181,
  },
  {
    name: "Saturday",
    patients: 500,
    inpatients: 150,
    amt: 2500,
  },
  {
    name: "Sunday",
    patients: 280,
    inpatients: 100,
    amt: 2100,
  },
];

export default function BarCharts() {
  return (
    <div className="flex flex-col gap-4 ">
      <div>
        <div className="flex items-center gap-2 px-8">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xl text-[#67b2f3]">
            <MdOutlineMeetingRoom />
          </div>
          <p>Patient Statistics</p>
        </div>
      </div>
      <ResponsiveContainer width={"100%"} height={300} className="shadow-lg">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis domain={[50, 800]} ticks={[50, 100, 300, 500, 800]} />
          <Legend />
          <Bar dataKey="patients" fill="#237f75" activeBar={<Rectangle />} />
          <Bar dataKey="inpatients" fill="#ffd473" activeBar={<Rectangle />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
