import styled from "styled-components";
import GlobalHeading from "./Heading";
import Section3 from "../assets/images/section3.png";
import Mentor from "../assets/svgs/mentor.svg";
import Timing from "../assets/svgs/timing.svg";
import Meeting from "../assets/svgs/meeting.svg";
import Paid from "../assets/svgs/paid.svg";

const AboutUs = () => {
  return (
    <StyledVid id="aboutus" className="container">
      <div className="explain_quality">
        <GlobalHeading
          heading="this is why we are best from others"
          paragraph="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image"
        />
        <img src={Section3.src} alt="Concentrate" className="top_layer" />
      </div>

      <div className="image_fram">
        <div className="qualities">
          {qualities.map((quality) => (
            <div className="each_quaity" key={quality.id}>
              <img src={quality.imgSrc} alt="" />
              <h5>{quality.title}</h5>
              <p>{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </StyledVid>
  );
};

export default AboutUs;

let StyledVid = styled.section`
  margin-top: 70px;
  margin-bottom: 40px;
  .image_fram {
    margin-top: 70px;
    position: relative;
    .qualities {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .each_quaity {
        background: var(--White);
        padding: 32px 24px;
        border-radius: 8px;
        width: 48%;
        margin-bottom: 24px;
        img {
          width: 48px;
          height: 48px;
          margin-bottom: 24px;
        }
        @media (max-width: 580px) {
          width: 100%;
        }
      }
    }
  }
  .explain_quality {
    img {
      margin-top: 32px;
    }
  }

  @media (min-width: 980px) {
    display: flex;
    justify-content: space-between;
    .explain_quality {
      width: 48%;
      padding-right: 30px;
    }
    .image_fram {
      margin-top: 80px;
      width: 48%;
    }
    .bottom_layer {
      position: absolute;
      left: -150px !important;
      bottom: -40px !important;
      width: 397.3px;
      height: 265px;
    }
  }
  @media (max-width: 980px) {
    button {
      text-align: center !important;
    }
  }
`;

let qualities = [
  {
    id: 1,
    imgSrc: Mentor.src,
    title: "experienced mentors",
    description:
      "high-definition video is video of higher resolution and quality than standard definition. high-definition video is video of higher resolution and quality than standard definition.",
  },
  {
    id: 2,
    imgSrc: Timing.src,
    title: "one-on-one meetings",
    description:
      "high-definition video is video of higher resolution and quality than standard definition. high-definition video is video of higher resolution and quality than standard definition.",
  },
  {
    id: 3,
    imgSrc: Meeting.src,
    title: "one-on-one meetings",
    description:
      "high-definition video is video of higher resolution and quality than standard definition. high-definition video is video of higher resolution and quality than standard definition.",
  },
  {
    id: 4,
    imgSrc: Paid.src,
    title: "one-on-one meetings",
    description:
      "high-definition video is video of higher resolution and quality than standard definition. high-definition video is video of higher resolution and quality than standard definition.",
  },
];
