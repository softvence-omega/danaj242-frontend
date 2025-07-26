"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Calculator,
  ChevronDown,
  Eye,
  LogOut,
  MapPin,
  Menu,
  MessageCircle,
  User,
} from "lucide-react";
import { useState } from "react";
import { UserDashboardSidebar } from "./UserDashboardSidebar";

export function UserDashboardNavbar() {
  const userName = "Danaj";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
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
    {
      title: "Live Chat",
      icon: MessageCircle,
      href: "/dashboard/chat",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1e3a8a] text-white">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left side - Mobile menu + Greeting */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-white/10"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-64 p-0 bg-[#1e3a8a] border-r border-white/10"
            >
              <UserDashboardSidebar />
            </SheetContent>
          </Sheet>

          {/* Greeting */}
          <div className="flex items-center">
            <h1 className="text-lg md:text-xl font-medium">
              Hey, <span className="text-[#47B5FF]">{userName}</span>.
            </h1>
          </div>
        </div>

        {/* Center - Navigation Items (Hidden on mobile) */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.title}
                variant="ghost"
                size="sm"
                className="text-white/80 hover:text-white hover:bg-white/10 font-medium"
              >
                <Icon className="h-4 w-4 mr-2" />
                {item.title}
              </Button>
            );
          })}
        </nav>

        {/* Right side - User menu */}
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-white hover:bg-white/10"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <span className="hidden sm:inline font-medium">{userName}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-white">
              <DropdownMenuItem className="cursor-pointer">
                <User className="h-4 w-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-red-600">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="lg:hidden border-t border-white/10">
        <nav className="flex overflow-x-auto px-4 py-2 space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.title}
                variant="ghost"
                size="sm"
                className="text-white/80 hover:text-white hover:bg-white/10 font-medium whitespace-nowrap flex-shrink-0"
              >
                <Icon className="h-4 w-4 mr-2" />
                {item.title}
              </Button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
