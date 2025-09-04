import { FC, useEffect, useState } from "react";
import StatCard from "./stat.card";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineSchedule } from "react-icons/md";
import "react-loading-skeleton/dist/skeleton.css";

// Simulated mock stats (you can later replace with fetched API data)
const mockStats = {
  totalMentors: 120,
  totalMentees: 340,
  activeSessions: 45,
  sessionsCompleted: 280,
};

const DashboardStats: FC = () => {
  const [statsData, setStatsData] = useState([
    {
      icon: <FaChalkboardTeacher />,
      title: "Total Mentors",
      caseValue: 0,
      color: "green",
      text: "Up 5% this month",
    },
    {
      icon: <FaUserGraduate />,
      title: "Total Mentees",
      caseValue: 0,
      color: "blue",
      text: "Steady growth",
    },
    {
      icon: <MdOutlineSchedule />,
      title: "Active Sessions",
      caseValue: 0,
      color: "red",
      text: "Live right now",
    },
    {
      icon: <IoIosPeople />,
      title: "Completed Sessions",
      caseValue: 0,
      color: "yellow",
      text: "This quarter",
    },
  ]);

  useEffect(() => {
    setStatsData(prevStats => {
      const updatedStats = [...prevStats];
      updatedStats[0] = { ...updatedStats[0], caseValue: mockStats.totalMentors };
      updatedStats[1] = { ...updatedStats[1], caseValue: mockStats.totalMentees };
      updatedStats[2] = { ...updatedStats[2], caseValue: mockStats.activeSessions };
      updatedStats[3] = { ...updatedStats[3], caseValue: mockStats.sessionsCompleted };
      return updatedStats;
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          caseValue={stat.caseValue}
          color={stat.color}
          text={stat.text}
        />
      ))}
    </div>
  );
};

export default DashboardStats;
