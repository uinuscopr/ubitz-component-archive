import styled from "styled-components";
import settingArrow from "../../assets/images/mypage/arrow_right_gray.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SettingTitle = styled.div`
  width: 100%;
  margin-top: 1.4rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 3rem; /* 214.286% */
  letter-spacing: -0.028rem;
  padding-left: 0.2rem;
`;

const ArrowImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

interface SettingPWProps {
  title: string;
  moveType: string;
}
export default function SettingPW(props: SettingPWProps) {
  const navigate = useNavigate();
  const { title, moveType } = props;
  useEffect(() => {});
  return (
    <>
      <SettingTitle
        onClick={() => {
          if (moveType === "review") {
            alert("준비중입니다.");
            return;
          }
          navigate(`/${moveType}`);
        }}
      >
        <TitleText>{title}</TitleText>
        <ArrowImg src={settingArrow} alt={`${title}로 이동`} />
      </SettingTitle>
    </>
  );
}
