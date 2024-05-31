/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { marginTopBottom20, paddingAll20 } from "../../styles/common";

import { useRef, useState } from "react";
import styled from "styled-components";
import downArrowIcon from "../../assets/images/common/arrow_under_black.svg";
import minus from "../../assets/images/common/minus-color.svg";
import plus from "../../assets/images/common/plus-color.svg";
import { useNavigate } from "react-router-dom";

interface StoreModalProps {
  isOpen: boolean;
  setIsOpen: Function;
  productId?: number;
  originalPrice?: number;
  memberPrice?: number;
}

export default function CategoryBottomModal(props: StoreModalProps) {
  const modalRef = useRef<HTMLObjectElement>(null);
  const { isOpen, setIsOpen, originalPrice, memberPrice, productId } = props;
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();

  const handleIncrement = () => {
    let count = counter + 1;
    setCounter(count);
  };

  const handleDecrement = () => {
    let count;

    if (counter === 1) {
      count = 1;
    } else {
      count = counter - 1;
    }

    setCounter(count);
  };

  return (
    <>
      <BottomUpModalDiv
        ref={modalRef}
        className={`modal ${isOpen ? "modal-open" : ""}`}
      >
        <IconWrap
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <img src={downArrowIcon} alt="닫기" />
        </IconWrap>
        <hr />
        <CountArea>
          <div className="count-product-box">
            <button
              name="dec"
              className="minus-count"
              onClick={() => handleDecrement()}
            >
              <img src={minus} alt="수량 빼기" />
            </button>
            <div className="count-number">{counter}</div>
            <button
              name="inc"
              className="plus-count"
              onClick={() => handleIncrement()}
            >
              <img src={plus} alt="수량 더하기" />
            </button>
          </div>
        </CountArea>
        <PriceArea>
          <PriceWrap>
            <PriceTitle>일반가</PriceTitle>
            <PriceWon>
              {originalPrice !== undefined &&
                `${originalPrice.toLocaleString()}원`}
            </PriceWon>
          </PriceWrap>
          <PriceWrap>
            <PriceTitle>Membership</PriceTitle>
            <PriceWon>
              {originalPrice !== undefined &&
                memberPrice !== undefined &&
                `-${(originalPrice - memberPrice).toLocaleString()}원`}
            </PriceWon>
          </PriceWrap>
        </PriceArea>
        <hr
          css={css`
            ${marginTopBottom20};
          `}
        />
        <div
          css={css`
            ${paddingAll20};
          `}
        >
          <PriceWrap>
            <PriceTitle>구매 가능 금액</PriceTitle>
            <SpecialPriceWon>
              {memberPrice !== undefined && `${memberPrice.toLocaleString()}원`}
            </SpecialPriceWon>
          </PriceWrap>
        </div>
        <ButtonWrap>
          <CancelBtn type="button">장바구니</CancelBtn>
          <ConfirmBtn
            type="button"
            onClick={() => {
              navigate(`/productOrder/${productId}/${counter}`);
            }}
          >
            예약하기
          </ConfirmBtn>
        </ButtonWrap>
      </BottomUpModalDiv>
      <div className={`black-cover ${isOpen ? "show" : "none"}`}></div>
    </>
  );
}

const BottomUpModalDiv = styled.div`
  width: 100%;
  max-width: 47.8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const IconWrap = styled.div`
  width: 100%;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: center;

  img {
    width: 0.8rem;
  }
`;

const CountArea = styled.div`
  width: 100%;
  padding: 2rem;
`;

const PriceArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 0 2rem;
`;

const PriceWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;
`;

const PriceTitle = styled.div`
  color: var(--gray-scale-900);
  font-family: Pretendard, sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const PriceWon = styled.div`
  text-align: right;
  color: var(--gray-scale-900);
  font-family: Pretendard, sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const SpecialPriceWon = styled.div`
  color: var(--main-color);
  text-align: right;
  font-family: Pretendard, sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  padding: 1rem 2rem;
  border-top: 1px solid #ddd;
`;

const CancelBtn = styled.button`
  width: 100%;
  padding: 1.6rem 0rem;
  border-radius: 0.4rem;
  background: var(--gray-scale-000);
  border-radius: 0.4rem;
  border: 1px solid #333;

  color: var(--gray-scale-900);
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.032rem;
`;

const ConfirmBtn = styled.button`
  width: 100%;
  padding: 1.6rem 0rem;
  border-radius: 0.4rem;
  background: var(--main-color);

  color: var(--gray-scale-000);
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem; /* 142.857% */
  letter-spacing: -0.056rem;
`;
