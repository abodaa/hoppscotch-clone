import { BsArrowReturnLeft } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";

export default function Response() {
  const items = [
    { title: "Send Request", Icon: <BsArrowReturnLeft /> },
    { title: "Keyboard Shortcuts", Icon: "/" },
    { title: "Search and Command Menu", Icon: "K" },
    { title: "Help Menu", Icon: "?" },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-end self-center justify-center mx-auto gap-3 text-xs text-secondarytext">
        {/* First */}
        {items.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <span className="text-xs">{item.title}</span>
              <span className="border-2 border-border rounded-md px-1 text-xs">
                Ctrl
              </span>
              <span className="border-2 border-border rounded-md px-1 text-xs">
                {item.Icon}
              </span>
            </div>
          );
        })}
        <button className="flex items-center gap-2 text-xs border-cardbackground border-2 py-1 px-3 rounded-md transition-all duration-300 ease-in-out hover:border-border hover:text-foreground">
          Documentation
          <TbExternalLink className="text-base" />
        </button>
      </div>
    </div>
  );
}
