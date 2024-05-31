import "../../assets/css/counseling.scss";
import CheckBox from "../common/CheckBox";
import calIcon from "../../assets/images/common/calendar.svg";
import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { CheckboxType } from "../../types/ubitzTypes";

const checkBoxList = [
  { value: "1", name: "Web", isChecked: true },
  { value: "2", name: "App", isChecked: false },
  { value: "3", name: "Blockchain", isChecked: false },
];

const salesSelectList = [
  { value: "1", name: "0 ~ 1,000만원" },
  { value: "2", name: "2,000만원 ~ 5,000만원" },
  { value: "3", name: "6,000만원 ~ 1억" },
];

export default function Counseling() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [serviceCheck, setServiceCheck] =
    useState<Array<CheckboxType>>(checkBoxList);

  const CalCustomInput = forwardRef(
    ({
      value,
      onClick,
    }: {
      value: string | "";
      onClick: React.MouseEventHandler<HTMLInputElement> | undefined;
    }) => (
      <>
        <input
          type="text"
          className="example-custom-input input"
          onClick={onClick}
          value={value === null ? "" : value}
        />
        <div className="cal-icon">
          <img src={calIcon} alt="달력" />
        </div>
      </>
    )
  );

  return (
    <>
      <section className="counseling-container">
        <form>
          <h4 className="main-title">상담문의</h4>
          {/*  1. 기업명 text */}
          <div className="input-inline-grp">
            <label className="inp-label needs" htmlFor="comName">
              기업명
            </label>
            <input type="text" id="comName" name="comName" className="input" />
          </div>

          {/* 2. 사업자 번호 number */}
          <div className="input-inline-grp">
            <label className="inp-label" htmlFor="bizNum">
              사업자번호
            </label>
            <input type="number" id="bizNum" name="bizNum" className="input" />
          </div>

          {/* 3. 핸드폰 번호 select + number*/}
          <div className="input-inline-grp">
            <label className="inp-label" htmlFor="phoneNum">
              핸드폰 번호
            </label>
            <div className="inp-phone-wrap">
              <select name="phoneNum" className="input">
                <option value="1">010</option>
                <option value="2">016</option>
                <option value="3">017</option>
                <option value="4">019</option>
              </select>
              <span className="phone-dash">-</span>
              <input
                type="number"
                name="phoneNum"
                id="phoneNum"
                className="input input-phone"
              />
              <span className="phone-dash">-</span>
              <input
                type="number"
                name="phoneNum"
                className="input input-phone"
              />
            </div>
          </div>

          {/* 4. 문의 서비스 checkbox */}
          <div className="input-inline-grp">
            <h4 className="inp-label">문의하실 서비스</h4>
            <div className="inp-check-wrap">
              {checkBoxList.map((el, idx) => {
                return (
                  <>
                    <CheckBox
                      checkName={`ch_${el.value}`}
                      copy={el.name}
                      checked={el.isChecked}
                      index={idx}
                      setIsChecked={setServiceCheck}
                      checkYNList={serviceCheck}
                    />
                  </>
                );
              })}
            </div>
          </div>

          {/* 5. 매출 select */}
          <div className="input-inline-grp">
            <label className="inp-label" htmlFor="bizSales">
              매출
            </label>
            <select name="bizSales" id="bizSales" className="input">
              {salesSelectList.map((el, idx) => {
                return (
                  <>
                    <option value={el.value}>{el.name}</option>
                  </>
                );
              })}
            </select>
          </div>

          {/* 6. 일정 datepicker*/}
          <div className="input-inline-grp">
            <label className="inp-label" htmlFor="meetingDate">
              미팅 일정
            </label>
            <div className="inp-date-wrap">
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                customInput={
                  <CalCustomInput value={"2024-05-10"} onClick={() => {}} />
                }
              />
            </div>
          </div>

          {/* 7. 상담 내용 textarea */}
          <div className="input-inline-grp inp-consult-wrap">
            <label className="inp-label" htmlFor="consultSummary">
              상담내용
            </label>
            <textarea
              id="consultSummary"
              name="consultSummary"
              className="input"
              rows={10}
            />
          </div>
          <button className="counsel-submit-btn input" type="submit">
            문의하기
          </button>
        </form>
      </section>
    </>
  );
}
