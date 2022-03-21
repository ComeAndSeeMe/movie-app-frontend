import React, { useState, useEffect } from "react";
import { Content, Button, Div, Wrapper } from "./MovieContent.styles";
import { useParams } from "react-router-dom";
import {AiFillLike} from 'react-icons/ai'//点攒后
import {AiOutlineLike} from 'react-icons/ai'//点赞前
import {AiOutlineHeart} from 'react-icons/ai'//收藏前
import {FcLike} from 'react-icons/fc'//收藏后


const MovieContent = () => {
  let [contents, setcontents] = useState([]);

  useEffect(() => {
    getcontent();
  }, []);

  let params = useParams();
  let getcontent = async () => {
    let url = `../../SearchBar/top-rated-movies-01.json/${params.id}/info/`;
    console.log(url);
    let response1 = await fetch(url);
    let data1 = await response1.json();
    let response2 = await fetch(data1.movie_url);
    let data2 = await response2.json();
    console.log("DATA", data2);
    setcontents(data2);
  };

  return (
    <Wrapper>
      <Content>
        <p>电影名称：{contents.original_title}</p>
        <p>电影简介：{contents.overview}</p>
        <Div>
          <Button onClick={""} title="加入想看清单">
            <AiFillLike style={{ fontSize: "25px",verticalAlign:'middle' }}/><p>添加到我的想看清单</p>
          </Button>
          <Button onClick={""} title="收藏此电影">
            <FcLike style={{ fontSize: "25px",verticalAlign:'middle' }}/><p>加入到我的收藏</p>
          </Button>
        </Div>
      </Content>
    </Wrapper>
  );
};

export default MovieContent;
