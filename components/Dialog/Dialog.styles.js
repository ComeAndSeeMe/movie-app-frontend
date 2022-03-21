import styled from "styled-components";
import {MdClose} from 'react-icons/md'

export const Wrapper = styled.div`
  *{
      box-sizing: o;
      padding:0;
      font-family:'Arial' sans-serif;
  }
   z-index: 100;
   width: 200px;
   height: 100px;
   background: rgba(0,0,0,0.8);
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
`;
export const Content = styled.div`
   width: 100px;
   height: 50px;
   box-shadow: 0 5px 16px rgba(0,0,0,0.2);
   background: #fff;
   color: #000;
   display: grid;
   grid-template-columns: 1rf 1rf;
   position: relative;
   z-index: 10;
   border-radius: 10px;
`;
export const CloseDialogButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
