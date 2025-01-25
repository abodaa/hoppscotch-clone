import { useState } from "react";
import { BsArrowReturnLeft, BsSearch } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { sampleData } from "../sampleSearchingData";
export default function Search(props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Handle input change
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
    } else {
      const filteredResults = sampleData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      props.onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-white/60 backdrop-blur-sm z-40 text-xs "
      onClick={handleOutsideClick}
    >
      <div className="fixed w-1/3 h-auto border-border border-[1px] rounded-lg top-20 left-1/2 -translate-x-1/2 bg-white">
        {/* Input Field */}
        <input
          placeholder="Type a command or search..."
          type="text"
          value={query}
          onChange={handleSearch}
          className="w-full p-5 text-base outline-none"
        />

        {/* Dropdown for search results */}
        {results.length > 0 ? (
          <ul className="max-h-60 overflow-y-auto border-t-[1px] border-border">
            {results.map((result, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-secondarytext px-5 py-2 cursor-pointer transition-colors duration-300 ease-in-out border-l-primaryaccent hover:text-foreground hover:border-l-2  hover:bg-cardbackground"
              >
                <GoArrowUpRight />
                {result}
              </li>
            ))}
          </ul>
        ) : query.trim() !== "" ? (
          <div className="flex flex-col items-center gap-4 border-t-[1px] border-border p-5 text-secondarytext text-center text-xs">
            <BsSearch />
            <p>Nothing found for "{query}"</p>
            <button
              onClick={() => setQuery("")}
              className="py-2 px-5 font-semibold border-[1px] border-border rounded-md"
            >
              Clear
            </button>
          </div>
        ) : null}

        {/* Footer */}
        <div className="flex items-center justify-between border-t-[1px] border-t-border bg-background p-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-cardbackground rounded-md text-secondarytext">
                <FiArrowUp className="text-xs" />
              </div>
              <div className="p-1 bg-cardbackground rounded-md text-secondarytext">
                <FiArrowDown className="text-xs" />
              </div>
              <p className="text-xs text-secondarytext">to navigate</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1 bg-cardbackground rounded-md text-secondarytext">
                <BsArrowReturnLeft className="text-xs" />
              </div>
              <p className="text-xs text-secondarytext">to select</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="uppercase text-secondarytext border-border border-[1px] text-[10px] px-1 bg-cardbackground rounded-md">
              esc
            </p>
            <p className="text-secondarytext text-xs">to close</p>
          </div>
        </div>
      </div>
    </div>
  );
}
