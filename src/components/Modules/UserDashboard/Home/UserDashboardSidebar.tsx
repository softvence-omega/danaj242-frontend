import CommonDashboardButton from "@/common/CommonDashBoardButton";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Home, LayoutDashboard, Plus, Settings, Upload } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png";
const sidebarItems = [
  {
    title: "MY SCNE",
    items: [
      {
        title: "Home",
        icon: Home,
        href: "/dashboard",
      },
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard/metrics",
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Campaign Management",
        icon: Settings,
        href: "/dashboard/campaigns",
      },
    ],
  },
  {
    title: "Media",
    items: [
      {
        title: "My Uploads",
        icon: Upload,
        href: "/dashboard/uploads",
      },
    ],
  },
];

export function UserDashboardSidebar() {
  const [activeItem, setActiveItem] = useState("/dashboard");

  return (
    <div
      className={cn("flex h-full w-80 flex-col px-4 border-r border-[#283F81]")}
    >
      <div className="flex h-12 px-6 mt-8   items-center  ">
        <div className="w-fit h-12   ">
          <Link to="/">
            <img src={logo} alt="logo" className="w-full h-full" />
          </Link>
        </div>
      </div>

      <div className="  mt-10 ">
        <nav className="space-y-10  px-4">
          {sidebarItems.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 px-2  text-[#C3CEE9] text-lg font-semibold  uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeItem === item.href;
                  return (
                    <li key={item.title}>
                      <Link to={item.href}>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setActiveItem(item.href)}
                          className={cn(
                            "flex w-full items-center gap-3 text-nowrap hover:text-[#38B6FF] cursor-pointer text-left rounded-lg px-3  text-base  transition-colors",
                            isActive ? "text-[#38B6FF]" : " text-[#AEB9E1] "
                          )}
                        >
                          <Icon className="h-4 w-4 " />
                          {item.title}
                        </motion.button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="px-6  mt-10">
        <Link to="/new-campaign">
          {" "}
          <CommonDashboardButton title="New Campaign" Icon={Plus} />
        </Link>
      </div>
    </div>
  );
}
