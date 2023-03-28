import styled from "styled-components";
import Logo from "@/assets/images/logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <section className="container">
        <div>
          <img src={Logo.src} alt="" />
          <p>Reach out to us on any of our social media networks</p>
        </div>
        <div>
          <ul>
            <h5>useful links</h5>
            <li>home</li>
            <li>about us</li>
            <li>Our Courses</li>
            <li>testimonials</li>
            <li>our community</li>
          </ul>
        </div>
        <div>
          <ul>
            <h5>Community</h5>
            <li>help centers</li>
            <li>Partner</li>
            <li>suggestion</li>
            <li>blog</li>
            <li>newsletter</li>
          </ul>
        </div>
        <div>
          <ul>
            <h5>Subscribe Us</h5>
            <div>
              <input type="text" placeholder="nft123@gmail.com" />
              <button>Subscribe</button>
            </div>
          </ul>
        </div>
      </section>
    </FooterContainer>
  );
};

export default Footer;

let FooterContainer = styled.footer`
  background: var(--Black);
  color: var(--White);
  padding-top: 90px;
  padding-bottom: 200px;
  section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
      margin-top: 40px;
      width: auto;
      height: 47px;
      width: 130px;
    }
    input {
      padding: 12px 15px;
      outline: 0;
      background: #2a2a2b;
      border: 1px solid #054fb3;
      border-radius: 2px 0px 0px 2px;
      color: var(--White);
    }
    button {
      padding: 10px 15px;
      background: var(--Global);
      color: var(--White);
      margin: 0;
      margin-top: 2px;
      border-radius: 0;
      font-size: 14px;
      border-radius: 0px 2px 2px 0px;
      position: relative;
      top: 1px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
    }
    p,
    li {
      color: var(--White);
      max-width: 280px;
      font-weight: 400;
      text-transform: capitalize;
      // font-size: 24px;
      line-height: 32px;
    }
    ul {
      max-width: 386px;
      margin-top: 40px;
      margin-right: 40px;
      h5 {
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        color: var(--White);
        margin-bottom: 15px;
      }
      li,
      p {
        color: var(--White);
      }
    }
  }
`;
