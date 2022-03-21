import React from 'react';
import LeftNav from '../LeftNav'
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { Content, Wrapper } from "../Info/Info.styles";
import {RiLockPasswordFill} from 'react-icons/ri'
import {MdOutlineMarkEmailRead} from 'react-icons/md'

const Info = () =>(
   <Wrapper>
     <Content>
     <div id="main">
          <div><h2>修改个人基本信息：</h2></div>
        <Form >
            <Form.Item type="text" name='name'>请输入新的昵称：
              <Input />
            </Form.Item><br/>
            <Form.Item type="text" name="email" >请输入新的邮箱：
            <Input />
            </Form.Item><br/>
            <Form.Item type="psw" name="password" >请设置新的密码：
            <RiLockPasswordFill />
              <Input.Password />
            </Form.Item><br/>
            <Form.Item name="email">
            <div id='button'>
               <Button type="primary" htmlType="submit">
                  保存
               </Button>
            </div>
            </Form.Item>
          </Form>
        </div>
     </Content>
   </Wrapper>

   
);

export default Info;