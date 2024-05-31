import downArrow from "../../assets/images/common/arrow_down.svg";
import upArrow from "../../assets/images/common/arrow_up.svg";
import { useRef, useState, useCallback } from "react";
import styled from "styled-components";

interface NoticeBoxProps {
  noticeTitle: string;
  noticeContent: string;
}

export default function NoticeBox(props: NoticeBoxProps) {
  const { noticeTitle, noticeContent } = props;
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = useCallback(() => {
    if (parentRef.current === null || childRef.current === null) {
      return;
    }
    if (parentRef.current.clientHeight > 0) {
      parentRef.current.style.height = "0";
      parentRef.current.style.padding = "0";
    } else {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <NoticeBoxContainer className="notice-box">
        <NoticeTitle
          className="notice-title"
          onClick={() => {
            handleButtonClick();
          }}
        >
          <NoticeTitleText>Q. {noticeTitle}</NoticeTitleText>
          {isOpen ? (
            <DropdownImg src={upArrow} alt="유의사항 더보기" />
          ) : (
            <DropdownImg src={downArrow} alt="유의사항 접기" />
          )}
        </NoticeTitle>
        <NoticeContentBox className="notice-content" ref={parentRef}>
          <NoticeContentText ref={childRef}>
            A. {noticeContent}
          </NoticeContentText>
        </NoticeContentBox>
      </NoticeBoxContainer>
    </>
  );
}

const NoticeBoxContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  /* padding: 1.6rem 0; */
`;

const NoticeTitle = styled.div`
  width: 100%;
  padding: 1.6rem 0;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

const NoticeTitleText = styled.h6`
  color: var(--gray-scale-800);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem; /* 125% */
  letter-spacing: -0.032rem;
`;

const DropdownImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const NoticeContentBox = styled.div`
  width: 100%;
  height: 0;
  padding: 0;
  overflow: hidden;
  transition: height 0.35s ease;
`;

const NoticeContentText = styled.p`
  color: var(--gray-scale-500);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem; /* 142.857% */
  letter-spacing: -0.056rem;
  padding: 1.6rem;
  background-color: var(--gray-scale-050);
`;
