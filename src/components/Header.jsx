import { AiOutlineDownload } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { LuCloudUpload } from "react-icons/lu";
import { HiOutlineSupport } from "react-icons/hi";

export default function Header() {
  return (
    <div className="flex items-center text-sm justify-between px-4 py-2 border-b-2 border-cardbackground">
      {/* Logo sectio*/}
      <button className="uppercase font-semibold py-2 px-3 rounded-md transition-all duration-300 ease-in-out hover:bg-cardbackground">
        hoppscotch
      </button>
      {/* Search section */}
      <div className="flex items-center gap-2 w-full max-w-[400px] text-secondarytext">
        <div className="flex items-center justify-between w-full bg-cardbackground rounded-md p-2 cursor-text transition-all duration-300 ease-in-out hover:bg-[#f5f5f5]/60">
          <div className="flex items-center gap-2">
            <IoSearch className="text-lg" />
            <p className="text-xs font-semibold">Search</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="border-2 border-border rounded-md px-1 text-xs">
              Ctrl
            </p>
            <p className="border-2 border-border rounded-md px-1 text-xs">K</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-3xl">
          <AiOutlineDownload className="cursor-pointer p-1 rounded-md transition-all duration-300 ease-in-out hover:bg-cardbackground hover:text-foreground" />
          <HiOutlineSupport className="cursor-pointer p-1 rounded-md transition-all duration-300 ease-in-out hover:bg-cardbackground hover:text-foreground" />
        </div>
      </div>
      {/* Login section */}
      <div className="flex items-center capitalize gap-2 text-xs">
        <button className="hidden items-center gap-2 border-green-100 border-2 px-4 py-2 font-bold rounded-md bg-green-100/35 text-green-600 md:flex">
          <LuCloudUpload className="text-lg " />
          Save My Workspace
        </button>
        <button className="px-4 py-2 bg-primaryaccent rounded-md text-background font-bold">
          Login
        </button>
      </div>
    </div>
  );
}
