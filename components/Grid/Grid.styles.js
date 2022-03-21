import styled from "styled-components";

export const Wrapper = styled.div`
  height: 150px;
  display: flex;
`;

export const Content = styled.div`
  .grid-container {
    display: grid;
    width: max-content;
    justify-content: center;
    height: 150px;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 25px;
    height: fit-content;
    width: fit-content;
    background-color: white;
    margin-left: 150px;
    padding: 0;
  }
  .grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    image-rendering: center;
    background-color: white;
    padding: 20px 0;
    height: 250px;
    width: 200px;
    font-size: 30px;
  }
  #main {
    height: 250px;
    width: 200px;
  }
  #main div {
    height: 250px;
    width: 200px;
  }
  #img_front {
    height: 250px;
    width: 200px;
  }
  #div img_front {
    height: 250px;
    width: 200px;
    cursor: pointer;
    transition: all 0.6s;
  }
  #div img_front:hover {
    transform: scale(1.2);
  }
`;
