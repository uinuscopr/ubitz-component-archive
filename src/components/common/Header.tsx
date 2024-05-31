import { Link } from "react-router-dom";
import logo from "../../assets/images/common/logo.svg";

import styled from "styled-components";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <LogoWrapper>
          <LogoText>
            유비츠 컴포넌트 아카이브
            <Link to="/">
              <img className="logo-img" src={logo} alt="로고" />
            </Link>
          </LogoText>
        </LogoWrapper>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: 5.2rem;
  max-width: 47.8rem;
  padding: 1rem 2rem;
  /* border-bottom: 1px solid var(--gray-scale-050); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  position: fixed;
  z-index: 100;
  top: 0;
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LogoText = styled.h1`
  text-indent: -9999px;
  display: flex;
  align-items: center;

  a {
    height: auto;
  }

  .logo-img {
    width: 10rem;
    cursor: pointer;
  }
`;
