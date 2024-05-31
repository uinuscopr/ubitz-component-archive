import styled from "styled-components";

interface AlarmBoxProps {
  category: string;
  date: string;
  contents: string;
}

const AlarmBox = (props: AlarmBoxProps) => {
  const { category, date, contents } = props;
  return (
    <>
      <AlarmBoxContainer>
        <TopAlarmCopy>
          <AlarmCategory>{category}</AlarmCategory>
          <AlarmDate>{date}</AlarmDate>
        </TopAlarmCopy>
        <AlarmContext>{contents}</AlarmContext>
      </AlarmBoxContainer>
    </>
  );
};

export default AlarmBox;

const AlarmBoxContainer = styled.div`
  width: 100%;
  padding: 1.6rem 2rem;
  border-bottom: 1px solid var(--gray-scale-050);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const TopAlarmCopy = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AlarmCategory = styled.p`
  color: var(--gray-scale-500);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem; /* 142.857% */
  letter-spacing: -0.028rem;
`;

const AlarmDate = styled.div`
  color: var(--gray-scale-400);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem; /* 133.333% */
  letter-spacing: -0.024rem;
`;

const AlarmContext = styled.p`
  color: var(--gray-scale-700);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem; /* 125% */
  letter-spacing: -0.032rem;
`;
