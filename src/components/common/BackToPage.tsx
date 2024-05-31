import backIcon from "../../assets/images/common/icon_back.svg";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface BackToPageProps {
  title: string;
  moveTo: string;
  type?: string;
}

export default function BackToPage(props: BackToPageProps) {
  const { title, moveTo, type } = props;
  const navigate = useNavigate();

  const onClickBtn = () => {
    if (moveTo !== "") {
      navigate(moveTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <DivBox className="back-to-page">
      {type !== undefined && type === "reservation" ? (
        <></>
      ) : (
        <>
          <ImgIcon onClick={onClickBtn} src={backIcon} alt="뒤로가기" />
        </>
      )}

      <TitleText>{title}</TitleText>
    </DivBox>
  );
}

const DivBox = styled.div`
  width: 100%;
  max-width: 47.8rem;
  height: 5.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.8rem 2rem 1.4rem;
  position: fixed;
  top: 0;
  background-color: var(--gray-scale-000);
  z-index: 99;
`;

const ImgIcon = styled.img`
  width: 2rem;
  height: 2rem;
  position: absolute;
  left: 1.5rem;
  cursor: pointer;
`;

const TitleText = styled.h6`
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2rem; /* 125% */
  letter-spacing: -0.064rem;
`;
