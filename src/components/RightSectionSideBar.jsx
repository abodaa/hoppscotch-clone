"use client";
import { Tooltip } from "react-tooltip";

import { CiFolderOn } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import { MdOutlineShare } from "react-icons/md";
import { IoIosCode } from "react-icons/io";

import Link from "next/link";

import { usePathname } from "next/navigation";
export default function Sidebar() {
  const pathName = usePathname();

  const menuItems = [
    { Icon: CiFolderOn, label: "Collections", route: "#" },
    { Icon: GoStack, label: "Environmnents", route: "#" },
    { Icon: MdAccessTime, label: "History", route: "#" },
    { Icon: MdOutlineShare, label: "Shared Requests", route: "#" },
    { Icon: IoIosCode, label: "Generate Code", route: "#" },
  ];

  return (
    <div className="border-2 w-fit border-cardbackground flex flex-col h-screen text-secondarytext">
      {/* Tooltip component */}
      <Tooltip id="menu-tooltip" place="left" type="dark" effect="float" />
      {menuItems.map(({ Icon, label, route }, index) => {
        const isActive = pathName === route;
        return (
          <Link
            href={route}
            key={index}
            className={`p-3 text-xl transition-colors duration-300 ease-in-out ${
              isActive
                ? "text-primaryaccent"
                : "hover:text-foreground text-secondarytext"
            }`}
            data-tooltip-id="menu-tooltip"
            data-tooltip-content={label}
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
}
