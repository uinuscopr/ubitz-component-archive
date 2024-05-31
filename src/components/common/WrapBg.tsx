import styled from "styled-components";

export default function WrapBg() {
  return (
    <>
      <WrapBgDiv className="wrap-bg"></WrapBgDiv>
    </>
  );
}

const WrapBgDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
      270deg,
      var(--content-main-bg) 0%,
      #ffffff 100%
    );
    mix-blend-mode: darken;
  }
`;
