import GlobalHeading from "./Heading";
import vector1 from "../assets/svgs/dsg5.svg";

import { Tabs } from "./Tab";
import { useState } from "react";
import { Courses } from "./FIlteredCourse";
import styled from "styled-components";

const categories = ["All ", "Designs", "Development", "Marketing"];

const CourseLibrary = () => {
  const [category, setCategory] = useState(null);

  const handleTabChange = (category) => {
    setCategory(category === "All " ? null : category);
  };

  return (
    <ExploreCourse id="courses container">
      <GlobalHeading
        edit_class="align-text"
        heading="browse our popular courses"
        paragraph="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image"
      />

      <div className="courseHandler container">
        <Tabs labels={categories} onChange={handleTabChange} />
        <Courses category={category} />
        <div className="align-text">
          <button className="main-btn ">Explore All Courses</button>
        </div>
        <img className="vector1" src={vector1.src} alt="" />
      </div>
    </ExploreCourse>
  );
};

export default CourseLibrary;

let ExploreCourse = styled.section`
 .courseHandler{
  position: relative;
  }
  .vector1 {
    width: 75px;
    position: absolute;
    left: 50px;
    top: -150px;
  }
`;
