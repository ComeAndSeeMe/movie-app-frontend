import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { Content, Wrapper } from "../Login/Login.styles";
import $ from  'jquery'

const Login = () => {
  // var formData = new FormData($("#userForm")[0]);  // 定位到userForm表单，并将表单定位转为FormData对象 
  //   $.ajax({
  //     url: 'http://119.45.166.112/api/movie/1/info/',   //网络请求url地址
  //     type: 'POST',
  //     data: formData, //表单数据
  //     cache: false,
  //     contentType: false,  //或者 contentType:multipart/form-data均可以，multipart/form-data表示可以上传下载文件（既可以发送文本数据，也支持二进制数据上载），表明传输的数据要用到多媒体传输协议，由于多媒体传输的都是大量的数据，所以规定上传文件必须是post方法；contentType默认为application/x-www-form-urlencoded不能上传文件
  //     processData: false,
  //     success: function (data) {
  //       console.log('成功');
  //     }.bind(this),
  //     error: function (xhr, status, err) {
  //     }.bind(this)
  //   });
  return (
    <Wrapper>
      <div className="dimback">
        <Content>
          <div id="main">
            <div>
              <h2>
                <strong>欢迎登陆Movie-Recomend!</strong>
              </h2>
            </div>
            <Form action="http://119.45.17.78" method="POST">
              <Form.Item type="text" name="email" >
                邮箱：
                <Input />
              </Form.Item>
              <br />
              <Form.Item type="pwd" name="password" id="user_password">
                密码：
                <Input.Password />
              </Form.Item>
              <br />
              <Form.Item name="email">
                <div id="button">
                  <Button
                    id="login_btn"
                    type="primary"
                    htmlType="submit"
                    style={{ marginRight: "10px" }}
                    // onClick={this.Login.bind(this)}
                  >
                    <strong>登陆</strong>
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
                <Link to="/login/singup/">
                  {" "}
                  <strong>SingUp Right Now!</strong>
                </Link>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </div>
    </Wrapper>
  );
};
// form.on("submit(login_btn)", function (data) {
//   data = data.field;
//   $.ajax({
//     type: "POST", //提交的方法
//     url: "http://119.45.166.112/api/movie/1/info/",
//     xhrFields: {
//       withCredentials: true,
//     },
//     dataType: "json",
//     contentType: "application/json",
//     //url:"#",
//     data: JSON.stringify({
//       user_email: data.user_email,
//       user_password: data.user_password,
//     }),
//     async: false,
//     error: function (request) {
//       //失败的话
//       alert("Connection error");
//     },
//     success: function (data) {
//       if (data.code == 0) {
//         // alert("success!");
//         window.location.href = "/homePage/";
//       } else {
//         alert(data.msg);
//       }
//     },
//   });
//   return false;
// });
export default Login;
