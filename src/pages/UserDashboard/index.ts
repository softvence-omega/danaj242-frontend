import { Calculator, Eye, Home, LayoutDashboard, MapPin, Settings, Upload } from "lucide-react";

export const navItems = [
    {
        title: "See Locations",
        icon: MapPin,
        href: "/dashboard/locations",
    },
    {
        title: "Cost Estimator",
        icon: Calculator,
        href: "/dashboard/estimator",
    },
    {
        title: "Map of Boards",
        icon: Eye,
        href: "/dashboard/map",
    },
];

export const sidebarItems = [
    {
        title: "MY SCNE",
        items: [
            {
                title: "Dashboard",
                icon: LayoutDashboard,
                href: "/dashboard",
            },
            {
                title: "Home",
                icon: Home,
                href: "/",
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
