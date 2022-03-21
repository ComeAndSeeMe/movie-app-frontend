import React from 'react';
import { Content, Test, Wrapper } from './Collection.styles';
import LeftNav from '../LeftNav';
import MoviePicture from '../MovieItem/MoviePicture'

const Collection = () => (
      <Wrapper>
        <Content>
          <Test>
            <div id='main'>
              <button id='btn'>删除</button>
            <MoviePicture/>
            </div>
          </Test>
        </Content>
      </Wrapper>

);
export default Collection;