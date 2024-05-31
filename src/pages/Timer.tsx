import styled from "styled-components";
import TimerBox from "../components/common/TimerBox";

export default function Timer() {
  return (
    <>
      {/* timer 영역 */}
      <TimerContainer>
        <TimerBox defaultMinutes={"5"} />
      </TimerContainer>
    </>
  );
}

const TimerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
  margin-top: 6rem;
  padding: 2rem;
`;
