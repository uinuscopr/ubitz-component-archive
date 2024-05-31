import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface BottomBtnProps {
  buttonName: string;
  type: string;
  isAllChecked?: boolean;
  setIsOpenModal?: Function;
}

export default function BottomStepBtn(props: BottomBtnProps) {
  const { buttonName, type, isAllChecked, setIsOpenModal } = props;
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (type === "userRegist1") {
      navigate("/userRegistStep2");
    }

    if (type === "userRegist2") {
      navigate("/userRegistStep3");
    }

    if (type === "userRegist3") {
      navigate("/machineRegist/userRegist");
    }

    if (type === "registMachine") {
      if (setIsOpenModal !== undefined) {
        setIsOpenModal(true);
      }
    }
  };
  return (
    <>
      <ButtonContainer $type={type}>
        {isAllChecked === true ? (
          <>
            <Button $type={type} onClick={onClickHandler}>
              {buttonName}
            </Button>
          </>
        ) : (
          <>
            <NonActiveButton>다음</NonActiveButton>
          </>
        )}
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div<{ $type: string }>`
  width: 100%;
  max-width: 47.8rem;
  display: flex;
  gap: 2rem;
  padding: 1.4rem 2rem;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  border-top: ${(props) =>
    props.$type === "designerDetail" ? "1px solid var(--gray-scale-050)" : "0"};
`;

const Button = styled.button<{ $type: string }>`
  width: ${(props) =>
    props.$type === "designerDetail" ? "calc(100% - 7.2rem)" : "100%"};
  height: 5.2rem;
  padding: 1.6rem 0;
  border-radius: 0.4rem;
  background-color: var(--main-color);
  color: #ffffff;
`;

const NonActiveButton = styled.button`
  width: 100%;
  height: 5.2rem;
  padding: 1.6rem 0;
  border-radius: 0.4rem;
  background-color: var(--gray-scale-100);
  color: var(--gray-scale-200);
`;
