import styled from "styled-components";

export const Wrapper =styled.div`
  display: flex;
  height: 250px;
  width: 800px;

`;

export const Content = styled.div`
  width: 500px;
  height: 300px;
  justify-content: space-between;
  border: thick solid #000000;
  font-size: medium;
  margin: 0 auto;
`;

export const Div = styled.div`
  display: flex;
  align-content: flex-start;
  margin: 0 auto;
`;

export const Button = styled.div`
  background-color: white;
  border: none;
  height: 50px;
  width: 150px;
  align-content: center;
  margin: 0 auto;
  p{
    display: none;
  }
  div:hover p{
    display: block;
  }
`;

