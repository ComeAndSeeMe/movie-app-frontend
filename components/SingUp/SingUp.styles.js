import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: -1;
   height: 600px;
   background-image: url('../images/img003.png');

  .dimback {
    z-index: -11;
    opacity: 0.6;
    filter: alpha(opacity=50);
    height: 600px;
    background: #000000;
  }
`;
export const Content = styled.div`
  z-index: 999;
  #main {
    background:white ;
    width: 350px;
    height: 380px;
    border: thick solid #000000;
    margin-left: 500px;
    margin-top: 70px;
    justify-content: center;
  }
  #main div {
    justify-content: space-evenly;
    margin-top: 20px;
    height: 50px;
    width: 350px;
  }

  #button {
    height: 100px;
    width: 250px;
    margin-top: 20px;
  }
  #button div {
    margin-top: 20px;
    height: 100px;
    width: 280px;
  }
  p {
    color: maroon;
  }
`;

export const Test = styled.div``;
