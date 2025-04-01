import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const tileClassName = ({ date, view }) => {
    if (view === 'month' && date.getDate() === 15) {
      return 'text-red-500 text-xl';
    }
    return null;
  };

  return (
    <div>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
        className="h-ful w-full"
      />
    </div>
  );
}

export default MyCalendar;