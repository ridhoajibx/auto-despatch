import Beer from "@/components/Icons/Beer";
import Tables from "@/components/tables/server/Tables";
import DefaultLayouts from "@/layouts";
import { Header } from "@/layouts/Header";
import moment from "moment";

const Datalog: React.FC = () => {
  const dateFormat = (value: any) => {
    if (!value) return "-";
    return moment(new Date(value)).format("DD-MM-YYYY");
  };

  console.log(dateFormat("10/10/2023"), "date-format");

  return (
    <DefaultLayouts
      title="Data Log"
      className="w-full bg-gray h-full text-gray-6 overflow-auto"
    >
      <Header />
      <div className="relative w-full h-full container mx-auto p-4">
        <div className="w-full bg-white p-4 rounded-lg">
          <Tables />
        </div>
      </div>
    </DefaultLayouts>
  );
};

export default Datalog;
