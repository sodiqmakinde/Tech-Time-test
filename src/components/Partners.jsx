import styled from "styled-components";
import Zoom from "../assets/svgs/zoom.svg";
import Stripe from "../assets/svgs/stripe.svg";
import Monday from "../assets/svgs/monday.svg";
import Slack from "../assets/svgs/slack.svg";
import Dropbox from "../assets/svgs/dropdox.svg";

const Partners = () => {
  return (
    <OurPartners>
      <div className="partners">
        <img src={Zoom.src} alt="" />
        <img src={Stripe.src} alt="" />
        <img src={Monday.src} alt="" />
        <img src={Slack.src} alt="" />
        <img src={Dropbox.src} alt="" />
      </div>
    </OurPartners>
  );
};

export default Partners;

let OurPartners = styled.section`
  background: var(--GlobalShade);
  .partners{
    overflow: auto;
    max-width: 1040px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0px auto;
    padding: 30px 20px;
    img{
        width: 25%;
        margin-right: 15px;
        width: 160px;
        object-fit: contain;
    }
  }
`;
