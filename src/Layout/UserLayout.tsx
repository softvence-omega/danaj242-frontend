import UserDashboardMobileNavbar from "@/pages/UserDashboard/UserDashboardMobileNavbar";
import { UserDashboardSidebar } from "@/pages/UserDashboard/UserDashboardSidebar";
import { Outlet } from "react-router-dom";

export function UserDashboardLayout() {
  return (
    <div className="h-screen flex bg-[#081028]  ">
      <aside className="hidden lg:flex lg:flex-shrink-0">
        <UserDashboardSidebar />
      </aside>

      <div className="flex flex-col flex-1 ">
        <main className="flex-1 overflow-auto">
          <div className="h-full px-4 md:px-6">
            <UserDashboardMobileNavbar />
            <div className="">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
