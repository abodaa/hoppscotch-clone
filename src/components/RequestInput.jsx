import React, { useState } from "react";
import { BiSave } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function RequestInput(props) {
  return (
    <div className="flex items-center px-2 gap-4 mt-5 text-sm">
      <div className="flex-grow flex items-center border-[1px] rounded-md border-[#e0e0e0]/50">
        <button className="flex items-center justify-between min-w-28 bg-cardbackground py-2 px-4 border-r-2 border-[#e0e0e0]/50">
          GET
          <MdKeyboardArrowDown />
        </button>
        <input
          type="text"
          placeholder="Enter a URL or paste a cURL command"
          className="w-full bg-cardbackground py-2 px-4 outline-none placeholder:text-xs placeholder:text-secondarytext"
        />
      </div>
      <button
        onClick={() => props.setFullResponse(true)}
        className="px-4 bg-primaryaccent text-background rounded-md py-2 flex items-center gap-3"
      >
        Send
        <MdKeyboardArrowDown />
      </button>
      <button className="px-4 bg-cardbackground text-secondarytext rounded-md py-2 flex items-center gap-3">
        <BiSave />
        Save
        <MdKeyboardArrowDown />
      </button>
    </div>
  );
}
