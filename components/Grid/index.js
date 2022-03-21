import React from 'react'
import ReactGridLayout from 'react-grid-layout/build/ReactGridLayout'
import { Wrapper, Content } from './Grid.styles'


const Grid = () => (
     <Wrapper>
         <Content>
         <div className='grid-container'>
             <div id='main' class="item1"><a href='https://www.themoviedb.org/movie/862-toy-story'><img id='img_front' src='http://image.tmdb.org/t/p/w1280/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg'/></a></div>
             <div id='main' class="item2"><a href='https://www.themoviedb.org/movie/8844-jumanji'><img id='img_front' src='http://image.tmdb.org/t/p/w1280/6aGn2X51bahFoOI8wE1h2VGTgcH.jpg'/></a></div>
             <div id='main' class="item3"><a href='https://www.themoviedb.org/movie/15602-grumpier-old-men'><img id='img_front' src='http://image.tmdb.org/t/p/w1280/1FSXpj5e8l4KH6nVFO5SPUeraOt.jpg'/></a></div>  
             <div id='main' class="item4"><a href='https://www.themoviedb.org/movie/31357-waiting-to-exhale'><img id='img_front' src='http://image.tmdb.org/t/p/w1280/4wjGMwPsdlvi025ZqR4rXnFDvBz.jpg'/></a></div>
             <div id='main' class="item5"><a href='https://www.themoviedb.org/movie/11862-father-of-the-bride-part-ii'><img id='img_front' src='http://image.tmdb.org/t/p/w1280/rj4LBtwQ0uGrpBnCELr716Qo3mw.jpg'/></a></div>
             <div id='main' class="item6"><a href='https://www.themoviedb.org/movie/862-toy-story'><img id='img_front' src='http://image.tmdb.org/t/p/w1280/obpPQskaVpSiC9RcJRB6iWDTCXS.jpg'/></a></div>
             <div id='main' class="item7"><a href='https://www.themoviedb.org/movie/45325-tom-and-huck'><img id='img_front' src='http://image.tmdb.org/t/p/w1280/vIG8hWOa7DyLMRiurzKwVAnIYoU.jpg'/></a></div>
             <div id='main' class="item8"><a href='https://www.themoviedb.org/movie/9091-sudden-death'><img id='img_front' src='http://image.tmdb.org/t/p/w1280/1pylO6YX5XdOA6QCc5IRxrrffkg.jpg'/></a></div>
             <div id='main' class="item9"><a href='https://www.themoviedb.org/movie/710-goldeneye'><img id='img_front' src='http://image.tmdb.org/t/p/w1280/bFzjdy6ucvNlXmJwoSoYfufV6lP.jpg'/></a></div>  
             <div id='main' class="item10"><a href='https://www.themoviedb.org/movie/9087-the-american-president'><img id='img_front' src='http://image.tmdb.org/t/p/w1280/yObOAYFIHXHkFPQ3jhgkN2ezaD.jpg'/></a></div>
         </div>
         </Content>
     </Wrapper>
)

export default Grid


// import React,{useEffect,useState} from 'react'
// import ReactGridLayout from 'react-grid-layout/build/ReactGridLayout'
// import { Wrapper, Content } from './Grid.styles'
// import { useParams } from "react-router-dom";

// const Grid = () => {
//   let [contents, setcontents] = useState([]);

//   useEffect(() => {
//     getcontent();
//   }, []);

//   let params = useParams();
//   let getcontent = async () => {
//     let url = `http://109.244.159.55/api/uesr/${params.id}/recommend/`;
//     console.log(url);
//     let data = await (await fetch(url)).json();
//     console.log(data);
//     setcontents(data);
//   };
//     //   let data = {
//     //     1: "http://image.tmdb.org/t/p/w1280/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
//     //     2: "http://image.tmdb.org/t/p/w1280/6aGn2X51bahFoOI8wE1h2VGTgcH.jpg",
//     //     3: "http://image.tmdb.org/t/p/w1280/1FSXpj5e8l4KH6nVFO5SPUeraOt.jpg",
//     //     4: "http://image.tmdb.org/t/p/w1280/4wjGMwPsdlvi025ZqR4rXnFDvBz.jpg",
//     //     5: "http://image.tmdb.org/t/p/w1280/rj4LBtwQ0uGrpBnCELr716Qo3mw.jpg",
//     //     6: "http://image.tmdb.org/t/p/w1280/obpPQskaVpSiC9RcJRB6iWDTCXS.jpg",
//     //     7: "http://image.tmdb.org/t/p/w1280/vIG8hWOa7DyLMRiurzKwVAnIYoU.jpg",
//     //     8: "http://image.tmdb.org/t/p/w1280/1pylO6YX5XdOA6QCc5IRxrrffkg.jpg",
//     //     9: "http://image.tmdb.org/t/p/w1280/bFzjdy6ucvNlXmJwoSoYfufV6lP.jpg",
//     //     10: "http://image.tmdb.org/t/p/w1280/yObOAYFIHXHkFPQ3jhgkN2ezaD.jpg",
//     //   };

//   return (
//     <Wrapper>
//       <Content>
//         <div className="grid-container">
//           <div class="item1"><img id='img_front' src={contents["0"]}/></div>
//           <div class="item2"><img id='img_front' src={contents["1"]}/></div>
//           <div class="item3"><img id='img_front' src={contents["2"]}/></div>
//           <div class="item4"><img id='img_front' src={contents["3"]}/></div>
//           <div class="item5"><img id='img_front' src={contents["4"]}/></div>
//           <div class="item6"><img id='img_front'src={contents["5"]}/></div>
//           <div class="item7"><img id='img_front' src={contents["6"]}/></div>
//           <div class="item8"><img id='img_front' src={contents["7"]}/></div>
//           <div class="item9"><img id='img_front' src={contents["8"]}/></div>
//           <div class="item10"><img id='img_front' src={contents["9"]}/></div>
         
//         </div>
//       </Content>
//     </Wrapper>
//   );
// };

// export default Grid
