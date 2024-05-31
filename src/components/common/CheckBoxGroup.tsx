import styled from "styled-components";
import { useState } from "react";

interface CheckBoxProps {
  setHowToPay: Function;
}

export default function CheckBoxGroup(props: CheckBoxProps) {
  const { setHowToPay } = props;
  const [isCardChecked, setIsCardChecked] = useState<boolean>(true);
  const [isDepositChecked, setIsDepositChecked] = useState<boolean>(false);

  // onChange 핸들러 함수
  const handleCheckboxChange = (event: any) => {
    if (event.target.id === "card") {
      setIsDepositChecked(false);
      setIsCardChecked(true);
      setHowToPay("card");
    } else {
      setIsCardChecked(false);
      setIsDepositChecked(true);
      setHowToPay("deposit");
    }
  };

  return (
    <>
      <StyledInput
        type="checkbox"
        id="card"
        checked={isCardChecked}
        onChange={handleCheckboxChange}
      />
      <StyledLabel
        htmlFor="card"
        $checkIconImg={"/images/check.svg"}
        $uncheckIconImg={"/images/uncheck.svg"}
      >
        <StyledP>카드</StyledP>
      </StyledLabel>
      <br />
      <StyledInput
        type="checkbox"
        id="deposit"
        checked={isDepositChecked}
        onChange={handleCheckboxChange}
      />
      <StyledLabel
        htmlFor="deposit"
        $checkIconImg={"/images/check.svg"}
        $uncheckIconImg={"/images/uncheck.svg"}
      >
        <StyledP>가상계좌</StyledP>
      </StyledLabel>
    </>
  );
}

const StyledLabel = styled.label<{
  $checkIconImg: string;
  $uncheckIconImg: string;
}>`
  position: relative;
  display: flex;
  user-select: none;
  align-items: center;

  p {
    color: #ddd;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 160%;
  }

  // 체크하기 전 스타일
  &:before {
    content: "";
    width: 2.4rem;
    height: 2.4rem;

    border-radius: 0.4rem;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${(prop) => prop.$uncheckIconImg});
  }

  /* 체크하고 난 후 스타일 */
  &:after {
    opacity: 0;
    content: "";
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;

    border-radius: 0.4rem;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${(prop) => prop.$checkIconImg});
  }
`;

const StyledInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;

  /* INPUT이 체크 상태일 때 after영역 보이도록 */
  &:checked + ${StyledLabel} {
    &:after {
      opacity: 1;
    }
    p {
      color: var(--text-black);
    }
  }
`;

const StyledP = styled.p`
  margin-left: 0.8rem;
`;
