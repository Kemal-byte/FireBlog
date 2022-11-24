import { Container } from "@mui/material";
import React from "react";
import Cards from "../Components/Cards";
import { data } from "../helpers/data";
const Dashboards = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "2rem",
        gap: "1.5rem",
      }}
    >
      {data.map((item, index) => {
        return <Cards item={item} key={index} />;
      })}
    </Container>
  );
};

export default Dashboards;
