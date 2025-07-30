import DashboardBanner from "@/components/Modules/UserDashboard/Home/DashboardBanner";
import { UserDashboardNavbar } from "../../components/Modules/UserDashboard/Home/UserDashboardNavbar";

const UserDashboard = () => {
  return (
    <div>
      <UserDashboardNavbar />

      <DashboardBanner />
    </div>
  );
};

export default UserDashboard;
