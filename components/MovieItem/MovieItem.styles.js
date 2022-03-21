import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  padding: 20px;

`;


export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const Img = styled.img`
   width: 80px;
 
 @media screen and(max-width:300px){
     width: 50px;
 };
 `
