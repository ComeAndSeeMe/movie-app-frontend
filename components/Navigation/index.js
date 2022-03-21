import React from 'react'
import { Wrapper,Content } from './Navigation.styles'
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar';
import MovieData from '../SearchBar/top-rated-movies-01.json';


const Navigation = () => (
        <Wrapper> 
            <Content>
                <SearchBar placeholder="请输入一个电影的名字" data={MovieData} />
                <Link style={{color:'white',textDecoration: 'none',marginTop:'5px' }} to='/homePage/'> 首页</Link>
                <Link style={{color:'white',textDecoration: 'none',marginTop:'5px' }} to='/accountSetting/'> 个人中心</Link>
                <Link style={{color:'white',textDecoration: 'none',marginTop:'5px' }} to='/login/'> 登录/注册</Link>
            </Content>
        </Wrapper>

    )

export default Navigation
