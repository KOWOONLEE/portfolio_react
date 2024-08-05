import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function MouseCursor() {
  const [mouseCusor, setMouseCusor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseCusor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <MouseStyle
      style={{ transform: `translate(${mouseCusor.x}px, ${mouseCusor.y}px)` }}
    ></MouseStyle>
  );
}

const MouseStyle = styled.div`
  position: fixed;
  top: -15px;
  left: -15px;
  width: 30px;
  height: 30px;
  background-color: rgb(230, 185, 222, 0.7);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
  z-index: 9999;
`;
