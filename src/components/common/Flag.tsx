import { FlagTypes } from "../../types/godsMwttTypes";

interface FlagProps {
  flagIdx: number;
  isSelected: boolean;
  flagArr: FlagTypes[];
  setFlagArr: Function;
  isOneSelect: boolean;
}

const Flag = (props: FlagProps) => {
  const { flagIdx, isSelected, flagArr, setFlagArr, isOneSelect } = props;

  // 클릭하면 자리에 !isSelected 넣어야함!!
  function handlerClick() {
    let copy = [...flagArr];
    for (let i = 0; i < copy.length; i++) {
      if (isOneSelect) {
        copy[i].isChecked = false;
      }

      if (i === flagIdx) {
        copy[flagIdx].isChecked = !isSelected;
      }
    }

    setFlagArr(copy);
  }

  return (
    <>
      <div
        className={`flag-common ${isSelected ? "active-flag" : "default-flag"}`}
        onClick={() => {
          handlerClick();
        }}
      >
        <p
          className={`flag-name ${isSelected ? "active-name" : "default-name"}`}
        >
          {flagArr[flagIdx].name}
        </p>
      </div>
    </>
  );
};

export default Flag;
