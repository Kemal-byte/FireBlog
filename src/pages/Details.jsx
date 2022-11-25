import { Container } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import DetailsContainer, {
  Desc,
  Heading,
  IMG,
} from "../Styling/Details.styled";

const Details = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <Container>
      <DetailsContainer>
        <Heading>{state?.title}</Heading>

        <IMG src={state?.img} />
        <hr />
        <Desc>{state?.desc}</Desc>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
