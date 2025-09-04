// statData
import { FaChartLine, FaUsers } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { ReactNode } from "react";


interface StatData {
    icon: ReactNode;
    title: string;
    caseValue: string | number;
    color: string;
    isGain: boolean;
    text: string;
    percent: number;
  }

  interface RecentProp {
    id: number;
    cases: string;
    user: {
      image: string;
      name: string;
    };
    date: string;
  }

  interface priorityDataProps {
    id: number;
    alertType: "Login" | "Logout" | "Edit" | "Update" | "Create" | "Delete";
    timeStamp: string;
    status: "Credit" | "Withdrawal" | "Transfer";
  }


export const statsData: StatData[] = [
  {
    icon: <FaChartLine />,
    title: "Total Balance",
    caseValue: 89000,
    color: "green",
    isGain: false,
    text: "Down this year",
    percent: 4.3,
  },
  {
    icon: <FaUsers />,
    title: "Wallet",
    caseValue: 4500,
    color: "blue",
    isGain: true,
    text: "Up this month",
    percent: 8.5,
  },
  {
    icon: <IoTimerOutline />,
    title: "Alert Awaiting Review",
    caseValue: 500,
    color: "red",
    isGain: true,
    text: "Up from yesterday",
    percent: 1.8,
  },
  {
    icon: <LuBox />,
    title: "Cases Closed This Month",
    caseValue: 33,
    color: "yellow",
    isGain: true,
    text: "Up from past month",
    percent: 1.3,
  },
];

export const statsData2: StatData[] = [
  {
    icon: <FaChartLine />,
    title: "Total Users Created",
    caseValue: 89000,
    color: "green",
    isGain: false,
    text: "Down this year",
    percent: 4.3,
  },
  {
    icon: <FaUsers />,
    title: "New Users",
    caseValue: 45,
    color: "blue",
    isGain: true,
    text: "Up this month",
    percent: 8.5,
  },
  {
    icon: <IoTimerOutline />,
    title: "Active Sessions",
    caseValue: 500,
    color: "red",
    isGain: true,
    text: "Up from yesterday",
    percent: 1.8,
  },
  {
    icon: <LuBox />,
    title: "Total Integrations",
    caseValue: 33,
    color: "yellow",
    isGain: true,
    text: "Up from past month",
    percent: 1.3,
  },
];

//

export const priorityData: priorityDataProps[] = [
  {
    id: 1,
    alertType: "Login",
    timeStamp: "2024-11-07T09:23:00Z",
    status: "Credit",
  },
  {
    id: 2,
    alertType: "Logout",
    timeStamp: "2024-11-07T10:15:00Z",
    status: "Withdrawal",
  },
  {
    id: 3,
    alertType: "Edit",
    timeStamp: "2024-11-07T11:30:00Z",
    status: "Transfer",
  },
  {
    id: 4,
    alertType: "Update",
    timeStamp: "2024-11-07T12:45:00Z",
    status: "Withdrawal",
  },
  {
    id: 5,
    alertType: "Create",
    timeStamp: "2024-11-07T13:50:00Z",
    status: "Credit",
  },
  {
    id: 6,
    alertType: "Delete",
    timeStamp: "2024-11-07T15:05:00Z",
    status: "Credit",
  },
];

export const recentData: RecentProp[] = [
  {
    id: 1,
    cases: "Case Created",
    user: {
      image: "https://example.com/user1.jpg",
      name: "Alice Johnson",
    },
    date: "2024-11-07T09:23:00Z",
  },
  {
    id: 2,
    cases: "Case Closed",
    user: {
      image: "https://example.com/user2.jpg",
      name: "Bob Smith",
    },
    date: "2024-11-07T11:15:00Z",
  },
  {
    id: 3,
    cases: "Alert Review",
    user: {
      image: "https://example.com/user3.jpg",
      name: "Carol Lee",
    },
    date: "2024-11-07T14:30:00Z",
  },
  {
    id: 4,
    cases: "Case Created",
    user: {
      image: "https://example.com/user4.jpg",
      name: "David Kim",
    },
    date: "2024-11-08T08:00:00Z",
  },
  {
    id: 5,
    cases: "Case Closed",
    user: {
      image: "https://example.com/user5.jpg",
      name: "Eva Green",
    },
    date: "2024-11-08T10:45:00Z",
  },
  {
    id: 6,
    cases: "Alert Review",
    user: {
      image: "https://example.com/user6.jpg",
      name: "Frank White",
    },
    date: "2024-11-08T13:10:00Z",
  },
];
