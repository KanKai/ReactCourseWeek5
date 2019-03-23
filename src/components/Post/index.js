import React, { useEffect, useState, useRef } from "react";
import Segment from "components/Segment";
import ViewFlex from "components/ViewFlex";
import ProfileImage from "components/ProfileImage";
import { Icon, Row, Col, Dropdown, Menu } from "antd";
import CapsuleButton from "components/CapsuleButton";
import CheckBox from "components/CheckBox";
import { connect } from "react-redux";
import Button from "components/Button";
import moment from "moment";
import "./styles.scss";

const initialData = {
  user: { firstname: "", lastName: "" },
  created_date: moment().format("DD/MM/YY HH:mm"),
  privacy: { name: "" },
  text: "ทดสอบการโพสต์"
};

function PostButton({ icon, label }) {
  return (
    <div className="postButton">
      <ViewFlex margin={false}>
        <div className="icon">
          <Icon type={icon} />
        </div>
        <div className="label">
          <span>{label}</span>
        </div>
      </ViewFlex>
    </div>
  );
}

function LikeButton() {
  return <PostButton icon="like" label="ถูกใจ" />;
}

function CommentButton() {
  return <PostButton icon="align-left" label="แสดงความคิดเห็น" />;
}

function PostAction() {
  return (
    <ViewFlex className="postAction">
      <LikeButton />
      <CommentButton />
    </ViewFlex>
  );
}

function Post({ data = initialData }) {
  if (!data) {
    return <h1>No content</h1>;
  }
  const {
    user: { fristName, lastName },
    created_date,
    privacy,
    text
  } = data;
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [isToolTip, setToolTip] = useState(false);
  const textRef = useRef();
  const tooltipRef = useRef();
  // function onMouseEnter() {
  //   const {style, offsetTop:y, offsetLeft:x, clientHeight, clientWidth} = textRef.current;
  //   console.log('x', x, 'y', y);
  //   setToolTip(true);
  //   setY(y);
  //   setX(x);
  //   // console.log(tooltipRef);
  //   tooltipRef.current.style.left = x+'px';
  //   tooltipRef.current.style.top = y-10+'px';
  //   alert(`Width ${clientWidth}, Height ${clientHeight}`);
  //   style.color = 'red';
  // }
  function onMouseOver() {
    const {
      style,
      offsetTop: y,
      offsetLeft: x,
      clientHeight,
      clientWidth
    } = textRef.current;
    console.log("x", x, "y", y);
    setToolTip(true);
    setY(y);
    setX(x);
    // console.log(tooltipRef);
    tooltipRef.current.style.left = x + "px";
    tooltipRef.current.style.top = y - 10 + "px";
    // alert(`Width ${clientWidth}, Height ${clientHeight}`);
    style.color = "red";
  }
  function onMouseOut() {
    console.log("mouse out");
  }

  function onMouseLeave() {
    console.log("mouse leave");
  }
  return (
    <Segment
      // title="โพสต์"
      actions={[
        <PostAction />
        // <StoriesAction privacies={post.privacies} />,
        // <ShareAction />
      ]}
    >
      <span
        ref={tooltipRef}
        hidden={!isToolTip}
        style={{ position: "absolute", left: 0, top: 0 }}
      >
        x: {x} y: {y}
      </span>
      <ViewFlex column>
        <div
          className="postHeader"
          onMouseLeave={onMouseLeave}
          onMouseOut={onMouseOut}
        >
          <ViewFlex margin={false}>
            <ViewFlex className="profileImage">
              <ProfileImage size="x2" />
            </ViewFlex>
            <ViewFlex column className="right">
              <div className="username">{`${fristName} ${lastName}`}</div>
              <div>
                <span className="privacy">
                  {privacy && <div>{privacy.name}</div>}
                </span>
                <span className="createdAt">
                  {created_date && created_date}
                </span>
              </div>
            </ViewFlex>
          </ViewFlex>
        </div>
        <div className="postText">
          <div>
            <h2
              ref={textRef}
              // onMouseOver={onMouseOver}
            >
              {text}
            </h2>
          </div>
        </div>
      </ViewFlex>
    </Segment>
  );
}

export default Post;
