import { FC } from "react";
import Table from "./table";
import PriorityTableRow from "./priority.row";

interface PriorityTableProps {
  headingData: string[];
  data: {
    id: number;
    alertType: "Login" | "Logout" | "Edit" | "Update" | "Create" | "Delete";
    timeStamp: string;
    status: "Credit" | "Withdrawal" | "Transfer";
  }[];
}

const PriorityTable: FC<PriorityTableProps> = ({ headingData, data }) => {
  return (
    <div className="mt-8">
      <Table columns={`grid grid-cols-3 gap-2`}>
        {/* Dynamic Header Rendering */}
        <Table.Header bgColor="">
          {headingData.length > 0 && headingData.map((heading, index) => (
            <div
              key={index}
              className="text-slate-400 font-semibold uppercase text-xs md:text-sm text-start"
            >
              {heading}
            </div>
          ))}
        </Table.Header>

        {/* Dynamic Row Rendering */}
        {data.map((t) => (
          <PriorityTableRow
            key={t.id}
            index={t.id}
            alertType={t.alertType}
            timeStamp={t.timeStamp}
            status={t.status}
          />
        ))}
      </Table>
    </div>
  );
};

export default PriorityTable;
