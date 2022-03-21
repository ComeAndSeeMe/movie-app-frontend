import React from 'react'
import { Content, Wrapper } from './Median.styles'
import {GiRank3} from 'react-icons/gi'

const Median = () => {
    return(
        <Wrapper>
        <Content>
            <h1><GiRank3 style={{ fontSize: "50px",verticalAlign:'middle',color:'black',marginRight:'30px' }}/>排行榜TOP10推荐</h1>
        </Content>
    </Wrapper>
    );
    
}

export default Median
