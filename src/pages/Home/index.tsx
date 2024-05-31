import "../../assets/css/wrapInner.scss";
import "../../assets/css/global.scss";
import "./home.scss";
import { Link } from "react-router-dom";

import HeroSlide from "../../components/home/HeroSlide";

export default function Home() {
  return (
    <>
      <main className="container">
        <HeroSlide />
        <section className="home-container">
          <h1>프론트엔드 컴포넌트 아카이브</h1>
          <ul>
            <li>
              <p>1. 체크박스</p>
            </li>
            <li>
              <p>2. 모달창</p>
            </li>
            <Link to="/collection">
              <li>
                <p>3. 상담문의</p>
              </li>
            </Link>
            <Link to="/timer">
              <li>
                <p>4. 타이머</p>
              </li>
            </Link>
          </ul>
        </section>
      </main>
    </>
  );
}
