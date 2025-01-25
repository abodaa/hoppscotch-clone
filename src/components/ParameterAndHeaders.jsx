import { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { IoAdd, IoTrashBinOutline } from "react-icons/io5";
import { MdCheckCircle } from "react-icons/md";

export default function ParameterAndHeaders(props) {
  const [rows, setRows] = useState([
    { key: "", value: "", description: "", checked: false }, // Initial row with `checked` field
  ]);

  const handleFocus = (index) => {
    if (index === rows.length - 1) {
      setRows([
        ...rows,
        { key: "", value: "", description: "", checked: false },
      ]); // Add a new row
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = rows.map((row, rowIndex) =>
      rowIndex === index ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  const handleToggleCheck = (index) => {
    const updatedRows = rows.map((row, rowIndex) =>
      rowIndex === index ? { ...row, checked: !row.checked } : row
    );
    setRows(updatedRows);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(updatedRows);
  };

  const iconList = [<BsQuestionCircle />, <BiTrash />, <BiEdit />, <IoAdd />];

  return (
    <div>
      <div className="flex items-center justify-between py-2 px-2">
        <p className="text-sm text-secondarytext">{props.title}</p>
        <div className="flex items-center gap-2 text-secondarytext text-lg">
          {iconList.map((icon, index) => (
            <button
              key={index}
              className="transition-all duration-300 ease-in-out hover:text-foreground"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
      {/* Dynamic Rows */}
      {rows.map((row, index) => (
        <div
          key={index}
          className="flex items-center border-y-[1px] border-y-border"
        >
          <button className="min-w-12"></button>
          <input
            placeholder="Key"
            type="text"
            value={row.key}
            onFocus={() => handleFocus(index)}
            onChange={(e) => handleInputChange(index, "key", e.target.value)}
            className="w-full outline-none px-4 border-l-[1px] border-border py-1 text-sm"
          />
          <input
            placeholder="Value"
            type="text"
            value={row.value}
            onFocus={() => handleFocus(index)}
            onChange={(e) => handleInputChange(index, "value", e.target.value)}
            className="w-full outline-none px-4 border-l-[1px] border-border py-1 text-sm"
          />
          <input
            placeholder="Description"
            type="text"
            value={row.description}
            onFocus={() => handleFocus(index)}
            onChange={(e) =>
              handleInputChange(index, "description", e.target.value)
            }
            className="w-full outline-none px-4 border-l-[1px] border-border py-1 text-sm"
          />
          <button
            className={`shrink-0 px-4 border-l-[1px] border-border py-1 ${
              row.checked ? "text-secondaryaccent" : "text-secondarytext"
            }`} // Change color based on `checked` state
            onClick={() => handleToggleCheck(index)}
          >
            <MdCheckCircle />
          </button>
          <button
            className="shrink-0 px-4 border-l-[1px] border-border py-1 text-error"
            onClick={() => handleDeleteRow(index)}
          >
            <IoTrashBinOutline />
          </button>
        </div>
      ))}
    </div>
  );
}
