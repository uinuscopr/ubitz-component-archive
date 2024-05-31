import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import menu1Active from "../../assets/images/common/active_menu1.svg";
import menu1Default from "../../assets/images/common/default_menu1.svg";

import menu2Active from "../../assets/images/common/active_menu2.svg";
import menu2Default from "../../assets/images/common/default_menu2.svg";

import menu3Active from "../../assets/images/common/active_menu3.svg";
import menu3Default from "../../assets/images/common/default_menu3.svg";

import menu4Active from "../../assets/images/common/active_menu4.svg";
import menu4Default from "../../assets/images/common/default_menu4.svg";

interface BottomGNBProps {
  menuNumber: number;
}

export default function BottomGNB(props: BottomGNBProps) {
  const { menuNumber } = props;

  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(menuNumber);

  function handleMenuClick(clickedNum: number) {
    setActiveNav(clickedNum);
    moveToPages(clickedNum);
  }

  function moveToPages(clickedNum: number) {
    if (clickedNum === 1) {
      navigate("/home");
    } else if (clickedNum === 2) {
      navigate("/reservation");
    } else if (clickedNum === 3) {
      navigate("/store");
    } else {
      navigate("/mypage");
    }
  }

  return (
    <BottomNav>
      <MenuUl>
        <MenuLi
          onClick={() => {
            handleMenuClick(1);
          }}
        >
          {activeNav === 1 ? (
            <>
              <MenuIcon src={menu1Active} alt="홈 메뉴" />
              <ActiveMenuP>홈</ActiveMenuP>
            </>
          ) : (
            <>
              <MenuIcon src={menu1Default} alt="홈 메뉴" />
              <DefaultMenuP>홈</DefaultMenuP>
            </>
          )}
        </MenuLi>

        <MenuLi
          onClick={() => {
            handleMenuClick(2);
          }}
        >
          {activeNav === 2 ? (
            <>
              <MenuIcon src={menu2Active} alt="예약 메뉴" />
              <ActiveMenuP>예약</ActiveMenuP>
            </>
          ) : (
            <>
              <MenuIcon src={menu2Default} alt="예약 메뉴" />
              <DefaultMenuP>예약</DefaultMenuP>
            </>
          )}
        </MenuLi>
        <MenuLi
          onClick={() => {
            handleMenuClick(3);
          }}
        >
          {activeNav === 3 ? (
            <>
              <MenuIcon src={menu3Active} alt="스토어 메뉴" />
              <ActiveMenuP>스토어</ActiveMenuP>
            </>
          ) : (
            <>
              <MenuIcon src={menu3Default} alt="스토어 메뉴" />
              <DefaultMenuP>스토어</DefaultMenuP>
            </>
          )}
        </MenuLi>
        <MenuLi
          onClick={() => {
            handleMenuClick(4);
          }}
        >
          {activeNav === 4 ? (
            <>
              <MenuIcon src={menu4Active} alt="마이페이지 메뉴" />
              <ActiveMenuP>마이페이지</ActiveMenuP>
            </>
          ) : (
            <>
              <MenuIcon src={menu4Default} alt="마이페이지 메뉴" />
              <DefaultMenuP>마이페이지</DefaultMenuP>
            </>
          )}
        </MenuLi>
      </MenuUl>
    </BottomNav>
  );
}

const BottomNav = styled.nav`
  width: 100%;
  max-width: 47.8rem;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  border-top: 1px solid var(--gray-scale-050);
`;

const MenuUl = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-top: 0.8rem;
  padding-bottom: 0.7rem;
`;

const MenuLi = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;
`;

const ActiveMenuP = styled.p`
  color: var(--gray-scale-900);
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.024rem;
`;

const DefaultMenuP = styled.p`
  color: var(--gray-scale-800);
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.024rem;
`;

const MenuIcon = styled.img`
  height: 3rem;
  margin-bottom: 0.4rem;
`;
