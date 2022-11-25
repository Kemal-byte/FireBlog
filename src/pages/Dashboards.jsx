import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { getDatabase, onValue, ref } from "firebase/database";
import Loading from "../Components/Loading";
const Dashboards = () => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function getData() {
      console.log("Get data is called");
      const db = getDatabase();
      const reference = ref(db, "data/");
      onValue(reference, (snapshot) => {
        const dataArray = [];
        const data = snapshot.val();

        // The below code turn JSON to an array
        for (let item in data) {
          dataArray.push({ item, ...data[item] });
        }
        setArticles(dataArray);
        setIsLoading(false);
      });
      return { articles };
    }
    getData();
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "2rem",
          gap: "1.5rem",
        }}
      >
        {articles?.map((item, index) => {
          return <Cards item={item} key={index} />;
        })}
      </Container>
    </>
  );
};

export default Dashboards;
