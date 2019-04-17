import React from "react";
import { Icon } from "antd";
import "./styles.scss";

function renderActions(actions) {
  return (
    <div className="actionsWrapper">
      <div className="actionContainer">
        {actions.map(action => (
          <SegmentAction>{action}</SegmentAction>
        ))}
      </div>
    </div>
  );
}

function Segment({ children, content, title = "", actions = [], onClose }) {
  return (
    <div className="segment">
      {title && <SegmentTitle onClose={onClose}>{title}</SegmentTitle>}
      <SegmentContent>{children || content}</SegmentContent>
      {actions.length > 0 && renderActions(actions)}
    </div>
  );
}

Segment.defaultProps = {
  onClose: () => {}
};

function SegmentTitle({ children, title = "", onClose, ...rest }) {
  return (
    <div className="title" {...rest}>
      <span className="titleText">{children || title}</span>
      <div className="closeButton" onClick={onClose}>
        <Icon type="close" className="icon" />
      </div>
    </div>
  );
}

SegmentTitle.defaultProps = {
  onClose: () => {}
};

function SegmentContent({ children, content = "" }) {
  return (
    <div className="content">
      <div className="container">{children || content}</div>
    </div>
  );
}

function SegmentAction({ children, content = "" }) {
  return <div className="actionItem">{children || content}</div>;
}

export { SegmentTitle, SegmentContent, SegmentAction };

export default Segment;
