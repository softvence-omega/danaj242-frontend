import DashboardBanner from "@/components/Modules/UserDashboard/Home/DashboardBanner";

import LocationTabs from "@/components/Modules/UserDashboard/Home/HomeTabs/LocationTabs";
import SpecialSection from "@/components/Modules/UserDashboard/Home/SpecialSection/SpecialSection";
import { UserDashboardNavbar } from "../../components/Modules/UserDashboard/UserDashboardNavbar";

const UserDashboard = () => {
  return (
    <div className="mb-20">
      <UserDashboardNavbar />

      <DashboardBanner />
      <SpecialSection />
      <LocationTabs />
    </div>
  );
};

export default UserDashboard;
