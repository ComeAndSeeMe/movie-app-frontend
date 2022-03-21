import React,{Component} from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import {Wrapper,Content} from './AccountSetting.styles'
// // import List from '../components/List'
// // import Info from '../components/Info'
// // import Collection from '../components/Collection'
// // import AccountSettingPage from '../../Pages/AccountSettingPage'
// import LeftNav from '../components/LeftNav'
import Sidebar from '../components/Sidebar'
import LeftNav from '../LeftNav'



const AccountSettings = () => (
       <Wrapper>
           <Content>
               <LeftNav />
           </Content>
       </Wrapper>
)
    

export default AccountSettings
