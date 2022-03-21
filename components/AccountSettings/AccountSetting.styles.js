import styled from "styled-components";

export const Wrapper = styled.div`
   width: 1280px;
  
`;

export const Content = styled.div`
   padding-top: 0px;
   max-width: var(--maxWidth);
   margin: 0 auto;

`;

export const Test = styled.div`
   z-index: 100;
   max-width: 700px;
   position: absolute;
   bottom: 40px;
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
