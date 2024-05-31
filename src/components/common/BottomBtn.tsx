import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TestResultType } from "../../types/godsMwttTypes";

interface BottomBtnProps {
  btnTitle: string;
  type: string;
  setIsOpenModal?: Function;
  currentStep?: number;
  setCurrentStep?: Function;
  finalResultList?: Array<TestResultType>;
  productObj?: {
    productId: string | undefined;
    productCnt: string | undefined;
  };
}

export default function BottomBtn(props: BottomBtnProps) {
  const {
    btnTitle,
    type,
    setIsOpenModal,
    currentStep,
    setCurrentStep,
    finalResultList,
    productObj,
  } = props;
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (currentStep !== undefined) {
      if (currentStep === 1) {
        if (setCurrentStep !== undefined) {
          setCurrentStep(2);
        }
      } else if (currentStep === 2) {
        if (setCurrentStep !== undefined) {
          setCurrentStep(3);
        }
      } else if (currentStep === 3) {
        if (setCurrentStep !== undefined) {
          setCurrentStep(4);
        }
      } else if (currentStep === 4) {
        if (setCurrentStep !== undefined) {
          setCurrentStep(5);
        }
      } else if (currentStep === 5) {
        if (setCurrentStep !== undefined) {
          setCurrentStep(6);
        }
      } else if (currentStep === 6) {
        if (setCurrentStep !== undefined) {
          setCurrentStep(7);
        }
      } else {
        if (finalResultList !== undefined) {
          if (
            finalResultList[0] !== undefined &&
            finalResultList[1] !== undefined &&
            finalResultList[2] !== undefined
          ) {
            navigate(`/testResult/${checkResultType(finalResultList)}`);
          } else {
            navigate(`/testResult/A`);
          }
        }
      }
    }

    if (type === "order") {
      // console.log(productObj);
      navigate(
        `/myOrderDatail/${productObj?.productId}/${productObj?.productCnt}`
      );
    }

    if (type === "myInfoUpdate") {
      navigate("/mypage");
    }

    if (type === "userRegist") {
      navigate("/userRegistFinal");
    }

    if (type === "userRegistFinal") {
      if (setIsOpenModal !== undefined) {
        setIsOpenModal(true);
      }
    }

    if (type === "findId") {
      if (setCurrentStep !== undefined) {
        setCurrentStep("id-result");
      }
    }

    if (type === "findIdFinal" || type === "resetPw") {
      navigate("/");
    }

    if (type === "findPw") {
      navigate("/resetPW");
    }
  };

  const checkResultType = (value: Array<any>) => {
    let resultType = "";
    const resultText =
      value[0].answerValue + value[1].answerValue + value[2].answerValue;

    switch (resultText) {
      case "HHH":
        resultType = "A";
        break;
      case "HMH":
        resultType = "B";
        break;
      case "HLH":
        resultType = "C";
        break;
      case "MHH":
        resultType = "D";
        break;
      case "MMH":
        resultType = "E";
        break;
      case "MLH":
        resultType = "F";
        break;
      case "LHH":
        resultType = "G";
        break;
      case "LMH":
        resultType = "H";
        break;
      case "LLH":
        resultType = "I";
        break;
      case "HHM":
        resultType = "J";
        break;
      case "HMM":
        resultType = "K";
        break;
      case "HLM":
        resultType = "L";
        break;
      case "MHM":
        resultType = "M";
        break;
      case "MMM":
        resultType = "N";
        break;
      case "MLM":
        resultType = "O";
        break;
      case "LHM":
        resultType = "P";
        break;
      case "LMM":
        resultType = "Q";
        break;
      case "LLM":
        resultType = "R";
        break;
      case "HHL":
        resultType = "S";
        break;
      case "HML":
        resultType = "T";
        break;
      case "HLL":
        resultType = "U";
        break;
      case "MHL":
        resultType = "V";
        break;
      case "MML":
        resultType = "W";
        break;
      case "MLL":
        resultType = "X";
        break;
      case "LHL":
        resultType = "Y";
        break;
      case "LML":
        resultType = "Z";
        break;
      default:
        resultType = "Z-Z";
        break;
    }

    return resultType;
  };

  return (
    <>
      <ButtonContainer>
        <FullButton onClick={onClickHandler}>{btnTitle}</FullButton>
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 47.8rem;
  display: flex;
  gap: 1.2rem;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  border-top: 1px solid #ddd;
`;

const FullButton = styled.button`
  width: 100%;
  height: 6rem;
  padding: 0.8rem 1rem;
  border-radius: 0.4rem 0.4rem 0rem 0rem;
  background-color: var(--main-color);
  border: 1px solid var(--main-color);
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
`;
