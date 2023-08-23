import { Container } from "@mui/joy";
import React from "react";
import Navbar from "../compo/Navbar";
import Header from "../compo/Header";
import UI from "../compo/UI";
import PeriodSelector from "../compo/PeriodSelector";

const Fpage = () => {
  return (
    <div>
      <Container style={styles.content}>
        <Header />
        <div style={styles.periodSelectorContainer}>
          <PeriodSelector />
        </div>
        <Navbar />
        <UI />
      </Container>
    </div>
  );
};

const styles = {
  content: {
    minHeight: "100vh",
    maxWidth: "100vw",
  },
  periodSelectorContainer: {
    width: "300px", // Set the width to 20% of the parent container
    margin: "0 auto", // Center the PeriodSelector horizontally
  },
};

export default Fpage;
