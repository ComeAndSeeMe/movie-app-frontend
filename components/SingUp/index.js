import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Content, Wrapper } from "../Login/Login.styles";
import { Link } from "react-router-dom";
import Dialog from "../Dialog";
import $ from  'jquery'

const Signup = () => {
    
  return (
    <Wrapper>
      <div className="dimback" >
      <Content>
        <div id="main">
          <div><h2><strong>欢迎注册Movie-Recomend!</strong></h2></div>
          <Form id='userFrom' action="http://119.45.166.112/api/movie/1/info/" method="POST">
            <Form.Item type="text" name="name" id = "user_name">
              <strong>请输入昵称：</strong>
              <Input />
            </Form.Item>
            <Form.Item type="text" name="email" id = "user_email">
            <strong>请输入邮箱：</strong>
              <Input />
            </Form.Item>
            <Form.Item type="password" name="password" id = "user_password">
            <strong>请设置密码：</strong>
              <Input.Password />
            </Form.Item>
            <Form.Item name="email">
              <div id="button">
                <Button
                  id="singup_btn"
                  type="primary"
                  htmlType="submit"
                  style={{ marginRight: "10px" }}
                  // onClick={this.Signup.bind(this)}
                >
                  <strong>注册</strong>
                </Button>
                <Link to="/homePage/">
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ marginRight: "10px" }}
                  >
                    <strong>返回</strong>
                  </Button>
                </Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      </Content>
      </div>
    </Wrapper>
  );
};

export default Signup;

