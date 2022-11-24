import styled from "styled-components";

const LoginContainer = styled.div`
  /* ... */
  width: 600px;
  max-height: 100%;
  max-width: 100%;
  min-width: 247px;
  border-radius: 15px;
  background-color: #fff;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const HeaderLogo = styled.div`
  font-size: 1.5rem;
  color: #db1717;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0.5rem;
  padding-bottom: 1rem;
`;

export const Logo = styled.img`
  margin: 1rem auto;
  padding-bottom: 1rem;
  width: 50%;
  min-width: 200px;
  display: block;
`;

export const Anchortag = styled.a`
  font-size: 0.8rem;
  color: #17a3db;
  cursor: pointer;
  display: block;
  :hover {
    text-decoration: underline;
  }
`;

export const BlobRight = styled.img`
  position: absolute;
  top: 0px;
  right: 0;
`;
export const BlobLeft = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;
export default LoginContainer;
