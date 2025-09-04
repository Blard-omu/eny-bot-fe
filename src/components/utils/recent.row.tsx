import { FC } from "react";
// import { FaCircleUser } from "react-icons/fa6";
import { formatDateTime } from "./helpers";
interface RecentProp {
  cases: string
  user: {
    image: string;  
    name: string;   
  };
  date: string;
  index: number;
}




const RecentTableRow: FC<RecentProp> = ({ cases, user, date, index}) => {
  
  return (
    <div
      className={`grid grid-cols-3 text-slate-400  gap-1.5 md:gap-4 p-2 border-b border-gray-200 font-thin text-xs md:text-sm text-start ${
        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
      }`}
    >
      <div className="flex items-center">{cases}</div>
      <div className="flex items-center justify-between">
        {/* <img src={user.image} alt={user.name} className="h-6 w-6 rounded-full" /> */}
        {/* <div className="rounded-full flex justify-center items-center border bg-slate-200">
          <FaCircleUser className="text-slate-400"/>
        </div> */}
        <span className="px-2">{user.name}</span>
      </div>
      <div className="text-slate-400">{formatDateTime(date)}</div>
      
    </div>
  );
};

export default RecentTableRow;
