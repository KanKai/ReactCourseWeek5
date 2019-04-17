import React from "react";
import TimelineHeader from "components/Timeline/Header";
import PostSection from 'components/PostSection';
import Post from 'components/Post';
import { Row, Col } from "antd";
function TimelineContainer() {
  const data = {
    profileImagePath:
      "https://media.wired.com/photos/5c7f06f5b235600ed9239214/master/pass/Culture_CaptainMarvel4.jpg",
    coverImagePath:
      "https://www.thewrap.com/wp-content/uploads/2017/07/Brie-Larson-in-as-Captain-Marvel.jpg",
    name: "Brie"
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

export default TimelineContainer;
