import styled from "styled-components";

export const Wrapper = styled.div`
   width: 1280px;
   height: 50px;
   justify-content: center;
   background-color: white;
   
#main {
    width: 600px;
    height: 50px;
    margin-right: 200px;
    border: 1px solid#000;
    background-color: black;
    display: flex;
    
}
#main div {
    width: 200px;
    height: 50px;
    justify-content: space-between;
     
}
#main div:hover{
    background:skyblue;
} 
#child {
    width: 200px;
    border-right: 1px solid#fff;
    border-top: 1px solid#fff;
    border-bottom: 1px solid#fff;
}
#child div{
    width: fit-content;
    height: 30px;
} 
`;

export const Content = styled.div`
   width:1280px;
   height: 500px;
   font-size: large;
   max-width: var(--maxWidth);
`;

export const Test = styled.div`
   z-index: 100;
   bottom: 40px;
   min-height: 400px;
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
