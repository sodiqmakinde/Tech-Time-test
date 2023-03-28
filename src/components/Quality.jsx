import styled from "styled-components";
import GlobalHeading from "./Heading";
import Section2img1 from "../assets/images/section2img1.png";
import Section1img1 from "../assets/images/section1img2.png";
import StackedImg from "./StackedImages";
import vector1 from "../assets/svgs/dsgSec2.svg";

const QualityVideo = () => {
  return (
    <StyledVid className="container">
      <div className="explain_quality">
        <GlobalHeading
          edit_class="add_crown"
          heading="high quality video, audio & live classes"
          paragraph="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image"
        />
        <button className="main-btn">View Courses</button>
        <div className="emphasis">
          <h5 className="audio_class">Audio Classes</h5>
          <h5 className="live_class">Live Classes</h5>
          <h5 className="recorded_class">Recorded Classes</h5>
          <h5 className="notes_class">50+ Notes</h5>
        </div>
      </div>

      <div className="image_fram">
        <img src={Section2img1.src} alt="Concentrate" className="top_layer" />
        <div className="sec2_review">
          <p>255k Enrolled Students</p>
          <StackedImg />
        </div>
      <img className="vector1" src={vector1.src} alt="" />
        <img
          src={Section1img1.src}
          alt="Concentrate"
          className="bottom_layer"
        />
      </div>
    </StyledVid>
  );
};

export default QualityVideo;

let StyledVid = styled.section`
  padding-bottom: 40px;
  margin-bottom: 40px;
  .vector1{
    position: absolute;
    bottom: 80px;
    right: -20px;
    width:120px;
    z-index: -1;
   
  }
  .sec2_review {
    position: absolute;
    top: 80px;
    left: -80px;
    background: #ffffff;
    border-radius: 8px;
    padding: 10px 22px;
    p {
      color: var(--Black);
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      margin: 0;
      margin-bottom: 5px;
      text-transform: capitalize;
    }
    .reviews_by {
      text-align: center;
      max-width: 220px !important;
      margin: 0;
      img {
        width: 60px;
        height: 60px;
      }
    }
    @media(max-width: 920px){
      left: -20px;
      .reviews_by {
        text-align: center;
        max-width: 150px !important;
        margin: 0;
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
    @media(max-width: 600px){
      left: -20px;
      .reviews_by {
        text-align: center;
        max-width: 150px !important;
        margin: 0;
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
  .image_fram {
    margin-top: 70px;
    position: relative;
    .top_layer {
      padding-left: 70px;
      margin-bottom: 100px;
    }
    .bottom_layer {
      position: absolute;
      left: -120px;
      bottom: 0;
      width: 397.3px;
      height: 265px;
    }
  }
  .emphasis {
    max-width: 600px;
    width: 100%;
    margin-top: 30px;
    h5 {
      margin: 5px;
      background-color: var(--White);
      color: var(--Black);
      border-radius: 8px;
      position: relative;
      padding: 23px 72px;
      padding-right: 56px;
      display: inline-block;
      font-family: Satoshi;
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
 
  @media (min-width: 980px) {
    display: flex;
    justify-content: space-between;
    .explain_quality {
      width: 48%;
      margin-left: 40px !important;
      padding-right: 30px;
    }
    .image_fram {
      margin-top: 80px;
      width: 45%;
    }
    .bottom_layer {
      position: absolute;
      left: -150px !important;
      bottom: -40px !important;
      width: 397.3px;
      height: 265px;
    }
  }
  @media (min-width: 1115px) {
    .bottom_layer {
      // display: none;
      left: -100px !important;
    }
    .sec2_review{
      top: 100px;
      left: -50px;
    }
  }
  @media (max-width: 980px) {
    button {
      text-align: center !important;
    }
    .explain_quality {
      margin-left: 20px !important;
    }
  }
  @media (max-width: 980px) {
    .bottom_layer {
      left: 0px !important;
    }
  }
  @media (max-width: 660px) {
    .bottom_layer {
      left: 0px !important;
      width: 174px !important;
      height: 116px !important;
      bottom: 30px !important;
    }
    .top_layer {
      padding-left: 30px !important;
    }
  }
`;
