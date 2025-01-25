"use client";
import { Tooltip } from "react-tooltip";

import { MdInsertLink } from "react-icons/md";
import { BiLogoGraphql } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

import Link from "next/link";

import { usePathname } from "next/navigation";
export default function Sidebar() {
  const pathName = usePathname();

  const menuItems = [
    { Icon: MdInsertLink, label: "Home", route: "/" },
    { Icon: BiLogoGraphql, label: "Favorites", route: "/favorites" },
    { Icon: CiGlobe, label: "Watchlist", route: "/watchlist" },
    { Icon: CiSettings, label: "Community", route: "/community" },
  ];
  return (
    <div className="border-2 border-cardbackground flex flex-col h-screen text-secondarytext z-30">
      {/* Tooltip component */}
      <Tooltip id="sidebar-menu-tooltip" place="right" />
      {menuItems.map(({ Icon, route, label }, index) => {
        const isActive = pathName === route;
        return (
          <Link
            href={route}
            key={index}
            className={`p-3 text-xl ${
              isActive
                ? "border-primaryaccent border-l-2 text-foreground bg-cardbackground"
                : "hover:bg-cardbackground text-secondarytext"
            }`}
            data-tooltip-id="sidebar-menu-tooltip"
            data-tooltip-content={label}
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
}
