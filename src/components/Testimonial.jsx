import { React, useState } from "react";
import Slider from "react-slick";
import Head from "next/head";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.jpg";
import GlobalHeading from "./Heading";
import styled from "styled-components";

const Testimonials = () => {
  const [data, setData] = useState({
    results: [
      {
        id: 1,
        full_name: "John Doe",
        content:
          "Vivamus id lectus vel turpis luctus ultrices. Pellentesque vel orci est. Aliquam in velit elit. Integer vel quam eget mauris interdum aliquam. Maecenas pharetra lacinia massa quis consectetur. Nulla facilisi. Suspendisse in convallis enim. Mauris vitae lobortis quam.",
        img: p1.src,
      },
      {
        id: 2,
        full_name: "Jane Doe",
        content:
          "Vivamus id lectus vel turpis luctus ultrices. Pellentesque vel orci est. Aliquam in velit elit. Integer vel quam eget mauris interdum aliquam. Maecenas pharetra lacinia massa quis consectetur. Nulla facilisi. Suspendisse in convallis enim. Mauris vitae lobortis quam.",
        img: p2.src,
      },
      {
        id: 3,
        full_name: "Bob Smith",
        content:
          "Fusce nec odio est. Fusce in purus justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed libero eu velit posuere tincidunt. Sed hendrerit, eros quis vehicula bibendum, magna metus dictum enim, in rutrum dolor felis a velit.",
        img: p3.src,
      },
      {
        id: 4,
        full_name: "Bob Smith",
        content:
          "Fusce nec odio est. Fusce in purus justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed libero eu velit posuere tincidunt. Sed hendrerit, eros quis vehicula bibendum, magna metus dictum enim, in rutrum dolor felis a velit.",
        img: p4.src,
      },
      {
        id: 5,
        full_name: "Bob Smith",
        content:
          "Fusce nec odio est. Fusce in purus justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed libero eu velit posuere tincidunt. Sed hendrerit, eros quis vehicula bibendum, magna metus dictum enim, in rutrum dolor felis a velit.",
        img: p5.src,
      },
    ],
  });

  var settings = {
    dots: true,
    // // className: "center",
    // centerPadding: "60px",
    // centerMode: true,
    margin: 10,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      // {
      //   breakpoint: 1124,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 4,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // if (data.results) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <section className="containe" id="testimonial">
        <TestimonialsContainer className="testimonial_class">
          <GlobalHeading
            edit_class="align-text"
            heading="what our clients are saying"
            paragraph="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image"
          />
          <Slider {...settings} className="testimonial_carousels">
            {data.results.map((option, index) => {
              return (
                <div key={index}>
                  <div className="per_review">
                    <p> {option.content} </p>
                    <div className="author">
                      <img
                        className="thumbnail"
                        src={option.img}
                        alt={option.full_name}
                      />
                      <div>
                        <h5>{option.full_name} </h5>
                        <p>Product Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </TestimonialsContainer>
      </section>
    </>
  );
  // }
};

export default Testimonials;

let TestimonialsContainer = styled.section`
  margin-bottom: 90px;
  // overflow: hidden;
  .per_review {
    background: var(--White) !important;
    padding: 40px 24px;
    margin: 7px;
    border-radius: 24px;
    .author {
      margin-top: 20px;
      display: flex;
      img {
        margin-right: 15px;
      }
      div {
        margin-top: 7px;
        p {
          margin: 0;
          font-weight: 400;
        }
      }
    }
  }
  .align-text {
    padding: 0 20px;
  }
  .slick-dots {
    bottom: -86px;
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-dots li button::before {
    font-size: 12px;
    line-height: 20px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 20px;
    height: 20px;
    content: "•";
    text-align: center;
    opacity: 0.25;
    color: #ccdbf0;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: var(--Global);
  }
`;
