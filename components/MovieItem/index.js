import React from 'react'
import { Wrapper, Content, Img } from "./MovieItem.styles";
import MoviePicture from './MoviePicture';
import MovieContent from "./MovieContent";

const MovieItem = () => (
  <Wrapper>
    <Content>
      <MoviePicture />
      <MovieContent />
    </Content>
  </Wrapper>
);

export default MovieItem;
