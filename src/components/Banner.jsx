import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import HeroBanner from "../assets/images/maskedHero1.png";
import Navigate from "../assets/svgs/navigate.svg";
import StackedImg from "./StackedImages";
import vector1 from "../assets/svgs/dsgbanner.svg";

const Banner = () => {
  return (
    <DefaultBanner className="container">
      <div className="herophrase">
        <h1>Grow your skills to advance your career path </h1>
        <img className="vector1" src={vector1.src} alt="Banner Vector" />
        <p>
          build your future with our quality education. the best and largest
          all-in-one online tutoring platform in the world
        </p>
        <button className="outlined-btn">
          Get Started Now
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
        <button className="white-btn">Enroll Now</button>
        <div className="previewed">
          <StackedImg numbers="255 +" previews="Previews" />
        </div>
      </div>

      <div className="hero_img">
        <img src={HeroBanner.src} alt="" className="hero" />
        <img src={Navigate.src} alt="" className="tools" />
      </div>
    </DefaultBanner>
  );
};

export default Banner;

let DefaultBanner = styled.section`
  .vector1 {
    position: absolute;
    width: 63px;
    left: -25px;
    position: absolute;
  }
  .herophrase {
    h1 {
      color: var(--White);
    }

    .previewed {
      display: flex;
    }
    p {
      color: #e7e7e7;
      margin-bottom: 30px;
    }
    button {
      margin: 25px 5px;
    }
    .white-btn {
      margin-left: 20px;
    }
  }

  .hero_img {
    position: relative;
    .tools {
      position: absolute;
      left: -120px;
      width: auto;
      bottom: 165px;
    }

    .hero {
      width: auto;
      position: relative;
      bottom: -10px;
    }
  }
  @media (min-width: 981px) {
    display: flex;
    justify-content: space-between;
    .herophrase {
      width: 45%;
      margin-top: 70px;
    }
    .hero_img {
      width: 48%;
    }
  }
  @media (max-width: 440px) {
    .tools {
      display: none;
    }
  }
  @media (max-width: 981px) {
    text-align: center;
    p {
      text-align: center;
    }
    .tools {
      left: 80% !important;
      top: -180px;
      width: 100px !important;
    }
    .hero_img {
      margin-top: 100px;
      text-align: center;
      //   img {
      //     width: auto;
      //   }
    }
  }
`;
