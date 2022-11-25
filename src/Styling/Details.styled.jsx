import styled from "styled-components";

const DetailsContainer = styled.article`
  /* ... */
  display: flex;
  padding: 2rem;
  flex-direction: column;
  background-color: #a7c9d7;
  height: 100%;
  gap: 1.5rem;
`;

export default DetailsContainer;
export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-align: center;
  color: #002f57;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const IMG = styled.img`
  height: auto;
  width: auto;
  max-height: 700px;
`;
export const Desc = styled.div`
  font-size: 1.5rem;
`;
