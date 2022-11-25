import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import DetailsContainer, {
  Desc,
  Heading,
  IMG,
} from "../Styling/Details.styled";

const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  function handleEdit() {
    console.log("Inside handleEdit");
    navigate("/newblog", { state: state });
  }
  return (
    <Container>
      <DetailsContainer>
        <Heading>{state?.title}</Heading>

        <IMG src={state?.img} />
        <hr />
        <Desc>{state?.desc}</Desc>
        <Button
          variant="contained"
          sx={{ width: "50%", minWidth: "150px" }}
          onClick={handleEdit}
        >
          Edit
        </Button>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
