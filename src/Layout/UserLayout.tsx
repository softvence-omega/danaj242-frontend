import { UserDashboardNavbar } from "@/pages/UserDashboard/UserDashboardNavbar";
import { UserDashboardSidebar } from "@/pages/UserDashboard/UserDashboardSidebar";
import { Outlet } from "react-router-dom";

export function UserDashboardLayout() {
  return (
    <div className="h-screen flex  ">
      <aside className="hidden md:flex md:flex-shrink-0">
        <UserDashboardSidebar />
      </aside>

      <div className="flex flex-col flex-1 ">
        <UserDashboardNavbar />

        <main className="flex-1 overflow-auto">
          <div className="h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
