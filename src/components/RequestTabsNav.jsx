import { RiStackLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiEye } from "react-icons/fi";

export default function RequestTabsNav({
  tabs,
  activeTab,
  handleDeleteTab,
  handleAddTab,
  handleTabClick,
}) {
  return (
    <>
      <div className="flex items-center justify-between gap-3 bg-cardbackground max-w-full">
        {/* Left */}
        <div className="flex items-center gap-2">
          <div className=" flex items-center w-full max-w-[800px] overflow-x-auto">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={` group flex items-center justify-between min-w-52 px-5 cursor-pointer  border-t-2 border-x-[1px] border-[#ededed] ${
                  activeTab === index
                    ? "bg-background border-t-primaryaccent border-t-2"
                    : "bg-cardbackground transition-all duration-300 ease-in-out hover:bg-[#ededed]"
                }`}
                onClick={() => handleTabClick(index)}
              >
                <div className="flex items-center gap-2 py-3">
                  <p className="uppercase text-green-400 text-[10px] font-bold">
                    {tab.requestMethod}
                  </p>
                  <p className="text-sm text-secondarytext">{tab.title}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering tab click
                    handleDeleteTab(index);
                  }}
                  className="text-sm text-secondarytext transition-all duration-300 ease-in-out group-hover:opacity-100 opacity-0 hover:text-foreground"
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleAddTab}
            className="flex items-center justify-center w-6 h-6 rounded-md text-lg transition-all duration-300 ease-in-out hover:bg-border"
          >
            +
          </button>
        </div>
        {/* Right */}
        <div className="flex items-center justify-between border-l-2 border-border text-sm min-w-[250px] text-secondarytext">
          <div className="flex items-center justify-between px-3 py-3 w-full cursor-pointer transition-all duration-300 ease-in-out hover:text-foreground">
            <button className="flex items-center gap-2">
              <RiStackLine /> Select Environment
            </button>
            <MdKeyboardArrowDown />
          </div>
          <button className="border-l-2 border-border px-3 py-3 transition-all duration-300 ease-in-out hover:text-foreground">
            <FiEye />
          </button>
        </div>
      </div>
    </>
  );
}
