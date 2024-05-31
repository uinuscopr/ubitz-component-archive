import styled from "styled-components";
import { CheckboxType } from "../../types/ubitzTypes";
import { ar } from "date-fns/locale";

interface CheckBoxProps {
  checkName: string;
  copy: string;
  setIsChecked: Function;
  checked: boolean;
  index: number;
  checkYNList: Array<CheckboxType>;
}

// { checkName, copy, setIsChecked, checked }
export default function CheckBox(props: CheckBoxProps) {
  const { checkName, copy, setIsChecked, index, checkYNList } = props;

  return (
    <>
      <StyledInput
        type="checkbox"
        id={checkName}
        name={checkName}
        onClick={() => {
          let arr = [...checkYNList];
          for (let i = 0; i < arr.length; i++) {
            if (i === index) {
              let newList = [
                ...arr,
                {
                  value: arr[i].value,
                  name: arr[i].name,
                  isChecked: !arr[i].isChecked,
                },
              ];

              setIsChecked(newList);
            }
          }
        }}
      />
      <StyledLabel
        htmlFor={checkName}
        $checkIconImg={"/images/check.svg"}
        $uncheckIconImg={"/images/uncheck.svg"}
      >
        {copy !== "" ? (
          <>
            <StyledP>{copy}</StyledP>
          </>
        ) : (
          <></>
        )}
      </StyledLabel>
      {copy !== "" ? (
        <></>
      ) : (
        <>
          <StyledP>{copy}</StyledP>
        </>
      )}
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
    width: 2rem;
    height: 2rem;

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
    width: 2rem;
    height: 2rem;

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
