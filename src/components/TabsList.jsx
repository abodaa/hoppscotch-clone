import { useState } from "react";
import ParameterAndHeaders from "./ParameterAndHeaders";
import PreTestScriptAndTest from "./PreTestScriptAndTest";
export default function TabsList(props) {
  const [activeTab, setActiveTab] = useState(0);

  const requestTabsListNav = [
    "Parameters",
    "Body",
    "Headers",
    "Authorization",
    "Pre-request Script",
    "Tests",
  ];

  const parametersTabIndex = requestTabsListNav.indexOf("Parameters");
  const headersTabIndex = requestTabsListNav.indexOf("Headers");
  const preRequestTabIndex = requestTabsListNav.indexOf("Pre-request Script");
  const testsTabIndex = requestTabsListNav.indexOf("Tests");
  const bodyTabIndex = requestTabsListNav.indexOf("Body");
  const authorizationTabIndex = requestTabsListNav.indexOf("Authorization");

  const handleTabClick = (index) => setActiveTab(index);

  const getSnippets = () => {
    if (activeTab === preRequestTabIndex) {
      return [
        "Environment: Set an environment variable",
        "Tests: Test",
        "Tests: Test",
        "Tests: Test",
        "Tests: Test",
        "Tests: Test",
        "Tests: Test",
      ];
    }
    if (activeTab === testsTabIndex) {
      return [
        "Environment: Set an environment variable",
        "Environment: Set timestamp variable",
        "Tests: Set random number variable",
      ];
    }
    return [];
  };

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="flex items-center justify-between overflow-auto text-sm px-4 text-secondarytext border-b-2 border-cardbackground">
        <div className="flex items-center">
          {requestTabsListNav.map((navItem, index) => (
            <button
              key={index}
              className={`py-4 px-4 ${
                activeTab === index
                  ? "text-foreground border-b-2 border-primaryaccent"
                  : "text-secondarytext transition-all duration-300 ease-in-out border-b-2 border-cardbackground border-opacity-0 hover:text-foreground"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {navItem}
            </button>
          ))}
        </div>
        <button className="text-secondarytext transition-all duration-300 ease-in-out hover:text-foreground">
          Variables
        </button>
      </div>

      {/* Conditional Rendering of Content */}
      {activeTab === parametersTabIndex || activeTab === headersTabIndex ? (
        <ParameterAndHeaders
          title={
            activeTab === parametersTabIndex
              ? "Query Parameters"
              : "Header List"
          }
        />
      ) : null}

      {activeTab === preRequestTabIndex || activeTab === testsTabIndex ? (
        <PreTestScriptAndTest
          title="JavaScript Code"
          top="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, accusamus."
          snippets={getSnippets()}
        />
      ) : null}

      {activeTab === authorizationTabIndex || activeTab === bodyTabIndex ? (
        activeTab === authorizationTabIndex ? (
          <p>AUTHORIZATION</p>
        ) : (
          <p>BODY</p>
        )
      ) : null}
    </div>
  );
}
