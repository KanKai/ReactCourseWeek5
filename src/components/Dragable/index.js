import React, { useState } from "react";

function Dragable({ children, onDrag, onDragEnd, dragRef, active }) {
  const [isMouseDown, setMouseDown] = useState(false);
  function onMouseDown() {
    if(!active) return;
    setMouseDown(true);
  }
  function onMouseMove(e) {
    if(!isMouseDown) return;
    onDrag(e);
  }
  function onMouseUp(e) {
    setMouseDown(false);
    onDragEnd(e);
  }
  return (
    <div
      ref={dragRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      {children}
    </div>
  );
}

Dragable.defaultProps = {
  onDrag: () => {},
  onDragEnd: () => {}
}

export default Dragable;
