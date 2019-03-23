import React, { useState, useEffect, useRef } from "react";
import { usePreload } from "helpers/util";
import Dragable from "components/Dragable";
import { Icon } from "antd";
import classnames from "classnames";
import "./styles.scss";
import { animationFrameScheduler } from "rxjs";
import { AnimationFrameScheduler } from "rxjs/internal/scheduler/AnimationFrameScheduler";

function CoverImage({ src }) {
  const [imagePath, setImagePath] = useState(null);
  const coverRef = useRef();
  const imgRef = useRef();
  const [bluring, setBluring] = useState(true);
  const [moveImageActive, setMoveImageActive] = useState(false);
  useEffect(() => {
    usePreload(src)
      .then(result => {
        setImagePath(result);
      })
      .catch(error => console.log(error, "Cover image can't loaded"));
  }, []);
  function onDrag(e) {
    const { clientHeight, clientWidth } = coverRef.current;
    const { clientY } = e;
    const moveY = 100 - (clientY * 100) / clientHeight;
    console.log("percent", moveY);
    imgRef.current.style.objectPosition = `center ${moveY}%`;
    // console.log("draging", clientHeight, clientWidth);
  }
  function onDragEnd() {
    console.log("drag end");
  }

  function moveImage() {
    setMoveImageActive(true);
  }
  return (
    <Dragable
      active={moveImageActive}
      dragRef={coverRef}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
    >
      <div className="coverImageWrapper">
        <div className="coverAction">
          <div className="actionButton">
            <button>
              <Icon type="picture" />
            </button>
            <button onClick={moveImage}>
              <Icon type="drag" />
            </button>
          </div>
        </div>
        {imagePath && (
          <img
            className={classnames({ bluring: !moveImageActive })}
            ref={imgRef}
            draggable={false}
            src={imagePath}
          />
        )}
      </div>
    </Dragable>
  );
}

export default CoverImage;
