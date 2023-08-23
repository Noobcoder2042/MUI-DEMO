import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import { Button, Typography } from "@mui/joy";
import UI from "./UI";

const Navbar = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(to right,#110f1e, #0d0309, #110f1e, #0d0309, #0d0309, #000000)",
          marginTop: "1rem",
          display: "flex",
          padding: "8px 16px",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "10px",
          boxShadow: "0px 24px 34px 0px rgba(0, 0, 0, 0.55)",
          border: "0.5px solid #333 ",
        }}
      >
        <Tabs
          aria-label="tabs"
          value={selectedTab}
          onChange={handleTabChange}
          sx={{ bgcolor: "transparent" }}
        >
          <TabList
            disableUnderline
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "0.875rem",
              gap: "0.875rem",
              fontWeight: "bold",
              padding: "0.5rem",
              borderRadius: "1rem",
              filter: "drop-shadow(0 0 30px #333)",
              transition: "background-color 0.2s",

              "& .MuiTab-root": {
                marginRight: "20px",
                cursor: "pointer",
                color: "#fff",

                "&:hover": {
                  backgroundColor: "#208dfa", // Hover effect
                  opacity: 1,
                },
              },

              "& .Mui-selected": {
                color: "#fff",
                backgroundColor: "#2196f3", // Active tab color
                opacity: 1,
                filter: "drop-shadow(0 0 5px #111)",
                transition: "background-color 0.2s",
              },
            }}
          >
            <Typography
              sx={{
                display: "flex",
                fontSize: "16px",
              }}
            >
              <Tab disableIndicator>Feature</Tab>
              <Tab disableIndicator>Specifications</Tab>
              <Tab disableIndicator>Review</Tab>
              <Tab disableIndicator>Support</Tab>
            </Typography>
          </TabList>
        </Tabs>
        <div>
          <Button
            sx={{
              margin: "8px",
              borderRadius: "8px",
              color: "black",
              background: "#FFBC00",
              boxShadow: "0px 3px 6px #00000029",
              "&:hover": { boxShadow: "8px 8px 12px gray" },
            }}
          >
            Specifications
          </Button>
          <Button
            sx={{
              borderRadius: "8px",
              background: "#25A449",
              boxShadow: "0px 3px 6px #00000029",
              "&:hover": { boxShadow: "0px 6px 12px #00000052" },
            }}
          >
            Review
          </Button>
        </div>
      </div>
      <UI
        selectedTabName={
          selectedTab === 0
            ? "Feature"
            : selectedTab === 1
            ? "Specifications"
            : selectedTab === 2
            ? "Review"
            : "Support"
        }
      />
    </div>
  );
};

export default Navbar;
