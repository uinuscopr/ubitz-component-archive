import styled from "styled-components";
import footerLogo from "../../assets/images/common/footer-logo.svg";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <ImgWrap>
          <FooterLogoImg src={footerLogo} alt="푸터 로고" />
        </ImgWrap>
        <ContactInfo>
          <FooterText>
            고객센터 <Devider></Devider> 02-1233-4515
          </FooterText>
          <FooterText>
            이용안내 <Devider></Devider> 월~금 09:00 ~ 18:00
          </FooterText>
          <FooterText>
            이메일 <Devider></Devider> godsmwtt@godsmwtt.co.kr
          </FooterText>
        </ContactInfo>
        <CompanyInfo>
          <FooterText>(주) MWTT 대표 강지혜</FooterText>
          <FooterText>
            사업자등록번호 <Devider></Devider>000-00-00000
          </FooterText>
          <FooterText>
            주소 <Devider></Devider>서울 강남구 도산대로 8길 17-8
          </FooterText>
        </CompanyInfo>
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  margin-bottom: 6.6rem;
  padding: 2rem;
  background: #f5f5f5;
`;

const ImgWrap = styled.div`
  width: 100%;
  margin-bottom: 1.4rem;
`;

const FooterLogoImg = styled.img`
  width: 8rem;
`;

const ContactInfo = styled.div`
  width: 100%;
  margin-bottom: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const CompanyInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Devider = styled.div`
  width: 0.1rem;
  height: 0.8rem;
  background: #d9d9d9;
`;

const FooterText = styled.div`
  color: #555;
  font-family: Pretendard, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  gap: 0.4rem;
`;
