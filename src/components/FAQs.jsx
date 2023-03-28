import styled from "styled-components";
import AccordionComponent from "./Accordion";
import GlobalHeading from "./Heading";
import vector1 from "../assets/svgs/faqdsg1.svg";
import vector2 from "../assets/svgs/faqdsg2.svg";
import vector3 from "../assets/svgs/faqdsg3.svg";

const FrequentlyAskedQuestions = () => {
  const courseSteps = [
    {
      question: "is there a free trial available?",
      initialActive: true,
      answer:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      question: "can i change my plan later?",
      answer:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      question: "are the courses lifetime?",
      answer:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      question: "do i get certified after taking courses?",
      answer:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      question: "how do i reach out to mentors?",
      answer:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      question: "do we get job ready after taking courses?",
      answer:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
  ];
  return (
    <FAQs className="container">
      <GlobalHeading
        edit_class="align-text"
        heading="frequently asked questions"
        paragraph="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image"
      />
      {courseSteps.map((step, index) => (
        <AccordionComponent
          key={index}
          question={step.question}
          answer={step.answer}
          initialActive={step.initialActive}
          listStep={step.listStep}
          projectName={step.projectName}
          //   step={step}
        />
      ))}

      <img className="vector1" src={vector1.src} alt="" />
      {/* <img className="vector2" src={vector2.src} alt="" />
      <img className="vector3" src={vector3.src} alt="" /> */}
    </FAQs>
  );
};

export default FrequentlyAskedQuestions;

let FAQs = styled.section`
  padding-bottom: 110px;
  position: relative;
  .align-text {
    p {
      margin-bottom: 30px;
    }
  }
  .faq_control {
    //   padding: 0 20px;
    max-width: 880px;
    margin: 0 auto;
  }
  .vector1 {
    width: 75px;
    position: absolute;
    left: 0;
    top: 210px;
  }
  .vector2 {
    width: 275px;
    height: 275px;
    position: absolute;
    left: 0;
    
  }
  .vector3{
    width: 275px;
    height: 275px;
    position: absolute;
    left: 0;
    
  }
`;
