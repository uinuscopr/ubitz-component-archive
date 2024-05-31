import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface PopupModalProps {
  title: string;
  subTitle?: string;
  isOpenModal: boolean;
  setIsOpenModal: Function;
  moveTo?: string;
}

export default function PopupModal(props: PopupModalProps) {
  const { title, subTitle, isOpenModal, setIsOpenModal, moveTo } = props;

  const navigate = useNavigate();

  const onClickHandler = () => {
    if (moveTo === "home") {
      setIsOpenModal(false);
      navigate("/home");
    }

    if (moveTo === "mypage") {
      setIsOpenModal(false);
      navigate("/mypage");
    }

    if (moveTo === "") {
      setIsOpenModal(false);
      navigate(-1);
    }

    if (moveTo === "login") {
      setIsOpenModal(false);
      navigate("/");
    }

    setIsOpenModal(false);
  };

  return (
    <>
      {isOpenModal === true ? (
        <>
          <DimModalContainer>
            <BackgroundDim></BackgroundDim>
            <ModalDiv>
              <ModalTitle>{title}</ModalTitle>
              <ModalSubTitle>{subTitle}</ModalSubTitle>
              <ButtonWrap>
                <ModalBtn
                  onClick={() => {
                    onClickHandler();
                  }}
                >
                  {title === "회원가입이 완료되었어요!" ? (
                    <>로그인하러 가기</>
                  ) : (
                    <>확인</>
                  )}
                </ModalBtn>
              </ButtonWrap>
            </ModalDiv>
          </DimModalContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

const DimModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const BackgroundDim = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const ModalDiv = styled.div`
  width: 30rem;
  height: 19rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6.4rem;
  margin-right: 2rem;
  margin-left: 2rem;
  z-index: 9;
  background: #fff;
  border-radius: 0.4rem;
`;

const ModalTitle = styled.h6`
  color: var(--gray-scale-900);
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: -0.032rem;
`;

const ModalSubTitle = styled.p`
  color: var(--gray-scale-500);
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem; /* 142.857% */
  letter-spacing: -0.028rem;
  margin-bottom: 2.8rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 2rem;
`;

const ModalBtn = styled.button`
  width: 15.6rem;
  padding: 1.2rem 1.6rem;
  border-radius: 0.4rem;
  background: var(--main-color);

  color: #fff;
  font-size: 1.4rem;
`;
