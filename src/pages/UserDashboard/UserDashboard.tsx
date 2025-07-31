import DashboardBanner from "@/components/Modules/UserDashboard/Home/DashboardBanner";
import SpecialSection from "@/components/Modules/UserDashboard/Home/SpecialSection";
import { UserDashboardNavbar } from "../../components/Modules/UserDashboard/UserDashboardNavbar";

const UserDashboard = () => {
  return (
    <div>
      <UserDashboardNavbar />

      <DashboardBanner />
      <SpecialSection />
    </div>
  );
};

export default UserDashboard;
