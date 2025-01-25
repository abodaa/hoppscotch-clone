"use client";

import Response from "@/components/Response";
import { useState, useRef } from "react";
import RequestTab from "@/components/RequestTab";
import RightSectionSideBar from "@/components/RightSectionSideBar";
import RightSectionContent from "@/components/RightSectionContent";
const RestRequestPage = (props) => {
  const containerRef = useRef(null);
  const [leftWidth, setLeftWidth] = useState("70%");
  const [isResizing, setIsResizing] = useState(false);

  const leftContainerRef = useRef(null);
  const [leftTopHeight, setLeftTopHeight] = useState("70%");
  const [isLeftResizing, setIsLeftResizing] = useState(false);

  const [fullResponse, setFullResponse] = useState(false);

  const startResizing = () => {
    setIsResizing(true);
  };

  const stopResizing = () => {
    setIsResizing(false);
  };

  const startLeftPaneResizing = () => {
    setIsLeftResizing(true);
  };

  const stopLeftPaneResizing = () => {
    setIsLeftResizing(false);
  };

  // Left and right horizontal Pane resizing
  const resize = (e) => {
    if (!isResizing) return;

    const container = containerRef.current;
    if (container) {
      const containerRect = container.getBoundingClientRect();
      const newLeftWidth = e.clientX - containerRect.left;

      // Enforce minimum and maximum widths
      const minWidth = 50; // Minimum width for each pane
      const maxWidth = containerRect.width - minWidth;

      if (newLeftWidth >= minWidth && newLeftWidth <= maxWidth) {
        setLeftWidth(`${(newLeftWidth / containerRect.width) * 100}%`);
      }
    }
  };

  // Left vertical Pane resizing
  const resizeLeft = (e) => {
    if (!isLeftResizing) return;

    const leftContainer = leftContainerRef.current;
    if (leftContainer) {
      const leftContainerRect = leftContainer.getBoundingClientRect();
      const newLeftHeight = e.clientY - leftContainerRect.top;

      // Enforce minimum and maximum heights
      const minHeight = 50; // Minimum height for each pane
      const maxHeight = leftContainerRect.height - minHeight;

      if (newLeftHeight >= minHeight && newLeftHeight <= maxHeight) {
        setLeftTopHeight(
          `${(newLeftHeight / leftContainerRect.height) * 100}%`
        );
      }
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className="flex h-full w-full relative"
        onMouseMove={resize}
        onMouseUp={stopResizing}
        onMouseLeave={stopResizing}
      >
        {/* Left Pane */}
        <div
          ref={leftContainerRef}
          onMouseMove={resizeLeft}
          onMouseUp={stopLeftPaneResizing}
          onMouseLeave={stopLeftPaneResizing}
          className="overflow-auto min-w-[60%]"
          style={{ width: leftWidth }}
        >
          {/* Left Top */}
          <div
            className="overflow-auto h-full"
            style={{ height: leftTopHeight }}
          >
            <RequestTab
              fullResponse={fullResponse}
              setFullResponse={setFullResponse}
            />
          </div>
          {/* Custom Resize Handle for the left section */}
          <div
            className="w-full h-[5px] bg-cardbackground cursor-row-resize transition-all duration-300 ease-in-out hover:bg-primaryaccent"
            onMouseDown={startLeftPaneResizing}
            style={{ zIndex: 10 }}
          ></div>
          {/* Left Bottom */}
          <div
            className="overflow-auto  p-4 "
            style={{ height: `calc(100% - ${leftTopHeight} - 5px)` }}
          >
            <Response
              fullResponse={fullResponse}
              setFullResponse={setFullResponse}
            />
          </div>
        </div>

        {/* Custom Resize Handle for horizontal resizing */}
        <div
          className="w-[5px] bg-cardbackground cursor-col-resize transition-all duration-300 ease-in-out hover:bg-primaryaccent"
          onMouseDown={startResizing}
          style={{ zIndex: 10 }}
        ></div>

        {/* Right Pane */}
        <div
          className="overflow-auto flex items-start justify-between gap-2 min-w-[30%]"
          style={{ width: `calc(100% - ${leftWidth} - 5px)` }}
        >
          <RightSectionSideBar />
          <RightSectionContent />
        </div>
      </div>
    </>
  );
};

export default RestRequestPage;
