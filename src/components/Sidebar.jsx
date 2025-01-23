"use client";
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
    <div className="border-2 border-cardbackground flex flex-col h-screen text-secondarytext">
      {menuItems.map(({ Icon, label, route }, index) => {
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
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
}
