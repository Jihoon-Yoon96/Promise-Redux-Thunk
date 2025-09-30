import React, { useState } from "react";

// Calendar 컴포넌트가 받을 props 타입
interface CalendarProps {
  // 날짜가 선택되었을 때 실행될 콜백 함수
    id: number;
    component: React.ComponentType<any>;
    title: React.ReactNode;
    close: (result?: any) => void;
}

const Calendar = (props: CalendarProps): React.JSX.Element => {
  console.log('Calendar props', props);
    
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const daysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = (): (number | null)[][] => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = daysInMonth(month, year);
    const weeks: (number | null)[][] = [];
    let days: (number | null)[] = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let d = 1; d <= totalDays; d++) {
      days.push(d);
      if (days.length === 7) {
        weeks.push(days);
        days = [];
      }
    }
    if (days.length > 0) weeks.push(days);
    return weeks;
  };

  const handleDateClick = (day: number | null): void => {
    if (!day) return;
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth() + 1;
    const date = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    props.close(date);
    // onDateClick(date); // 부모 컴포넌트로 선택된 날짜 전달
  };

  return (
    <>
      <div className="calendar-header">
        <button
          onClick={() =>
            setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
          }
        >
          ◀
        </button>
        <span>
          {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
        </span>
        <button
          onClick={() =>
            setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
          }
        >
          ▶
        </button>
      </div>
      <table className="calendar">
        <thead>
          <tr>
            {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
              <th key={d}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {generateCalendar().map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td
                  key={j}
                  className={day ? "day" : "empty"}
                  onClick={() => handleDateClick(day)}
                >
                  {day || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Calendar;

