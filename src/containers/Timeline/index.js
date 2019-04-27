import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import actions from "stores/actions";

import requests from 'requests';
import {Helmet} from 'react-helmet';

import TimelineHeader from "components/Timeline/Header";
import PostSection from "components/PostSection";
import Post from "components/Post";
import { Row, Col } from "antd";
function TimelineContainer(props) {
  const [username, setUsername] = useState("");
  useEffect(() => {
    requests.auth.me().then((res) => {
      props.setUserInfo(res)
      setUsername(res.username);
    })
  }, [])

  const data = {
    profileImagePath:
      "https://media.wired.com/photos/5c7f06f5b235600ed9239214/master/pass/Culture_CaptainMarvel4.jpg",
    coverImagePath:
      "https://www.thewrap.com/wp-content/uploads/2017/07/Brie-Larson-in-as-Captain-Marvel.jpg",
    name: username
  };
  return (
    <div>
      <TimelineHeader data={data} />
      <Row gutter={10}>
        <Col span={8}>col8</Col>
        <Col span={16}>
          <div>
            <PostSection />
          </div>
          <div>
            <Post />
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: actions.users.setUserInfo(dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TimelineContainer);
