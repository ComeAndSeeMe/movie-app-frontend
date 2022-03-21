import styled from "styled-components";

export const Wrapper = styled.div`
   width: 1000px;
   height: 300px;
   border: 1px black;
   background: lightblue;
   margin-left: 100px;
   padding-top: 50px;
   border-bottom: black;
   justify-content: center;

  
`;

export const Content = styled.div`
   padding-top: 5px;
   max-width: var(--maxWidth);
   margin: 0 auto;
   #main{
       height: 150px;
       border-bottom: black;
   }
   #main div{
       height: 150px;
       width: 1000px;
       background: white;
   }
   #btn{
       margin-left: 25px;
       height: 50px;
       width: 100px;
   }
`;

export const Test = styled.div`
   z-index: 100;
   max-width: 700px;
   position: absolute;
   margin-right: 20px;
   min-height: 100px;
   color: var(--white);   
   h1{
       font-size:var(--fontSuperBig);
       
       @media screen and (max-width: 720px){
           font-size: var(--fontBig);
       }
   }

   p{
       font-size: var(--fontMed);

       @media screen and (max-width: 720px){
           font-size: var(--fontSmall)
       }
   }

   @media screen and (amx-width: 720px){
       max-width:200%;
   }
  
`;

