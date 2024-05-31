import styled from "styled-components";
import settingColorArrow from "../../assets/images/mypage/arrow_right_color.svg";
import settingArrow from "../../assets/images/mypage/arrow_right_gray.svg";
import myinfoIcon from "../../assets/images/mypage/myinfo-icon.svg";
import orderListIcon from "../../assets/images/mypage/order-list-icon.svg";
import myReservationIcon from "../../assets/images/mypage/my-reservation-icon.svg";

import { useNavigate } from "react-router-dom";

interface SettingItemProps {
  title: string;
  moveType: string;
}

export default function SettingItem(props: SettingItemProps) {
  const navigate = useNavigate();
  const { title, moveType } = props;

  const clickHandler = () => {
    if (moveType === "logout") {
      if (window.confirm("로그아웃 하시겠습니까?")) {
        navigate("/");
      } else {
        return;
      }
    } else if (moveType === "myInfo") {
      navigate("/myInfo");
    } else if (moveType === "myOrderList") {
      navigate("/myOrderList");
    } else if (moveType === "myReservation") {
      navigate("/myReservation");
    } else {
      alert("준비중입니다.");
      return;
    }
  };

  return (
    <>
      <SettingTitle onClick={clickHandler} $type={moveType}>
        <TitleWrap>
          {moveType === "myInfo" && (
            <TitleIcon src={myinfoIcon} alt="내정보 수정" />
          )}
          {moveType === "myOrderList" && (
            <TitleIcon src={orderListIcon} alt="주문 내역" />
          )}
          {moveType === "myReservation" && (
            <TitleIcon src={myReservationIcon} alt="내 예약" />
          )}
          {moveType === "logout" && <></>}
          <TitleText $type={moveType}>{title}</TitleText>
        </TitleWrap>
        {moveType === "myInfo" ? (
          <>
            <ArrowImg src={settingColorArrow} alt={`${title}로 이동`} />
          </>
        ) : (
          <>
            <ArrowImg src={settingArrow} alt={`${title}로 이동`} />
          </>
        )}
      </SettingTitle>
    </>
  );
}

const SettingTitle = styled.div<{ $type: string }>`
  width: 100%;
  height: 5.6;
  padding: 1.5rem 1.8rem;
  border-radius: 0.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: ${(props) =>
    props.$type === "myInfo" ? "1px solid #F0F0FF" : "1px solid #DDD"};
  background-color: ${(props) =>
    props.$type === "myInfo" ? "#F0F0FF" : "#ffffff"};
`;

const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TitleIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

const TitleText = styled.p<{ $type: string }>`
  color: ${(props) => (props.$type === "myInfo" ? "#170F79" : "#333333")};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.6rem; /* 162.5% */
  letter-spacing: -0.032rem;
`;

const ArrowImg = styled.img`
  width: 0.8rem;
`;
