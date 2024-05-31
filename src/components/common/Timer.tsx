import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment, { Duration } from "moment";

const TimerStyle = styled.div`
  width: 100%;
  margin-bottom: 6rem;
  position: relative;
`;
const SvgWrapper = styled.svg`
  transform: scale(0.85);
`;

const Timer: React.FC<{ timer: Duration; defaultTime: number }> = ({
  timer,
  defaultTime,
}) => {
  const [angle, setAngle] = useState(360); // 애니메이션 시작 이전 각도
  const [prevAngle, setPrevAngle] = useState(angle); // 애니메이션 시작 이전 각도
  const size = 100;
  const center = size / 2;
  const strokeWidth = 8;
  const radius = center - strokeWidth / 2;
  const animDuration = 300; // 애니메이션 속도
  const [draw, setDraw] = useState(``); // path d 값

  const radians = (degrees: number) => {
    return (degrees / 180) * Math.PI;
  };

  React.useEffect(() => {
    if (timer.asMilliseconds() >= 0) {
      const percent = timer.asMilliseconds() / defaultTime;
      const prevAngle = 360 * percent;
      setPrevAngle(prevAngle);
    }
  }, [timer, defaultTime]);

  useEffect(() => {
    const drawPath = (angle: number, finished: boolean) => {
      const getArc = (angle: number) => {
        const x = center + radius * Math.cos(radians(angle));
        const y = center + radius * Math.sin(radians(angle));
        return `A${radius},${radius} 1 0 1 ${x},${y}`; // 곡선
      };
      const firstAngle = angle > 180 ? 90 : angle - 90; // 왼쪽 각도
      const secondAngle = -270 + angle - 180; // 오른쪽 각도
      const firstArc = getArc(firstAngle); // 왼쪽 반원
      const secondArc = angle > 180 ? getArc(secondAngle) : ""; // 오른쪽 반원
      const start = `M${center},${center} m0,-${center - strokeWidth / 2}`; // 시작점
      const d = `${start} ${firstArc} ${secondArc}`; // 시작점 왼쪽 반원 오른쪽 반원 그리는 값
      setDraw(d);
      if (finished) {
        setAngle(angle);
      }
    };

    const step = (
      angleOffset: number,
      argAngle: number,
      time: number,
      endTime: number
    ) => {
      const now = new Date().valueOf(); // 애니메이션 시작 시간
      const timeOffset = endTime - now; // 끝나는 시간 - 시작 시간
      if (timeOffset <= 0) {
        // 끝나는 시간이 지났을때
        drawPath(argAngle, true);
      } else {
        const incrementAngle = argAngle - (angleOffset * timeOffset) / time; // 이전각도 - (이전각도 - 현재각도) * (끝나는 시간 - 시작 시간) / 애니메이션 시간
        drawPath(incrementAngle, false); // path를 그려줍니다.
        requestAnimationFrame(() => step(angleOffset, argAngle, time, endTime)); // 끝나는 시간이 지날때까지 step을 계속 실행시킵니다.
      }
    };

    const anim = (argAngle: number, time: number) => {
      if (argAngle > 360) {
        // 각도가 360도를 넘어가면 360도의 나머지 값으로 계산합니다
        argAngle = argAngle % 360;
      }
      const startTime = new Date().valueOf(); // 시작시간
      const endTime = startTime + time; // 끝나는 시간
      const angleOffset = argAngle - angle; // 이전각도와 현재각도 비교
      requestAnimationFrame(() => step(angleOffset, argAngle, time, endTime));
    };
    anim(prevAngle, animDuration);
  }, [prevAngle, animDuration, center, radius, angle]);

  return (
    <TimerStyle>
      <SvgWrapper viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id="gradient">
            {/* <stop offset="0%" stopColor="#ECE4F3" /> */}
            <stop offset="100%" stopColor="#7B05D8" />
          </linearGradient>
        </defs>
        <circle
          cx={center}
          cy={center}
          r={center}
          fill="#ECE4F3"
          stroke="none"
        />
        <circle
          cx={center}
          cy={center}
          r={center - strokeWidth}
          fill="#f5f4ff"
          stroke="none"
        />
        <path
          strokeLinecap="square"
          strokeWidth={strokeWidth}
          stroke="url(#gradient)"
          fill="none"
          d={draw}
        />
        <text
          x={center - 28}
          y={center + 8}
          fill="#000"
          fontSize="20"
          fontWeight="700"
          style={{ userSelect: "none" }}
        >
          {moment.utc(timer.asMilliseconds()).format("mm:ss")}
        </text>
      </SvgWrapper>
    </TimerStyle>
  );
};
export default Timer;
