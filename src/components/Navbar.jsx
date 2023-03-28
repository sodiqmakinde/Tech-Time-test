import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };
  return (
    <Navigation className="container">
      <nav>
        <Image src={Logo} alt="" width={130} height={47} />

        {/* NavLinks */}
        <ul className={`navlinks ${isActive ? "active_nav" : ""}`}>
          <li className="active_link">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#aboutus">About Us</Link>
          </li>
          <li>
            <Link href="/#courses">Courses</Link>
          </li>
          <li>
            <Link href="/#testimonial">Testimonial</Link>
          </li>
          <li>
            <Link href="/#community">Community</Link>
          </li>
          <Link href="/#courses">
            <button className="white-btn">Enroll Now</button>
          </Link>
        </ul>

        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={handleHamburgerClick}
        >
          <span></span>
        </div>
      </nav>
    </Navigation>
  );
};

export default Navbar;

let Navigation = styled.section`
  // overflow: hidden !important;
  nav {
    display: flex;
    justify-content: space-between;
    align-item: center;
    padding: 40px 0;
    position: relative;
  }
  .navlinks.active_nav {
    transform: translate(0px);
  }
  .active_link {
    a {
      color: var(--White);
    }
  }

  ul {
    display: flex;
    width: 55%;
    justify-content: space-between;
    align-item: center;
    li {
      margin-top: 20px;
      a {
        color: #aac4e6;
        margin-top: 20px;
        transition: 0.3s;
        &:hover {
          color: var(--White);
        }
      }
    }
    button {
      margin: 0;
    }
    @media (max-width: 1140px) {
      width: 75%;
    }
    @media (max-width: 990px) {
      width: 80%;
    }
    @media (max-width: 880px) {
      flex-direction: column;
      max-width: 300px;
      padding: 30px;
      right: -45px;
      z-index: 10;
      top: 97px;
      position: absolute;
      transition: all 0.3s;
      transform: translateX(300px);
      background-color: var(--White) !important;
      li a {
        color: var(--Black) !important;
      }
      button {
        color: var(--White) !important;
        background-color: var(--Global) !important;
      }
    }
  }
  @media (min-width: 880px) {
    .hamburger {
      display: none;
    }
  }
  @media (max-width: 880px) {
    .hamburger {
      cursor: pointer;
      padding: 10px 35px 16px 0px;
    }
    .hamburger span,
    .hamburger span:before,
    .hamburger span:after {
      cursor: pointer;
      border-radius: 1px;
      height: 3px;
      width: 35px;
      background: var(--White);
      position: absolute;
      display: inline-block;
      content: "";
    }
    .hamburger span:before {
      top: -10px;
    }
    .hamburger span:after {
      bottom: -10px;
    }
    /*
#hamburger span, #hamburger span:before, #hamburger span:after {
  transition: all 200ms ease-in-out;
}
*/
    .hamburger span,
    .hamburger span:before,
    .hamburger span:after {
      -webkit-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
      -moz-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
      -o-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1); /* easeInOutCubic */
    }
    .hamburger.active span {
      background-color: transparent;
    }
    .hamburger.active span:before,
    .hamburger.active span:after {
      top: 0;
    }
    .hamburger.active span:before {
      transform: rotate(45deg);
    }
    .hamburger.active span:after {
      transform: translateY(-10px) rotate(-45deg);
      top: 10px;
    }
  }
  img {
    width: auto;
  }
`;
