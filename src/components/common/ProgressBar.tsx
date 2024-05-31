import styled from "styled-components";

interface ProgressBarProps {
  level: number;
  maxLevel: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  const { level, maxLevel } = props;

  return (
    <ProgressBarBox>
      <Progress width={(level * 100) / maxLevel} />
    </ProgressBarBox>
  );
}

const ProgressBarBox = styled.div`
  width: 100%;
  height: 0.8rem;
  /* background-color: #eedcdc; */
  background-color: #eedcdc;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.8rem;
  overflow: hidden;
`;

const Progress = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  height: 0.8rem;
  padding: 0;
  text-align: center;
  background-color: #f36666;
`;
