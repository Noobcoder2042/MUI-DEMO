import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";

import { Select, MenuItem, Grid } from "@mui/material";
import { Container, Tab, colors, tabClasses } from "@mui/joy";

const YearSelector = ({ onYearSelect }) => {
  const fiscalYears = ["2022-23", "2023-24", "2024-25"];

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
      }}
    >
      <p
        sx={{
          fontSize: "18px",
          marginRight: "8px",
        }}
      >
        FY:
      </p>
      <Select
        onChange={(e) => onYearSelect(e.target.value)}
        sx={{
          margin: "8px",
          width: "120px",
          height: "30px",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "5px",
          fontSize: "14px",
          color: "#333",
          "&:focus": {
            outline: "none",
            border: "1px solid #007bff",
          },
        }}
      >
        <MenuItem value="">
          <em>Select FY</em>
        </MenuItem>
        {fiscalYears.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </Container>
  );
};

const QuarterSelector = ({ onQuarterSelect }) => {
  const quarters = ["Q1", "Q2", "Q3", "Q4"];

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      {quarters.map((quarter) => (
        <Container
          key={quarter}
          onClick={() => onQuarterSelect(quarter)}
          sx={{
            backgroundColor: "",
            color: "#ffffff",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            transition:
              "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Drop shadow
            "&:hover": {
              backgroundColor: "#404040",

              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.50)", // Increased drop shadow on hover
              border: "1px solid black",
            },
            "&:focus": {
              // backgroundColor: "#505050", // Active style
              // borderColor: "blue", // Border color on focus
              // boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", // Reset drop shadow on focus
              // outline: "none", // Remove default outline
            },
          }}
        >
          {quarter}
        </Container>
      ))}
    </Container>
  );
};

const MonthSelector = ({ onMonthSelect }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <Container
      sx={{
        padding: "20px",
        borderRadius: "8px",
        
      }}
    >
      <Grid container spacing={2}>
        {months.map((month) => (
          <Grid
            key={month}
            item
            xs={3} // Four months in a row
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container
              onClick={() => onMonthSelect(month)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                backgroundColor: "",
                color: "",
                padding: "10px 10px",
                height: "50px",
                width: "50px",
                fontSize: "14px",
                fontWeight: "bold",
                cursor: "pointer",
                Shadow: "0px 8px 32px 0 rgba( 31, 38, 135, 0.77 )",
                backdropFilter: "blur( 31px )",
                WebkitBackdropFilter: "blur( 11px )",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  backgroundColor: "#ffff",
                  color: "#007FFF",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.50)", // Increased drop shadow on hover
                  border: "1px solid black",
                 
                },
                "&:active": {
                  backgroundColor: "#ffff",
                  outline: "none",
                },
              }}
            >
              {month}
            </Container>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const PeriodSelector = ({ onPeriodChange, onButtonSelect }) => {
  const [selectedButton, setSelectedButton] = React.useState(null);
  const [selectedFiscalYear, setSelectedFiscalYear] = React.useState(null);
  const [selectedQuarter, setSelectedQuarter] = React.useState(null);
  const [selectedMonth, setSelectedMonth] = React.useState(null);
 console.log(selectedMonth);
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    onButtonSelect(buttonName);
  };

  const handleFiscalYearSelect = (fiscalYear) => {
    setSelectedFiscalYear(fiscalYear);
    setSelectedQuarter(null); // Reset quarter selection
    setSelectedMonth(null); // Reset month selection
    onPeriodChange(fiscalYear, null, null); // Pass selected year to parent
  };

  const handleQuarterSelect = (quarter) => {
    setSelectedQuarter(quarter);
    setSelectedMonth(null); // Reset month selection
    onPeriodChange(selectedFiscalYear, quarter, null); // Pass selected year and quarter to parent
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    onPeriodChange(selectedFiscalYear, null, month); // Pass selected year and month to parent
  };

  return (
    <Container
      sx={{
        bgcolor: "#253146",
        w: "100px",
        p: 1,
        borderRadius: "15px",
        m: 1,
      }}
    >
      <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: "transparent" }}>
        <TabList
          disableUnderline
          sx={{
            p: 0.5,
            gap: 0.5,
            borderRadius: "xl",
            bgcolor: "background.level1",

            [`& .${tabClasses.root}[aria-selected="true"]`]: {
              boxShadow: "sm",
              bgcolor: "#BE7575",
            },
          }}
        >
          <div onClick={() => handleButtonClick("Year")}>
            <Tab disableIndicator>
              <div
                sx={{
                  borderRadius: "lg",
                  px: 0,
                  py: 0,
                  boxShadow: "xl",
                }}
              >
                Year
              </div>
            </Tab>
          </div>
          <div onClick={() => handleButtonClick("Quarter")}>
            <Tab disableIndicator>
              <div
                sx={{
                  borderRadius: "lg",
                  px: 4,
                  py: 2,
                  boxShadow: "md",
                }}
              >
                Quarter
              </div>
            </Tab>
          </div>
          <div onClick={() => handleButtonClick("Month")}>
            <Tab disableIndicator>
              <div
                sx={{
                  borderRadius: "lg",
                  px: 4,
                  py: 2,
                  boxShadow: "md",
                }}
              >
                Month
              </div>
            </Tab>
          </div>
        </TabList>
      </Tabs>

      <div sx={{ marginTop: 4 }}>
        {selectedButton && (
          <div>
            {selectedButton === "Year" && (
              <YearSelector onYearSelect={handleFiscalYearSelect} />
            )}
            {selectedButton === "Quarter" && (
              <div>
                <YearSelector onYearSelect={handleFiscalYearSelect} />
                <QuarterSelector onQuarterSelect={handleQuarterSelect} />
              </div>
            )}
            {selectedButton === "Month" && (
              <div>
                <YearSelector onYearSelect={handleFiscalYearSelect} />
                <MonthSelector onMonthSelect={handleMonthSelect} />
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default PeriodSelector;
