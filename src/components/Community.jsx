import styled from "styled-components";
import Community from "../assets/svgs/community.svg";
import GlobalHeading from "./Heading";

const Communities = () => {
  return (
    <StyledCommunity className="masked_pattern" id="community">
      <div className="container">
        <p className="joinUs">join our community</p>
        <GlobalHeading
          edit_class="align-text"
          heading="are you  ready to connect with the future talent of the tech world"
          paragraph="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image"
        />
        <div className="world">
          <img src={Community.src} alt="" />
          <button className="white-btn">Join Our Community</button>
        </div>
      </div>
    </StyledCommunity>
  );
};

export default Communities;

let StyledCommunity = styled.section`
  //   background: var(--Global);
  overflow: hidden;
  color: var(--White);
  padding-top: 40px;
  p {
    color: var(--White) !important;
    text-align: center;
  }
  .world {
    text-align: center;
    display: block;
    padding: 50px auto;
    margin: 50px auto;
    max-width: 983px;
    padding-bottom: 50px;
  }
  img {
    object-fit: contain;
    margin: 30px auto;
  }
  .joinUs {
    text-transform: uppercase;
  }
  .align-text {
    margin-top: 0;
    h3 {
      font-size: 52px;
      max-width: 1000px;

      margin: 0 auto;
      color: var(--White) !important;
    }
    p {
      color: var(--White) !important;
    }
  }
`;
