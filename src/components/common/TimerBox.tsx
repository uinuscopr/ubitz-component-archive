import { useEffect, useState } from "react";
import Timer from "../common/Timer";
import styled from "styled-components";
import moment from "moment";

interface TimerBoxProps {
  defaultMinutes: string;
}

const TimerBox = (props: TimerBoxProps) => {
  const { defaultMinutes } = props;
  // const defaultTime = 1000 * 60 * defaultMinutes; // 1000 * 60 * 3 = 3분
  const [defaultTime, setDefaultTime] = useState<number>(
    1000 * 60 * Number(defaultMinutes)
  );
  const [timer, setTimer] = useState(
    moment.duration(1000 * 60 * Number(defaultMinutes))
  );
  const [timerStatus, setTimerStatus] = useState<"play" | "pause" | "stop">(
    "stop"
  );
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    // setDefaultTime(1000 * 60 * Number(defaultMinutes));
    const currentTimer: NodeJS.Timeout = setInterval(() => {
      setCurrentTime((prevCurrentTime) =>
        prevCurrentTime.clone().add(1, "minute")
      );
    }, 60000);
    return () => {
      clearInterval(currentTimer);
    };
  }, []);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout | null = null;
    if (timerStatus === "play") {
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => {
          const duration = prevTimer.clone().subtract(1, "second");
          if (prevTimer.asMilliseconds() === 0) {
            setTimerStatus("stop");
            return moment.duration(0);
          }
          return duration;
        });
      }, 1000);
    } else if (timerStatus === "pause" || timerStatus === "stop") {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    }
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timerStatus]);

  const timerControl = () => {
    if (timerStatus === "play") {
      setTimerStatus("pause");
    } else {
      setTimerStatus("play");
    }
  };

  const timerReset = () => {
    setTimerStatus("stop");
    setTimer(moment.duration(defaultTime));
  };
  return (
    <TimerWrapper>
      <TimerDisplay>
        <Timer timer={timer} defaultTime={defaultTime} />
        <ButtonsWrapper>
          <Button type="button" onClick={() => timerControl()}>
            {timerStatus === "play" ? (
              <TimerStatusText>STOP</TimerStatusText>
            ) : (
              <TimerStatusText>START</TimerStatusText>
            )}
          </Button>
          <Button type="button" onClick={() => timerReset()}>
            <TimerStatusText>RESET</TimerStatusText>
          </Button>
        </ButtonsWrapper>
      </TimerDisplay>
    </TimerWrapper>
  );
};

export default TimerBox;
const TimerWrapper = styled.div`
  width: 100%;
  background-color: #f5f4ff;
  border-radius: 60px;
  box-sizing: border-box;
`;

const TimerDisplay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 0;
  background-color: rgba(94, 73, 174, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:last-of-type {
    background-color: #694ae3;
  }
`;

const TimerStatusText = styled.span`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
`;
