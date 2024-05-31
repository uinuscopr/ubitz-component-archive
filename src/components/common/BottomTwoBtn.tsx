import styled from "styled-components";

interface BottomBtnProps {
  leftBtnName: string;
  rightBtnName: string;
  type: string;
  setIsOpenModal?: Function;
}

export default function BottomTwoBtn(props: BottomBtnProps) {
  const { leftBtnName, rightBtnName, type, setIsOpenModal } = props;

  const onClickHandler = () => {
    if (type === "reservation") {
      if (setIsOpenModal !== undefined) {
        setIsOpenModal(true);
      }
    }
  };

  return (
    <>
      <ButtonContainer>
        <LineButton onClick={onClickHandler}>{leftBtnName}</LineButton>
        <FullButton onClick={onClickHandler}>{rightBtnName}</FullButton>
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 47.8rem;
  display: flex;
  gap: 1.2rem;
  padding: 1rem 2rem;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  border-top: 1px solid #ddd;
`;

const FullButton = styled.button`
  width: 100%;
  height: 5.2rem;
  padding: 0.8rem 1rem;
  border-radius: 0.4rem;
  background-color: var(--main-color);
  border: 1px solid var(--main-color);
  color: #ffffff;
`;

const LineButton = styled.button`
  width: 100%;
  height: 5.2rem;
  padding: 0.8rem 1rem;
  border-radius: 0.4rem;
  background-color: var(--gray-scale-000);
  border: 1px solid #ddd;
  color: var(--gray-scale-900);
`;
