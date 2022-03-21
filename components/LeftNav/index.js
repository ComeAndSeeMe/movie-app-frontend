import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content, Test } from "./LeftNav.styles";
import { FiSettings } from "react-icons/fi";
import { BsStar } from "react-icons/bs";
import { BsCollectionPlayFill } from "react-icons/bs";

const LeftNav = () => (
  <Wrapper>
    <Content>
        <div id="main">
          <div id="child">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/accountSetting/info/"
            >
              <FiSettings style={{ fontSize: "25px",marginRight:'20px',verticalAlign:'middle',marginTop:'5px' }} />
              个人信息{" "}
            </Link>
          </div>{" "}
          <div id="child">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/accountSetting/collection/"
            >
              <BsStar style={{ fontSize: "25px",marginRight:'20px',verticalAlign:'middle' }} />
              我的收藏
            </Link>
          </div>
          <div id="child">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/accountSetting/list/"
            >
              <BsCollectionPlayFill style={{ fontSize: "25px",marginRight:'20px',verticalAlign:'middle'  }} />
              想看清单
            </Link>
          </div>
        </div>
    </Content>
  </Wrapper>
);

export default LeftNav;
