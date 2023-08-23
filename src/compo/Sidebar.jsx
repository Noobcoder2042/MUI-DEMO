import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import HourglassFullRoundedIcon from "@mui/icons-material/HourglassFullRounded";
import CollectionsBookmarkRoundedIcon from "@mui/icons-material/CollectionsBookmarkRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";

const Sidebar = ({ children }) => {
  const menus = [
    { name: "Home", icon: <HomeRoundedIcon /> },
    { name: "Financials", icon: <SavingsRoundedIcon /> },
    { name: "Analytics", icon: <BarChartRoundedIcon /> },
    { name: "Timeline", icon: <HourglassFullRoundedIcon />, margin: true },
    { name: "Directory", icon: <CollectionsBookmarkRoundedIcon /> },
    { name: "Files", icon: <FolderRoundedIcon /> },
    { name: "Account", icon: <AccountCircleRoundedIcon />, margin: true },
    { name: "Rewards", icon: <CardGiftcardRoundedIcon /> },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenuItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <section style={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          height: "100vh",
          width: 245,
          "& .MuiDrawer-paper": {
            width: 245,
            padding: "1rem",
            // borderRadius: "1rem",
            border:"1px solid black",
            background:
              "linear-gradient(to top, #0d0309, #110f1e, #0d0309, #0d0309, #000000)",
          },
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span
            style={{
              color: "#fff",
              margin: "0.75rem",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            JordenSky
          </span>
        </div>
        <List style={{ marginTop: "1rem" }}>
          {menus?.map((menu, i) => (
            <ListItem
              key={i}
              sx={{
                color: "#fff",
                marginTop: "1rem",
                display: "flex",
                alignItems: "center",
                fontSize: "0.875rem",
                gap: "0.875rem",
                fontWeight: "bold",
                padding: "0.5rem",
                borderRadius: "1rem",
                filter: "drop-shadow(0 0 30px #333)",
                transition: "background-color 0.2s",
                backgroundColor:
                  selectedItem === i
                    ? " rgba( 32, 141, 250, 1 )"
                    : "transparent",

                //

                "&:hover": {
                  backgroundColor: " rgba( 32, 141, 250, 1 )",
                  color: "#fff",
                  Shadow: "0px 8px 32px 0 rgba( 31, 38, 135, 0.77 )",
                  backdropFilter: "blur( 31px )",
                  WebkitBackdropFilter: "blur( 11px )",
                },
              }}
              onClick={() => handleMenuItemClick(i)}
            >
              <ListItemIcon sx={{ color: "#fff" }}>{menu.icon}</ListItemIcon>
              <ListItemText
                sx={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: "bold",
                }}
              >
                {menu.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default Sidebar;
