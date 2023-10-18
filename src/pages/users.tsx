import DefaultLayouts from "@/layouts";
import { Header } from "@/layouts/Header";
import moment from "moment";

const Users: React.FC = () => {

  const dateFormat = (value: any) => {
    if (!value) return "-";
    return moment(new Date(value)).format("DD-MM-YYYY");
  };

  console.log(dateFormat('10/10/2023'), 'date-format')

  return (
    <DefaultLayouts
      title="User List"
      className="w-full bg-gray h-full text-gray-6 overflow-auto"
    >
      <Header />
      <div className="relative w-full h-full container mx-auto p-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, odit!
      </div>
    </DefaultLayouts>
  );
};

export default Users;
