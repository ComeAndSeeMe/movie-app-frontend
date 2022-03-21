import styled from 'styled-components';

export const Wrapper = styled.div`
    vertical-align:middle;
   .searchInputs {
  display: flex;
}

.search input {
  background-color: white;
  border: 0;
  font-size: 12px;
  height: 35px;
  width: 600px;
}

.searchIcon {
  height: 35px;
  width: 50px;
  background-color: white;
  display: grid;
  place-items: center;
}

input:focus {
  outline: none;
}
.searchIcon svg {
  font-size: 35px;
}

.dataResult {
  position: absolute;
  z-index: 999;
  margin-top: 5px;
  width: 300px;
  height: 200px;
  background-color:white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
}

.dataResult::-webkit-scrollbar {
  display: none;
}

.dataResult .dataItem {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;
}

.dataItem p {
  margin-left: 10px;
}
a {
  text-decoration: none;
}

a:hover {
  background-color: lightgrey;
}

#clearBtn {
  cursor: pointer;
}
`;

export const Content = styled.div`
   width: 250px;
   font-size: medium;
   margin-top: 5px;
   color: lightgrey;
   align-content: center;
   
`;
