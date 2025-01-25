import RequestTabsNav from "./RequestTabsNav";
import TabsList from "./TabsList";
import RequestInput from "./RequestInput";
import { useState } from "react";

export default function RequestTab(props) {
  const [tabs, setTabs] = useState([
    {
      requestInput: <RequestInput setFullResponse={props.setFullResponse} />,
      tabList: <TabsList />,
      requestMethod: "GET",
      title: "Untitled",
    },
  ]);
  const [activeTab, setActiveTab] = useState(0);

  // Add tab
  const handleAddTab = () => {
    setTabs([
      ...tabs,
      {
        requestInput: <RequestInput setFullResponse={props.setFullResponse} />,
        tabList: <TabsList />,
        requestMethod: "GET",
        title: "Untitled",
      },
    ]);
    setActiveTab(tabs.length); // Set the new tab as active
  };

  // Delete Tab
  const handleDeleteTab = (index) => {
    const newTabs = tabs.filter((_, i) => i !== index);
    setTabs(newTabs);
    if (newTabs.length === 0) {
      setActiveTab(0); // Reset to 0 if no tabs left
    } else if (activeTab >= index) {
      setActiveTab(Math.min(index, newTabs.length - 1)); // Ensure valid tab is active
    }
  };

  // Set Active Tab
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <RequestTabsNav
        tabs={tabs}
        setTabs={setTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleAddTab={handleAddTab}
        handleDeleteTab={handleDeleteTab}
        handleTabClick={handleTabClick}
      />

      <div>
        <div>{tabs[activeTab]?.requestInput}</div>
        <div>{tabs[activeTab]?.tabList}</div>
      </div>
    </div>
  );
}
