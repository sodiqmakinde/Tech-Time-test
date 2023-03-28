import AboutUs from "@/components/About";
import Banner from "@/components/Banner";
import Communities from "@/components/Community";
import CourseLibrary from "@/components/Courses";
import FrequentlyAskedQuestions from "@/components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import QualityVideo from "@/components/Quality";
import Testimonials from "@/components/Testimonial";
import styled from "styled-components";

const HomePage = () => {
  return (
    <HomePageGarage>
      <section className="bannerContainer">
        <Navbar />
        <Banner />
        
      </section>
      <Partners />
      <QualityVideo />
      <AboutUs />
      <CourseLibrary />
      <Testimonials />
      <Communities />
      <FrequentlyAskedQuestions />
      <Footer />
    </HomePageGarage>
  );
};

export default HomePage;

let HomePageGarage = styled.section`
  .bannerContainer {
    overflow: hidden;
    position: relative;

  }
`;
