import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, LayoutDashboard, Plus, Settings, Upload } from "lucide-react";
import { useState } from "react";

const sidebarItems = [
  {
    title: "MY SCNE",
    items: [
      {
        title: "Home",
        icon: Home,
        href: "/dashboard",
        isActive: true,
      },
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard/overview",
        isActive: false,
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
        isActive: false,
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
        isActive: false,
      },
    ],
  },
];

export function UserDashboardSidebar() {
  const [activeItem, setActiveItem] = useState("/dashboard");

  return (
    <div
      className={cn(
        "flex h-full w-64 flex-col bg-[#1e3a8a] border-r border-white/10",
        activeItem === "/dashboard" ? "bg-white/10" : "bg-white/5 text-white"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#1e3a8a] font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-lg">SCNE</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-auto py-6">
        <nav className="space-y-6 px-4">
          {sidebarItems.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 px-2 text-xs font-semibold text-white/70 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeItem === item.href;
                  return (
                    <li key={item.title}>
                      <button
                        onClick={() => setActiveItem(item.href)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {item.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* New Campaign Button */}
      <div className="p-4 border-t border-white/10">
        <Button className="w-full bg-[#47B5FF] hover:bg-[#3BA3E8] text-white font-medium">
          <Plus className="h-4 w-4 mr-2" />
          New Campaign
        </Button>
      </div>
    </div>
  );
}
