import { BiTrash } from "react-icons/bi";
import { BsQuestionCircle, BsStars } from "react-icons/bs";
import { MdOutlineWrapText } from "react-icons/md";

export default function PreTestScriptAndTest(props) {
  const iconList = [
    <BsQuestionCircle />,
    <BiTrash />,
    <MdOutlineWrapText />,
    <BsStars />,
  ];
  return (
    <div className="h-full">
      <div className="flex items-center justify-between py-2 px-2">
        <p className=" text-sm text-secondarytext">{props.title}</p>
        <div className={`flex items-center gap-2 text-secondarytext text-lg`}>
          {iconList.map((icon, index) => {
            return (
              <button
                key={index}
                className={`transition-all duration-300 ease-in-out ${
                  index === 2 ? "text-primaryaccent" : ""
                }  ${
                  index === 2
                    ? "hover:text-primaryaccent"
                    : "hover:text-foreground"
                }`}
              >
                {icon}
              </button>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-3 border-t-[1px] border-t-border">
        {/* <button className="min-w-12"></button> */}
        <textarea
          placeholder="JavaScript Code"
          type="text"
          className=" col-span-2 w-full h-[100%] outline-none px-4 border-l-[1px] border-l-border py-2 text-sm resize-none"
        />
        <div className="w-full outline-none px-4 border-l-[1px] border-border py-1  text-secondarytext text-xs overflow-auto">
          <p>{props.top}</p>
          <div className="mt-4 flex flex-col gap-2">
            {props.snippets.map((snippet, index) => {
              return <p key={index}>{snippet}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
